import React from 'react'

function Box(props) {
    return (
        <>
            <div className="card  mb-3 box" >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </>
    )
}



export default Box