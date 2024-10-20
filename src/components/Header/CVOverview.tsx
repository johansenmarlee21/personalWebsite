import React from "react";

const CVOverview: React.FC = () => {
    const openCV = () => {
        window.open('/images/CV-Johansen Marlee.pdf', 'blank');
    };

    return (
        <div 
            className="flex items-center relative group cursor-pointer mt-[75px] md:mt-[0vh] " 
            onClick={openCV}
        >
            {/* Button Text (Check out!) */}
            <div 
                className="text-white text-base font-medium whitespace-nowrap py-[1.3vh] px-[40px] pl-[2.5vw] bg-[#444444] rounded-l-full sm:text-lg sm:px-[38px] sm:py-[10px] transition-transform duration-1000 ease-in-out relative">
                Check out!
            </div>

            {/* Circular CV Button */}
            <div 
                className="w-[65px] h-[65px] bg-[#5B67D6] rounded-full text-[#161616] flex items-center justify-center text-[1.9rem] font-bold relative sm:w-[65px] sm:h-[65px] sm:text-[1.7rem] transition-all duration-200 ease-in-out border-2 border-transparent group-hover:border-white"
                style={{ marginLeft: '-30px' }} // Shift CV button to overlap the "Check out!" text
            >
                CV
            </div>
        </div>
    );
};

export default CVOverview;
