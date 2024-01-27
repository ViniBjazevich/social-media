import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const revalidate = 1;
export const dynamic = "force-dynamic";
export async function GET() {
  let user = null;

  try {
    user = await prisma.user.findUnique({
      where: {
        id: "123",
      },
      include: {
        posts: true,
        followers: true,
        following: true,
        chatRooms: true,
        likes: true,
        messages: true,
      },
    });

    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }

  return NextResponse.json(user);
}
