import { CardFocus } from "../components/CardFocus";

import { Stack, Heading } from "@chakra-ui/react";

const ListRecipe = ({ data }) => {
  return (
    <Stack
      className="container"
      direction="row"
      flexWrap={"wrap"}
      justify="center"
      gap={"15px"}
      p={{ base: "0 10px", md: "auto" }}
      mt={{ base: "105px", md: "75px" }}
    >
      {!data ? (
        <Stack
          display="grid"
          placeContent="center"
          height="82.5vh"
          overflow="hidden"
        >
          <Heading>No existe tu receta</Heading>
        </Stack>
      ) : (
        data.map((element) => (
          <CardFocus
            title={element.strMeal}
            image={element.strMealThumb}
            key={element.idMeal}
            area={element.strArea}
            tags={element.strTags}
          />
        ))
      )}
    </Stack>
  );
};

export default ListRecipe;
