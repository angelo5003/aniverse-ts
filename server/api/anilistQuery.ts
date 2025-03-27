import { gql } from "@apollo/client";
import { graphqlRequestHandler } from "./generateQueryHandler";

export const GET_ANIME = gql`
  query SearchAnime($search: String) {
    Page {
      media(search: $search, type: ANIME) {
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
  }
`;

export default graphqlRequestHandler(GET_ANIME);

// // ✅ Query to get anime by ID
// export const GET_ANIME_BY_MEDIA = gql`
//   query GetAnimeByMedia($id: Int) {
//     Media(id: $id, type: ANIME) {
//       id
//       title {
//         romaji
//         english
//         native
//       }
//       description
//       coverImage {
//         extraLarge
//         large
//         medium
//       }
//       bannerImage
//       genres
//       status
//       episodes
//       duration
//       startDate {
//         year
//         month
//         day
//       }
//       endDate {
//         year
//         month
//         day
//       }
//       season
//       seasonYear
//       averageScore
//       popularity
//       isAdult
//     }
//   }
// `;

// // ✅ Query to get anime by Name
// export const GET_ANIME_BY_NAME = gql`
//   query GetAnimeByName($search: String) {
//     Page {
//       media(search: $search, type: ANIME) {
//         id
//         title {
//           romaji
//           english
//           native
//         }
//       }
//     }
//   }
// `;
