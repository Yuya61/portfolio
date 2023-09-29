import styled from "styled-components";

export const CaseContainer = styled.div`
  background: #faf8f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CaseTitleWrapper = styled.div`
  background: #faf8f6;
  padding-bottom: 2rem;

  @media only screen and (max-width: 960px) {
    padding-bottom: 2vw;
  }

  h2 {
    font-weight: 300 !important;
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    text-align: right;
    padding-left: 5.5rem;
  }

  div {
    display: flex;
  }
`;

export const CaseWrapper = styled.div`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 17rem;

  @media only screen and (max-width: 1280px) {
    margin: 0 30px 0 130px;
  }

  @media only screen and (max-width: 960px) {
    padding-top: 26.33vw;
    margin: 0 30px 0 30px;
  }

  h2 {
    color: #fe0000;
    font-weight: 700;
    font-size: 7rem;
    -ms-user-select: none; /* IE 10+ */
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;

    &:nth-child(3) {
      margin-bottom: 2rem;
    }

    @media only screen and (max-width: 960px) {
      font-size: 11.11vw;
    }
  }
`;
