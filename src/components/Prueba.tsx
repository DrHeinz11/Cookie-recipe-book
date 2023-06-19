import { Heading, Stack } from "@chakra-ui/react";
import useFetchData from "../hook/useFetchData";
import { apiUrls } from "../services";
import ReactPlayer from "react-player";
import { Meal } from "../types";

const Prueba = () => {
  const { data, isLoading, error } = useFetchData<{ meals: Meal[] }>(
    apiUrls.searchMealByName()
  );
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data &&
        data?.meals.map((meal) => {
          return (
            <Stack key={meal.idMeal}>
              <Heading>{meal.strMeal}</Heading>
              {meal.strYoutube && <ReactPlayer url={meal.strYoutube} controls={true} />}
            </Stack>
          );
        })}
    </div>
  );
};

export default Prueba;
