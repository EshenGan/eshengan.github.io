import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import userData from "@constants/data";
import React from "react";
import AboutMe from "../components/AboutMe";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="E Shen Gan - Developer, Programmer, Gamer"
    >
      <AboutMe />
    </ContainerBlock>
  );
}
