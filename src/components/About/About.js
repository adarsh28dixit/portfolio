import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/Adarsh_profile.jpeg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Adarsh's_CV.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
            My name is Adarsh Dixit.I am a Full Stack developer based in India.
          </StyledParagraph>
          <StyledParagraph>
            Technology excites me and I am always in awe of the change it drives
            in the world. Certain skills that I have worked with include Data
            Structures and Algorithms (Java), Web Development (React JS, Node
            JS, MongoDB), Mobile App Development (React Native), Blockchain
            Development (Solidity + Ethereum) & Data Analysis (Python + SQL).
            And what I might lack in skills I make up for with my determination
            to learn.
          </StyledParagraph>
          <StyledParagraph>
            I love to create beautiful and responsive solutions.I work with
            react frameworks for frontend and Node js for backend.
          </StyledParagraph>

          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-jericho-bantiquete"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
