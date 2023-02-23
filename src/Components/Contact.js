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

            </div>
            <div className="col-8">
                <h2>SEND US A NOTE</h2>
                <form >
                    
                </form>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Contact