import {
  Flex,
  Heading,
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  Grid
} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";
import { ContinentProps } from "../../interfaces/Continent";

export default function Description({continent}:ContinentProps) {
  return (
    <Grid
      templateColumns={["1fr","1fr","1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      my={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        textAlign="justify"
        color="gray.300"
      >
      {continent.description}
      </Text>
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
      <Flex
        direction="column"
        justify="center"
        align={["flex-start","flex-start", "center"]}
      >
          <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          {continent.countries}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            países
          </Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align={["flex-start","flex-start", "center"]}
        >
          <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          {continent.languages}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            línguas
          </Text>
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align={["flex-start","flex-start", "center"]}
        >
          <Heading fontSize={["2xl","5xl"]} color="yellow.400" fontWeight="500">
          {continent.cities}
          </Heading>
          <Text fontWeight="500" fontSize={["md", "xl"]} color="gray.700">
            cidades +100

            <Popover>
              <PopoverTrigger>
                <span>
                  <Icon
                    as={RiInformationLine}
                    cursor="pointer"
                    color="gray.400"
                    w={["10px","16px"]}
                    h={["10px","16px"]}
                    ml="1"
                  />
                </span>
              </PopoverTrigger>
              <PopoverContent bg="gray.700" color="yellow.400">
                <PopoverArrow bg="gray.700"/>
                <PopoverCloseButton />
                <PopoverBody
                  fontWeight="400"
                  fontSize="lg"
                >
                  {continent.cities_list}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Text>
        </Flex>
      </Flex>
    </Grid>
  )
}