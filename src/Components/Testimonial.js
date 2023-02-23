import React from 'react'

const Testimonial = ({title}) => {
  return (
    <section className="testimonial">
        <div className="container">
        <h2 className="title" dataText={title}>
                {title}
            </h2>
            <div className="row">
            <div className="col-6">
                <img src="" alt="" />
                <strong>DENNIS Jacques</strong>
                <span>user from USA</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perferendis architecto provident ducimus alias minus corrupti recusandae quibusdam beatae atque.</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            {/* 2s */}
            {/* mac123 */}
            <div className="col-6">
                <img src="" alt="" />
                <strong>DENNIS Jacques</strong>
                <span>user from USA</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aspernatur assumenda dolores suscipit sapiente provident iste. Tempora odio cum omnis?</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial