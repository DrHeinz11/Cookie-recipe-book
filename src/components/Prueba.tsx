import { Heading, Stack, Text } from "@chakra-ui/react";
import useFetchData from "../hook/useFetchData";
import { apiUrls } from "../services";
import ReactPlayer from "react-player";
import { Meal } from "../types";
import dataFilter from "./functionPrueba";

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

  const dataFiltrada = dataFilter(data?.meals);
  console.log(dataFiltrada);
  return (
    <div>
      {dataFiltrada &&
        dataFiltrada?.map((meal) => {
          return (
            <Stack key={meal.idMeal}>
              <Heading>{meal.strMeal}</Heading>
              {meal.strYoutube && (
                <ReactPlayer url={meal.strYoutube} controls={true} />
              )}
              <Text>{meal.strArea}</Text>
              <Text>{meal.strCategory}</Text>
            </Stack>
          );
        })}
    </div>
  );
};

export default Prueba;
