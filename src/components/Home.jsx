import React, { useEffect,useState } from 'react'
import './Comp.css'
import axios from 'axios'
import Display from './Display'
import Countup from 'react-countup'
const Home = () => {
  const [user,setuser] = useState('');
  const [nb,setnb] = useState('');
  const [arr,setarr] = useState([]);
  useEffect(()=>{
    const ur = "http://localhost:5000/getblogs"
    axios.get(ur).then((response)=>{
      setarr(response.data);
    }).catch((error)=>{
      console.log(error);
    })
    axios.get('http://localhost:5000/getpubl').then((response)=>{
        setuser(response.data.users);
        setnb(response.data.blogs);
    }).catch((error)=>{
          console.log(error);
    })
  },[])
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
              <br/>
              <div class="col-md-4 ff text-center border border-danger p-2 hoverable bg-warning">
                Get Into the World of Technologies and Get the Solutions to Your problems answered by Developers of the world
              </div>
              <br/><br/>
              <div class="col-md-4 d-flex justify-content-center">
                  <a href="/login" class="btn btn-warning w-25 m-2 text-center">Login</a>
                  <a href="/register" class="btn btn-warning w-25 m-2 text-center">Signup</a>
              </div>
          </div>
        <br/>
    </div>
<navbar>
<nav class="navbar navbar-expand-lg bg-light pt-3 pb-3">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-dark" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/search">Search for a Question</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/topusers">Top Users</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/contact">Contact us</a>
        </li>
      </ul>
    </div>
</nav>
</navbar>
  <br/><br/>
  <div class="container mt-5">
      <div class="row">
           <div class="col-md-6">
              <img src="https://th.bing.com/th/id/OIP.pjxg0Tpg4MuGlrPzQEvRlgHaE8?pid=ImgDet&rs=1" class="img-fluid img-responsive rounded" />
              <br/>
           </div>
           <br/>
           <div class="col-md-6 justify-content-center">
                <h2 class="text-dark">Welcome to <span class="text-warning">CODE FRIEND</span></h2><br/>
            <p class="text-justify">Codefriend.com <i class="text-warning"> CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p><br/><br/>
                <a href="/login" class="btn btn-warning align-items-center">Get Involved</a>
           </div>
      </div>
  </div>
  <br/><br/>
  <div class="container mt-5 mb-5">
     <h2 class="text-center">A Small insight of <span class="text-warning">CODEFRIEND</span></h2>
     <br/><br/>
    <div class="row justify-content-center mt-5">
       <div class="col-md-6 text-center">
            <h3>Users Registered</h3>
            <h4><Countup start={0} end={user} duration={3} /></h4>
       </div>
       <div class="col-md-6">
            <h3>Blogs/Problems Posted</h3>
            <h4><Countup start={0} end={nb} duration={3} /></h4>
       </div>
    </div>
  </div>
  <br/>
  <Display data={arr} />
  <br/> <br/><br/>
  <h3 class="text-center">Contact us</h3>
    <br/>
    <div class="container">
        <div class="row justify-content-center m-4">
            <div class="col-md-6 justify-content-center">
              <form action="https://formsubmit.co/yelagandulasaiteja70@gmail.com" method="POST">
                 <input type="text" name="name" class="form-control fc" placeholder="Name" /><br/>
                 <input type="email" name="email" class="form-control fc" placeholder="Email" /><br/>
                 <input type="textarea" name="query" class="form-control tarea fc" placeholder="Query" /><br/>
                 <input type="submit" class="btn btn-warning" value="Send message" />
              </form>
            </div>
        </div>
    </div>
    <br/><br/><br/>
    <footer class="site-footer bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">Codefriend.com<i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="https://saitej34.github.io/saiportfolio.github.io/">Y.SAI TEJA</a>.
            </p>
          </div>
        </div>
      </div>
</footer>

    </div>
  )
}

export default Home
