import React from "react";
import PropTypes from "prop-types";

const Loading = React.memo(
  ({ size = "medium", text = "Loading...", fullScreen = false, variant = "spinner" }) => {
    const sizeClasses = {
      small: "h-4 w-4",
      medium: "h-8 w-8",
      large: "h-12 w-12",
    };

    const SpinnerLoader = () => (
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}
       />
    );

    const DotsLoader = () => (
      <div className="flex space-x-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`bg-blue-600 rounded-full animate-pulse ${
              size === "small" ? "h-2 w-2" : size === "large" ? "h-4 w-4" : "h-3 w-3"
            }`}
            style={{ animationDelay: `${i * 0.2}s` }}
           />
        ))}
      </div>
    );

    const SkeletonLoader = () => (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/2" />
      </div>
    );

    const LoaderComponent = () => {
      switch (variant) {
        case "dots":
          return <DotsLoader />;
        case "skeleton":
          return <SkeletonLoader />;
        default:
          return <SpinnerLoader />;
      }
    };

    const content = (
      <div className="flex flex-col items-center justify-center space-y-2">
        <LoaderComponent />
        {text && variant !== "skeleton" && (
          <p className="text-gray-600 text-sm animate-pulse">{text}</p>
        )}
      </div>
    );

    if (fullScreen) {
      return (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          {content}
        </div>
      );
    }

    return content;
  }
);

Loading.displayName = "Loading";

Loading.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  text: PropTypes.string,
  fullScreen: PropTypes.bool,
  variant: PropTypes.oneOf(["spinner", "dots", "skeleton"]),
};

export default Loading;
