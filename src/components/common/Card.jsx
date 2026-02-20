import React from "react";
import PropTypes from "prop-types";

const Card = React.memo(
  ({ children, className = "", hover = false, padding = "medium", shadow = "default" }) => {
    const baseClasses = "bg-white rounded-lg border border-gray-200";

    const hoverClasses = hover ? "hover:shadow-lg transition-shadow duration-200" : "";

    const paddingClasses = {
      none: "",
      small: "p-3",
      medium: "p-6",
      large: "p-8",
    };

    const shadowClasses = {
      none: "shadow-none",
      default: "shadow-sm",
      large: "shadow-lg",
    };

    const classes = [
      baseClasses,
      hoverClasses,
      paddingClasses[padding],
      shadowClasses[shadow],
      className,
    ]
      .join(" ")
      .trim();

    return <div className={classes}>{children}</div>;
  }
);

Card.displayName = "Card";

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(["none", "small", "medium", "large"]),
  shadow: PropTypes.oneOf(["none", "default", "large"]),
};

export default Card;
