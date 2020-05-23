import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.white};
`;
export const Form = styled.div`
  align-items: center;
  padding: 4em;
  justify-content: center;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3em;
  width: 100%;
  justify-content: space-between;
`;

export const ChangeLang = styled.div`
  position: absolute;
  bottom: 2em;
`;

export const Image = styled.div`
  width: 60%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(https://razom.media/wp-content/uploads/2016/05/buzok.jpg);
`;
