import React from "react";

const programmingLanguages = [
    { src: "/images/logo-c.png", alt: "C", text: "C" },
    { src: "/images/logo-java.png", alt: "Java", text: "Java" },
    { src: "/images/logo-javascript.png", alt: "JavaScript", text: "JavaScript" },
    { src: "/images/logo-css.png", alt: "CSS", text: "CSS" },
    { src: "/images/logo-flutter.png", alt: "Flutter", text: "Flutter" },
    { src: "/images/logo-kotlin.png", alt: "Kotlin", text: "Kotlin" },
    { src: "/images/logo-react.png", alt: "React", text: "React" }
    // Add more logos as needed
];

const ProgrammingLanguages: React.FC = () => {
    return (
        <div className="w-full overflow-hidden bg-[#1F1F1F] py-[2.7vh] border-t-2 border-b-2 border-[#444444] mt-[50px]">
            <div className="flex justify-around items-center animate-scroll w-[200%] space-x-8 md:space-x-8 lg:space-x-12">
                {[...programmingLanguages, ...programmingLanguages].map((lang, index) => (
                    <div key={index} className="flex items-center flex-shrink-0">
                        <img
                            src={lang.src}
                            alt={lang.alt}
                            className="max-w-[75px] h-[75px] mr-3"
                        />
                        <span className="text-[#BBBBBB] text-[1.5rem] font-semibold">
                            {lang.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgrammingLanguages;
