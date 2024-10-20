import React, { RefObject } from "react";

const menuItems = [
    { text: 'Projects', smallText: 'Projects', image: '/images/header-arrow.png', ref: 'projectsRef' },
    { text: 'Organizational Experiences', smallText: 'Organizational Exp', image: '/images/header-arrow.png', ref: 'orgExperiencesRef' }, // Only this item has smallText
    { isButton: true, text: 'Contact me!', image: '/images/header-arrow.png', ref: 'contactRef' }
];

interface MenuProps {
    projectsRef: RefObject<HTMLDivElement>;
    orgExperiencesRef: RefObject<HTMLDivElement>;
    contactRef: RefObject<HTMLDivElement>;
}

const Menu: React.FC<MenuProps> = ({ projectsRef, orgExperiencesRef, contactRef }) => {

    const handleScroll = (ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const refs = { projectsRef, orgExperiencesRef, contactRef };

    return (
        <ul className="flex gap-[3vw] m-0 p-0 flex-row items-center">
            {menuItems.map((item, index) => (
                <li key={index} className="relative cursor-pointer group">
                    {item.isButton ? (
                        <button className="text-base font-medium transition-transform ease-in-out duration-100 bg-[#5B67D6] border-none px-[0.8vw] py-[0.8vh] custom-sm-2:px-[1.3vw] custom-sm-2:py-[1.3vh] rounded-lg text-black group-hover:translate-y-[-10px]" 
                                onClick={() => handleScroll(refs[item.ref as keyof MenuProps])}>
                            {item.text}
                            <img src={item.image} alt="" className="absolute top-[115%] left-1/2 transform -translate-x-1/2 translate-y-[10px] opacity-0 transition-transform duration-300 ease-in-out w-[15px] h-[20px] group-hover:opacity-100 group-hover:translate-y-0" />
                        </button>
                    ) : (
                        <span className="relative inline-block text-[#5B67D6] text-sm custom-sm-2:text-base font-medium transition-transform duration-300 ease-in-out group-hover:translate-y-[-15px]" 
                              onClick={() => handleScroll(refs[item.ref as keyof MenuProps])}>
                            {/* Show original text or small text based on screen size */}
                            <span className="hidden custom-sm-2:inline">{item.text}</span>
                            <span className="inline custom-sm-2:hidden">{item.smallText}</span>
                            <img src={item.image} alt="" className="absolute top-[115%] left-1/2 transform -translate-x-1/2 translate-y-[10px] opacity-0 transition-transform duration-300 ease-in-out w-[15px] h-[20px] group-hover:opacity-100 group-hover:translate-y-0" />
                        </span>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default Menu;
