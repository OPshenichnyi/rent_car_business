import { NextResponse } from 'next/server';
import { auto } from './auto';

// Отримуємо query параметри
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');
  let currentAuto = auto;
  if (query) {
    currentAuto = auto.filter((auto) =>
      auto.model.toLowerCase().includes(query.toLowerCase())
    );
  }
  return NextResponse.json(currentAuto);
}
