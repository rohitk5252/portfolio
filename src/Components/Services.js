import React from 'react'

const Services = ({title, tafter}) => {
  return (
    <section className="services grayBg" id='services'>
        <div className="container">
        <h2 className="title" dataText={tafter}>
                {title}
        </h2>
        <div className="row">
            <div className="col-6 serviceBox mrtop25">
                    <div className="img Btn--shadow"><i class="fa-solid fa-palette"></i></div>
                    <div className="content">
                    <h3 className='pdbtm15'>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.adipisicing elit. Voluptatum, eaque?</p>
                    </div>
            </div>
            <div className="col-6 serviceBox mrtop25">
                    <div className="img Btn--shadow"><i class="fa-sharp fa-solid fa-desktop"></i></div>
                    <div className="content">
                    <h3 className='pdbtm15'>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet.tur adipisicing elit. Voluptatum, eaque?</p>
                    </div>
            </div>
            <div className="col-6 serviceBox mrtop25">
                    <div className="img Btn--shadow"><i class="fa-solid fa-pen-ruler"></i></div>
                    <div className="content">
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.adipisicing elit. Voluptatum, eaque?</p>
                    </div>
            </div>
            <div className="col-6 serviceBox mrtop25">
                    <div className="img Btn--shadow"><i class="fa-solid fa-paintbrush"></i></div>
                    <div className="content">
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Voluptatum, eaque?</p>
                    </div>

            </div>
            <div className="col-6 serviceBox mrtop25">
                    <div className="img Btn--shadow"><i class="fa-sharp fa-solid fa-briefcase"></i></div>
                    <div className="content">
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.adipisicing elit. Voluptatum, eaque?</p>
                    </div>
                    
            </div>
            <div className="col-6 serviceBox mrtop25">
                    <div className="img Btn--shadow"><i class="fa-solid fa-bullhorn"></i></div>
                    <div className="content">
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.adipisicing elit. Voluptatum, eaque?</p>
                    </div>  
                </div>
        </div>
        </div>
    </section>
  )
}

export default Services