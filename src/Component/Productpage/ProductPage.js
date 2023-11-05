import React, { useContext, useEffect } from 'react'
import { Box, Container,Grid, Typography,Button } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import { useParams } from 'react-router';
import { AppContext, useProfileGlobal } from '../../Context/ProductContext';
import CardComponent from "../Card"
function ProductPage() {
    let {id}=useParams()

    let Data=useContext(AppContext)
    let {productDetails,handleAddCart}=useProfileGlobal()

  
    useEffect(()=>{
      productDetails(id)
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    },[id])
 
    const truncateText = (text, limit) => {
        if (text.length <= limit) {
          return text;
        }
        return text.substring(0, limit) + '...';
      };
  return (
 <>
{Data.detailproduct.map((Element)=>{
    
   return <Container sx={{backgroundColor:"black"}}>
    <Grid container spacing={2}>
    <Grid item xs={12} sm={5}>
      <Box sx={{ height: 300, width: '100%',marginTop:3 }}>
        
        <img src={Element.image} alt="Your Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
    </Grid>
    <Grid item xs={12} sm={7}>
      <Box sx={{ display: 'flex', flexDirection: 'column',padding:1 }}>
     
        <Box sx={{ flex: 1, padding: 1 ,marginTop:3 }}>
        <Typography sx={{fontWeight:"bolder",fontSize:"20px",color:"purple"}}> {Element.category}</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 1 }}>
        <Typography sx={{fontWeight:"bolder",fontSize:"30px",color:"red"}}> Rs {Element.price}</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 1 }}>
        <Typography sx={{fontWeight:"bolder",color:"orange"}}>{Element.title} </Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 1 }}>
        <Typography sx={{fontWeight:"bolder",color:"purple"}}>{Element.description}</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 1 }}>
        <Typography sx={{fontWeight:"bolder",color:"red",fontSize:"15px"}}>Hurry up {Element.rating.count} left</Typography>
        </Box>
        <Box sx={{ flex: 1, padding: 1 ,display: 'flex', flexDirection: 'row'}}>
        <Button variant="contained" startIcon={<ShoppingCart/>} onClick={()=>{handleAddCart(Element.id)}}>Add to Cart</Button> 
        <Button variant="contained" sx={{marginLeft:"6px"}} >Buy Now product</Button>  
        </Box>
      </Box>
    </Grid>
   </Grid>
   <Typography sx={{fontWeight:"bolder",fontSize:"30px",color:"red"}}>Related Product</Typography>
   <Box   sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    gap: 2,
    overflowX: 'auto' 
  }}>
     {Data.categoryproduct?.map((item)=>{
        return  <CardComponent
            
        slug={item.id}

        custContent={item.category}
        showContent={truncateText(item.description, 100)}
    imagee={item.image}
      />
     })}
     </Box>
    </Container>

})}
 
 </>
  )
}

export default ProductPage