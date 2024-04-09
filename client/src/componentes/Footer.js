import React from 'react';
import "../stylesheets/FooterStyle.css";
import {Link} from 'react-router-dom';

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='padding-section-footer'>
            <div className='links-footer'>
                <div className='div-links-footer'>
                    <h4>Recurso Utilizados</h4>
                    <Link to="https://react.dev/"><p>React</p></Link>
                    <Link to="https://mui.com/"><p>Miu</p></Link>
                    <Link to="https://nodejs.org/en"><p>Node && Express</p></Link>
                    <Link to="https://www.mongodb.com/"><p>Mongo Db</p></Link>
                </div>
                <div className='div-links-footer'>
                    <h4>Antecedentes</h4>
                    <Link to="https://www.ebay.es/"><p>Ebay</p></Link>
                    <Link to="https://www.copart.es/Content/es/es-ES/landing-page/what-is-copart-spain?gad_source=1&gclid=Cj0KCQjwztOwBhD7ARIsAPDKnkBLw2yvOUzZou-pP2VZhugR8gaQ2HhkJlIJ7UmhnDbjA7U50kwUUSwaAsDjEALw_wcB"><p>Copart</p></Link>
                    <Link to="https://www.bid4assets.com/"><p>Bid4Assets</p></Link>
                </div>
                <div className='div-links-footer'>
                      <h4>Universidad</h4>
                      <a href="/">
                          <p>Universidad De Córdoba</p>
                      </a>
                </div>
                <div className='div-links-footer'>
                      <h4>Asignatura</h4>
                      <Link to="https://www.uco.es/eguiado/guias/2023-24/101409es_2023-24.pdf"><p>Ingeniería Web</p></Link>
                </div>
            </div>

            <hr></hr>

            <div className='bellow-footer'>
                <div className='copyright-footer'>
                   <p>
                      @{new Date().getFullYear()} CodeInn. All right reserved
                   </p>
                </div>
                <div className='links-bellow-footer'>
                    <a href='/'><p> Terminos && Condiciones</p></a>
                    <a href='/'><p> Privacidad</p></a>
                    <a href='/'><p> Seguridad</p></a>
                    <a href='/'><p> Cookies </p></a>
                </div>
            </div>

        </div>
    </div>
  )
}
export default Footer;