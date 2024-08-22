import { RickAndMortyMapper } from "@/application/mappers/rickAndMorty/rickAndMorty.mapper";
import { RAMPaginatedResponse } from "@/domain/entities/rickAndMorty/rickAndMorty.entity";
import { RickAndMortyApiRepository } from "@/infrastructure/repositories/rickAndMorty/rickAndMortyApi.repository";

export async function getAllPaginateCharacters(
  page: number,
  query?: string
): Promise<RAMPaginatedResponse> {
  try {
    const responseApi = await RickAndMortyApiRepository.gerAllCharacters(
      page,
      query
    );

    const response = RickAndMortyMapper.mapRAMApiResponseToEntity(responseApi);

    return response;
  } catch (error) {
    return { character: [], total: 0, pages: 0 };
  }
}
