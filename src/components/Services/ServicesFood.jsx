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


function ServicesFood() {
 
  return (
    <>
    
     <ThemeProvider theme={theme}>
        <Typography variant="h1"
            gutterBottom
            className='Services'
            sx={{
                marginTop: { xs: '50px'},
                justifyContent: 'center',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                textAlign: { xs: 'center', sm: 'center' },
                color: '#ff702a',
                textDecoration: 'none',
            }}
        >
            Services
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom
            sx={{
                justifyContent: 'center',
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: { xs: '1.8rem', sm: '1.9rem', md: '2rem' },
                textAlign: { xs: 'center', sm: 'center' },
                color: '#fff',
                textDecoration: 'none',
        }}>
            We provide best food services
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingX={{ xs: 0, sm: 3, md: 12 }}
            sx={{ justifyContent: 'center',  alignItems: 'center'}}>
                <Grid item xs={12} sm={3} md={3} key='food1M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image="https://mibucketcl2023.s3.amazonaws.com/images/s1.png"
                            alt="service1"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: '#ff702a',
                                textDecoration: 'none',
                            }}>
                                Order
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                                It is a long established  
                                be distracted by the readable 
                                looking at its layout. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='service2M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image="https://mibucketcl2023.s3.amazonaws.com/images/s2.png"
                            alt="service2"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div"
                                sx={{
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                                    textAlign: { xs: 'center', sm: 'center' },
                                    color: '#ff702a',
                                    textDecoration: 'none',
                                }}>
                                    Shipping
                                </Typography>
                                <Typography gutterBottom variant="h7" component="div"
                                sx={{
                                    justifyContent: 'center',
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                    textAlign: { xs: 'center', sm: 'center' },
                                    color: 'white',
                                    textDecoration: 'none',
                                }}>
                                    It is a long established  
                                    be distracted by the readable 
                                    looking at its layout. 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='service3M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image="https://mibucketcl2023.s3.amazonaws.com/images/s3.png"
                            alt="service3"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: '#ff702a',
                                textDecoration: 'none',
                            }}>
                                Dellvered
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                                It is a long established  
                                be distracted by the readable 
                                looking at its layout. 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
    </>
  );
}
export default ServicesFood;
