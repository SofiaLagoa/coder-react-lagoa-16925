import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return ( 
        <>
          <footer className="footer">
            <div class="iconosRedes">
                    <Link className="insta" target="_blank" to="https://www.instagram.com/"><FaInstagram/></Link>
                    <Link className="wsap" target="_blank" to="https://web.whatsapp.com/"><FaWhatsapp/></Link>
            </div>
            <p class="created">Created by Sofia Lagoa</p>
        </footer>
        </>
     );
}
 
export default Footer; 