import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";

import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="p-7 bg-orange-100 text-gray-900 mt-44">
        <div className="footer  flex justify-around text-base">
          <div>
            <h6 className="font-bold text-base">Social Media</h6>
            <p>Book your trip in minute</p>
            <div className="flex gap-3 hover:cursor-pointer align-middle mt-2">
              <Link
                href="https://www.facebook.com/bytes4future"
                target="_blank"
              >
                <FaFacebook className="w-7   h-7" />
              </Link>

              <Link
                href="https://www.linkedin.com/school/bytes4future/"
                target="_blank"
              >
                <FaLinkedin className="w-7 h-7" />
              </Link>
              <Link
                href="https://www.instagram.com/bytes4future/"
                target="_blank"
              >
                <PiInstagramLogoFill className="w-7 h-7 " />
              </Link>
              <Link
                href="https://www.instagram.com/bytes4future/"
                target="_blank"
              >
                <FaYoutube className="w-7 h-7 " />
              </Link>
            </div>
          </div>

          <div>
            <h6 className="font-bold text-base">Contacts</h6>
            <div className="flex  gap-1">
              <FaLocationDot className="text-orange-400 w-5 h-5 " />
              <Link
                href="https://www.google.com/maps/place/Espa%C3%A7o+LX+Jovem/@38.743551,-9.1216687,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933c66272d5b1:0x7a3e5ef131507e2f!8m2!3d38.743551!4d-9.1190938!16s%2Fg%2F11dz563r0g?entry=ttu"
                target="_blank"
                className="link link-hover"
              >
                Marvila, Lisbon, Portugal
              </Link>
            </div>
            <div className="flex  gap-1">
              <FaPhoneAlt className="text-orange-400 w-5 h-5 " />
              <Link href="tel:+ +351 346 1234" className="link link-hover">
                +351 346 1234
              </Link>
            </div>
            <div className="flex gap-1 	">
              <IoMdMail className="text-orange-400 w-5 h-5 " />
              <a
                href="mailto:wondergo@gmail.com?subject=Questions about the service &Body=Hello WonderGo, I would like to ask about a package!"
                className="link link-hover pb-5 "
              >
                wondergo@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-base ">Services</h6>
            <a className="link link-hover">Terms of Use</a>
            <a className="link link-hover">Provicy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </div>
        </div>
        <aside className="footer footer-center mt-20">
          <p>Copyright © 2024 - All right reserved by WonderGo</p>
        </aside>
      </div>
    </footer>
  );
}
