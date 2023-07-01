import LinkButton from "@/components/LinkButton";
import { NavLinkData } from "@/data/data";
import { firaCodeFont } from "@/fonts/font";

interface MobileMenuBarProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const MobileMenuBar: React.FC<MobileMenuBarProps> = ({
  isOpen,
  handleOpen,
}) => {
  return (
    <div
      className={`${
        isOpen
          ? "fixed top-0 right-0 h-full w-[75%] md:w-[45%] bg-secondary duration-500 ease-in -z-40"
          : "fixed top-0 right-[-100%] h-full w-[75%] md:w-[45%] bg-secondary duration-500 ease-in -z-40"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div>
          {NavLinkData.map((data) => (
            <div key={data.id} className="">
              <a
                href={data.link}
                className={`${firaCodeFont} flex flex-col items-center`}
              >
                <span onClick={handleOpen} className="text-primary">
                  {data.number}
                </span>
                <span onClick={handleOpen} className="mb-5">
                  {data.title}
                </span>
              </a>
            </div>
          ))}

          <div className="px-10 mb-5">
            <LinkButton
              title="Resume"
              download={true}
              href="/marvinel-santos-CV.pdf"
              style="text-center px-5 py-2 text-sm"
            />
          </div>

          <a
            className={`${firaCodeFont} text-primary text-sm`}
            href="mailto:1013marvinel@gmail.com"
          >
            1013marvinel@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuBar;
