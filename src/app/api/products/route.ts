import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

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
  try {
    const { title, category, description, image } = await req.json()
    if(!title || !category || !description || !image) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
    )}
    await db.product.create({
      data: {
        title,
        category,
        description,
        image
      }
  });
  return NextResponse.json(
    { message: 'Product Created successfully' },
    { status: 201 }
  );
  } catch (error) {
    return NextResponse.json(
      { message: `Internal Server Error: ${error}` },
      { status: 500 }
  );
  }
}
