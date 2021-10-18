import React from 'react'

function Contact(){
    return(
        <section id="contact" class="contact section-bg py-4">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Entre em Contato!</h2>
          <p>Aguardamos Ansiosamente o seu contato, esteja livre para escolher em qual plataforma nos encontrar.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">

            <div class="row my-auto">
              <div class="col-md-12">
                <div class="info-box" data-aos="fade-up">
                  
                  <h3>Nosso Endereço</h3>
                  <p>Servidão José Miranda, Canasvieiras, Florianópolis</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                  
                  <h3>Mande Email</h3>
                  <p>adrieltelito@gmail.com<br />adrieltelito@outlook.com</p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="info-box mt-4" data-aos="fade-up" data-aos-delay="100">
                 
                  <h3>Whatsapp ou ligações</h3>
                  <p>(53) 9 9932-1846 <br /> (53) 3232-3316</p>
                </div>
              </div>
            </div>

          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <form action="#" method="post" role="form" class="php-email-form w-100" data-aos="fade-up">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Seu nome" required />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Seu Email" required />
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Assunto" required />
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Mensagem" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Enviar Email</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Contact;