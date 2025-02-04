import { GrGithub } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

const Footer = (): JSX.Element => {
  //a basic footer
  return (
    <div className="bg-[#101419] text-white w-full p-[19px] flex items-center justify-between">
      <p>Shoppy Globe &#169; &#8482;</p>
      <div className="flex gap-5">
        <a href="https://github.com/dhimansaurabh43" target="_blank">
          <GrGithub className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a
          href="https://www.linkedin.com/in/saurabh-dhiman/"
          target="_blank"
        >
          <IoLogoLinkedin className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
        <a href="https://leetcode.com/u/Saurabhdhiman/" target="_blank">
          <SiLeetcode className="text-xl hover:scale-110 cursor-pointer transition-all duration-200 ease-linear" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
