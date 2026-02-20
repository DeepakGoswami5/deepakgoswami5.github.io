// animatedBg.jsx
import PropTypes from "prop-types";
import { SKILLS } from "../../constant/data";

const FloatingIcon = ({ Icon, style }) => (
  <div
    className="absolute opacity-10"
    style={{
      ...style,
      animation: "floatY 6s ease-in-out infinite alternate",
    }}
  >
    <Icon className="w-10 h-10 text-green-400" />
  </div>
);

FloatingIcon.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  style: PropTypes.object.isRequired,
};

const AnimatedBg = () => {
  // Pick a few random positions (static or dynamic)
  const positions = [
    { top: "15%", left: "10%" },
    { top: "35%", left: "80%" },
    { top: "55%", left: "50%" },
    { top: "75%", left: "20%" },
    { top: "25%", left: "60%" },
    { top: "65%", left: "30%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {positions.map((pos, idx) => {
        const SkillIcon = SKILLS[idx % SKILLS.length].icon;
        return <FloatingIcon key={idx} Icon={SkillIcon} style={pos} />;
      })}
    </div>
  );
};

export default AnimatedBg;
