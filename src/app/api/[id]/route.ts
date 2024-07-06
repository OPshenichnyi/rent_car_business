import { NextResponse } from 'next/server';
import { headers, cookies } from 'next/headers';

// Отримуємо параметри URL
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  // Logik headers
  const headerList = headers();
  const type = headerList.get('Content-Type');
  // Logik Cookies
  const cookiesList = cookies();
  const coo1 = cookiesList.get('Cookie_1')?.value;
  // redirect('/') Виконає редірект на вказаний адрес

  // Logic delete
  console.log(`delete object ${id}`);
  return NextResponse.json({ id, type, coo1 });
}
