import './FooterInfo.css'

function FooterInfo() {
    return (
        <div className="Footer_info">
            <div className="Footer_info_list">
                <h3>Follow</h3>
                <ul>
                    <li><a href="www.google.com" target="_blank">Facebook</a></li>
                    <li><a href="www.google.com" target="_blank">LinkedIn</a></li>
                </ul>
            </div>

            <div className="Footer_info_list">
                <h3>Projects</h3>
                <ul>
                    <li><a href="www.google.com" target="_blank">Ongoing</a></li>
                    <li><a href="www.google.com" target="_blank">Completed</a></li>
                </ul>
            </div>

            <div className="Footer_info_list">
                <h3>Help</h3>
                <ul>
                    <li><a href="www.google.com" target="_blank">Contact Us</a></li>
                </ul>
            </div>

            <div className="Footer_info_list">
                <h3>Visit</h3>
                <ul>
                    <li>Tinkering laboratory, Hafiz Mohd.Ibrahim Building, Opposite Security office, Indian Institute of Technology Roorkee, Roorkee, Haridwar district, Uttarakhand, IndiaPIN - 247667
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterInfo
