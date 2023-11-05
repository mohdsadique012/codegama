import React, { useEffect, useState } from "react";
import { useContext } from "react";

import CardComponent from "../Card";
import { Container, Box, Button, Typography } from "@mui/material";
import Jumbotron from "../../Layout/Jumbotron";
import { useProfileGlobal, AppContext } from "../../Context/ProductContext";

function LandingPage() {
  let Data = useContext(AppContext);
  const { handleClickFilter } = useProfileGlobal();
  console.log(Data, "llalalal");
  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + "...";
  };

  return (
    <Container sx={{ bgcolor: "black", pb: 5 }}>
      <Jumbotron />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          width: "100%",
          margin: "20px",
          gap: 2,
        }}
      >
        <Typography
          sx={{ color: "#ffff00", fontWeight: "bolder", paddingTop: "8px" }}
        >
          FilterProduct:-
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            handleClickFilter("Allproduct");
          }}
        >
          AllProduct
        </Button>
        {Object.entries(Data.productCategory)?.map(
          ([category, movieTitles]) => (
            <Button
              variant="contained"
              key={category}
              onClick={() => {
                handleClickFilter(category);
              }}
            >
              {category}
            </Button>
          )
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          gap: 2, // Adjust the gap between cards as needed
        }}
      >
        {Data?.products.map((item, index) => (
          <CardComponent
            slug={item.id}
            custContent={item.category}
            showContent={truncateText(item.description, 100)}
            imagee={item.image}
          />
        ))}
      </Box>
    </Container>
  );
}

export default LandingPage;
