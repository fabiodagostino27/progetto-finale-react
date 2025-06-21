import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">&copy; {currentYear} SlowGaming. Tutti i diritti riservati.</p>
            <small className="d-block mt-1">Realizzato con React & Bootstrap</small>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <h5 className="text-uppercase mb-3">Link Utili</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Termini di Servizio</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contattaci</a></li>
            </ul>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <h5 className="text-uppercase mb-3">Seguici</h5>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3 fs-4">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white fs-4">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <hr className="bg-secondary my-4" />
        <p className="text-center mb-0">Grazie per aver visitato il nostro sito!</p>
      </div>
    </footer>
  );
}