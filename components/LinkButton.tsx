import { firaCodeFont } from "@/fonts/font";

interface LinkButtonProps {
  style?: string;
  title: string;
  href: string;
  download?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { title, style, href, download } = props;
  return (
    <div className={firaCodeFont}>
      <div className="relative">
        <a href={href} download={download}>
          <div
            className={`${style} bg-slate-900 border rounded border-primary text-primary hover:-translate-x-1 hover:-translate-y-1 duration-300 ease-in-out`}
          >
            {title}
          </div>
        </a>
        <div className="absolute bg-primary w-full top-0 h-full rounded -z-10" />
      </div>
    </div>
  );
};

export default LinkButton;
