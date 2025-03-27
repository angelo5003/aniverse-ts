import { DocumentNode } from "graphql";

type AnimeQueryVariables = { id: number };
type SearchQueryVariables = { search: string };

export const fetchFromAniList = async <T>(
  query: string | DocumentNode,
  variables: Record<string, AnimeQueryVariables | SearchQueryVariables> = {}
): Promise<T> => {
  try {
    // Make the API call to AniList
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });
    if (!response.ok) {
      throw new Error(`AniList API returned an error: ${response.status}`);
    }

    // Parse the JSON response
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("❌ AniList API fetch failed:", error);
    throw error;
  }
};
