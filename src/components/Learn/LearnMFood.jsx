import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { theme } from '../Header/HeaderFood';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function LearnMFood() {
 
  return (
    <>
    
     <ThemeProvider theme={theme}>
        <Box sx={{ 
            flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px',
            flexDirection: 'column', backgroundColor: '#ffefe8', marginX: '10%', paddingY: '5%' }}>
            <Typography variant="h1"
                gutterBottom
                className='Services'
                sx={{
                    marginTop: { xs: '50px'},
                    justifyContent: 'center',
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 200,
                    fontSize: { xs: '1.4rem', sm: '2.1rem', md: '2.2rem' },
                    textAlign: { xs: 'center', sm: 'center' },
                    color: 'black',
                    textDecoration: 'none',
                }}
            >
                We make quality food Everyday
            </Typography>
            <Button variant="contained" color="orange">
                <Typography 
                        sx={{
                            justifyContent: 'left',
                            fontFamily: 'monospace',
                            fontWeight: 600,
                            fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                            color: '#fff',
                            textDecoration: 'none',
                        }}
                    >
                    Learn More 
                </Typography>
            </Button>
        </Box>
    </ThemeProvider>
    </>
  );
}
export default LearnMFood;
