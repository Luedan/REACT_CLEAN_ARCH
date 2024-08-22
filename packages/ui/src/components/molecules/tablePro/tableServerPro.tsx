import { DataGridProps } from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";
import { TableUI } from "../../atoms/table/table";
import { BoxProps } from "@mui/material";
import { forwardRef } from "react";
import { CustomToolbarServerUI } from "../customToolbar/customServerToolbar";

type TableUIProps = {
  tableProps: DataGridProps;
  boxProps?: BoxProps;
  showToolbar?: boolean;
};
export const TableServerProUI = forwardRef<HTMLDivElement, TableUIProps>(
  ({ tableProps, boxProps, showToolbar }, ref) => {
    return (
      <BoxUI {...boxProps} ref={ref}>
        <TableUI
          filterMode="server"
          paginationMode="server"
          {...tableProps}
          slots={{
            ...tableProps.slots,
            ...(showToolbar ? { toolbar: CustomToolbarServerUI } : {}),
          }}
        />
      </BoxUI>
    );
  }
);
