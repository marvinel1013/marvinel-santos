import { firaCodeFont, kumbSansFont } from "@/fonts/font";

interface TitleProps {
  title: string;
  number: string;
  subtitle?: string;
  style?: string;
  lineWidth?: string;
}

const Title: React.FC<TitleProps> = (props) => {
  const { title, number, subtitle, style, lineWidth } = props;
  return (
    <div className={firaCodeFont}>
      <div className="flex items-center">
        <h3 className={`${style} text-primary text-base md:text-lg xl:text-xl`}>
          {number}
        </h3>
        <h1
          className={`${kumbSansFont} text-textSecondary mx-2 font-bold text-xl md:text-2xl xl:text-3xl`}
        >
          {title}
        </h1>
        <div
          className={`${lineWidth} h-[0.5px] w-[45%] md:w-[48%] lg:w-[35%] xl:w-[40%] bg-textPrimary/30 ml-1`}
        />
      </div>
      <h2
        className={`${style} text-primary mt-5 text-xs lg:text-sm lg:font-light`}
      >
        {subtitle}
      </h2>
    </div>
  );
};

export default Title;
