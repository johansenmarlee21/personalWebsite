import React, { RefObject } from "react";
import Menu from "./Menu";
import CVOverview from "./CVOverview";

interface HeaderProps {
  projectsRef: RefObject<HTMLDivElement>;
  orgExperiencesRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({
  projectsRef,
  orgExperiencesRef,
  contactRef,
}) => {
  return (
    <header className="flex justify-between items-center p-[1.2vh_1.5vw] bg-[#161616] pt-[2vh] relative min-h-[80px]">
      <div className="flex justify-center pl-0 py-4 md:justify-between fixed custom-md:py-4 custom-md:pl-3 top-0 left-0 right-0 z-10 bg-[#161616]">
        <div className="border-[2px] border-[#444444] rounded-xl py-2 px-2 ml-4">
          <Menu
            projectsRef={projectsRef}
            orgExperiencesRef={orgExperiencesRef}
            contactRef={contactRef}
          />
        </div>
      </div>
      <div className="z-5 ml-auto mr-2 md:z-20">
        <CVOverview />
      </div>
      
    </header>
  );
};

export default Header;
