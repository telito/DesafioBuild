import React from 'react'

function Contact(){
    return(
        <section id="contact" className="contact section-bg py-4">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Entre em Contato!</h2>
          <p>Aguardamos Ansiosamente o seu contato, esteja livre para escolher em qual plataforma nos encontrar.</p>
        </div>

        <div className="row">

          <div className="col-lg-6">

            <div className="row my-auto">
              <div className="col-md-12">
                <div className="info-box" data-aos="fade-up">
                  
                  <h3>Nosso Endereço</h3>
                  <p>Servidão José Miranda, Canasvieiras, Florianópolis</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                  
                  <h3>Mande Email</h3>
                  <p>adrieltelito@gmail.com<br />adrieltelito@outlook.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                 
                  <h3>Whatsapp ou ligações</h3>
                  <p>(53) 9 9932-1846 <br /> (53) 3232-3316</p>
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <form action="#" method="post" role="form" className="php-email-form w-100" data-aos="fade-up">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Seu nome" required />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Seu Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Assunto" required />
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Mensagem" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Enviar Email</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Contact;