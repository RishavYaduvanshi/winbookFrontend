import React from 'react'
import Add from "./Add/Add";
import Feed from "./Feed";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";
import { Box, Stack } from "@mui/material";
import { useState } from 'react';


export const Main = ({ mode, setMode }) => {

  var theme = localStorage.getItem("theme");
  document.title = "Wibrant | Home";
  const [data, setdata] = useState();

  const pull_data = (data) => {
    setdata(data);
  }


  return (
    <Box bgcolor={"background.default"} color={"text.primary"} >
      <Navbar setMode={setMode} mode={theme} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar position="sticky" setMode={setMode} mode={theme} />
        <Feed onChange={data} data={data} />
        <Rightbar />
      </Stack>
      <Add func={pull_data} />
    </Box>
  )
}
