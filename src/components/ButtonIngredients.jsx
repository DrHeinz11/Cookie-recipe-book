import {
  Box,
  useDisclosure,
  Button,
  Collapse,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ButtonIngredients({
  ingredients,
  measure,
  space = "space-between",
}) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack width="100%" align="center">
      <Button
        w={{ base: "250px", md: "350px" }}
        variant="outline"
        onClick={onToggle}
      >
        Ingredients
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Stack
          direction="row"
          justify={space}
          gap={{ base: "10px", md: "15px", lg: "25px" }}
          p="40px"
          color="white"
          bg="teal.500"
          rounded="md"
          shadow="md"
          width="250px"
        >
          <Box maxW={"350px"}>
            {ingredients?.map((e, index) => {
              if (e === "" || e === " ") {
                return;
              } else {
                return (
                  <Text
                    key={index}
                    my="2.5px"
                    textTransform="capitalize"
                    fontSize="md"
                  >
                    {e}
                  </Text>
                );
              }
            })}
          </Box>

          <Box>
            {measure?.map((e, index) => {
              if (e === "" || e === " ") {
                return;
              } else {
                return (
                  <Text
                    key={index}
                    my="2.5px"
                    textTransform="-moz-initial"
                    fontSize="md"
                  >
                    {e}
                  </Text>
                );
              }
            })}
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  );
}
