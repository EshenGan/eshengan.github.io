import ContainerBlock from "../components/ContainerBlock";
import React from "react";
import AboutMe from "../components/AboutMe";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="E Shen Gan - CS and AI Undergrad"
    >
      <AboutMe />
    </ContainerBlock>
  );
}
