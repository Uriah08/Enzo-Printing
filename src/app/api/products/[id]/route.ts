import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

import fs from 'fs';
import path from 'path';


export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = await params;
  
    try {
      const product = await db.product.findUnique({
        where: { id },
      });
  
      if (!product) {
        return NextResponse.json({ message: 'Product not found' }, { status: 404 });
      }
  
      await db.product.delete({
        where: { id },
      });
  
      const imagePath = path.join(process.cwd(), 'public', product.image);
      fs.unlinkSync(imagePath);
  
      return NextResponse.json({ message: 'Product deleted successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error deleting product:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
  }
  