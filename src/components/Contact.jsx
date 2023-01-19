import React from 'react'

const Contact = () => {
  return (
    <div>
        <div class="container">
          <br/>
        <h3 class="text-center">Contact us</h3><br/>
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
    </div>
  )
}

export default Contact
