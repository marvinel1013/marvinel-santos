import { firaCodeFont } from "@/fonts/font";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  style?: string;
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, style, onClick } = props;
  return (
    <div className={firaCodeFont}>
      <div className="relative">
        <button
          onClick={onClick}
          className={`${style} bg-slate-900 border rounded border-primary text-primary hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out`}
        >
          {title}
        </button>

        <div className="absolute bg-primary w-full top-0 h-full rounded -z-10" />
      </div>
    </div>
  );
};

export default Button;
