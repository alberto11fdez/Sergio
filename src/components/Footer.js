import React from 'react';
import "../stylesheets/FooterStyle.css";

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='padding-section-footer'>
            <div className='links-footer'>
                <div className='div-links-footer'>
                    <h4>Plantilla</h4>
                    <a href="/delanteros">
                        <p>Delanteros</p>
                    </a>
                    <a href="/medios">
                        <p>Medios</p>
                    </a>
                    <a href="/defensas">
                        <p>Defensas</p>
                    </a>
                </div>
                <div className='div-links-footer'>
                    <h4>Ligas</h4>
                    <a href="/premier">
                        <p>Premier</p>
                    </a>
                    <a href="/laLiga">
                        <p>La Liga</p>
                    </a>
                    <a href="/serieA">
                        <p>Serie A</p>
                    </a>
                </div>
                <div className='div-links-footer'>
                    <h4>Competiciones</h4>
                    <a href="/champions">
                        <p>Champions</p>
                    </a>
                    <a href="/europeLeague">
                        <p>Europe League</p>
                    </a>
                    <a href="/faCup">
                        <p>FA Cup</p>
                    </a>
                </div>
                <div className='div-links-footer'>
                      <h4>Presidente</h4>
                      <a href="/presidente">
                          <p>Pique</p>
                      </a>
                </div>
                <div className='div-links-footer'>
                      <h4>Gobernador</h4>
                      <a href="/gobernador">
                          <p>Lord Just</p>
                      </a>
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
                    <a href='/terminos'><p> Terminos && Condiciones</p></a>
                    <a href='/privacidad'><p> Privacidad</p></a>
                    <a href='/seguridad'><p> Seguridad</p></a>
                    <a href='/coockies'><p> Cookies </p></a>
                </div>
            </div>

        </div>
    </div>
  )
}
export default Footer;