import React from 'react'

const Resume = ({title}) => {
  return (
    <section className="resume">
      <div className="container">
      <h2 className="title" dataText={title}>
                {title}
            </h2>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <p className='year'>2000-2004</p>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-12">
            <p className='year'>2000-2004</p>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="col-12">
            <p className='year'>2000-2004</p>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-12">
            <p className='year'>2000-2004</p>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
              <div className="col-12">
              <p className='year'>2000-2004</p>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="col-12">
                <p className='year'>2000-2004</p>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
        </div>

        <div className="row">
          <div className="col-6 skills">
            <h3> h333  </h3>
            <div class="skill_bars" >
              <div class="bars one">
                <p>HTML</p> <span>100%</span>
              </div>
              
              <div class="bars two">
                <p>CSS</p> <span>90%</span> 
              </div>

              <div class="bars three">
              <p>JAVASCRIPT</p> <span>75%</span> 
              </div>
            </div>
            </div>
          
          <div className="col-6 skills">
          <h3>My Skills</h3>
            <div class="skill_bars" >
              <div class="bars one">
                <p>HTML</p> <span>100%</span>
              </div>
              
              <div class="bars two">
                <p>CSS</p> <span>90%</span> 
              </div>

              <div class="bars three">
              <p>JAVASCRIPT</p> <span>75%</span> 
              </div>
            </div>
            </div>
          
        </div> 
        <button className='Btn download_btn'>Download CV</button>
      </div>
    </section>
  )
}

export default Resume