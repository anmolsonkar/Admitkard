import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="shadow-lg mx-auto w-full text-black h-24">
      <div className=" bg-white shadow-lg lg:p-6 p-3">
        <div className="flex justify-between">
          <h1 className="">Get connected with us on social networks!</h1>
          <div className="flex">
            <h1 className="px-3 text-xl">
              <FaFacebookF />
            </h1>
            <h1 className="px-3 text-xl">
              <FaTwitter />
            </h1>
            <h1 className="px-3 text-xl">
              <FaInstagram />
            </h1>
            <h1 className="px-3 text-2xl">
              <FaYoutube />
            </h1>
            <h1 className="px-3 text-xl">
              <FaLinkedin />
            </h1>
          </div>
        </div>
      </div>
      <div className=" bg-[#FAFAFA]  p-[60px] ">
        <div className="flex justify-around">
          <div>
            <iframe
              title="Admitkard"
              className="w-[350px] h-[250px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.657991823986!2d77.36705923198721!3d28.63232456868415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce42ae4ed73e7%3A0xa7c94e8f463b993!2sAdmitKard!5e0!3m2!1sen!2sin!4v1659558398558!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" bg-white lg:p-4 p-3">
        <div classname="text-black">
          <p class="text-center">Copyright &copy; 2022</p>
          <p class="text-center">
            Designed & Developed By
            <a
              class="hover:underline pl-1"
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
