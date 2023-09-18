import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #faf8f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutImageWrapper = styled.div`
  padding: 1px;
`;

export const AboutImage = styled.img`
  width: 100%;
  display: block;
  height: auto;
  border: solid 2px #fe0000;
  border-radius: 15px;
`;

export const AboutWrapper = styled.div`
  background: #faf8f6;
  width: 100%;
  max-width: 1140px;
  display: block;

  @media only screen and (max-width: 1280px) {
    margin: 0 30px 0 110px;
  }

  @media only screen and (max-width: 960px) {
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

  h4 {
    color: #fe0000;
    font-weight: 100;
    font-size: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }
`;

export const AboutInnerWrapper = styled.div`
  background: #faf8f6;
  margin-bottom: 17rem;
  @media only screen and (max-width: 960px) {
    margin-bottom: 26.33vw;
  }

  .dropdown-vertical {
    display: block;
  }

  /* .dropdown-border {
    border-bottom: solid 2px #fe0000;
    margin-bottom: 1rem;

    @media only screen and (max-width: 960px) {
      margin-bottom: 1.55vw;
    }
  } */

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

  div {
    display: flex;
    &:nth-child(3) {
      /* margin-bottom: 2.5rem; */
    }
    &:nth-child(4) {
      margin-bottom: 2rem;
    }
    &:nth-child(5) {
      margin-bottom: 2.5rem;
    }

    @media only screen and (max-width: 960px) {
      /* &:nth-child(3) {
        margin-bottom: 2.33vw;
      } */
      &:nth-child(4) {
        margin-bottom: 2vw;
      }
      &:nth-child(5) {
        margin-bottom: 4.55vw;
      }
    }
  }
`;

export const AboutDropdown = styled.div`
  .dropdown-container {
    display: inline-block !important ;
  }

  .dropdown-trigger {
    color: #fe0000;
    font-weight: 100;
    font-size: 3rem;

    @media only screen and (max-width: 960px) {
      font-size: 4.44vw;
    }
  }
`;

// Archive 22021
// export const AboutContainer = styled.div`
//   z-index: 1;
//   background: #faf8f6;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0 10px;
//   height: auto;

//   @media screen and (min-width: 1441px) {
//     justify-content: center;
//   }

//   @media screen and (max-width: 1024px) {
//     height: 250vh;
//   }

//   @media screen and (max-width: 970px) {
//     height: 265vh;
//   }

//   /* for vertical mobile */
//   @media screen and (max-width: 896px) and (max-height: 427px) {
//     height: 400vh;
//   }

//   @media screen and (max-width: 540px) {
//     height: 265vh;
//     margin-bottom: initial;
//   }
// `;

// export const AboutWrapper = styled.div`
//   z-index: 2;
//   width: 100%;
//   max-width: 1440px;
//   display: block;
// `;

// export const Deco = styled.div`
//   text-align: left;
//   padding: 0 7% 0 0;

//   @media screen and (max-width: 1024px) {
//     padding: 0 3% 0 0;
//   }

//   @media screen and (max-width: 520px) {
//     padding: 0 10% 0 0;
//   }
// `;

// export const DecoOb = styled.div`
//   font-size: 10rem;
//   font-weight: 900;
//   letter-spacing: 0.5rem;
//   line-height: 1.1;
//   color: black;
//   float: right;
//   writing-mode: vertical-rl;
//   &:first-child {
//     color: white;
//   }

//   @media screen and (max-width: 520px) {
//     font-size: 5rem;
//   }
// `;

// export const ImageContent = styled.div`
//   padding: 0 7%;

//   @media screen and (max-width: 970px) {
//     padding: 0 20% 0 5%;
//   }

//   @media screen and (max-width: 520px) {
//     padding: 0 20% 0 5%;
//   }
// `;

// export const Image = styled.img`
//   max-width: 80%;
//   height: auto;
//   border: solid 2px #fe0000;
//   border-radius: 20px;

//   @media screen and (max-width: 970px) {
//     max-width: 75%;
//   }

//   @media screen and (max-width: 520px) {
//     max-width: 95%;
//   }
// `;

// export const H1Content = styled.div`
//   padding: 44px 44px 24px 44px;

//   @media screen and (max-width: 520px) {
//     padding: 34px 34px 16px 34px;
//   }
// `;

// export const AboutH1 = styled.h1`
//   background: linear-gradient(
//     329deg,
//     rgba(68, 68, 68, 1) 60%,
//     rgba(47, 48, 48, 1) 85%,
//     rgba(1, 6, 6, 1) 100%
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   margin: 0 auto;
//   font-weight: 900;
//   font-size: 60px;
//   text-align: left;
//   /* max-width: 870px; */

//   .br {
//     white-space: pre-wrap;
//   }

//   @media screen and (max-width: 970px) {
//     font-size: 45px;
//     max-width: 480px;
//   }

//   @media screen and (max-width: 320px) {
//     font-size: 32px;
//     max-width: 480px;
//   }
// `;

// export const PContent = styled.div`
//   padding: 0 150px;

//   @media screen and (max-width: 970px) {
//     padding: 0 70px;
//   }

//   @media screen and (max-width: 520px) {
//     padding: 0 20px;
//   }
// `;

// export const AboutP = styled.p`
//   color: #888888;
//   letter-spacing: 0.1rem;
//   margin-left: auto;
//   font-size: 24px;
//   font-weight: 200;
//   text-align: left;
//   max-width: 787px;

//   @media screen and (max-width: 970px) {
//     font-size: 20px;
//     max-width: 285px;
//   }

//   @media screen and (max-width: 520px) {
//     max-width: 300px;
//   }
// `;

// export const SkillsColumn = styled.div`
//   display: grid;
//   position: relative;
//   grid-template-columns: 1fr 1fr;
//   padding: 120px 24px 120px 24px;

//   @media screen and (max-width: 970px) {
//     padding: 30% 20%;
//   }

//   @media screen and (max-width: 520px) {
//     padding: 50% 20% 0%;
//   }

//   @media screen and (max-width: 320px) {
//     padding: 35% 16% 0%;
//   }
// `;

// export const SkillsWrapRight = styled.div`
//   text-align: center;
//   letter-spacing: 1.4px;
//   border-right: 1px solid #dfdfdf;
//   border-left: 1px solid #dfdfdf;

//   @media screen and (max-width: 520px) {
//     padding: 0 10px;
//   }

//   @media screen and (max-width: 320px) {
//     padding: initial;
//   }
// `;

// export const SkillsWrapLeft = styled.div`
//   text-align: center;
//   letter-spacing: 1.4px;
//   border-right: 1px solid #dfdfdf;

//   @media screen and (max-width: 520px) {
//     padding: 0 10px;
//   }

//   @media screen and (max-width: 320px) {
//     padding: initial;
//   }
// `;

// export const SkillsAbout = styled.div`
//   background: linear-gradient(
//     329deg,
//     rgba(68, 68, 68, 1) 60%,
//     rgba(47, 48, 48, 1) 85%,
//     rgba(1, 6, 6, 1) 100%
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 16px;
//   font-weight: 700;
//   padding-bottom: 20px;

//   @media screen and (max-width: 520px) {
//     font-size: 14px;
//   }
// `;

// export const SkillsSubAbout = styled.p`
//   background: linear-gradient(
//     329deg,
//     rgba(68, 68, 68, 1) 60%,
//     rgba(47, 48, 48, 1) 85%,
//     rgba(1, 6, 6, 1) 100%
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 11px;
//   letter-spacing: 2px;
//   padding-bottom: 10px;

//   @media screen and (max-width: 520px) {
//     font-size: 8px;
//   }
// `;

// export const Skills = styled.p`
//   color: #888888;
//   font-size: 16px;
//   font-weight: 300;
//   padding: 0 25px 20px;

//   @media screen and (max-width: 520px) {
//     font-size: 11px;
//     line-height: 1.5;
//   }
// `;

// export const Tools = styled.div`
//   color: #888888;
//   font-size: 16px;
//   font-weight: 300;
//   line-height: 1.5;

//   @media screen and (max-width: 520px) {
//     font-size: 11px;
//     line-height: 1.5;
//   }
// `;