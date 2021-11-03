import React from 'react'
import AchievementsUnit from './Achievements_unit'
import img1 from './Images/inter_iit.jpg'
import Footer from "../Footer/Footer";


const Achievements = () => {
    return (
        <>
            <div className="container p-5">
                <h2>Achievements</h2>
                <hr />

                {/* all acheivements array here  */}
                <div className="row ">
                    <AchievementsUnit img_url={img1} 
                                        achievement_name="Inter IIT Tech Meet 2019"
                                        achievement_description="Tinkering Lab,IIT Roorkee supported 8th edition of Inter IIT Tech meet. Team IITR bagged overall First position. DIC's terrace farming bot challenge was also completed here which won the joint first prize in High. Prep events category."
                                        members = {7}
                                        acheivement_date = "2019-12-23"
                                        />
                    <AchievementsUnit img_url={img1} 
                                        achievement_name="Inter IIT Tech Meet 2019"
                                        achievement_description="Tinkering Lab,IIT Roorkee supported 8th edition of Inter IIT Tech meet. Team IITR bagged overall First position. DIC's terrace farming bot challenge was also completed here which won the joint first prize in High. Prep events category."
                                        members = {7}
                                        acheivement_date = "2019-12-23"
                                        />
                    <AchievementsUnit img_url={img1} 
                                        achievement_name="Inter IIT Tech Meet 2019"
                                        achievement_description="Tinkering Lab,IIT Roorkee supported 8th edition of Inter IIT Tech meet. Team IITR bagged overall First position. DIC's terrace farming bot challenge was also completed here which won the joint first prize in High. Prep events category."
                                        members = {7}
                                        acheivement_date = "2019-12-23"
                                        />
                    <AchievementsUnit img_url={img1} 
                                        achievement_name="Inter IIT Tech Meet 2019"
                                        achievement_description="Tinkering Lab,IIT Roorkee supported 8th edition of Inter IIT Tech meet. Team IITR bagged overall First position. DIC's terrace farming bot challenge was also completed here which won the joint first prize in High. Prep events category."
                                        members = {7}
                                        acheivement_date = "2019-12-23"
                                        />
                 </div>
            </div>
            <Footer/>
        </>
    )
}

export default Achievements
