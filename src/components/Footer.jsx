import React from 'react'
/* Libraries */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/* Helpers */
import {getCurrentYear} from '../helpers/getCurrentYear'

export const Footer = () => {
  return (
    <footer>
        <div className="footer-nav-container animate__animated animate__fadeInDown">
            <nav className="footer-nav">
                <a className="footer-item">© Saul Castillo | {getCurrentYear()}</a>
                <a className="footer-item" href='https://github.com/secch97' target={"_blank"}>
                    <FontAwesomeIcon className="brand" icon={["fab", "fa-github"]} size="2x"/>
                </a>

            </nav>
        </div>
    </footer>
  )
}
