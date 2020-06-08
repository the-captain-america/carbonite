import styled, { css } from "styled-components";
import Theme from "./common/Theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 48px);
  box-sizing: border-box;
`;

const DropZone = styled.div`
  width: 100%;
  border-radius: 8px;
  background: white;
  min-height: calc(300px + 32px);
  max-height: calc(300px + 32px);
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 0.75);
  margin-top: 48px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  margin-left: 24px;
  height: 100%;
  width: 100%;
  min-height: 300px;
  max-height: 300px;
  box-sizing: border-box;
  &:first-child {
    margin-left: 0;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: 1px solid #dadada;
  box-shadow: 0px 4px 14px -7px rgba(0, 0, 0, 0.25);
`;

const HeaderTitle = styled.div`
  padding-top: 16px;
  box-sizing: border-box;
  background: white;
  width: 100%;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Rotate = styled.div`
  transform: rotate(90deg);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  color: ${Theme.colors.quaternary.greyDark};
  text-overflow: ellipsis;
`;

const Footer = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background: white;
  padding: 8px 16px 16px 16px;
  box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Text = styled.span`
  font-size: 13px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  color: ${Theme.colors.quaternary.greyDark};
  text-overflow: ellipsis;
`;

const Move = styled.button`
  background: white;
  margin: 0;
  padding: 0;
  height: 32px;
  width: 56px;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  top: calc(0% - 18px);
  padding-top: 0;
  left: 50%;
  border: 1px solid #e2e2e2;
  z-index: 3;
  transform: translate(-50%, 0%);
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  cursor: grab;
`;

const Group = styled.div`
  box-sizing: border-box;
  background: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;
  padding-top: 0;
  width: 100%;
  position: relative;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow-y: auto;
  max-height: 300px;
  width: 100%;
  margin-bottom: 96px;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  background: white;
  overflow: hidden;
`;

const Item = styled.li`
  padding: 0;
  align-items: center;
  margin: 8px 0 0 0;
  justify-content: flex-start;
  background: white;
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  margin-top: 8px 0 0 0;
  border: 1px solid #dadada;
  padding: 16px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  overflow: none;
  list-style: none;
  &:active {
    cursor: grabbing;
  }
  ${props =>
    props.isActive &&
    css`
      background: red;
    `}
  ${props =>
    props.outline &&
    css`
      border: 1px dashed #dadada;
      cursor: pointer;
      &:hover {
        background: #dadada;
        border: 1px solid #dadada;
      }
    `}
`;

export {
  Container,
  Header,
  Move,
  SearchContainer,
  DropZone,
  Group,
  List,
  Panel,
  Item,
  Rotate,
  Title,
  Footer,
  Text,
  HeaderTitle
};
