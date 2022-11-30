import { Typography, styled, Card, CardMedia, CardContent, CardActions, Button, Box, Grid, Container, Link } from "@mui/material";


const Container1 = styled('section')`
    width: 100%;
    margin: 4% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
    font-family: 'Pacifico';
`;

const Container2 = styled('section')``;

const Foot = styled(Box)`
    font-family: 'Poppins';
    color: #ffffff;
    background: #0f0c29;
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
`;


const Home = () =>{
    return(
        <Container1>
            <Typography variant="h3" sx={{fontFamily: 'Pacifico', color: 'darkorange', textAlign: 'center', marginBottom: '3%'}}>Blogs</Typography>
            <Typography variant="h4" sx={{fontFamily: 'Pacifico', color: 'darkorange', marginLeft: '50px'}}>Recent Posts</Typography>

            <Container2 sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                <Card sx={{ maxWidth: 345, display: "inline-block", margin: '5% auto 5% auto' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://raw.githubusercontent.com/Arnav-Satija/Sessional-assessment-2/main/src/blog-1.jpeg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Pacifico', color: 'darkorange'}}>
                            Person Name / Designation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus laborum id hic dolorum, 
                            odio ab voluptas repellat dicta fugiat officiis a quae quod placeat eius culpa.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, display: "inline-block", margin: '5% auto 5% auto' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://raw.githubusercontent.com/Arnav-Satija/Sessional-assessment-2/main/src/blog-2.jpeg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Pacifico', color: 'darkorange'}}>
                            Person Name / Designation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus laborum id hic dolorum, 
                            odio ab voluptas repellat dicta fugiat officiis a quae quod placeat eius culpa.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345, display: "inline-block", margin: '5% auto 5% auto' }}>
                    <CardMedia
                        component="img"
                        height="220"
                        image="https://raw.githubusercontent.com/Arnav-Satija/Sessional-assessment-2/main/src/blog-3.jpeg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: 'Pacifico', color: 'darkorange'}}>
                            Person Name / Designation
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus laborum id hic dolorum, 
                            odio ab voluptas repellat dicta fugiat officiis a quae quod placeat eius culpa.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Container2>
            <Foot px={{xs: 3, sm: 10}} py={{xy: 5,sm: 10}}>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Help</Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Contact</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Support</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Privacy</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Accounts</Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Login</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Register</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Messages</Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Backup</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>History</Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit" sx={{textDecoration: 'none'}}>Roll</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1}>Social Media</Box>
                            <Box>
                                <Link href="https://www.facebook.com" color="inherit" sx={{textDecoration: 'none'}}><i class="fa-brands fa-facebook"></i>Facebook</Link>
                            </Box>
                            <Box>
                                <Link href="https://www.youtube.com" color="inherit" sx={{textDecoration: 'none'}}><i class="fa-brands fa-youtube"></i>Youtube</Link>
                            </Box>
                            <Box>
                                <Link href="https://twitter.com" color="inherit" sx={{textDecoration: 'none'}}><i class="fa-brands fa-twitter"></i>Twitter</Link>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5,sm: 0}}>
                        &copy; 2022 Copyright RecruitPep
                    </Box>
                </Container>
            </Foot>
        </Container1>
        // <Foot>
        //     <div class="mt-3 text-center">
        //         <h3 class="fw-bold">Want to Partner with us?</h3>
        //         <p>If you are reading this, then Congratulation.<br>
        //             You have reached the end of page.</p>
        //         <button class="btn btn-block btn-outline-light">Get Started</button>
        //         <hr>
        //     </div>

        //     <div class="row justify-content-around text-center text-md-start">

        //         <div class="col-md-2 text-center">
        //             <h1 class="fw-bold mt-3 ">RP</h1>
        //             <h4>RecruitPep</h4>
        //         </div>
        //         <div class="col-md-2">
        //             <ul class="list-unstyled">
        //                 <li class="fw-bold my-2">Partnership</li>
        //                 <li> <a href="#" class="text-decoration-none text-white">Website</a> </li>
        //                 <li> <a href="#" class="text-decoration-none text-white"> Social Media</a></li>
        //                 <li> <a href="#" class="text-decoration-none text-white">Branding</a> </li>
        //             </ul>
        //         </div>
        //         <div class="col-md-2">
        //             <ul class="list-unstyled">
        //                 <li class="fw-bold my-2">About</li>
        //                 <li> <a href="#" class="text-decoration-none text-white">Our Project</a> </li>
        //                 <li> <a href="#" class="text-decoration-none text-white">Careers</a> </li>

        //             </ul>
        //         </div>
        //         <div class="col-md-2">
        //             <ul class="list-unstyled">
        //                 <li class="fw-bold my-2">Support</li>
        //                 <li> <a href="#" class="text-decoration-none text-white">Contact</a> </li>
        //                 <li> <a href="#" class="text-decoration-none text-white">Support Request</a> </li>
        //             </ul>
        //         </div>
        //         <div class="col-md-2">
        //             <li class="fw-bold my-2 list-unstyled">Follow us</li>
        //             <ul class="list-unstyled d-flex justify-content-center justify-content-md-start">
        //                 <li><a href="#" class="text-white"><i class="fa-brands fa-facebook me-2 fa-1x"></i></a></li>
        //                 <li><a href="#" class="text-white"><i class="fa-brands fa-whatsapp mx-2 fa-1x"></i></a></li>
        //                 <li><a href="#" class="text-white"><i class="fa-brands fa-youtube mx-2 fa-1x"></i></a></li>
        //                 <li><a href="#" class="text-white"><i class="fa-brands fa-instagram mx-2 fa-1x"></i></a></li>
        //             </ul>
        //         </div>
        //     </div>
        //     <hr>
        //     <div class="row">
        //         <div class="col-md-12 text-center pt-2">
        //             <p>&copy; 2022 Copyright <a href="#" class="text-white">RecruitPep</a></p>
        //         </div>
        //     </div>
        // </Foot>
    )
}

export default Home;