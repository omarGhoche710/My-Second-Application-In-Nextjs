import { NextResponse } from "next/server";
import { developers } from "@/lib/data/developers";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const developerId = Number(id);

  const developer = developers.find((dev) => dev.id === developerId);

  if (!developer) {
    return NextResponse.json(
      { message: "Developer not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(developer);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const developerId = Number(id);

  const developerIndex = developers.findIndex((dev) => dev.id === developerId);

  if (developerIndex === -1) {
    return NextResponse.json(
      { message: "Developer not found" },
      { status: 404 }
    );
  }

  const body = await request.json();

  if (Object.keys(body).length === 0) {
    return NextResponse.json(
      { message: "No update has been seen" },
      { status: 400 }
    );
  }

  // we can also check every element if it's not undefined
  // but it's empty... In real we should write the logic
  // as it's in the POST, but here we use thunder client
  // to test our work.

  if (body.rating !== undefined && typeof body.rating !== "number") {
    return NextResponse.json(
      { message: "Rating should be a number" },
      { status: 400 }
    );
  }

  developers[developerIndex] = { ...developers[developerIndex], ...body };

  return NextResponse.json({ message: "Developer updated successfully" });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const developerId = Number(id);

  const developerIndex = developers.findIndex((dev) => dev.id === developerId);

  if (developerIndex === -1) {
    return NextResponse.json(
      { message: "Developer not found" },
      { status: 404 }
    );
  }

  developers.splice(developerIndex, 1);

  return NextResponse.json({ message: "Developer deleted successfully" });
}
