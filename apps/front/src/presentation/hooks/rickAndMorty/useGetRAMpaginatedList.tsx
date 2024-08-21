import { getAllPaginateCharacters } from "@/application/use-cases/rickAndMorty/getAllPaginateCharacters.use-case";
import { GridFilterModel, GridPaginationModel } from "@mui/x-data-grid";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useGetRAMpaginatedList = () => {
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 20,
  });

  const [info, setInfo] = useState({
    pages: 0,
    total: 0,
  });

  const [query, setQuery] = useState("");

  const { data, isLoading, fetchNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery({
      queryKey: ["rickAndMorty", "characters"],
      initialPageParam: paginationModel.page + 1,
      getNextPageParam: (_, pages) => {
        return pages.length + 1;
      },
      queryFn: async ({ pageParam }) => {
        setPaginationModel((prev) => ({ ...prev, page: pageParam - 1 }));
        const response = await getAllPaginateCharacters(pageParam, query);

        setInfo({
          pages: response.pages,
          total: response.total,
        });

        return response.character;
      },
    });

  const handlePaginationModelChange = (pm: GridPaginationModel) => {
    setPaginationModel(pm);

    if (data?.pageParams.includes(pm?.page + 1)) {
      return;
    }

    fetchNextPage();
  };

  const handleFilterModelChange = useDebouncedCallback(
    (filterModel: GridFilterModel) => {
      if (filterModel?.quickFilterValues?.length) {
        setQuery(filterModel?.quickFilterValues[0] || "");
      } else {
        setQuery("");
      }
    },
    500
  );

  useEffect(() => {
    refetch();
    setPaginationModel((prev) => ({ ...prev, page: 0 }));
  }, [query, refetch]);

  console.log(query);

  return {
    data,
    handlePaginationModelChange,
    isLoading: isLoading || isFetchingNextPage,
    paginationModel,
    info,
    handleFilterModelChange,
  };
};
