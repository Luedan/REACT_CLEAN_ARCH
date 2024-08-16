import { PokemonMapper } from "@/application/mappers/pokemon/pokemon.mapper";
import { Pokemon } from "@/domain/entities/pokemon/pokemon.entity";
import { PokeApiRepository } from "@/infrastructure/repositories/pokeApi/pokeApi.repository";


/**
 * Get a pokemon by name or id
 * @param field - Name or id of the pokemon
 * @returns Promise<Pokemon>
 */
export async function getPokemonByNameOrId(
  field: string | number
): Promise<Pokemon> {
  try {
    const pokeApiResponse = await PokeApiRepository.getPokemonByNameOrId(field);

    const pokemon = PokemonMapper.mapPokemonFromApiToEntity(pokeApiResponse);

    return pokemon;
  } catch (error) {
    throw new Error("Error fetching getPokemonByNameOrId: " + error);
  }
}
