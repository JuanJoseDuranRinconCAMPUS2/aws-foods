import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      orange: {
        main: '#ff702a'
      },
    },
  });

function HeaderFood() {
 
  return (
    <>
     <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingX={{ xs: 0, sm: 3, md: 12 }}
         sx={{ justifyContent: 'center',  alignItems: 'center' }}>
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
                        fontSize: { xs: '3rem', sm: '4rem', md: '4rem' },
                        textAlign: { xs: 'center', sm: 'left' },
                        color: '#ff702a',
                        textDecoration: 'none',
                    }}
                >
                Full Website
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom
             sx={{
                justifyContent: 'left',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 100,
                fontSize: { xs: '1.4rem', sm: '1.3rem', md: '1.4rem' },
                textAlign: { xs: 'center', sm: 'left' },
                color: '#fff',
                textDecoration: 'none',
            }}>

            Foods the Most precious thing
            </Typography>
            <Button variant="contained" color="orange">
                Today's 
            </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={6} key='imageH'>
            <CardMedia
                component="img"
                alt="home"
                sx={{
                    width: '100%',
                    height: 'auto', 
                    maxWidth: '400px', 
                    minWidth: '200px',
                }}
                image="https://mibucketcl2023.s3.amazonaws.com/images/home.png"
            />
            </Grid>
        </Grid>
        </Box>
    </ThemeProvider>
    </>
  );
}
export default HeaderFood;
