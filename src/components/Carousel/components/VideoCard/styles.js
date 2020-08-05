/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: transform .2s;
  &:hover,
  &:focus {
    transform: scale(1.2);
    z-index: 999;
  }
  &:after {
    ${({ title }) => css`
      content: ${`'${title}'`};
  ` }
  text-align: center;
  padding-top: 30%;
  position: absolute;
  width: 100%;
  height: 70%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.6);
  opacity: 0;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  }
  &:hover:after {
    opacity:1;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
