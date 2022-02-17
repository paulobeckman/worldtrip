import { Grid, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { ContinentProps } from "../../interfaces/Continent";

export default function Cities({continent}: ContinentProps) {
  return (
    <>
      <Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
      <Grid
        templateColumns={["1fr","1fr 1fr","repeat(3, 1fr)","repeat(4, 1fr)"]}
        gap={['1.25rem','2.813rem']}
        px={["1.875rem", "0"]}
        alignItems="center"
        justifyContent="center"
      >
        {continent.citiesList.map(city => (
          <Box borderRadius="0.25rem" overflow="hidden">
            <Image src={city.imageUrl} alt="imagem da cidade" h="10.625rem" w="100%"/>
            <Flex
              p="6"
              align="center"
              justify="space-between"
              bg="white"
              border="1px"
              borderColor="yellow.100"
              borderTop="0"
              borderBottomRadius="0.25rem"
            >
              <Flex direction="column">
                <Heading
                  color="gray.300"
                  fontSize="xl"
                  fontWeight="500"
                >
                  {city.city}
                </Heading>
                <Text
                  mt="3"
                  fontSize="md"
                  color="gray.200"
                  fontWeight="500"
                >
                  {city.country}
                </Text>
              </Flex>
              <Image
                src={city.conuntryFlag}
                alt="bandeira do país"
                w="30px"
                h="30px"
                borderRadius="50%"
                objectFit="cover"
              />
            </Flex>
          </Box>
        ))}
      </Grid>
    </>
  )
 }