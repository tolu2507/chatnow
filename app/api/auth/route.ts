import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request: Request) {
  return NextResponse.json({
    id: "123456789",
    name: "Bamisile Tolulope",
    email: "tolulopebamisile@gmail.com",
    phonenumber: "07038968337",
    status: "active",
    image:
      "https://thumbs.wbm.im/pw/small/c5510083c20c9f0323cd8ce81e6f6c6a.avif",
  });
}

export async function POST(request: Request, response: Response) {
  
}
