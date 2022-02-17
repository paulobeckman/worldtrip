import { Flex } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from 'prismic-dom';
// import Cities from "../../components/Cities";
// import Content from "../../components/Content";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client';
import { useRouter } from "next/dist/client/router";
import { ContinentProps } from "../../interfaces/ContinentProps";

export default function Continent({continent}: ContinentProps) {
  const router = useRouter();
  // if (router.isFallback) {
  //   return <Loading />
  // }

  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip | {continent.title}</title>
      </Head>

      <Header />
      <ContinentBanner continent={continent} />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        {/* <Content continent={continent} />
        <Cities continent={continent} /> */}
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

  console.log(JSON.stringify(response, null, 2))

  const continent = {
    slug:response.uid,
    title: response.data.title[0].text,
    description: response.data.description[0].text,
    imageurl: response.data.imageurl.url,
    countries: response.data.numbercountries,
    languages: response.data.numberlanguages,
    cities: response.data.cities,
    citiesList: response.data.citieslist.map(city => {
      return {
        city: city.name[0].text,
        country: city.country[0].text,
        thumbnail: city.imageurl1.url,
        conuntryURL:city.conuntryurl[0].text,
      }
    })
  };

  return {
    props: {
      continent
    },
    revalidate: 1800,
  }
}