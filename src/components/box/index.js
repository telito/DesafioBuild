import {React} from 'react'
import {Col} from 'react-bootstrap'

function Box(props) {
    return (
        <Col className="col-12 col-md-4" key={props.key}>
            <div className="card  mb-3 box">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                </div>
            </div>
        </Col>
        
    )
}



export default Box