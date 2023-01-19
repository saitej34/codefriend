import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Comps.css'
const Display = ({data}) => {
  const [x,setx] = useState(3);
  const [bod,setbod] = useState('');
  const idb = data.id;

  const views = ()=>{
        setx(x*2);
  }
  return (
    <div class="container pt-4">
        <h3 class="text-center">Recent Blogs on Road</h3>
        <br/>
        <div class="row justify-content-center">
            {data.slice(0,x).map((item) => (
              <div class="col-md-4 border border-dark m-3 shadow-sm p-3 mb-5 bg-white rounded card">
                    <div class="card">
                      <div class="card-header">
                        <img src={item.imglinke} alt="" />
                      </div>
                      <div class="card-body">
                        <span class="tag tag-teal">{item.keywords}</span>
                        <h4>{item.btitle}</h4>
                        <Link to={'/viewblog/' + item._id}>View More</Link>
                        <div class="user">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg" alt="" />
                          <div class="user-info">
                            <h5>{data.userid}</h5>
                            <small></small>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
              ))}
        </div>
        <center><a class="btn btn-warning" onClick={views} >View More</a></center>
    </div>
  )
}

export default Display
