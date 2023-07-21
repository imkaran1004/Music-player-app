import { iconExists } from "@iconify/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const IconText = ({
  className,
  iconName,
  displayText,
  active,
  targetLink,
  onClick,
}) => {
  return (
    <div className={className}>
      <Link to={targetLink} className="block">
        <div
          className="flex items-center justify-start cursor-pointer"
          onClick={onClick}
        >
          <div className="px-5 py-2">
            <Icon
              icon={iconName}
              color={active ? "white" : "gray"}
              fontSize={30}
            />
          </div>
          <div
            className={`${
              active ? "text-white" : "text-gray-400"
            } text-sm font-semibold hover:text-white`}
          >
            {displayText}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default IconText;
