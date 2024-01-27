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
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }

  console.log(user);

  return NextResponse.json(`Hello ${user?.username}`);
}
