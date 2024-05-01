import React, { useState, useEffect } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import './DataView.css'; // Import your CSS file for styling
import Footer from './Footer';

const DataView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server endpoint
    axios.get("http://localhost:8080/view")
      .then(response => {
        setData(response.data); // Set fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="cards-container"> {/* Add this div with the class */}
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {data.map((val,i)=> (
          <Card key={val._id} className="custom-card card-height">
            <CardActionArea>
              <CardMedia
                component="img"
                className="card-image"
                image={val.imageUrl}
                alt={val.fname}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.fname}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {val.fprice}
                </Typography>
                <Link to="/Payment" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      backgroundColor: '#ff6f61', // Set button background color
                      color: '#fff', // Set button text color
                      border: 'none', // Remove button border
                      padding: '10px 20px', // Add padding to button
                      borderRadius: '5px', // Add border radius to button
                      transition: 'background-color 0.3s, transform 0.2s', // Add smooth transition effect for background color and transform
                      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow for depth
                    }}
                    // Add hover styles
                    sx={{
                      '&:hover': {
                        backgroundColor: '#ff5446', // Change background color on hover
                        transform: 'scale(1.05)', // Scale up slightly on hover for a subtle effect
                      }
                    }}
                  >
                    Buy Now
                  </Button>
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Footer />
    </div>
  );
};

export default DataView;