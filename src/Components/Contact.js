import React from 'react'

const Contact = ({title}) => {
  return (
    <section className="contact">
        <div className="container">
        <h2 className="title" dataText={title}>
                {title}
        </h2>

        <div className="row">
            <div className="col-4">
            <h3 className="address">ADDRESS</h3>
            <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.j</p>
            <p><i class="fa-solid fa-phone"></i> {"(+91) 9897657853"}</p>
            <p><i class="fa-solid fa-phone"></i> {"(+91) 667677853"}</p>
            <p><i class="fa-solid fa-envelope"></i> auu@gmail.com</p>
            <h3>FOLLOW ME</h3>
            <div className="socials"><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-google"></i></div>
            </div>
            <div className="col-8">
                <h2>SEND US A NOTE</h2> 
                <form className='contact_form'>
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Tell us more about your needs'></textarea>
                </form>
                <button className='Btn send_message'>Send Message</button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact