import { ContainerDiv, HeaderDiv, MainDiv, MenuDiv } from "./styled";

export function LayoutUI() {
  return (
    <ContainerDiv className="con">
      <HeaderDiv>header</HeaderDiv>
      <MenuDiv className="hover-menu">menu</MenuDiv>
      <MainDiv>main</MainDiv>
    </ContainerDiv>
  );
}
