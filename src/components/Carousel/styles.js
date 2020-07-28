import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 15px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
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
  
  &:hover {
    overflow-x: auto;
  }

  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #0a030d;
  }

  &::-webkit-scrollbar
  {
    width: 10px;
    background-color: #0a030d;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #ffffff1f;
  }

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin: 0px 50px 16px 50px;
  padding-bottom: 30px;
  border-bottom: solid 1px #aaaaaa8a;
`;
