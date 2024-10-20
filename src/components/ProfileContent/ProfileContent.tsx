import React from "react";
// import './ProfileContent.css';

const ProfileContent: React.FC = () => {
    return (
        <div className="flex flex-row justify-center items-center w-full mt-8">
            <div className="flex flex-col flex-1">
                <span className="ml-auto hidden custom-md:block">
                    <div className="bg-[#1F1F1F] border border-[#444444] rounded-lg text-[#BBBBBB] text-center w-[24vw] h-[135px] flex justify-center items-center text-base font-normal">
                        Various programming languages have been learnt over the last few years.
                    </div>
                </span>
                <span className="ml-auto mr-[18%] mt-[50px] hidden custom-md:block">
                    <div className="bg-[#1F1F1F] border border-[#444444] rounded-lg text-[#BBBBBB] text-center w-[24vw] h-[135px] flex justify-center items-center text-base font-normal">
                        Experienced in teamwork and sole-based projects.
                    </div>
                </span>
            </div>

            <div className="flex flex-col items-center w-[310px] h-auto custom-sm:w-[400px] md:w-[405px] custom-md:w-[310px]">
                <span className="mb-auto">
                    <img className="w-[185px] h-[185px]" src="/images/profile-image.png" alt="Profile" />
                </span>
                <div className="text-[#BBBBBB] font-medium mt-4 inline-block border-r-4 border-r-current whitespace-nowrap overflow-hidden max-w-fit animate-typing">
                    Hi!, I'm <span className="text-[#5B67D6]">Johansen Marlee!</span>
                </div>
                <div className="text-[#BBBBBB] text-[2.33rem] font-medium w-[250px] custom-sm-1:w-full custom-md:w-[350px] text-center mt-5 leading-tight">
                    Welcome to my personal website!, get to know me better!
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <span className="mr-auto hidden custom-md:block">
                    <div className="bg-[#1F1F1F] border border-[#444444] rounded-lg text-[#BBBBBB] text-center w-[24vw] h-[135px] flex justify-center items-center text-base font-normal">
                        Actively participated in non-academic organizations and activities.
                    </div>
                </span>
                <span className="ml-[18%] mr-auto mt-[50px] hidden custom-md:block">
                    <div className="bg-[#1F1F1F] border border-[#444444] rounded-lg text-[#BBBBBB] text-center w-[24vw] h-[135px] flex justify-center items-center text-base font-normal">
                        Over 5 mobile application and website projects have been made over the year.
                    </div>
                </span>
            </div>
        </div>
    )
}

export default ProfileContent;
