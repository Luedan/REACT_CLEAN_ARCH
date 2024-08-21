import { RickAndMortyAllResponse } from "@/domain/interfaces/rickAndMortyApi/rickAndMortyResponses";
import { RickAndMortyApi } from "@/infrastructure/dataSources/rickAndMortyApi.datasource";

export class RickAndMortyApiRepository {
  static async gerAllCharacters(
    page: number,
    query?: string
  ): Promise<RickAndMortyAllResponse> {
    try {
      const response = await RickAndMortyApi.get<RickAndMortyAllResponse>(
        `/character/?page=${page}${query ? `&name=${query}` : ""}`
      );

      return response;
    } catch (error) {
      throw new Error(
        "Error getting all characters from Rick and Morty API: " + error
      );
    }
  }
}
