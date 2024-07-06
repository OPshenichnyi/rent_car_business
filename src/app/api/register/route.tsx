import connectMongoDB from '../../lib/connectDB';
import User from '../../../../Schema/user';
import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  await connectMongoDB();
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json(
      { message: 'User already exists' },
      { status: 409 }
    );
  }
  const hashPassword = await bcrypt.hash(password, 10);

  await User.create({ email, password: hashPassword });
  return NextResponse.json({ message: 'User created' }, { status: 201 });
}
