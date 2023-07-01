interface MenuIconProps {
  isOpen: boolean;
  handleOpen: () => void;
}

const MenuIcon: React.FC<MenuIconProps> = ({ isOpen, handleOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="flex flex-col gap-1.5 cursor-pointer lg:hidden"
    >
      <div
        className={`w-[25px] h-[0.5px] bg-primary duration-300 ease-in-out ${
          isOpen && "rotate-45 translate-y-1"
        } `}
      />
      <div
        className={`w-[25px] h-[0.5px] bg-primary ${isOpen && "opacity-0"}`}
      />
      <div
        className={`w-[25px] h-[0.5px] bg-primary duration-300 ease-in-out ${
          isOpen && "-rotate-45 -translate-y-2"
        }`}
      />
    </div>
  );
};

export default MenuIcon;
