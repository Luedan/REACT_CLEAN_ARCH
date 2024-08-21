import { PokemonMapper } from "@/application/mappers/pokemon/pokemon.mapper";
import { PokemonDetailed } from "@/domain/entities/pokemon/pokemon.entity";
import { PokeApiRepository } from "@/infrastructure/repositories/pokeApi/pokeApi.repository";

interface PokemonListRequest {
  page: number;
  limit?: number;
}

export async function getPokemonList({
  page,
  limit = 20,
}: PokemonListRequest): Promise<PokemonDetailed[]> {
  try {
    const pokeList = await PokeApiRepository.getPokemonList(page, limit);

    const pokeListPromises = pokeList.results.map((poke) =>
      PokeApiRepository.getPokemonByUrl(poke.url)
    );

    const pokemonList = await Promise.all(pokeListPromises);

    const response = pokemonList.map((poke) =>
      PokemonMapper.mapPokemonListFromApiToEntity(poke)
    );

    return response;
  } catch (error) {
    throw new Error("Error fetching getPokemonList: " + error);
  }
}
