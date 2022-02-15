import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TypeProps {
  icon: string;
  title: string;
}

export default function Caracteristica({icon, title}: TypeProps ) {
  const isMobile = useBreakpointValue({
    base:false,
    sm:true
  })

  return (
      <Flex
        direction={["row","column"]}
        align="center"
        justify="center"
      >
        {isMobile ?
          <Image
            src={`${icon}.svg`}
            w="5.313rem"
            h="5.313rem" mb="6"
          /> : 
          <Text
            color="yellow.100"
            fontSize="4xl"
            mr="2"
          >
            •
          </Text>
        }
        <Text
          fontWeight="600"
          color="gray.300"
          fontSize={["1.5rem","xl","2xl"]}
        >
          {title}
        </Text>
      </Flex>
  );
}
