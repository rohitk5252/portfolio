import React from 'react'

const About = ({title}) => {
  return (
    <section className='about'>
        <div className="container">
            <h2 className="title" dataText={title}>
                {title}
            </h2>
            <div className="row">
                <div className="col-8">
                        <h5>
                        I'm <span>Simone Olivia</span> , a Web Developer
                        </h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia esse aspernatur alias, ex placeat harum porro suscipit quas explicabo quam a nemo impedit quia neque expedita sint, animi illo deleniti ullam dolorem necessitatibus sequi voluptatibus inventore! Repellat illo, sit quaerat assumenda recusandae expedita exercitationem autem cumque id eveniet rerum laborum? Alias sint voluptates consequuntur maiores quidem blanditiis architecto deserunt est, neque culpa eius placeat, officia ipsum velit dicta quae facilis perspiciatis omnis exercitationem consequatur iure voluptatibus ipsa quo quisquam. Sit, itaque, cupiditate maxime commodi aliquid hic beatae ipsam nisi consequatur mollitia asperiores ipsum nihil magnam amet obcaecati modi animi perferendis?</p>
                </div>
                <div className="col-4">
                        <ul className="list">
                            <li><label >Name: </label><span>Lorem, ipsum.</span></li>
                            <li><label >Email: </label><span>Lorem, ipsum.</span></li>
                            <li><label >Age: </label><span>Lorem, ipsum.</span></li>
                            <li><label >From: </label><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vel fuga provident voluptatum illum neque, tempore harum dolorum accusantium rerum atque quia vero beatae repellendus adipisci aperiam ipsa. Obcaecati, sapiente.</span></li>
                        </ul>
                        <button className='Btn'>Download CV</button>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <h3>10+</h3>
                    <span>Years OF Experience</span>
                </div>
                <div className="col-3">
                    <h3>250+</h3>
                    <span>Happy Clients</span>
                </div>
                <div className="col-3">
                    <h3>650+</h3>
                    <span>Projects</span>
                </div>
                <div className="col-3">
                    <h3>38</h3>
                    <span>Awards</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About