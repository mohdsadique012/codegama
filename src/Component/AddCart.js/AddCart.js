import * as React from "react";
import { styled } from "@mui/system";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { AppContext, useProfileGlobal } from "../../Context/ProductContext";
import CloseIcon from "@mui/icons-material/Close";

const StyledModal = styled(Modal)(({ theme }) => ({
  position: "absolute",
  top: "50px",
  left: "auto",
  right: "0",
  bottom: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: "0",
}));

const modalStyle = {
  width: 350,
  height: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomStyledModal() {
  let Data = useContext(AppContext);
  let { hanldeClickCart, hanldeClickDeleteCart } = useProfileGlobal();
  console.log(Data.addcart, "shshshshshshshsh");

  return (
    <div>
      <StyledModal open={Data.cart}>
        <Box
          className="modal"
          sx={{
            overflowY: "auto",
            backgroundColor: "black",
            ...modalStyle,
            "@media (max-width: 600px)": {
              width: "90%",
              height: "100%",
            },
            "@media (min-width: 601px) and (max-width: 960px)": {
              width: "80%",
              height: "100%",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "black",
              height: 50,
              padding: 1,
            }}
          >
            <Typography sx={{ color: "white", fontWeight: "bolder" }}>
              Your Cart List
            </Typography>{" "}
            <CloseIcon
              sx={{ color: "white", fontWeight: "bolder" }}
              onClick={() => {
                hanldeClickCart(false);
              }}
            />
          </Box>
          {Data?.addcart.map((product, index) => {
            return (
              <Box sx={{ marginTop: "5px" }}>
                <div className="container-search" key={index}>
                  {" "}
                  <CloseIcon
                    align="rigth"
                    sx={{
                      color: "black",
                      fontWeight: "bolder",
                      paddingBottom: "30px",
                      marginRight: "10px",
                    }}
                    onClick={() => {
                      hanldeClickDeleteCart(index);
                    }}
                  />
                  <img className="image-search" src={product.thumbnail} />
                  <span className="title-search">{product.category} </span>
                </div>
              </Box>
            );
          })}
        </Box>
      </StyledModal>
    </div>
  );
}
