import { NextResponse } from "next/server";
import { Developer } from "@/types/developer";
import { developers } from "@/lib/data/developers";

export async function GET() {
  return NextResponse.json(developers);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (Object.keys(body).length === 0) {
    return NextResponse.json({ message: "Please enter data" }, { status: 400 });
  }

  const { username, name, role, bio, rating } = body;

  // we should use [rating === undefined] because the rating can be 0
  if (!username || !name || !role || !bio || rating === undefined) {
    return NextResponse.json(
      { message: "All fields required" },
      { status: 400 }
    );
  }

  if (isNaN(rating)) {
    return NextResponse.json(
      { message: "Rating should be a number" },
      { status: 400 }
    );
  }

  const lastId = Math.max(...developers.map((dev) => dev.id), 0);
  const newId = lastId + 1;

  const newDeveloper: Developer = { id: newId, ...body, isNew: false };
  developers.push(newDeveloper);

  return NextResponse.json(
    { message: "Developer added successfully" },
    { status: 201 }
  );
}
