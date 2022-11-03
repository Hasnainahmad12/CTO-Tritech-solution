import React from 'react'
import "../Styles/About.css"
import nasir from "../Images/me.jpg";
import Fade from "react-reveal/Fade";
import resume from "../Images/resume.pdf"

const About = () => {
  return (
          <div id='about' className='owner__main'>
            <Fade left>
            <div className='owner__message'>
              <h2 className='text-3xl pt-4'>About Me</h2>
            <p className='font-semibold tracking-wider pt-7 p-8'>This is Muhammad Nasir a Software Engineer with professional expertise in field of Flutter Mobile Applications for both Android and iOS. I have been working as a freelance service provider for past 3 years now and I have more than 40 projects so far. My existing project expertise includes Dating Apps, Social Media Apps, Quran App/Reading App, e-Commerce App, Journaling App, Fitness Application and admin panel in website. I have also been certified professional Flutter Developer by Google itself along with London App Brewery Co. I can literally handle any kind of mobile application/website that you throw at me.</p><br/>
            <h2 className='owner__heading'>Muhammad Nasir</h2><br/>
           
           <div className='flex flex-wrap gap-5 pt-8'>
            <div>
            <button className="button1">HIRE ME</button>
            </div>
            <div>
            <button className="button2"><a href={resume} >RESUME</a></button>
            </div>
           </div>
          {/* <h2 className='owner__heading'>BS-Information Technology (AUP Peshawar)</h2><br/> */}
           </div>            
            </Fade>

            <div className='left__side'>
              <Fade right>
                <img src={nasir} className='h-[535px] w-[620px]' alt='' />
              </Fade>
            </div>

        </div>
  )
}

export default About