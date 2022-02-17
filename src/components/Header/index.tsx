import { Flex, Grid, GridItem, Icon, Image, Box } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import { RiArrowLeftSLine } from 'react-icons/ri';

export default function Header() {
  const { asPath } = useRouter()
  const notHomePage = asPath !== '/'

  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      justify="center"
      paddingY="1.688rem"
      mx="auto"
    >
      <Grid
        templateColumns="40% 1fr"
        maxW="71.25rem"
        alignItems="center"
        justifyContent="center"
        alignSelf="start"
        h="100%"
        w="100%"
        mx="auto"
      >
        {notHomePage && (
          <Box w="5%">
            <Link href="/">
              <a>
                <Icon as={RiArrowLeftSLine} fontSize={[20,40]}/>
              </a>
            </Link>
          </Box>

        )}
        <Image src='/logo.svg' alt="logo"/>
      </Grid>
    </Flex>
  );
};
