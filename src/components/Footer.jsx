import { Link } from "react-router-dom"
import AppLayout from "../layout/AppLayout"
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

import { masterCard, creditCard, paypal } from "../assets"

const Footer = () => {
  return (
    <div className="w-full h-auto bg-neutral-950 py-12">
      <AppLayout className="space-y-10">
        {/* Footer Other Content */}
        <div className="w-full grid grid-cols-5 gap-8">
          <div className="col-span-2 space-y-8 md:pr-10 pr-0">
            <div className="space-y-3">
              {/* logo */}
              <Link to="/" className="text-6xl text-primary font-bold">
                Bus
              </Link>
              {/* Some Description */}
              <p className="text-sm text-neutral-500 font-normal  ">
                Bus is all about booking bus tickets online. We provide a
                platform for users to book tickets for their desired destination
                with ease. We offer a wide range of services to make the booking
                process seamless and secure. Our platform is designed to provide
                a hassle-free experience for users to book tickets online. We
                aim to make bus travel more convenient and accessible for
                everyone. Book your tickets with Bus today and enjoy a
                comfortable journey to your destination.
              </p>
            </div>
            {/* Social Links */}
            <div className="w-full flex items-center gap-x-5">
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaInstagram className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaFacebook className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaYoutube className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <FaXTwitter className="w-5 h-5 text-neutral-50" />
              </div>
              <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-primary flex items-center justify-center cursor-pointer ease-in-out duration-500">
                <MdEmail className="w-5 h-5 text-neutral-50" />
              </div>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold ">
              Quick Links
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                About Us
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                My Account
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Reserve Your Ticket
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Create Your Account
              </Link>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold ">
              Top Reserved Routes
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Delhi - Mumbai
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Delhi - Goa
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Goa - Pune
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Pune - Nagpur
              </Link>
            </div>
          </div>
          <div className="col-span-1 space-y-5">
            <h1 className="text-lg text-neutral-100 font-semibold ">
              Support Links
            </h1>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                Help & Support Center
              </Link>
              <Link
                to="/"
                className="block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        {/* Separator */}
        <div className="w-full h-px bg-neutral-800/50" />
        {/* Copyright */}
        <div className="w-full flex items-center justify-between">
          <p className="text-sm text-neutral-600 font-normal">
            Copyright &copy; 2025. All Rights Reserved
          </p>
          <p className="text-sm text-neutral-600 font-normal pr-[5%]">
            Made with 💗 by Rajat Gangwar
          </p>
          <div className="flex items-center gap-x-2">
            <div className="">
              <img
                src={masterCard}
                alt=""
                className="w-fit h-9 object-contain object-center"
              />
            </div>
            <div className="">
              <img
                src={paypal}
                alt=""
                className="w-fit h-9 object-contain object-center"
              />
            </div>
            <div className="">
              <img
                src={creditCard}
                alt=""
                className="w-fit h-9 object-contain object-center"
              />
            </div>
          </div>
        </div>
      </AppLayout>
    </div>
  )
}

export default Footer
