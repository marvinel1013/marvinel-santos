import { useShowMobileMenu } from "@/hooks/useOpenMobileMenu";
import MenuIcon from "./MenuIcon";
import LinkButton from "../LinkButton";
import { firaCodeFont } from "@/fonts/font";
import { NavLinkData } from "@/data/data";

const MobileMenuBar = () => {
  const openMenu = useShowMobileMenu((value) => value.isOpen);
  const handleOpen = useShowMobileMenu((value) => value.onOpen);

  return (
    <div
      className={
        openMenu
          ? "fixed bg-secondary right-0 top-0 bottom-0 left-[25%] md:left-[50%] duration-300 ease-in z-40"
          : "fixed bg-secondary right-0 top-0 bottom-0 left-[200%] duration-300 ease-in z-40"
      }
    >
      <div className="px-4 py-7">
        <div className="w-full flex justify-end">
          <MenuIcon />
        </div>
        <div className="flex items-center justify-center mt-20 w-full h-full">
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
    </div>
  );
};

export default MobileMenuBar;
