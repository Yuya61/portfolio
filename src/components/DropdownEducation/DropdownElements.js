import styled from "styled-components";

export const DropdownContainer = styled.div`
  background: var(--primaly-bg);
  width: 100%;
  max-width: 1140px;
`;

export const DropdownWrapper = styled.div`
  width: 100%;
`;

export const DropdownInnerWrapper = styled.div`
  .dropdown-container {
    display: inline-block;
  }

  .dropdown-trigger {
    color: var(--primary-txt-color);
    font-weight: 500;
    font-size: 3rem;
    margin-bottom: 1rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
      margin-bottom: 1.55vw;
    }

    div {
      color: var(--primary-txt-color);
      font-weight: 500;
      font-size: 3rem;
      text-align: right;

      &:last-child {
        color: var(--secondary-txt-color);
        padding-left: 2rem;
        margin-left: auto;
      }

      @media only screen and (max-width: 960px) {
        padding-left: 3.33vw;
        font-size: 4.44vw;
      }
    }
  }

  .dropdown-contents {
    padding: 0 1.5rem;
    background: var(--primaly-bg);
    border: solid 2px #fe0000;
    border-radius: 15px;

    @media only screen and (max-width: 960px) {
      padding: 0 2.5vw;
    }

    @media only screen and (max-width: 540px) {
      border: solid 1.5px #fe0000;
    }
  }

  .dropdown-contents.active {
    width: auto;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 0.5s ease;
    margin-bottom: 2rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
      margin-bottom: 3.33vw;
    }
  }

  .dropdown-contents.inactive {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 0.5s ease;
    position: absolute;
  }

  p {
    display: flex;
    align-items: flex-end;
    font-size: 1.25rem;
    font-weight: 300;
    color: var(--secondary-txt-color);

    &:last-child {
      padding-left: 6rem;
      margin-bottom: 3px;
    }

    &:first-child {
      font-weight: 700;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    @media only screen and (max-width: 960px) {
      font-size: 3.33vw;

      &:last-child {
        font-size: 2.083vw;
        padding-left: 3.33vw;
      }

      &:first-child {
        font-size: 2.083vw;
        margin-bottom: 1.25vw;
      }
    }
  }

  h4 {
    font-size: 2rem !important;
    font-family: "GT";
    font-weight: 500 !important;
    color: var(--primary-txt-color);

    @media only screen and (max-width: 960px) {
      font-size: 3.33vw !important;
    }
  }

  .dropdown-contents ul li {
    border-top: 2px solid #fe0000;
    list-style: none;
    padding: 20px 0;

    &:nth-child(1) {
      border-top: none;
    }

    @media only screen and (max-width: 960px) {
      padding: 2.083vw 0;
    }

    @media only screen and (max-width: 540px) {
      border-top: 1.5px solid #fe0000;
    }
  }

  .dropdown-contents li div {
    display: flex;
    justify-content: space-between !important;
  }

  .dropdown-Item {
    display: flex;
    margin: 10px auto;
  }

  .dropdown-Item p {
    margin: 0 10px 10px 0;
    transition: 0.5s ease;
  }

  .fancy-font {
    font-family: "GT";
    font-weight: 500;
    &:nth-child(1) {
      padding-right: 2vw;
    }
    &:nth-child(2) {
      padding-left: 2vw;
    }
  }
`;