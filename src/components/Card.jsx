import ButtonIngredients from "./ButtonIngredients";
import ButtonCopy from "./ButtonCopy";
import TagCard from "./TagCard";
import { Image, Stack, Heading, Text, Box } from "@chakra-ui/react";
export default function Card({
  image,
  title,
  area,
  ingredients,
  tags,
  measure,
  instructions,
}) {
  return (
    <Stack
      direction="row"
      gap={"25px"}
      w="-webkit-fill-available"
      align="flex-start"
      m={{ base: "100px 10px 0 10px", md: "0 !important" }}
      borderRadius="md"
      border={"1px solid #ccc"}
      p="15px 15px"
      justify="center"
      flexWrap="wrap"
    >
      <Stack>
        <Heading fontSize="2xl" textTransform="capitalize">
          {title}
        </Heading>
        <Text fontWeight={"bold"} fontSize="xl" textTransform="capitalize">
          {area}
        </Text>
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          boxSize={{ base: "2xs", md: "sm" }}
          borderRadius="md"
        />
        <TagCard tags={tags} />
      </Stack>

      <Stack
        direction={"row"}
        flexWrap="wrap"
        justify="center"
        flex={"1 1 35%"}
        gap="25px"
        padding="10px 0"
      >
        <ButtonIngredients ingredients={ingredients} measure={measure} />
        <ButtonCopy instructions={instructions} />
      </Stack>
    </Stack>
  );
}
