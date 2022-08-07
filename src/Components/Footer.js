import React from "react";
import {
  FaGlobeAsia,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="shadow-lg mx-auto w-full text-black">
      <div className=" bg-white shadow-lg lg:p-4 p-3">
        <div className="lg:flex lg:justify-between  content-center grid lg:grid-cols-4 md:grid-cols-2 ">
          <div className="flex  justify-center my-auto">
            <h1 className="flex pr-2 text-xl">
              <FaGlobeAsia />
            </h1>
            <h1 className="font-bold">
              Get connected with us on social networks!
            </h1>
          </div>
          <div className="flex justify-center py-3 my-auto">
            <h1 className="px-3 text-xl">
              <a href="https://www.facebook.com/AdmitKard/" target="blank">
                <FaFacebookF />
              </a>
            </h1>
            <a href="https://twitter.com/admitkard/" target="blank">
              <h1 className="px-3 text-xl">
                <FaTwitter />
              </h1>
            </a>
            <a href="https://www.instagram.com/admitkard/?hl=en" target="blank">
              <h1 className="px-3 text-xl">
                <FaInstagram />
              </h1>
            </a>

            <a href="https://www.youtube.com/c/Admitkard" target="blank">
              <h1 className="px-3 -mt-1 text-2xl">
                <FaYoutube />
              </h1>
            </a>
            <a
              href="https://www.linkedin.com/company/admitkard/"
              target="blank"
            >
              <h1 className="px-3 text-xl">
                <FaLinkedin />
              </h1>
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-[#F3F2EF] lg:flex lg:justify-between p-[40px] -mb-8 ">
        <div className="mx-auto md:justify-center">
          <h1 className="font-bold lg:py-0 py-1 text-center">MEET US HERE!</h1>
          <iframe
            className="w-full h-[88%] lg:py-0 py-2"
            title="Admitkard"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.657991823986!2d77.36705923198721!3d28.63232456868415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce42ae4ed73e7%3A0xa7c94e8f463b993!2sAdmitKard!5e0!3m2!1sen!2sin!4v1659558398558!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="grid content-around lg:grid-cols-6 w-full md:grid-cols-2">
          <div>
            <h1 className="font-bold py-1 pt-3 md:pt-1 lg:pt-1 text-center">
              AdmitKard Platform
            </h1>
            <ul>
              <li className="py-1 text-center">Free Profile Evaluation</li>
              <li className="py-1 text-center">Connect with Mentors</li>
              <li className="py-1 text-center">Become a mentor</li>
              <li className="py-1 text-center">Blog</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold py-1 pt-3 md:pt-1 lg:pt-1 text-center">
              Top Countries
            </h1>
            <ul>
              <li className="py-1 text-center"> USA</li>
              <li className="py-1 text-center">Australia</li>
              <li className="py-1 text-center">Canada</li>
              <li className="py-1 text-center">UK</li>
              <li className="py-1 text-center">New Zealand</li>
              <li className="py-1 text-center">Singapore</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold py-1 pt-3 lg:pt-1 text-center">
              Top Exams
            </h1>
            <ul>
              <li className="py-1 text-center">SAT</li>
              <li className="py-1 text-center">GRE</li>
              <li className="py-1 text-center">PTE</li>
              <li className="py-1 text-center">TOEFL</li>
              <li className="py-1 text-center">GMAT</li>
              <li className="py-1 text-center">IELTS</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold py-1 pt-3 lg:pt-1 text-center">
              Top Degrees
            </h1>
            <ul>
              <li className="py-1 text-center">MBA</li>
              <li className="py-1 text-center">B.Tech</li>
              <li className="py-1 text-center">MCA</li>
              <li className="py-1 text-center">BCA</li>
              <li className="py-1 text-center">MA</li>
              <li className="py-1 text-center">BA</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold py-1 pt-3 lg:pt-1 text-center">
              Top Departments
            </h1>
            <ul>
              <li className="py-1 text-center">Mechanical Engineering</li>
              <li className="py-1 text-center">Civil Engineering</li>
              <li className="py-1 text-center">Architecture</li>
              <li className="py-1 text-center">Event Management</li>
              <li className="py-1 text-center">Business Administration</li>
              <li className="py-1 text-center"> Data & Analytics</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold py-1 pt-3 lg:pt-1 text-center">
              Top Streams
            </h1>
            <ul>
              <li className="py-1 text-center">Engineering</li>
              <li className="py-1 text-center"> Business & Mgmt.</li>
              <li className="py-1 text-center">Computer Science & IT</li>
              <li className="py-1 text-center"> Law</li>
              <li className="py-1 text-center"> Science</li>
              <li className="py-1 text-center">Fine Arts</li>
            </ul>
          </div>
        </div>

        {/* <div className="flex">
          <ul className="list-disc">
            <li className="lg:pr-10 text-center">About AdmitKard</li>
            <li className="lg:pr-10 text-center">
              Our Success Stories
            </li>
            <li className="lg:pr-10 text-center">Pay Now </li>
            <li className="lg:pr-10 text-center">Contact Us</li>
            <li className="lg:pr-10 text-center">Privacy</li>
            <li className="lg:pr-10 text-center">Terms & Conditions</li>
            <li className="lg:pr-10 text-center">
              Product Pricing & Description
            </li>
            <li className="lg:pr-10 text-center">
              Shipping, Refund & Return Policy
            </li>
            <li className="lg:pr-10 text-center">
              GDPR & Cookies Policy
            </li>
          </ul>
        </div> */}
      </div>
      <div className=" bg-white lg:p-4 p-3">
        <div className="text-black">
          <p className="text-center">Copyright &copy; 2022</p>
          <p className="text-center">
            Designed & Developed By
            <a
              className="hover:underline pl-1"
              target="blank"
              href="https://www.linkedin.com/in/anmol-sonkar"
            >
              Anmol Sonkar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
