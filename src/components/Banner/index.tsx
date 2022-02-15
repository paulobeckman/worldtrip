import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <Flex
      w="100%"
      h={["10.188rem", "15.625rem", "15.625rem", "20.938rem"]}
      bgImage="url('/banner.svg')"
      maxWidth={1440}
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        w="100%"
        mx="auto"
        align="center"
        justify={['center', 'space-between']}
        px={["4","10","15","20","36"]}
      >
        <Box>
          <Text
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
            fontWeight="500"
            color="gray.50"
          >
            5 Continentes,<br/>infinitas possibilidades.
          </Text>
          <Text
            fontSize={["0.8rem","xl"]}
            mt="4"
            color="gray.100"
            maxW={["100%", "100%", "100%", "34.375rem"]}
          >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box>
          <Image
            src='/airplane.svg'
            alt="airplane"
            w={["18.75rem","18.75rem","18.75rem","26.875rem"]}
            display={['none','none',
            'block']}
            transform="translateY(3rem)"
            ml="8"
          />
        </Box>
      </Flex>
    </Flex>
  );
};
