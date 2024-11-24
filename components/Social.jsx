import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { SiFreelancer } from "react-icons/si";
import Link from "next/link";
const Socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/hossamelsahafy",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hossamelsahafy-4h/",
  },
  {
    icon: <FaSquareUpwork />,
    path: "https://www.upwork.com/freelancers/~019e5731816a6b97d5",
  },
  {
    icon: <SiFreelancer />,
    path: "https://www.freelancer.com/u/Hossamelsahafy54",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
