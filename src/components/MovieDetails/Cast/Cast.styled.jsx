import styled from '@emotion/styled';

export const Wrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ContainerPopularCinema = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding-top: 60px;
`;

export const CardCharacter = styled.li`
  background: #fff;
  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);
  width: 100%;
  max-width: 200px;
  margin: 0.5em;
  border-radius: 10px;
  display: inline-block;
  text-decoration: none;
  color: black;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgb(0 0 0 / 8%);
  }
`;

export const Img = styled.img`
  padding: 0;
  margin: 0;
  height: 260px;
  width: 100%;
  display: block;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const CharacterName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  margin: 0;
  font-size: 9px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 0;
    }
  }
`;
