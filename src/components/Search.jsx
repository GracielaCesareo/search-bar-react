import { React, useState } from "react";
import TextField from "@material-ui/core/TextField";

const Search = ({ handleInputSearch }) => {
  return (
    <div>
      <h3>Search by deparment</h3>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleInputSearch}
      />
    </div>
  );
};

export default Search;
