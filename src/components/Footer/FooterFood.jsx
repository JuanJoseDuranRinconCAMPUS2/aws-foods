import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { theme } from '../Header/HeaderFood';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function FooterFood() {
 
  return (
    <>
    
     <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} paddingX={{ xs: 0, sm: 3, md: 12 }}
            sx={{ justifyContent: 'center',  alignItems: 'flex-start'}}>
                <Grid item xs={12} sm={3} md={3} key='food1M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Menu Links
                            </Typography>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={50} color="orange" />
                            </Box>
                            <Typography gutterBottom variant="h6"
                             component="a"
                             href="#Home"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Home
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#About"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               About
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#Menu"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Menu
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#Service"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Service
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#Contact"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Contact
                            </Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='service2M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Our Servive
                            </Typography>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={50} color="orange" />
                            </Box>
                            <Typography gutterBottom variant="h6"
                             component="a"
                             href="#WebDesign"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Web Design
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#WebDevelopment"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Web Development
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#Marketing"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Marketing
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#ProductManagement"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Product Management
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#GraphicDesign"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Graphic Design
                            </Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='service3M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Information
                            </Typography>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={50} color="orange" />
                            </Box>
                            <Typography gutterBottom variant="h6"
                             component="a"
                             href="#AboutUs"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               About Us
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#DeliveryInformation"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Delivery Information
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#PrivacyPolicy"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Privacy Policy
                            </Typography>
                            <br></br>
                            <Typography gutterBottom variant="h6" 
                            component="a"
                            href="#Terms&Conditions"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                               Terms & Conditions
                            </Typography>
                            </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} key='service3M'
                sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <Card sx={{ maxWidth: 300, backgroundColor: '#1e1d2b00' }}>
                            <CardContent>
                            <Typography gutterBottom variant="h6" component="div"
                            sx={{
                                justifyContent: 'center',
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                fontSize: { xs: '1rem', sm: '1rem', md: '1rem' },
                                textAlign: { xs: 'left', sm: 'left' },
                                color: 'white',
                                textDecoration: 'none',
                            }}>
                                Contact Us
                            </Typography>
                            <Box sx={{ width: '100%' }}>
                                <LinearProgress variant="determinate" value={50} color="orange" />
                            </Box>
                            <br></br>
                            <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: "#ff702a" }}></Avatar>
                                <Avatar sx={{ bgcolor: "#ff702a" }}></Avatar>
                                <Avatar sx={{ bgcolor: '#ff702a' }}></Avatar>
                            </Stack>
                            </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
    </>
  );
}
export default FooterFood;
