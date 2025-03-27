import { NextApiRequest, NextApiResponse } from "next";
import { fetchFromAniList } from "./fetchFromAniList";
import { DocumentNode } from "graphql";

export const graphqlRequestHandler = (graphqlQuery: string | DocumentNode) => {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    try {
      // Extract parameters (query or body, depending on the request method)
      const variables = request.method === "GET" ? request.query : request.body;

      if (!variables || Object.keys(variables).length === 0) {
        return response
          .status(400)
          .json({ error: "Required variables are missing" });
      }
      // Call the AniList API with the provided query and variables
      const data = await fetchFromAniList(graphqlQuery, variables);

      // Respond with the fetched data
      response.status(200).json(data);
    } catch (error) {
      console.error("❌ Error in handler:", error);
      response.status(500).json({ error: "Internal server error" });
    }
  };
};
