import React from "react";
import './about.css';
import StudentsProfile from "./StudentsProfile";
import MangementProfile from "./MangementProfile";
import Footer from "../Footer/Footer"
const About = (props) => {
    return (
        <div className="vision">
            <img className="img-fluid" src="https://source.unsplash.com/1536x400/?notebook,pen" alt="top-img" />
            <div className="container" style={{ paddingTop: "30px", color: "#393939" }}>
                <h1 style={{ textAlign: "initial" }}>Vision</h1>
                <div className="vision-text" style={{ opacity: .6 }}>
                    <div className="line"></div>
                    <p style={{ marginTop: "50px" }}>Our vision is to make Tinkering Lab the fountainhead of plethora of technological advancements. With a zeal to work on cutting-edge technologies, we aim to provide world-class services to build the most jaw-dropping projects. To move forward on this path, we have all the different machines and equipments which need to be used. This motivates us towards our end goal and we use this self motivation as a weapon to get further in life and convert our dreams into reality. Our end goal is to make Tinkering Lab a source of pride for the nation.</p>
                    <p style={{ marginTop: "15px" }}>With an establishment of Tinkering Lab, the Indian Institute of Technology Roorkee is poised to join a revolution that aims at converting young minds into thinkers and innovators. The mission of Tinkering Lab is not only to strengthen the bond between industry experts and youth but also to strive towards overall development of students, the institute, society, and the country. This can be achieved by creating an ambience which fosters research and innovation that Tinkering Lab provides. The lab is a way to encourage a problem-solving attitude and to enkindle the brightest minds of this country.</p>
                    <p style={{ marginTop: "15px", marginBottom: "50px" }}>In the context of education, the Tinkering Lab refers to space where the youngsters can experiment with, learn, develop and conceptualize different scientific ideas. It is a lot similar to DIY(Do-it-yourself) method where the students are encouraged to apply the knowledge that they have gained in the classroom.</p>
                </div>
                <h1 style={{ textAlign: "initial" }}>Mission</h1>
                <div className="vision-text" style={{ opacity: .6 }}>
                    <div className="line"></div>
                    <p style={{ marginTop: "50px" }}>Our vision is to make Tinkering Lab the fountainhead of plethora of technological advancements. With a zeal to work on cutting-edge technologies, we aim to provide world-class services to build the most jaw-dropping projects. To move forward on this path, we have all the different machines and equipments which need to be used. This motivates us towards our end goal and we use this self motivation as a weapon to get further in life and convert our dreams into reality. Our end goal is to make Tinkering Lab a source of pride for the nation.</p>
                    <p style={{ marginTop: "15px" }}>With an establishment of Tinkering Lab, the Indian Institute of Technology Roorkee is poised to join a revolution that aims at converting young minds into thinkers and innovators. The mission of Tinkering Lab is not only to strengthen the bond between industry experts and youth but also to strive towards overall development of students, the institute, society, and the country. This can be achieved by creating an ambience which fosters research and innovation that Tinkering Lab provides. The lab is a way to encourage a problem-solving attitude and to enkindle the brightest minds of this country.</p>
                    <p style={{ marginTop: "15px", marginBottom: "60px" }}>In the context of education, the Tinkering Lab refers to space where the youngsters can experiment with, learn, develop and conceptualize different scientific ideas. It is a lot similar to DIY(Do-it-yourself) method where the students are encouraged to apply the knowledge that they have gained in the classroom.</p>
                </div>
                <div className="team">
                    <h1 style={{ textAlign: "initial" }}>Team</h1>
                    <div className="vision-text">
                        <div className="line"></div>
                        <div className="head" style={{ marginTop: "10px", marginBottom: "10px", opacity: .7 }}>Mangement</div>
                        <div className="row">
                            <MangementProfile name="DR. Bharat Gupta" description="Some quick example text to build on the card title and make up the bulk of the card's content." imgUrl="images/bharatGupta.jpg"/>
                            
                            <MangementProfile name="Rajan kumar" description="Some quick example text to build on the card title and make up the bulk of the card's content." imgUrl="https://www.w3schools.com/howto/img_avatar.png"/>
                            
                            <MangementProfile name="Rajan kumar" description="Some quick example text to build on the card title and make up the bulk of the card's content." imgUrl="https://www.w3schools.com/howto/img_avatar.png"/>
                            
                            <MangementProfile name="Rajan kumar" description="Some quick example text to build on the card title and make up the bulk of the card's content." imgUrl="https://www.w3schools.com/howto/img_avatar.png"/>
                          
                        </div>
                        <div className="head" style={{ marginTop: "10px", marginBottom: "10px", opacity: .7 }}>Students’ Body</div>
                        <div className="row row-md-2">
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                            
                            <StudentsProfile name="Rajan kumar" imgUrl="https://www.w3schools.com/howto/img_avatar.png" links={{facebook:"\\",linkedinIn:"\\", github:"//",twitter:"\\"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About