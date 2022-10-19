import React, { useState } from "react";
import axios from "axios";
import Layout from "./components/Layout/Layout";
import HighChart from "./components/HighChart/HighChart";
import UserInput from "./components/UserInput/UserInput";
import { Container } from "@mui/material";

const App = () => {
  const [string, setString] = useState("");
  const [showChart, setShowChart] = useState(false);
  const [score, setScore] = useState([]);
  const [frequency, setFrequency] = useState([]);
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const url =
    "https://qcuialeirsxv5ht6crufymcjse0xmkop.lambda-url.us-east-1.on.aws/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, null, {
        params: { string },
      });
      setScore([response.data.uniquenessScore]);
      setFrequency(response.data.frequencies);
      setShowChart(true);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    //Could switch to RegEx to ignore case
    setString(e.target.value.toLowerCase());
  };

  return (
    <>
      <Layout />
      <UserInput
        open={open}
        handleClose={handleClose}
        handleOpen={handleClickOpen}
        string={string}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {showChart ? (
        <Container>
          <HighChart score={score} frequency={frequency} string={string} />
        </Container>
      ) : null}
    </>
  );
};

export default App;
