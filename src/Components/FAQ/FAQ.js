import "./styles.css";
import Footer from "../Footer/Footer";
const FAQ = () => {
  return (
    <div className="FAQ">
      <div className="faq_intro">
        <div className="faq_alignitem">
          <p id="faq_intro_head">INNOVATE. INSPIRE. TINKER. </p>
          <p style={{ marginTop: "10px" }}> <marquee id="faq_intro_head2" direction="right" height="100px">TIMING : 10 AM - 11 PM,   MONDAY - SATURDAY</marquee></p>
        </div>
      </div>
      <div className="faq_Facilities">
        <span className="faq_heading">
          <h3>FAQ</h3>
        </span>


        <br></br>

        <hr />
     
      <div className="basic-grid">
        <div className="card">
          <div className="question">
            Who all can access the lab?
          </div>
          <div className="answer">
            The lab is present to cater need of students and professors of IIT Roorkee. Any member of IIT Roorkee can access the lab for the projects after the biometric registration .
          </div>
        </div>
        <div className="card">
          <div className="question">
            Can I use the lab for personal use?
          </div>
          <div className="answer">
            If your personal use is a personal project you are most welcome. Tinkering Lab doesn’t appreciate any kind of misuse of the Lab and its facilities to cater personnel needs.
          </div>
        </div>
        <div className="card">
          <div className="question">
            What procedure do I need to follow to access the Lab’s Facilities?
          </div>
          <div className="answer">
            Students’ have to first register on the Tinkering Lab portal, then they have to login for filing a request which requires the information of the project.
          </div>
        </div>
        <div className="card">
          <div className="question">
            I don’t know how to use the machines so who will help me to use them?
          </div>
          <div className="answer">
            The lab officials and students’ body are meant to guide the students in their projects. They are always available for the help. Also, over a period of time, you will develop the skills of using these machines.
          </div>
        </div>
        <div className="card">
          <div className="question">
            Who all can access the lab?
          </div>
          <div className="answer">
            The lab is present to cater need of students and professors of IIT Roorkee. Any member of IIT Roorkee can access the lab for the projects after the biometric registration .
          </div>
        </div>
        <div className="card">
          <div className="question">
            Are there any prerequisites for working in the lab?
          </div>
          <div className="answer">
            No, there are no such prerequisites for working in the lab but we appreciate if you come in formals to keep yourself safe from any kind of mishappening in the lab.
          </div>
        </div>
        <div className="card">
          <div className="question">
            Whom can I contact for further queries?
          </div>
          <div className="answer">
            Tinkering Lab is always present at your service. For further queries, click here
          </div>
        </div>
        <div className="card">
          <div className="question">
            What are the timings for the lab?
          </div>
          <div className="answer">
            The Lab timings are from 11 am – 7 pm from Monday to Friday. Currently, the lab is operational for 5 days a week.
          </div>
        </div>


      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default FAQ
