import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      justify="center"
      paddingY="1.688rem"
      mx="auto"
    >
      <Image src='/logo.svg' alt="logo"/>
    </Flex>
  );
};
