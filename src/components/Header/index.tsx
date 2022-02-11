import { Center, Flex, Image, Square } from "@chakra-ui/react";

export default function Header() {
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Center>
        <Image src='/logo.svg' alt="logo"/>
      </Center>
    </Flex>
  );
}