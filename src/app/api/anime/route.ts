import { NextResponse } from "next/server";
import { fetchAnime } from "../../../../server/graphql/anilist";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Anime ID is required" },
      { status: 400 }
    );
  }

  const anime = await fetchAnime(id);
  if (!anime) {
    return NextResponse.json(
      { success: false, error: "Anime not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: anime });
}
