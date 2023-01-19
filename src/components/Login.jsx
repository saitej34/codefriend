import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const navigation = useNavigate();
    const adm = ()=>{
        navigation('/admin')
    }
    const [result,setresult] = useState('');
    const [id,setid] = useState('');
    const [password,setpass] = useState('');
    const sub = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/login",{
            email:id,
            password:password
        }).then((response)=>{
            console.log(response)
            console.log(response.data)
            if(response.data.message === "User Not Found"){
                 setresult("User not found");
            }
            else if(response.data.message === "Incorrect Password")
            {
                setresult("Password is Incorrect");
            }
            if(response.data.token.length>0)
            {
                localStorage.setItem('token',response.data.token)
                navigation('/dashboard')
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div>
         <div class="container log text-warning text-center">
            <br/>
            <h2 align="center">Login</h2>
            <br/><br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="text" class="form-control ml-4 text-center" placeholder="Login ID" onChange={(e)=>{setid(e.target.value);console.log(id)}}/>
                </div>
            </div>
            <br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="Password" class="form-control ml-4 text-center" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}}/>
                </div>
            </div>
            <br/>
            <div class="row">
                <div class="col-md-9">
                    <a href="#" class="nav-link text-white">Forgot Your Password ?</a>
                </div>
            </div> <br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="submit" class="btn btn-outline-warning" onClick={sub} />
                    <input type="submit" class="btn btn-outline-warning" value="Admin Login" onClick={adm} />
                </div>
            </div>
            <br/>
            <p class="text text-white">{result}</p>
            <br/>
         </div>
         <center>
         
         </center>
    </div>
  )
}

export default Login
