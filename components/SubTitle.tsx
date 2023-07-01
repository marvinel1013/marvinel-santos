import { firaCodeFont } from "@/fonts/font";

interface SubtitleProps {
  title: string;
  style: string;
}

const SubTitle: React.FC<SubtitleProps> = ({ title, style }) => {
  return (
    <div className={firaCodeFont}>
      <h2 className={`${style} text-primary`}>{title}</h2>
    </div>
  );
};

export default SubTitle;
