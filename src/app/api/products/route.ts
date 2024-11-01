import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const products = await db.product.findMany();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}


export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const formData = await req.formData();
  const title = formData.get('title')?.toString();
  const description = formData.get('description')?.toString();
  const category = formData.get('category')?.toString();
  const imageFile = formData.get('image') as File;

  if (!title || !description || !category || !imageFile) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  const dataDirectory = path.join(process.cwd(), 'public/uploads');
  fs.mkdirSync(dataDirectory, { recursive: true });
  const filePath = path.join(dataDirectory, imageFile.name);

  try {
    const buffer = await imageFile.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buffer));

    const product = await db.product.create({
      data: {
        title,
        description,
        category,
        image: `/uploads/${imageFile.name}`,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  }
}
