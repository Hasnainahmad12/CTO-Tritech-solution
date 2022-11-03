import React from "react";
import {} from "react-icons/fa";
// import { SocialIcon } from "react-social-icons";
import {FaSkype, FaWhatsapp, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-slate-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-bold text-blueGray-700">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600 ">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-4 lg:mb-0 mb-6 flex flex-wrap">

                <a href="https://join.skype.com/invite/F31gE311XpTj">
                <FaSkype className="h-[40px] w-[50px] text-blue-800 hover:cursor-pointer"/>
                {/* <SocialIcon url="https://Instagram.com/hasnain_bangash_01" /> */}
                </a>
                
                &nbsp;
                <a href="https://www.linkedin.com/in/muhammad-nasir-970926177">
                <FaWhatsapp className="h-[40px] w-[50px] text-green-800 hover:cursor-pointer"/>
                </a>
                {/* <SocialIcon url="https://whatsapp.com/" /> */}

                &nbsp;
                <a href="https://github.com/MuhammadNasir44">
                <FaGithub className="h-[40px] w-[50px] hover:cursor-pointer"/>
                </a>

                &nbsp;
                <FaLinkedin className="h-[40px] w-[50px] text-blue-700 hover:cursor-pointer"/>

              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase  text-blueGray-500 text-sm font-bold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>About Us</li>
                    <li>Projects</li>
                    <li>Github</li>
                    {/* <li>Free Products</li> */}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-bold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>MIT License</li>
                    <li>Terms &amp; Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-bold py-1">
                Software Engineer &amp; Flutter Expert{" "}
                <span id="get-current-year">
                  <tr />
                  Muhammad Nasir
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;