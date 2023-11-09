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
    <Container sx={{  pb: 5 }}>
      <Jumbotron />
     
      {Object.entries(Data.productCategory)?.map(
        ([category, movieTitles]) => (
        <Box>
         <Box sx={{height:"50px",backgroundColor: "#e91e63",display:"flex",alignItem:"center",justifyContent:"center" , marginTop:"10px"}} ><Typography sx={{color:"white",fontWeight: "bolder",fontSize:"30px"}}>{category}</Typography></Box>
         <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          gap: 2, // Adjust the gap between cards as needed
        }}
      >
        {movieTitles?.slice(0, 3).map((item, index) => (
          <CardComponent
            slug={item.id}
            custContent={item.title}
            showContent={truncateText(item.description, 100)}
            imagee={item.thumbnail}
          />
        ))}
      </Box>
         </Box>
        )
      )}
      
    </Container>
  );
}

export default LandingPage;
