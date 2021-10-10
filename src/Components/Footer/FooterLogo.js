import logo from './nitp-logo.png'
import './FooterLogo.css'

function FooterLogo() {
    return (
        <div className="footer-logo">

            <img src={logo} alt="e-cell logo" className="footer-logo__component"/>
            {/* <img src={logo} alt="e-cell logo" /> */}
            <div className="footer-logo__info footer-logo__component">
                <ul>
                    <li>For institution details visit</li>
                    <li><a href="www.ecell-nitp.ac.in" target="_blank">www.ecell-nitp.ac.in</a></li>
                </ul>
            </div>
        </div>
    )
}

export default FooterLogo
