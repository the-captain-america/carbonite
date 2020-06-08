import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Icon from "../Icon";

const Container = styled.div`
  width: 100%;
  background: white;
  overflow: hidden;
  max-height: 48px;
  height: 48px;
  border-radius: 8px;
  box-sizing: border-box;
  ${props =>
    props.isActive &&
    css`
      max-height: 500px;
      height: 100%;
      overflow: auto;
    `}
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 16px;
  color: black;
  width: 100%;
  text-align: left;
  line-height: 16px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
`;

const Expand = styled.div`
  max-height: 0;
  padding: 0 16px 16px 16px;
  background: white;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 0.25s ease-in-out;
  ${props =>
    props.isActive &&
    css`
      max-height: 500px;
      height: 100%;
    `}
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.25s ease-in-out;
  transform-origin: 50% 50%;
  transform: rotate(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.isActive &&
    css`
      transform: rotate(0deg);
    `}
  span {
    width: 20px;
    text-align: center;
    font-weight: 600;
    height: 20px;
  }
`;

const Accordion = ({ isActive = false, title = "Accordion", children }) => {
  const [localActive, setLocalActive] = useState(false);

  const onPress = () => {
    setLocalActive(!localActive);
  };

  useEffect(() => {
    setLocalActive(localActive);
    // eslint-disable-next-line
  }, [isActive]);

  return (
    <Container isActive={localActive}>
      <Header onClick={onPress}>
        {title}
        <IconContainer isActive={localActive}>
          <Icon name="CHEVRON" size={20} />
        </IconContainer>
      </Header>
      <Expand isActive={localActive}>{children}</Expand>
    </Container>
  );
};

export default Accordion;
