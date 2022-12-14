import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, styled, Button } from "@mui/material";
import { addUser } from "../services/api";
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
    width: 40%;
    margin: 5% auto 0 auto;
    & > div{
        margin-top: 20px;
    }
`;

const BootstrapButton = styled(Button)`
    width: 40%;
    margin: auto;
`;

const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Register = () =>{

    const [user, setUser] = useState(defaultValue);
    const {name,username,email,phone} = user;
    const navigate = useNavigate();

    const onValueChange = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]: e.target.value})
    }

    const addUserDetails = async ()=>{
        await addUser(user);
        navigate('/lis');
    }

    return(
        <Container>
            <Typography variant="h4" sx={{fontFamily: 'Pacifico', color: '#ffffff'}}>Register New User</Typography>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico', color: '#ffffff'}}>Name</InputLabel>
                <Input sx={{color: '#ffffff'}} onChange={(e)=>onValueChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico', color: '#ffffff'}}>Username</InputLabel>
                <Input sx={{color: '#ffffff'}} onChange={(e)=>onValueChange(e)} name="username" value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico', color: '#ffffff'}}>Email</InputLabel>
                <Input sx={{color: '#ffffff'}} onChange={(e)=>onValueChange(e)} name="email" value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel sx={{fontFamily: 'Pacifico', color: '#ffffff'}}>Phone</InputLabel>
                <Input sx={{color: '#ffffff'}} onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
            </FormControl>
            <FormControl>
                <BootstrapButton variant="contained" onClick={()=>addUserDetails()} color="success">Submit</BootstrapButton>
            </FormControl>
        </Container>
    )
}

export default Register;