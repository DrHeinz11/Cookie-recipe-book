import {
  Box,
  useDisclosure,
  Button,
  Collapse,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ButtonIngredients({ instructions }) {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack width="100%" m="0 !important" align="center">
      <Button
        w={{ base: "250px", md: "350px" }}
        colorScheme={"teal"}
        color="white"
        onClick={onToggle}
      >
        Instructions
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          direction="row"
          p="20px"
          color="white"
          bg="teal.500"
          rounded="md"
          shadow="md"
          maxW={"350px"}
        >
          <Text textTransform="-moz-initial">{instructions}</Text>
        </Box>
      </Collapse>
    </Stack>
  );
}
