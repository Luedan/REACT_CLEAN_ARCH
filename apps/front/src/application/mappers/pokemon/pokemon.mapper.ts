import { Pokemon } from "@/domain/entities/pokemon/pokemon.entity";
import { PokeAPIResponseOne } from "@/domain/interfaces/pokeApi/pokeApiResponses";

export class PokemonMapper {
  static mapPokemonFromApiToEntity(data: PokeAPIResponseOne): Pokemon {
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    return {
      id: data.id,
      name: data.name,
      avatar,
    };
  }
}
