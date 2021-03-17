import React from "react";
import { motion } from "framer-motion";
import {
  VectorContainer,
  VectorTitle,
  VectorGridHalf,
  VectorWrapper,
  Icon,
  IconWrapper,
  VectorH1,
  VectorH2,
  VectorP,
  VectorCaption,
  VectorCol,
  Image,
  ImageTop,
  ImageGrid,
  VideoBg,
  Feedback,
} from "./VectorElements";
import VectorArticle_1 from "../../images/VectorArticle_1.png";
import VectorArticle_2 from "../../images/VectorArticle_2.png";
import VectorArticle_3 from "../../images/VectorArticle_3.png";
import VectorArticle_4 from "../../images/VectorArticle_4.png";
import VectorArticle_5 from "../../images/VectorArticle_5.png";
import VectorArticle_6 from "../../images/VectorArticle_6.png";
const Article_Vector = () => {
  return (
    <VectorContainer id="Vector">
      <motion.div
        animate={{
          x: 0,
          opacity: 1,
        }}
        initial={{
          x: 700,
          opacity: 0,
        }}
        exit={{
          x: -700,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <IconWrapper>
          <Icon to="/">Yuya.Works</Icon>
        </IconWrapper>
        <VectorWrapper>
          <VectorTitle>Vector International Academy</VectorTitle>
          <VectorH2>
            Vector International Academy steered School through the creation of
            a new website and brochure that unified the latest school portfolio.
          </VectorH2>
          <div style={{ textAlign: "center" }}>
            <ImageTop src={VectorArticle_1} id="" />
          </div>
          <VectorH1>Background</VectorH1>
          <VectorP>
            In 2020 I have been dedicated to my time to acquire new programming
            skills. and one of my friends suggested to me to provide my design
            for a vector international academy as a freelance designer. ​ After
            few meetings, I was so pleased that my portfolio was accepted by
            them so that I was trying to do dedicated to my expressions for
            vector's requirements.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>
            An idea that first seemed exciting and intriguing, and turned into a
            journey full of excitement, surprises with lots of ups and downs.
          </VectorP>
          <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_2} id="" />
          </div>
          <VectorH1>How it all started</VectorH1>
          <VectorP>
            The School had built an own website already. But they have wanted to
            create a more intriguing website for new content. In the early days,
            my primary process of an idea in order to proceed with this project
            was to create several web design prototypes for building a website.
            So that we needed to take several meetings to work smoothly and
            facilitate communication. and to find the right problems I asked
            myself what the previous site does intentionally or how service am I
            building? I approached this project from these things.
          </VectorP>
          <VectorH1 style={{ marginTop: "5rem" }}>My role</VectorH1>
          <VectorP>
            I worked on multiple projects related to Vector as a UI/UX designer
            together with the development team, including the main site and
            brochure. In addition to those, I gave input regarding the as an
            adviser for new contents.
          </VectorP>
          <VectorGridHalf>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_3}
                id=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_4}
                id=""
              />
            </div>
          </VectorGridHalf>
          <VectorCaption style={{ textAlign: "center" }}>
            The prototype that was first proposed to the client.
          </VectorCaption>
          <VectorH1>Challenge</VectorH1>
          <VectorP>
            The big challenge the client had was how to build an accessible way
            to reach the contents of testimonials or significant sections else
            easily, and create an intriguing website even more powerful. After
            several meetings, I heard about the challenges of this project and
            the concept of the most useful site that the client feels, and then
            proposed the above prototype.
          </VectorP>
          <VectorGridHalf>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_5}
                id=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <ImageGrid
                style={{ maxWidth: "100%" }}
                src={VectorArticle_6}
                id=""
              />
            </div>
          </VectorGridHalf>
          <VectorCaption style={{ textAlign: "center" }}>
            The client suggested load the video when LapTop boot up.
          </VectorCaption>
          <VectorH1>Solution</VectorH1>
          <VectorP>
            Great emphasis was placed on content unification and adaptability to
            the individual needs of customers. And how to incorporate dynamic
            content such as slides that were not on the previous site. We wanted
            to provide a smooth experience for customers who even not aim to be
            students or who weren't very frequent. The content on this site is
            designed to make it easy for all customer groups to find relevant
            information.
          </VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          <VectorP style={{ marginTop: "5rem" }}>article</VectorP>
          <VectorP>article</VectorP>
          <VectorP style={{ marginTop: "1.5rem" }}>article</VectorP>
          {/* <VectorGrid style={{ paddingRight: "3.5rem" }}>
            <VectorCol>
              <div>
                <VideoBg
                  autoPlay
                  loop
                  muted
                  playsinline
                  src={VectorMovie_1}
                  type="video/mp4"
                />
              </div>
            </VectorCol>
            <VectorCol>
              <div>
                <VideoBg
                  autoPlay
                  loop
                  muted
                  src={VectorMovie_2}
                  type="video/mp4"
                />
              </div>
              <VectorP style={{ textAlign: "right", fontSize: "14px" }}>
                Motion prototypes
              </VectorP>
            </VectorCol>
          </VectorGrid> */}
          <VectorP style={{ marginTop: "2rem" }}>article</VectorP>
          {/* <div style={{ textAlign: "center" }}>
            <Image src={VectorArticle_7} id="7" />
          </div> */}
          <VectorH1>The outcome</VectorH1>
          <VectorP>article</VectorP>
          {/* <VectorColumn>
            <VectorCol>1</VectorCol>
            <VectorCol>2</VectorCol>
            <VectorCol>3</VectorCol>
            <VectorCol>4</VectorCol>
          </VectorColumn> */}
        </VectorWrapper>
      </motion.div>
    </VectorContainer>
  );
};

export default Article_Vector;
