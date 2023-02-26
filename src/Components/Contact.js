import React from 'react'

const Contact = ({title, tafter}) => {
  return (
    <section className="contact grayBg">
        <div className="container">
        <h2 className="title" dataText={title}>
                {tafter}
        </h2>

        <div className="row">
        <div class="col-8 col-mb-12">
          <h3>SEND US A NOTE</h3>
          <form action="" class="contact__form">
            <div class="row">
            <div class="form__group col-6 col-mb-12">
              <input type="text" placeholder='Name' />
            </div>
            <div class="form__group col-6 col-mb-12">
              <input type="email" placeholder='Email'/>
            </div>
            <div class="form__group col-12 col-mb-12">
              <textarea rows="10" placeholder='Tell us more about what you need ....'></textarea>
            </div>
          </div>

          </form>
      <button className='Btn Btn--primary Btn--rounded Btn--shadow mrtop25'>Send Message</button>
        
        </div>
            <div className="col-4 col-mb-12">
            <div className="text_side">
            <h3 className="address">ADDRESS</h3>
            <p>Lorem ipsum dolor sit amet.  Lorem, ipsum dolor. Lorem ipsum dolor sit amet.j</p>
            <p><i class="fa-solid fa-phone"></i> {"(+91) 9897657853"}</p>
            <p><i class="fa-solid fa-phone"></i> {"(+91) 667677853"}</p>
            <p><i class="fa-solid fa-envelope"></i> auu@gmail.com</p>
            <h3>FOLLOW ME</h3>
            <div className="socials"><i class="fa-brands fa-github"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-google"></i></div>
            </div>
            </div>

        </div>
        </div>
    </section>
  )
}

export default Contact