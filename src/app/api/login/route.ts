import connectMongoDB from '@/app/lib/connectDB';
import User from '../../../../Schema/user';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: any) {
  const { email, password } = await req.json();
  await connectMongoDB();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return NextResponse.json(
      { message: 'Email or password is incorrect' },
      { status: 409 }
    );
  }
  return NextResponse.json({ message: 'User logined' }, { status: 200 });
}
