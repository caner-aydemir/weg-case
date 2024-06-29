import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log(
    "Burada token ve username cookielerimi silerek logout işlemlerini gerçekleştiriyorum."
  );
  await cookies().delete("token");
  await cookies().delete("username");
  return NextResponse.json({ state: true });
}
