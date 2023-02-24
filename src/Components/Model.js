import React from 'react'

const Model = () => {
  return (
    <div>
        <button className='btn Btn'>Click Here</button>
        <div className="modal">
            <div className="modal__content">
                <div className="modal__header">
                    <h4 className="modal__title">Modal Title</h4>
                </div>
                <div className="modal__body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta unde non praesentium voluptate vero at. Id magni voluptatum temporibus veniam?</div>
                <div className="modal__footer">
                    <button className="btn Btn btn-primary">Save</button>
                    <button className="btn Btn btn-close">Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Model