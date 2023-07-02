import { socialLinks } from "@/data/data";
import { firaCodeFont } from "@/fonts/font";

const Footer = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-5">
      <ul className="flex items-center gap-5 pb-5 lg:hidden">
        {socialLinks.map((data) => (
          <li key={data.id} className="text-lg">
            <a
              href={data.link}
              title={data.title}
              target="_blank"
              download={data.download}
            >
              <data.icon />
            </a>
          </li>
        ))}
      </ul>
      <h1 className={`${firaCodeFont} text-primary text-xs tracking-tighter`}>
        Designed & Built by Marvinel Santos
      </h1>
      <h2 className="text-xs mt-1">2023 © All Rights Reserved.</h2>
    </div>
  );
};

export default Footer;
