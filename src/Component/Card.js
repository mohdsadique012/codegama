import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { useProfileGlobal } from "../Context/ProductContext";
import { Link } from "react-router-dom";

export default function MediaCard({ custContent, showContent, slug, imagee }) {
  const { handleAddCart } = useProfileGlobal();
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        borderRadius: "30px",
        backgroundColor: "#e91e63",
      }}
    >
      <CardMedia
        sx={{ height: 140, objectFit: "cover" }}
        image={imagee}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ color: "#ffff00", fontWeight: "bolder" }}
          component="div"
        >
          {custContent}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#ffcdd2", fontWeight: "bolder" }}
        >
          {showContent}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/Product/${slug}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Button
            size="small"
            sx={{
              backgroundColor: "black",
              margin: "5px",
              borderRadius: "5px",
              color: "#e0f7fa",
            }}
            variant="contained"
          >
            Show more
          </Button>
        </Link>
        <Button
          onClick={() => {
            handleAddCart(slug);
          }}
          startIcon={<ShoppingCart />}
          size="small"
          sx={{
            backgroundColor: "black",
            margin: "5px",
            borderRadius: "5px",
            color: "#e0f7fa",
          }}
          variant="contained"
        >
          ADD TO Cart
        </Button>
      </CardActions>
    </Card>
  );
}
