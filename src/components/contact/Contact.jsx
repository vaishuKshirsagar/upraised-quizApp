import React from "react"
import "./contact.css"

const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30246.88614321975!2d73.8066432!3d18.625331199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1729187283306!5m2!1sen!2sin" 
  return (
    <>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h5>ADDRESS:</h5>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h5>EMAIL:</h5>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h5>PHONE:</h5>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <textarea cols='20' rows='6'>
                Create a message here...
              </textarea>
              <button className='send-btn'>SEND MESSAGE</button>
            </form>
          </div>
          <div className='right row'>
            <iframe src={map} title='currmap'></iframe>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact