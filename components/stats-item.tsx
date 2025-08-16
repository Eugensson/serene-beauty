import CountUp from "react-countup";

interface StatsItemProps {
  countNum: number;
  countText: string;
  text: string;
}

export const StatsItem: React.FC<StatsItemProps> = ({
  countNum,
  countText,
  text,
}) => {
  return (
    <div className="font-primary text-center">
      <div className="text-[40px] text-accent mb-4">
        <CountUp end={countNum} delay={2.4} duration={6} />
        <span>{countText}</span>
      </div>
      <p className="text-lg">{text}</p>
    </div>
  );
};
