import { Flex, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../interfaces/ContinentProps";

export default function ContinentBanner({continent}:ContinentProps) {
  return (
    <Flex
      w="100%"
      h={["150px","300px","500px"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      justify={["center","center", "flex-start"]}
      align="center"
      bgImage={`url('${continent.banner_image}')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading
        fontSize={["1.75rem","5xl"]}
        fontWeight="500"
        textAlign={["center","left"]}
        color="gray.100"
      >
        {continent.title}
      </Heading>
    </Flex>
  )
}
