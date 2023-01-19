import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Admin = () => {
    const navigation =useNavigate();
    const [id,setid] = useState('');
    const [pass,setpass] = useState('');
    const sub = (e)=>{
        axios.post('http://localhost:5000/adminlogin',{
            email:id,
            password:pass
        }).then((response)=>{
            console.log(response)
            console.log(response.data)
            if(response.data.token.length > 0 )
            {
                localStorage.setItem('token',response.data.token)
                navigation('/admindash')
            }
        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div>
             <div class="container log text-warning text-center">
                <br/>
                <h2 align="center">Admin Login</h2>
                <br/><br/>
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <input type="text" class="form-control ml-4 text-center" placeholder="Admin ID" onChange={(e)=>{setid(e.target.value);console.log(id)}}/>
                    </div>
                </div>
                <br/>
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <input type="Password" class="form-control ml-4 text-center" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}}/>
                    </div>
                </div>
                 <br/>
                <div class="row justify-content-center">
                    <div class="col-md-9">
                        <input type="submit" class="btn btn-outline-warning" onClick={sub} />
                    </div>
                </div>
                <br/>
             </div>
        </div>
      )
    }

export default Admin

