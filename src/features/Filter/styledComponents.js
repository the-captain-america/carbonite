import styled, { css } from 'styled-components';
// Helpers
const truncate = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const flex = css`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

const listStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  box-sizing: border-box;
`;

const Footer = styled.div`
  box-sizing: border-box;
  padding: 16px;
  background: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #eaeaf0;
  font-family: 'Roboto', sans-serif;
  flex: 0;
`;

const Header = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 24px 16px 24px;
  background: white;
  h2 {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    line-height: 16px;
    font-size: 13px;
    font-weight: 500;
    color: #9592a8;
    text-transform: uppercase;
  }
`;

const Content = styled.ul`
  ${listStyle};
  box-sizing: border-box;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  li,
  span {
    font-family: 'Roboto', sans-serif;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
`;

const Item = styled.li`
  ${listStyle};
  padding: 8px;
  display: flex;
  border-radius: 6px;
  align-items: center;
  background: white;
  justify-content: flex-start;
  &:hover {
    background: #f5f5f8;
  }
  .text {
    margin-left: 8px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  ${props =>
    props.isActive &&
    css`
      background: #f5f5f8;
    `}
`;

const Panel = styled.div`
  ${flex};
  box-sizing: border-box;
  border-radius: 12px;
  max-width: 240px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #eaeaf0;
  background: white;
  flex-direction: row;
  ${props =>
    props.width &&
    css`
      max-width: ${props.width}px;
      min-width: ${props.width}px;
    `}
`;

const List = styled.ul`
  ${listStyle};
`;

const CollectionContainer = styled.div`
  ${flex};
  box-sizing: border-box;
  border-radius: 12px;
  max-width: 240px;
  width: 100%;
  overflow: hidden;
  background: white;
  ${truncate}
  font-family: 'Roboto', sans-serif;
`;

export {
  Container,
  List,
  Flex,
  Content,
  Footer,
  Panel,
  CollectionContainer,
  Item,
  Header
};
