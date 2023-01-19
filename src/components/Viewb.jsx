import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import './Comp.css'
const Viewb = () => {
  const navigate = useNavigate();
  function Set() {
    return { __html: bod };
  }
  const [comm,setcomm] = useState('');
  const [user,setuser] = useState('');
  const [auth,setauth] = useState('');
  const [datetime,setdt] = useState('');
  const [tit,sett] = useState('');
  const [key,setkey] = useState('');
  const [im1,setim1] = useState('');
  const [bod,setbod] = useState('');
  const [im2,setim2] = useState('');
  const [b,setb] = useState('');
  const sub = (e)=>{
    const u = "https://en.wikipedia.org/wiki/"+key;
    window.open(u, '_blank');
  }
  let {id} = useParams();
  useEffect(()=>{
    if(!localStorage.getItem('token'))
    {
          navigate('/login')
    }
    axios.get('http://localhost:5000/getqy/'+id).then((response) => {
      console.log(response)
      sett(response.data.btitle);
      setauth(response.data.userid);
      setdt(response.data.date);
      setbod(response.data.his);
      setkey(response.data.keywords);
      setim1(response.data.imglinke);
      setim2(response.data.imglinks);
    }).catch((error) => {
      console.log(error);
    })
  },[])
  return (
    <div>
        <div class="container-fluid bg-dark text-center">
          <br/>
          <div class="row d-flex justify-content-around text-center">
              <div class="col-md-4 text-center">
              <a class="navbar-brand q text-warning text-center" href="#">
                    CODE FRIEND
                </a>
                <br/>
              </div>
              <div class="col-md-5">
                   <h5 class="text-white"><b>Author : </b>{auth}</h5>
                   <p class="text-white"><b>Date and Time : </b>{datetime}</p>
              </div>
          </div>
        <br/>
       </div>
    <br/><br/>
        <div class="container">
            <div class="row mb-5">
                 <h2 class="text-dark text-center">{tit}</h2>
            </div>
            <br/><br/>
            <b>KeyTopics</b>
            <br/><br/>
            <a href="#" onClick={sub} class="btn btn-warning">{key}</a>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <img src={im1} class="img-fluid" />
                    
                </div>
            </div>
            <div class="row justify-content-center mt-5">
                <div class="col-md-10 mt-5">
                <div dangerouslySetInnerHTML={Set()}></div>
                </div>
            </div>
        </div>
        <div class="container">
             <div class="row justify-content-center">
                 <div class="col-md-6">
                      <h4 class="text-center mt-5">Comments/Queries</h4><br/><br/>
                      <input type="textarea" class="form-control inpc" placeholder="Comments/queries" onChange={(e)=>{setcomm(e.target.value)}}/>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default Viewb
