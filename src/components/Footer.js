import '../styles/styles.scss';
import twitter from '../images/TwitterIcon.png';
import facebook from '../images/FacebookIcon.png';
import instagram from '../images/InstagramIcon.png';
import github from '../images/GitHubIcon.png';

function Footer() {
    return(
        <footer>
            <div className="footer-wrapper">

                <h3>Footer</h3>

                {/* Use if you want social media icons */}
                {/* <a href=""><img src={twitter} alt="" /></a>
                <a href=""><img src={facebook} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={github} alt="" /></a> */}
            </div>
        </footer>
    )
}

export default Footer;