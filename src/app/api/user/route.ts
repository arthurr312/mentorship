import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  await prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });
  return NextResponse.json("User created successfully");
}

export async function GET(req: Request) {
  const users = await prisma.user.findMany();
  if (!users.length) {
    return new Response('Users not found', { status: 404 });
}
  return NextResponse.json(users);
  
}
