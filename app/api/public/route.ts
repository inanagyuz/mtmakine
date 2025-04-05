import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
   const data = await prisma.site.findFirst();
   if (!data) {
      return NextResponse.json({ status: 404 });
   }
   return NextResponse.json({ data, status: 200 });
}
