import { gql, ApolloClient, InMemoryCache } from "@apollo/client";

// create an ApolloClient instance for the AniList API
const anilistClient = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

const GET_ANIME = gql`
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
      description
      coverImage {
        extraLarge
        large
        medium
      }
      bannerImage
      genres
      status
      episodes
      duration
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      averageScore
      popularity
      isAdult
    }
  }
`;

export const fetchAnime = async (id: number) => {
  try {
    const { data } = await anilistClient.query({
      query: GET_ANIME,
      variables: { id },
    });
    return data.Media;
  } catch (error) {
    console.error("❌ Error fetching anime:", error);
    return null;
  }
};
