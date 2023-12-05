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


function MenuFood() {
 
  return (
    <>
    
     <ThemeProvider theme={theme}>
        <Typography variant="h1"
            gutterBottom
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
            Food Menu
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
            Fresh taste and grat price
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingX={{ xs: 0, sm: 3, md: 12 }}
            sx={{ justifyContent: 'center',  alignItems: 'center'}}>
                <Grid item xs={12} sm={3} md={3} key='food1M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#ffefe8' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image="https://mibucketcl2023.s3.amazonaws.com/images/food1.png"
                            alt="food1"
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
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Chicken Burger
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Tasty Food
                            </Typography>
                            <Typography variant="body2" color="#ff702a"
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
                                $11.00
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='food2M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#ffefe8' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image="https://mibucketcl2023.s3.amazonaws.com/images/food2.png"
                            alt="food1"
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
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Special Beef Burger
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Tasty Food
                            </Typography>
                            <Typography variant="body2" color="#ff702a"
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
                                $11.00
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='food3M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#ffefe8' }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="auto"
                            image="https://mibucketcl2023.s3.amazonaws.com/images/food3.png"
                            alt="food1"
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
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Chicken Fry Pack
                            </Typography>
                            <Typography gutterBottom variant="h7" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1.1rem', sm: '1.1rem', md: '1.1rem' },
                                textAlign: { xs: 'center', sm: 'center' },
                                color: 'black',
                                textDecoration: 'none',
                            }}>
                                Tasty Food
                            </Typography>
                            <Typography variant="body2" color="#ff702a"
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
                                $11.00
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
export default MenuFood;
