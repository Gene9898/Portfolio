import { GrDocumentPdf } from "react-icons/gr";
import { IoLogoLinkedin, IoLogoGithub, IoMail } from "react-icons/io5";

const NavLinks = () => {
  const logoSize = 30;
  const navLinks = [
    {
      logo: <IoLogoGithub size={logoSize} />,
      link: `https://github.com/Gene9898`,
      name: "GitHub",
    },
    {
      logo: <IoLogoLinkedin size={logoSize} />,
      link: `https://www.linkedin.com/in/eugene-lum-766020130/`,
      name: "LinkedIn",
    },
    {
      logo: <IoMail size={logoSize} />,
      link: `mailto:eugenelumtf@gmail.com`,
      name: "Email",
    },
    {
      logo: <GrDocumentPdf size={logoSize} />,
      link: `resume.pdf`,
      name: "Resume",
    },
  ];
  return (
    <div className="flex mt-auto flex-row items-center gap-6">
      {navLinks.map((navLink) => {
        return (
          <a
            href={navLink.link}
            key={navLink.name}
            title={navLink.name}
            className="text-gray-400 hover:text-white hover:scale-110"
          >
            {navLink.logo}
          </a>
        );
      })}
    </div>
  );
};

export default NavLinks;
