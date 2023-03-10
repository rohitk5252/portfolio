import React from 'react'

const About = ({title, tafter}) => {
  return (
    <section className='about' id='about'>
        <div className="container">
            <h2 className="title" dataText={tafter}>
                {title}
            </h2>
            <div className="row">
                <div className="col-8">
                        <h5>
                             I'm <span className='color-primary'>Simone Olivia</span> , a Web Developer
                        </h5>
                        <p className='mrtop25'>Ex placeat harum porro suscipit quas explicabo quam a nemo impedit quia neque expedita sint, animi illo deleniti ullam dolorem necessitatibus sequi voluptatibus inventore! Repellat illo, sit quaerat assumenda recusandae expedita exercitationem autem cumque id eveniet rerum laborum? Alias <br /> sint voluptates consequuntur maiores quidem blanditiis architecto deserunt est, neque culpa eius placeat, officia ipsum velit dicta quae facilis perspiciatis omnis exercitationem consequatur iure voluptatibus ipsa quo quisquam. Sit, itaque, cupiditate maxime commodi aliquid hic beatae ipsam nisi consequatur mollitia asperiores ipsum nihil magnam amet obcaecati modi animi perferendis?</p>
                </div>

                <div className="col-4 me">
                        <ul className="list">
                            <li><label >Name: </label><span>Lorem, ipsum.</span></li>
                            <li><label >Email: </label><span>Lorem, ipsum.</span></li>
                            <li><label >Age: </label><span>Lorem, ipsum.</span></li>
                            <li><label >From: </label><span> Ludhiana, Punjab </span></li>
                        </ul>
                        <button className='Btn Btn--primary Btn--rounded Btn--shadow mrtop25 Btn--shadow'>Download CV</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3 card">
                    <h3>10+</h3>
                    <span>Years Experience</span>
                </div>

                <div className="col-3 card">
                    <h3>250+</h3>
                    <span>Happy Clients</span>
                </div>
                <div className="col-3 card">
                    <h3>650+</h3>
                    <span>Projects</span>
                </div>
                <div className="col-3 card">
                    <h3>38</h3>
                    <span>Awards</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About