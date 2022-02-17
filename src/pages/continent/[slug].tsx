import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Prismic from '@prismicio/client';
import Header from "../../components/Header";
import { getPrismicClient } from "../../services/prismic";
import ContinentBanner from "../../components/ContinentBanner";
import { ContinentProps } from "../../interfaces/Continent";
import Description from "../../components/Description";
import Cities from "../../components/Cities";

export default function Continent({continent}: ContinentProps) {  
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip | {continent.title}</title>
      </Head>

      <Header />
      <ContinentBanner continent={continent} />


      <Flex
        direction="column"
        maxW="1160px"
        px="1rem"
        mx="auto"
        mb="10"
      >
        <Description continent={continent} />
        <Cities continent={continent} />
      </Flex>
    </Flex>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const continents = await prismic.query([
    Prismic.Predicates.at('document.type', 'continents'),
  ]);

  const paths = continents.results.map(continent => {
    return {
      params: {
        slug: continent.uid,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const prismic = getPrismicClient();
  const { slug } = context.params;
  const response = await prismic.getByUID('continents', String(slug), {});

  if(!response) {
    return {
      notFound: true,
    };
  }

  const continent = {
    slug:response.uid,
    title: response.data.title[0].text,
    description: response.data.description[0].text,
    imageUrl: response.data.imageurl.url,
    countries: response.data.numbercountries,
    languages: response.data.numberlanguages,
    cities: response.data.cities,
    citiesList: response.data.citieslist.map(city => {
      return {
        city: city.name[0].text,
        country: city.country[0].text,
        imageUrl: city.imageurl1.url,
        conuntryFlag:city.conuntryurl.url
      }
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1300,
  }
}