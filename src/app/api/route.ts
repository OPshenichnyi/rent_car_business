import { NextResponse } from 'next/server';

// GET Запит
export function GET() {
  return NextResponse.json({ message: 'Hello world', type: 'good' });
}

// Отримуємо body запиту
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    return NextResponse.json({ body });
  } catch (error) {
    console.log(error);
  }
}
