import { NextResponse } from 'next/server';
import { db } from '@/db';
import { contactFormTable } from '@/db/schema';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    await db.insert(contactFormTable).values(formData);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Błąd podczas zapisywania' }, { status: 500 });
  }
}
