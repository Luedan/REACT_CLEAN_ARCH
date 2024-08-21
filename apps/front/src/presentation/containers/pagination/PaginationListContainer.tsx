import { RAMCharacter } from "@/domain/entities/rickAndMorty/rickAndMorty.entity";
import { useGetRAMpaginatedList } from "@/presentation/hooks/rickAndMorty/useGetRAMpaginatedList";
import { CustomToolbarUI, GridColDef, TableProUI } from "@repo/ui";

export const PaginationListContainer = () => {
  const {
    data,
    handlePaginationModelChange,
    info,
    isLoading,
    paginationModel,
    handleFilterModelChange
  } = useGetRAMpaginatedList();
  const cols: GridColDef<RAMCharacter>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "species",
      headerName: "Species",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
  ];
  return (
    <>
      <TableProUI
        tableProps={{
          columns: cols,
          rows: (data?.pages[paginationModel.page] as RAMCharacter[]) || [],
          loading: isLoading,
          rowCount: info.total,
          paginationModel,
          paginationMode: "server",
          onPaginationModelChange: handlePaginationModelChange,
          getRowId: (row) => row.id,
          slots: { toolbar: CustomToolbarUI },
          filterMode: "server",
          onFilterModelChange: handleFilterModelChange,
        }}
        boxProps={{
          height: "400px",
        }}
      />
    </>
  );
};
