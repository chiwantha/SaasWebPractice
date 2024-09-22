import { FOOTER_CONTENT } from "../constants";
import { SOCIAL_MEDIA } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 border-t border-neutral-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div className="">
            <div className=" border-b border-neutral-800 mb-3 mt-[-15px]">
              <img src={logo} alt="logo" width={200} />
            </div>
            <p className="text-neutral-500 border-neutral-800 pb-4">
              K-Chord Group delivers innovative software, music, and design
              solutions, helping businesses thrive with creativity and
              technology. #KChordGroup
            </p>
            <div className="flex justify-center rounded-xl gap-8 p-5 mt-1 border border-neutral-800">
              {SOCIAL_MEDIA.icons.map((icon) => (
                <div
                  key={icon.id}
                  className="hover:scale-125 transition-transform"
                >
                  <a
                    href={icon.url}
                    target="_blank"
                    className={`${icon.color ? icon.color : "text-white"}`}
                  >
                    {icon.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {FOOTER_CONTENT.sections.map((section, index) => (
            <div className="" key={index}>
              <h3 className="text-white font-medium mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index} className="">
                    <a
                      href={link.url}
                      className="hover:text-neutral-500 hover:pl-2 transition-transform"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="my-12 border-t border-neutral-800 pt-8 text-center
        text-sm text-neutral-500"
        >
          <div className="flex justify-between">
            <div className="text-xs">
              <p>{FOOTER_CONTENT.platformsText}</p>
            </div>
            <div className="text-xs">
              <p>{FOOTER_CONTENT.copyrightText}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
