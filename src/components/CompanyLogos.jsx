/*
This code defines the CompanyLogos component, which displays logos of various companies. 
The component receives props including className (optional styling classes). 
It renders a container with a tagline and a list of company logos. 
The logos are dynamically generated using images imported from the constants file. 
The component utilizes flexbox to arrange the logos horizontally with equal spacing. 
Styling is applied using Tailwind CSS utility classes for consistent and responsive design.
*/

import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
