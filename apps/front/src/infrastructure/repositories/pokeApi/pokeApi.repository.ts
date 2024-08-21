import {
  PokeAPIPaginatedResponse,
  PokeAPIResponseOne,
} from "@/domain/interfaces/pokeApi/pokeApiResponses";
import { pokeApi } from "@/infrastructure/dataSources/pokeApi.dataSource";

/**
 * @class PokeApiRepository
 */
export class PokeApiRepository {
  /**
   * Get a pokemon by name or id
   * @param field - Name or id of the pokemon
   * @returns Promise<PokeAPIResponseOne>
   */
  static async getPokemonByNameOrId(
    field: string | number
  ): Promise<PokeAPIResponseOne> {
    try {
      const response = await pokeApi.get<PokeAPIResponseOne>(
        `/pokemon/${field}`
      );
      return response;
    } catch (error) {
      throw new Error("Error fetching getPokemonByNameOrId: " + error);
    }
  }

  static async getPokemonList(page: number, limit: number) {
    try {
      const response = await pokeApi.get<PokeAPIPaginatedResponse>(
        `/pokemon?offset=${page * limit}&limit=${limit}`
      );
      return response;
    } catch (error) {
      throw new Error("Error fetching getPokemonList: " + error);
    }
  }

  static async getPokemonByUrl(url: string) {
    try {
      const response = await pokeApi.get<PokeAPIResponseOne>(url);
      return response;
    } catch (error) {
      throw new Error("Error fetching getPokemonByUrl: " + error);
    }
  }
}
