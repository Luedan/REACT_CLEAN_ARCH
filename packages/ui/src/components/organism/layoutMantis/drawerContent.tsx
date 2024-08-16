import { SimpleBarScroll } from "./scroll";

export function DrawerContent() {
  return (
    <>
      <SimpleBarScroll
        sx={{
          "& .simplebar-content": { display: "flex", flexDirection: "column" },
        }}
      >
        hola mundo con navigation
      </SimpleBarScroll>
    </>
  );
}
