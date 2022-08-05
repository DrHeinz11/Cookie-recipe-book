import { chakra, Stack, Heading } from "@chakra-ui/react";
import CookieLogo from "../components/LogoCookie";
import { useEffect, useState } from "react";
import getData from "../services/getData";

const SearchBar = ({setData}) => {
  const [search, setSearch] = useState("");
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    getData(search).then((element) => setData(element));
  }, [search]);

  const handleSearch = (e) => e.preventDefault();
  
  return (
    <Stack
      direction="row"
      justify={{ base: "center", md: "space-around" }}
      bgGradient="linear(to-r ,#72afd3,#37ecba)"
      flexWrap={{ base: "wrap", lg: "nowrap" }}
      align="center"
      p={{ base: "5px 10px" }}
      position={"fixed"}
      w="100%"
      top="0"
      zIndex={100}
      gap={{ base: "5px", sm: "10px", md: "15px" }}
    >
      <Stack direction="row" align="center" justify={"space-around"}>
        <CookieLogo width={{ base: "36px", md: "48px" }} />
        <Heading fontSize={{ base: "md", md: "xl" }} textDecoration="underline">
          Cookie Recipe Book
        </Heading>
      </Stack>
      <chakra.form
        action=""
        display={"flex"}
        direction="row"
        gap={"10px"}
        w="fit-content"
        h="40px"
        onSubmit={handleSearch}
        m={"0 !important"}
      >
        <chakra.input
          variant="outline"
          p="5px 10px"
          borderRadius="sm"
          type="text"
          placeholder="Search your recipe"
          fontSize="md"
          textTransform={"capitalize"}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
        <chakra.button
          bg="#003939"
          p="5px 10px"
          borderRadius="md"
          color="white"
          onClick={() => setSearch(keywords)}
          _hover={{ backgroundColor: "#006161", textDecoration: "underline" }}
        >
          Search
        </chakra.button>
      </chakra.form>
    </Stack>
  );
};

export default SearchBar;
