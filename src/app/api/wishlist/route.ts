import { NextResponse } from 'next/server';
import { db } from '@/db';
import { wishlistTable } from '@/db/schema';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    await db.insert(wishlistTable).values({
      email,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Błąd podczas zapisywania' }, { status: 500 });
  }
}
