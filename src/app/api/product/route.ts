import { prisma } from "@/lib/prisma";
import { getSession } from "@/utils/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) {
    return new Response("Não autorizado", { status: 401 });
  }
  const body = await req.json();
  await prisma.product.create({
    data: {
      name: body.name,
      userId: session.user.id,
      price: body.price,
      category: body.category,
      quantity: body.quantity,
    },
  });
  return NextResponse.json("Product created successfully");
}

export async function GET(req: Request) {
  const users = await prisma.user.findMany();
  if (!users.length) {
    return new Response("Users not found", { status: 404 });
  }
  return NextResponse.json(users);
}
