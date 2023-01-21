import axios from 'axios'
import React,{useState} from 'react'
import { useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import CountUp from 'react-countup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Comp.css'
import Display from './Display'
import imuser from './user.png'
import Avatar from '@mui/material/Avatar';

const DashBoard = () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
  });
  const idss = new Array();
  const arrs = new Array();
  const keys = new Array();
  const [img,setimg] = useState('');
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [profile,setprofile] = useState('');
  const [coll,setcoll]=useState('');
  const [link,setlink] = useState('');
  const [bio,setbio] = useState('');
  const [user,setuser] = useState('');
  const [arr,setarr] = useState([]);
  const [nb,setnb] = useState('')
  const navigate = useNavigate();
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const log = (e)=>{
      localStorage.removeItem('token')
      navigate('/')
  }
  const subdetails = (e)=>{
       axios.put('http://localhost:5000/editprofile',{
            name:user,
            email:email,
            profilepic:profile,
            college:coll,
            sbio:bio,
            linkdeinprofile:link

       },{
        headers: {
        'token':localStorage.getItem('token')
        }
    }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
       handleClose();
  }
  useEffect(()=>{
    if(!localStorage.getItem('token'))
    {
          navigate('/login')
    }
    const token = localStorage.getItem('token')
    const url = "http://localhost:5000/decode/"+token;
    axios.get(url).then((response)=>{
          console.log(response.data.name);
          setemail(response.data.email);
          setuser(response.data.name);
          setimg(response.data.profilepic);
    }).catch((error)=>{
      console.log(error);
    })
    const ur = "http://localhost:5000/getp/"+token;
    axios.get(ur).then((response)=>{
      console.log(response)
      console.log(response.data[0].btitle)
      setarr(response.data);
      setnb(response.data[0].length);
      const df = response.data;
      for(var i=0;i<df.length;i++)
      {
          idss.push(response.data[i]._id);
          arrs.push(response.data[i].btitle);
          keys.push(response.data[i].keywords);
      }
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={user}
                onChange={(e)=>{setname(e.target.value)}}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Profile Picture Url</Form.Label>
                      <Form.Control
                        type="url"
                        onChange={(e)=>{setprofile(e.target.value)}}
                      />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e)=>{setemail(e.target.value)}}
                        required
                      />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>College Name</Form.Label>
                      <Form.Control
                        type="text"
                        onChange={(e)=>{setcoll(e.target.value)}}
                      />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Linkedin Url</Form.Label>
                      <Form.Control
                        type="url"
                        onChange={(e)=>{setlink(e.target.value)}}
                      />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Short Bio</Form.Label>
              <Form.Control as="textarea" rows={2} onChange={(e)=>{setbio(e.target.value)}}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-warning" onClick={handleClose}>
            Exit
          </Button>
          <Button variant="warning" onClick={subdetails}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
         <div class="container-fluid bg-dark text-center">
          <br/>
          <div class="row d-flex justify-content-around text-center">
              <div class="col-md-4 text-center">
              <a class="navbar-brand q text-warning text-center" href="#">
                    CODE FRIEND
                </a>
                <br/>
              </div>
              <br/><br/>
              <div class="col-md-4 d-flex justify-content-center">
              <Avatar
                alt="https://www.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-no-1153673752"
                src={img}
                sx={{ width: 56, height: 56, marginRight: 20 }}
              />
                  <a class="btn btn-warning text-center" onClick={log}>Logout</a>
              </div>
          </div>
        <br/>
    </div>
    <br/><br/>
    <div class="container">
        <div class="row justify-content-center align-items-center">
           <div class="col-md-3">
                <a href="/postblog" class="btn btn-dark-warning">Post an Blog</a>
           </div>
           <div class="col-md-3">
                <a href="#" class="btn btn-dark-warning" onClick={handleShow}>Edit Profile</a>
           </div>
           <div class="col-md-3">
                <a href="#" class="btn btn-dark-warning">Top Feed</a>
           </div>
           <div class="col-md-3">
                <a href="#" class="btn btn-dark-warning">Bloggers near me</a>
           </div>
        </div>
    </div>
    <br/><br/><br/>
    <div class="container">
        <div class="row">
             <div class="col-md-6">
                 <h2 align="center">Welcome <span class="text-warning">{user}</span>,</h2>
             </div>
        </div>
    </div>
    <br/><br/>
    <div class="container">
          <div class="row">
            <div class="col-md-4">
                <img src={img} class="img-responsive img-fluid" height="150px"/>
            </div>
          </div>
    </div><br/><br/>
    <div class="container text-center align-items-center mb-5">
        <h3 class="text-center mb-5">Info of our <span class="text-warning">PROFILE</span></h3>
        <div class="row">
           <div class="col-md-4">
                <h4>Total Errors Solved</h4>
                <h5><CountUp
                      start={0}
                      end={nb}
                      duration={5}/>  </h5>
           </div><br/>
           <div class="col-md-4">
                <h4>Total Likes</h4>
                <h5><CountUp
                      start={0}
                      end={100}
                      duration={5}/>  </h5>
           </div><br/>
           <div class="col-md-4">
                 <h4>Rating</h4>
                 <h5><CountUp
                      start={0}
                      end={4.5}
                      duration={5}/>  </h5>
           </div><br/>
        </div>
    </div><br/><br/>
    <div class="container pt-5 pb-5 pl-5 bg-dark">
        <div class="row">
          <div class="col-md-8 text-center">
               <h2 class="text-white">Every Problem Error has a <span class="text-warning">Solution</span>!</h2><br/>
               <h3 class="text-white">Let's <span class="text-warning">Solve</span>Your Problems</h3>
          </div>
          <div class="col-md-4">
              <a href="#" class="btn btn-outline-warning align-items-center">Watch Today's Top Feed</a>
          </div>
        </div>
    </div>
    <br/>
    {arr.length>0 ? <Display data={arr}/> : null}
    </div>
  )
}

export default DashBoard
