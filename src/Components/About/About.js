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
                    <p style={{ marginTop: "15px" }}>With the growing demands of the economy in the innovative development, the Government of India has launched a mission to create ecosystems that promotes futuristic skills like complex problem solving, critical thinking, adaptive learning and computational skills in children.</p>
                    <p style={{ marginTop: "15px", marginBottom: "50px" }}>In the context of education, the Tinkering Lab refers to space where the youngsters can experiment with, learn, develop and conceptualize different scientific ideas. It is a lot similar to DIY(Do-it-yourself) method where the students are encouraged to apply the knowledge that they have gained in the classroom.</p>
                </div>
                <h1 style={{ textAlign: "initial" }}>Mission</h1>
                <div className="vision-text" style={{ opacity: .6 }}>
                    <div className="line"></div>
                    <p style={{ marginTop: "50px" }}>Tinkering Lab is designed to help and nurture innovation amongst young innovators. The scheme enables students to explore new ideas, test them and follow ‘learning by doing’ approach. Students are introduced to different levels of tinkering, that includes experience design thinking and ideation to develop new perspectives towards social and community problems</p>
                    <p style={{ marginTop: "15px" }}>Young children are offered with opportunities to work with tools and equipment to understand the concepts of STEM (Science, Technology, Engineering and Math).</p>
                    <p style={{ marginTop: "15px", marginBottom: "60px" }}>To stimulate inventiveness among students, Tinkering Lab conducts different activities that range from regional and national level competitions, exhibitions, workshops on problem-solving, designing and fabrication of products, lecture series etc. at periodic intervals.</p>
                </div>
                <div className="team">
                    <h1 style={{ textAlign: "initial" }}>Team</h1>
                    <div className="vision-text">
                        <div className="line"></div>
                        <div className="head" style={{ marginTop: "10px", marginBottom: "10px", opacity: .7 }}>Mangement</div>
                        <div className="row">
                            
                            <MangementProfile name="DR. Bharat Gupta" description="Associate Professor. Electronics & Communication Engg." imgUrl="images/bharatGupta.jpg"/>
                            
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