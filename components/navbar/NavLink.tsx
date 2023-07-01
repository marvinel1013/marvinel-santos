import Link from "next/link";
import { NavLinkData } from "@/data/data";
import { firaCodeFont } from "@/fonts/font";
import LinkButton from "../LinkButton";

const NavLink = () => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex items-center gap-7">
        {NavLinkData.map((data) => (
          <li key={data.id}>
            <Link href={data.link}>
              <div className={firaCodeFont}>
                <h2 className="group text-xs xl:text-sm">
                  <span className="text-primary mr-1">{data.number}</span>
                  <span className="text-textSecondary font-light group-hover:text-primary duration-200 ease-in ">
                    {data.title}
                  </span>
                </h2>
              </div>
            </Link>
          </li>
        ))}

        {/* Resume Button */}
        <li>
          <LinkButton
            title="Resume"
            style="text-xs xl:text-sm px-5 py-2"
            href="/marvinel-santos-CV.pdf"
            download
          />
        </li>
      </ul>
    </div>
  );
};

export default NavLink;
