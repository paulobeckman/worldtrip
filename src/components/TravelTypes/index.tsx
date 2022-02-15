import { Grid, GridItem } from "@chakra-ui/layout";
import Type from "./Type";

export default function TravelTypes() {
  return (
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Type icon="cocktail" title="vida noturna" />
    </GridItem>
    <GridItem>
      <Type icon="surf" title="praia" />
    </GridItem>
    <GridItem>
      <Type icon="building" title="moderno" />
    </GridItem>
    <GridItem>
      <Type icon="museum" title="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Type icon="earth" title="e mais..." />
      </GridItem>
    </Grid>
  )
}