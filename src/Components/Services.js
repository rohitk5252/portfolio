import React from 'react'

const Services = ({title}) => {
  return (
    <section className="services">
        <div className="container">
        <h2 className="title" dataText={title}>
                {title}
            </h2>
        <div className="row">
            <div className="col-6">
                <div className="serviceBox">
                    <div className="img"></div>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque?</p>
                </div>
            </div>
            <div className="col-6">
            <div className="serviceBox">
                    <div className="img"></div>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque?</p>
                </div>
            </div>
            <div className="col-6">
            <div className="serviceBox">
                    <div className="img"></div>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque?</p>
                </div>
            </div>
            <div className="col-6">
            <div className="serviceBox">
                    <div className="img"></div>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque?</p>
                </div>
            </div>
            <div className="col-6">
            <div className="serviceBox">
                    <div className="img"></div>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque?</p>
                </div>
            </div>
            <div className="col-6">
            <div className="serviceBox">
                    <div className="img"></div>
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, eaque?</p>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Services