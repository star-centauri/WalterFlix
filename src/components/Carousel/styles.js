import styled, { css } from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 13px;
  line-height: 1;
  border-radius: 10px;
  ${({ color }) => css`
    border: ${`1px solid ${color}`};
    color: ${color};
  `}

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  padding-left: 15px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .8;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 15px;
  list-style: none;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  padding-bottom: 32px;
  border-bottom: solid 1px #aaaaaa8a;
`;
