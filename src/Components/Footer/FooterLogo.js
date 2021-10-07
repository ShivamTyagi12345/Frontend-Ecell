import logo from './logo192.png'
import './FooterLogo.css'

function FooterLogo() {
    return (
        <div className="footer-logo">

            <img src={logo} alt="e-cell logo" />
            <img src={logo} alt="e-cell logo" />
            <div className="footer-logo__info">
                <ul>
                    <li>For institution details visit</li>
                    <li><a href="www.ecell-nitp.ac.in" target="_blank">www.ecell-nitp.ac.in</a></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterLogo
