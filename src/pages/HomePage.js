import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState, useEffect } from "react";
import "./homepage.css";
import Card from "../components/Card";
// http://www.omdbapi.com/?i=tt3896198&apikey=92faf84a
export default function HomePage() {
  const [data, setData] = useState([]);
  const [secondData, setSecondData] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://imdb-top-100-movies.p.rapidapi.com/top32";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };
  function getData() {
    axios.get((url, options)).then((response) => setData(response));
  }
  console.log(data);
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ margin: 0, padding: 0 }} fixed>
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            minHeight: "200vh",
            bgcolor: "red",
            width: "100vw",
            margin: 0,
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            p: "20px",
          }}
        >
          <button onClick={getData}></button>
          {data.map((el) => (
            <Card product={el} />
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
