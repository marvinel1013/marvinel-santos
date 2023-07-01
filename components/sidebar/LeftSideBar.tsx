import { socialLinks } from "@/data/data";

const LeftSideBar = () => {
  return (
    <aside className="fixed w-36 bottom-0 hidden lg:block">
      <ul className="flex flex-col items-center gap-8">
        {socialLinks.map((data) => (
          <a
            key={data.id}
            title={data.title}
            href={data.link}
            download={data.download}
            target="_blank"
            className="group"
          >
            <li className="text-xl text-textSecondary group-hover:text-primary ease-out duration-300 group-hover:-translate-y-1">
              <data.icon />
            </li>
          </a>
        ))}
        <li className="w-[0.5px] h-[120px] bg-textSecondary" />
      </ul>
    </aside>
  );
};

export default LeftSideBar;
