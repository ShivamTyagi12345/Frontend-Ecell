import React from 'react'
import FooterInfo from './FooterInfo'
import './Footer.css'
import FooterQuote from './FooterQuote'
import FooterLogo from './FooterLogo'

function Footer() {
    return (
        <div className="footer">
            <FooterInfo />
            <FooterLogo />
            <FooterQuote />
        </div>
    )
}

export default Footer
