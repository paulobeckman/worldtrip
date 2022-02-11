import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      maxWidth={1440}
      justify="center"
      paddingY="1.688rem"
      paddingX="1rem"
      alignItems="center"
    >
      <Image position="absolute" w="100%" src='/banner.svg' alt="banner"/>
      <Box position="relative">
        <Text
          fontSize="2.25rem"
          fontWeight="600"
          color="gray.50"
          mb="0.5rem"
        >
          5 Continentes,<br/>infinitas possibilidades.
        </Text>
        <Text fontSize="1.25rem" fontWeight="400" color="gray.100" mb="4">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
      </Box>
      <Spacer />
      <Box position="relative">
        <Image src='/airplane.svg' alt="airplane"/>
      </Box>
    </Flex>
  );
};
