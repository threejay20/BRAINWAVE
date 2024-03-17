// This imports an SVG component representing brackets from the assets folder.
// The TagLine component renders a styled tagline with left and right brackets,
// wrapping around the provided children elements.

import brackets from "../assets/svg/Brackets";

const TagLine = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
