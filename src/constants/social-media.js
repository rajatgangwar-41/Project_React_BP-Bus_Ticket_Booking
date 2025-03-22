import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

const socialMedia = [
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    id: "facebook",
    title: "Facebook",
    url: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    id: "youtube",
    title: "Youtube",
    url: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    id: "twitter",
    title: "Twitter",
    url: "https://www.x.com/",
    icon: FaXTwitter,
  },
  {
    id: "gmail",
    title: "Gmail",
    url: "mailto:support@busbooking.com",
    icon: MdEmail,
  },
]

export default socialMedia
