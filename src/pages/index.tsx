import { Box } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client'
import { getPrismicClient } from "../services/prismic";

import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Divider from "../components/Divider";
import CallText from "../components/CallText";
import Slides from "../components/Slides";

interface HomeProps {
  continents:{
    slug: string;
    title: string;
    caption: string;
    image: string;
  }[]
}

export default function Home({ continents }: HomeProps) {
  console.log(continents)
  return (
    <Box>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />

      <Divider />
      <CallText />
      <Slides continents={continents} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'continents')
  ])

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title[0].text,
      caption: continent.data.caption[0].text,
      image: continent.data.imageurl.url
    }
  })

  return {
    props: {
      continents
    }
  }
}
