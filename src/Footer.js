import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"


function Footer() {
  

  return (
    <footer className="footer">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className="footerFirst">
            <Typography variant="subtitle1">Sign Up For Email Offers & Updates</Typography>
            <TextField
            placeholder="Enter Email"
            size="small"
            sx={{
              '& .MuiInputBase-input': {
                color: 'white', 
              },
              '& fieldset': {
                borderColor: 'white !important', 
              },
              '&:hover fieldset': {
                borderColor: 'white !important', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white !important', 
              },
            }}
          />
          <Button
          variant="outlined"
          
          sx={{
            color: 'white', 
            borderColor: 'white', 
            marginLeft:"5px"
          }}
        >
          SUBMIT
        </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Connect With Us</Typography>
            <div className="socialIcon">
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
              <InstagramIcon />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">SECURE ORDERING & TRANSACTIONS</Typography>
            <div className="creditCardIcon">
              <img className="creditcard" src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/debit-platinum-mastercard-card_1280x720.png" alt="" />
              <img className="creditcard" src="https://d28wu8o6itv89t.cloudfront.net/images/Visadebitcardpng-1599584312349.png" alt="" />
              <img className="creditcard" src="https://pngimg.com/d/mastercard_PNG23.png" alt="" />
              <img className="creditcard" src="https://www.mastercard.co.in/content/dam/public/mastercardcom/sg/en/consumers/find-a-card/images/world-mastercard-card_1280x720.jpg" alt="" />
            </div>
          </Grid>
        </Grid>
        <Typography variant="subtitle2">
          About us | CODEGAMA Team | Careers | Contact Us | Testimonials | Terms & Conditions | Disclaimer | Terms Of Use | Privacy Policy | FAQ | Retails Store | Franchise | Blog | Affiliate Program | Jewellwery | Astrology | News | Room | Download App
        </Typography>
        <Typography variant="body2">
          Copyright @ 2020 www.codegama.com. All right reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
