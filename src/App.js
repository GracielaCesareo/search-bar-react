import * as React from "react";
import { useState } from "react";
import "./styles.css";
import Container from "@mui/material/Container";
import Search from "./components/Search";
import ListNames from "./components/ListNames";

//TODO: Improve UI view based on framework functionality

export default function App() {
  const [inputSearch, setInputSearch] = useState("");

  const handleInputSearch = (e) => {
    let inputValue = e.target.value.toLowerCase();
    setInputSearch(inputValue);
  };

  return (
    <div className="App">
      <h1>SearchBar example</h1>
      <Search handleInputSearch={handleInputSearch} />
      <Container fixed>
        <ListNames inputSearch={inputSearch} />
      </Container>
    </div>
  );
}
