import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import Display from './Display'
import './Comp.css'
const Search = () => {
    const [query,setquery] = useState('');
    const [dat,setdata] = useState([]);
    const url = "http://localhost:5000/searchblog/"+query;
    const subs = ()=>{
      axios.get(url).then((response)=>{
        console.log(response)
        setdata(response.data)
      }).catch((error)=>{console.log(error)})
    }
  return (
    <div>
        <div class="container-fluid bg-dark">
          <br/>
          <div class="row d-flex justify-content-around">
              <div class="col-md-4 text-center">
              <a class="navbar-brand q text-warning text-center" href="#">
                    CODE FRIEND
                </a>
                <br/>
              </div>
          </div>
        <br/>
    </div>
      <div class="container mt-5">
          <div class="row justify-content-center mt-5">
                <div class="col-md-9 mt-5">
                     <input type="text" class="form-control fc ty" placeholder="Search an Question or topic" onChange={(e)=>{setquery(e.target.value)}}/><br/>
                     <a class="btn btn-warning" onClick={subs}>Search</a>
                </div>
          </div>
      </div>
      {dat.length>0 ? <Display data={dat} /> : null}
    </div>
  )
}

export default Search
