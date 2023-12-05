import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { theme } from '../Header/HeaderFood';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function AboutUsFood() {
 
  return (
    <>
     <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingX={{ xs: 0, sm: 3, md: 12 }}
         sx={{ justifyContent: 'center',  alignItems: 'center',   flexDirection: { xs: 'column-reverse', sm: 'row', md: 'row' } }}>
            <Grid item xs={12} sm={4} md={6} key='imageH'>
            <CardMedia
                component="img"
                alt="home"
                sx={{
                    width: '100%',
                    height: 'auto', 
                    maxWidth: '400px', 
                    minWidth: '100px',
                }}
                image="https://mibucketcl2023.s3.amazonaws.com/images/about.png"
            />
            </Grid>
            <Grid item xs={12} sm={4} md={6} key='textH' sx={{ 
                marginY: '10%',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' },
            }}>
                <Typography variant="h1"
                    gutterBottom
                    sx={{
                        justifyContent: 'left',
                        flexGrow: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                        textAlign: { xs: 'center', sm: 'left' },
                        color: '#ff702a',
                        textDecoration: 'none',
                    }}
                >
                About us
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom
             sx={{
                justifyContent: 'left',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 100,
                fontSize: { xs: '1.8rem', sm: '1.9rem', md: '2rem' },
                textAlign: { xs: 'center', sm: 'left' },
                color: '#fff',
                textDecoration: 'none',
            }}>

            We speak the good
            food language
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom
             sx={{
                justifyContent: 'left',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 100,
                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                textAlign: { xs: 'center', sm: 'left' },
                color: '#fff',
                textDecoration: 'none',
            }}>

                It is a long established fact that a 
                be distracted by the readable content 
                looking at its layout. The point of
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
            </Grid>
        </Grid>
        </Box>
    </ThemeProvider>
    </>
  );
}
export default AboutUsFood;
