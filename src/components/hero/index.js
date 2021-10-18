import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Box from '../box';



function GroupBox(){
    const text = [
        ["Receba em tempo real todas as necessidades da sua tripulação e engenheiros!" , "Tempor Real" ], ["Todas as mensagens e Feedback's ficam salvos no nosso banco de dados." , "Salvo para sempre" ], ["Todos os tripulantes recebem alertas em tempo real de quando suas ideias são atendidas!" , "Feedback automatico" ]
    ]
    
    const groupText = text.map((item) => 
        <Col className="col-12 col-md-4">
        <Box
            text = {item[0]}
            title = {item[1]}
        />
        </Col>
    )
    
    return groupText;
}

function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="container">
                <Col className="col-12">
                    <p className="hero__cita">
                        &quot;Ground Control to Major Tom&quot;
                    </p>
                </Col>
                <Col className="col-12">
                    <p className="col-12 hero__text">Com a Blue Moon Sua empresa espacial vai coletar todos os feedbacks de seus Astronautas com objetividade e eficiência que nenhum outro serviço oferece, além de estar sempre com seus feedbacks salvos em um lugar seguro. </p>.
                </Col>

                <Row>
                    <GroupBox />
                </Row>


            </div>

        </div>
    )
}

export default Hero;