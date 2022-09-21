import React from 'react';
import CardLogin from '../../components/CardLogin/CardLogin';

const Login = () =>{

    return( 
    <>
    <div style={{margin:'auto',display:'flex',justifyContent:'center',flexDirection:'column'}}>
        <h1>Login</h1>
        <div style={{margin:'auto'}}>
            <CardLogin></CardLogin>
        </div> 
    </div>
    </>
    )
}

export default Login;
