import React from 'react'

const Testimonial = ({title, tafter}) => {
  return (
    <section className="testimonial" id='testimonials'>
        <div className="container">
        <h2 className="title" dataText={tafter}>
                {title}
            </h2>
            <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="img_text">
                <img src="https://cdn.theorg.com/286da596-06d2-4289-8768-8aa77959ce88_medium.jpg" alt="" />
                <div className="text_content">
                  <strong>DENNIS Jacques</strong>
                  <span>user from USA</span>
                </div>
            </div>

                <p className='mrtop25 mrbtm25'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur assumenda dolores suscipit sapiente provident iste. Tempora odio cum omnis?"</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            </div>

            {/* 2s */}
            {/* mac123 */}
            <div className="col-6">
              <div className="card">
                <div className="img_text">
                <img src="https://cdn.theorg.com/286da596-06d2-4289-8768-8aa77959ce88_medium.jpg" alt="" />
                <div className="text_content">
                  <strong>DENNIS Jacques</strong>
                  <span>user from USA</span>
                </div>
            </div>

                <p className='mrtop25 mrbtm25'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur assumenda dolores suscipit sapiente provident iste. Tempora odio cum omnis?"</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            </div>
            </div>
            <div className="input mrtop10"><input type="radio" name='seleted'/><input type="radio" name="seleted"/></div>
        </div>
    </section>
  )
}

export default Testimonial