import { Flex, Heading } from "@chakra-ui/react";
import { ContinentProps } from "../../interfaces/Continent";

export default function ContinentBanner({continent}:ContinentProps) {
  return (
    <Flex
      w="100%"
      h={["9.375rem","18.75rem","31.25rem"]}
      px={["0","0","36"]}
      pt={["0","0","72"]}
      justify={["center","center", "flex-start"]}
      align="center"
      bgImage={`url('${continent.imageUrl}')`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Heading
        fontSize={["1.75rem","5xl"]}
        fontWeight="500"
        textAlign={["center","left"]}
        color="gray.50"
      >
        {continent.title}
      </Heading>
    </Flex>
  )
}
