import { Box } from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import TravelTypes from "../components/TravelTypes";
import Divider from "../components/Divider";
import CallText from "../components/CallText";

export default function Home() {
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

    </Box>
  )
}
