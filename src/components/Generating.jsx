/*
This code defines the Generating component, which represents a message indicating that AI is generating content. 
The component receives props including className (optional styling classes). 
It renders a container with an icon (indicating loading) and a text message. 
Styling is applied using Tailwind CSS utility classes for consistent and responsive design.
*/

import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
