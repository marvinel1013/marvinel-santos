import { useShowMobileMenu } from "@/hooks/useOpenMobileMenu";

const MenuIcon: React.FC = () => {
  const openMenu = useShowMobileMenu((value) => value.isOpen);
  const openMenuBar = useShowMobileMenu((value) => value.onOpen);

  return (
    <div
      onClick={openMenuBar}
      className="flex flex-col gap-1.5 cursor-pointer lg:hidden z-50"
    >
      <div
        className={`z-50 w-[25px] h-[0.5px] bg-primary duration-300 ease-in-out ${
          openMenu && "rotate-45 translate-y-1"
        } `}
      />
      <div
        className={`z-50 w-[25px] h-[0.5px] bg-primary ${
          openMenu && "opacity-0"
        }`}
      />
      <div
        className={`z-50 w-[25px] h-[0.5px] bg-primary duration-300 ease-in-out ${
          openMenu && "-rotate-45 -translate-y-2"
        }`}
      />
    </div>
  );
};

export default MenuIcon;
