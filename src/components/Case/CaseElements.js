import styled from "styled-components";

export const CaseContainer = styled.div`
  width: 100%;
  background: #faf8f6;
  display: flex;
  justify-content: center;
`;

export const FullWidthWrapper = styled.div`
  max-width: 1400px;
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ imageLeft }) => (imageLeft ? "none" : "row-reverse")};
  padding-top: ${({ paddingStart }) => (paddingStart ? "17rem" : "4rem")};
  padding-bottom: ${({ paddingEnd }) => (paddingEnd ? "17rem" : "4rem")};

  @media only screen and (max-width: 1570px) {
    margin: 0 30px 0 100px;
  }

  @media only screen and (max-width: 960px) {
    padding-top: ${({ paddingStart }) => (paddingStart ? "26.33vw;" : "3rem")};
    padding-bottom: ${({ paddingEnd }) => (paddingEnd ? "26.33vw;" : "3rem")};
  }

  @media only screen and (max-width: 960px) {
    margin: 0 30px 0 30px;
  }
`;

export const ColumnLg = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  // md sm center //
  width: 100%;

  // lg //
  @media (min-width: 1024px) {
    width: 50%;
    padding: 44px;
  }
`;

export const Image = styled.img`
  width: 100%;
  border: solid 2px #fe0000;
  border-radius: 15px;

  @media only screen and (max-width: 1024px) {
    width: 40%;
  }

  @media only screen and (max-width: 960px) {
    border-radius: 10px;
  }

  @media only screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const ColumnContentLg = styled.div`
  /* padding: 34px; */

  h2 {
    color: #fe0000;
    font-weight: 700;
    font-size: 7rem;
    margin: 1rem 0;
    overflow-wrap: break-word;

    @media only screen and (max-width: 1440px) {
      font-size: 7.5vw;
    }
    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
    @media only screen and (max-width: 540px) {
      margin: 0 0 1rem 0;
    }
  }

  p {
    color: #fe0000;
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }

  a {
    @media only screen and (max-width: 1024px) {
      margin: 0 auto;
    }
  }
`;
