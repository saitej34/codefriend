import React,{useState} from 'react'
import axios from "axios";
import swal from 'sweetalert'
import {useNavigate} from 'react-router-dom'
const Register = () => {
    const hist = useNavigate();
    const [email,setemail] = useState('');
    const [name,setname] = useState('');
    const [password,setpass] = useState('');
    const [cpassword,setcpass] = useState('');
    const reg = (e)=>{
        /*fetch('http://localhost:5000/register',{
            method: 'POST',
            body: JSON.stringify({
                email:email,
                name:name,
                password:password,
                cpassword:cpassword
            }),
            contentType: 'application/json'
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })*/
        axios.post('http://localhost:5000/register', {
              email:email,
              name:name,
              password:password,
              cpassword:cpassword
            })
            .then(function (response) {
                console.log(response);
                if(response.data.message==='Registration Successful')
                {
                    swal({
                        title: "Registration Successfull",
                        text: "Congratulations!",
                        icon: "success",
                        button: "Ok!",
                      });
                      hist('/login')

                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
  return (
    <div>
        <div class="container logs text-warning text-center">
            <br/>
            <h2 align="center">Register</h2>
            <br/><br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="text" class="form-control ml-4 text-center" placeholder="Email Id" onChange={(e)=>{setemail(e.target.value)}}/>
                </div>
            </div><br/><br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="text" class="form-control ml-4 text-center" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
                </div>
            </div><br/><br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="password" class="form-control ml-4 text-center" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}}/>
                </div>
            </div><br/><br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="password" class="form-control ml-4 text-center" placeholder="Confirm Password" onChange={(e)=>{setcpass(e.target.value)}}/>
                </div>
            </div><br/><br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <input type="submit" class="btn btn-outline-warning" value="Register" onClick={reg}/>
                </div>
            </div> <br/>
            <div class="row justify-content-center">
                <div class="col-md-9">
                    <a href="/login" class="nav-link text-white">Already a User</a>
                </div>
            </div> <br/>
         </div>
    </div>
  )
}

export default Register

