import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleContainer = styled.div`
  height: auto;
  overflow: hidden;
`;

export const ArticleWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10% 0;

  @media screen and (max-width: 960px) {
    max-width: 80%;
    padding: 15% 0;
  }

  @media screen and (max-width: 540px) {
    max-width: 85%;
    padding: 20% 0;
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

export const Icon = styled(Link)`
  font-family: "GT";
  font-size: 3rem;
  font-weight: 500;
  display: block;
  background-color: var(--secondary-bg);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
  position: fixed;
  top: 1.5rem;
  right: 3rem;
  transition: all 1s linear 0s;
  cursor: pointer;

  &:hover {
    animation: tilt-n-move-shaking 0.3s;
    animation-iteration-count: 10;
  }

  @keyframes tilt-n-move-shaking {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, 5px) rotate(5deg);
    }
    50% {
      transform: translate(0, 0) rotate(0eg);
    }
    75% {
      transform: translate(-5px, 5px) rotate(-5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 5.5vw;
    padding: 0.5rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 17px;
    top: 2rem;
    right: 1rem;
  }
`;

export const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
  align-items: left;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 3rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 30% 1fr;
    gap: 0.7rem;
    align-items: left;
    max-width: 85%;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 35% 1fr;
    gap: 0.5rem;
    max-width: 90%;
    margin-top: 3.5rem;
  }
`;

export const ArticleGridHalf = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
    max-width: 100%;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin-top: 6rem;
  }
`;

export const ArticleGridHalfBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
    max-width: 100%;
  }

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const ArticleTitle = styled.h2`
  color: var(--secondary-txt-color);
  font-weight: 900;
  font-size: 66px;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  line-height: 1.25;

  @media screen and (max-width: 720px) {
    font-size: 52px;
  }

  @media screen and (max-width: 540px) {
    margin-top: 2rem;
    font-size: 44px;
    line-height: 1.2;
  }
`;

export const Article_h3 = styled.h3`
  color: var(--secondary-txt-color);
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 32px;
`;

export const Article_p = styled.p`
  color: var(--third-txt-color);
  font-size: 20px;
  font-weight: 300;
  line-height: 2rem;
  letter-spacing: 1px;
  max-width: 900px;
  margin: 0 auto;
  word-wrap: break-word;

  @media screen and (max-width: 540px) {
    font-size: 14px;
    line-height: 1.5rem;
  }
`;

export const ArticleCaption = styled.p`
  color: var(--third-txt-color);
  text-align: center;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 1px;
  max-width: 900px;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 6rem;
  word-wrap: break-word;

  @media screen and (max-width: 540px) {
    font-size: 10px;
    margin-bottom: 3rem;
  }
`;

export const ArticleCol = styled.p`
  color: var(--third-txt-color);
  font-size: 20px;
  font-weight: 300;
  line-height: 2rem;
  letter-spacing: 1.4px;
`;

export const Image = styled.img`
  max-width: 75%;
  height: auto;
  margin: 6rem 0 6rem 0;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    margin: 16vw 0 16vw 0;
  }
`;

export const ImageTop = styled.img`
  max-width: 50%;
  height: auto;
  margin: 10rem 0 10rem 0;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 720px) {
    margin: 16vw 0 16vw 0;
  }
`;

export const ImageDown = styled.img`
  max-width: 75%;
  height: auto;
  margin: 12rem 0 12rem 0;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    margin: 2rem 0 2rem 0;
  }
`;

export const ImageGrid = styled.img`
  max-width: 75%;
  height: auto;
  margin-top: 6rem;

  @media screen and (max-width: 960px) {
    max-width: 100%;
  }

  @media screen and (max-width: 540px) {
    margin: 0;
  }
`;

export const VideoBg = styled.video`
  max-width: 100%;
  object-fit: cover;
  margin: 3rem 0 3rem 0;

  @media screen and (max-width: 540px) {
    max-width: 130%;
  }
`;

export const Feedback = styled.div`
  margin: 5rem 0 5rem 0;

  .title {
    text-align: center;

    @media screen and (max-width: 540px) {
      text-align: left;
    }
  }
`;
