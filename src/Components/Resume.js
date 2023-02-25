import React from 'react'

const Resume = ({title, tafter}) => {
  return (
    <section className="resume">
      <div className="container">
      <h2 className="title" dataText={tafter}>
                {title}
            </h2>

          <div className="row">
            <div className="col-6">
              <div className="content mrtop25">
              <span className='year'>2000-2004</span>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit ametLorem ipsum dolor Lorem ipsum dolor sit ametsit dolor sit ametsit amet.</p>
              </div>
            </div>
            <div className="col-6">
            <div className="content mrtop25">
            <span className='year'>2000-2004</span>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ipsum dolor sit ametsit ametametametamet.</p>
              </div>
            </div>
            <div className="col-6">
            <div className="content mrtop25">
            <span className='year'>2000-2004</span>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit aipsum dolor sit ametsit ametmetametamet.</p>
              </div>
            </div>
            <div className="col-6">
            <div className="content mrtop25">
            <span className='year'>2000-2004</span>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit aipsum dolor sit ametsit ametmetamet amet.</p>
              </div>
            </div>
              <div className="col-6">
              <div className="content mrtop25">
              <span className='year'>2000-2004</span>
              <h3>Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sitLorem ipsum dolor sit Lorem ipsum dolor sit amipsum dolor sit ametsit ametetamet amet.</p>
              </div>
              </div>
              <div className="col-6">
              <div className="content mrtop25">
                <span className='year'>2000-2004</span>
              <h3 >Computer Science</h3>
              <p>GNDEC Ludhiana</p>
              <p>Lorem ipsum dolor sit Lorem ipsum dolor sit ametLorem ipsum dolor ipsum dolor sit ametsit ametsit ametamet.</p>
              </div>
              </div>
        </div>

        <div className="row">
          <div className="col-6 skills">
            <h3 className='mrtop25'> My Skills  </h3>
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
          <h3 className='mrtop25 hide'>My Skills</h3>
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
        <button className='Btn Btn--rounded download_btn'>Download CV <i class="fa-sharp fa-solid fa-download"></i></button>
      </div>
     
    </section>
  )
}

export default Resume