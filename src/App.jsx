import ListRecipe from "./container/ListRecipe";
import SearchBar from "./container/SearchBar";
import "./App.css";
import { useState } from "react";
import { Container } from "@chakra-ui/react";
function App() {
  const [data, setData] = useState([]);

  return (
    <Container bg="#f4f4f4" p="0" maxWidth="100%" pb={"25px"} minH="100vh">
      <SearchBar setData={setData} />
      <Container
        className="App"
        maxWidth="1200px"
        p={0}
        display="flex"
        flexWrap="wrap"
        justifyContent={"center"}
        gap="25px"
      >
        <ListRecipe data={data} />
      </Container>
    </Container>
  );
}

export default App;
