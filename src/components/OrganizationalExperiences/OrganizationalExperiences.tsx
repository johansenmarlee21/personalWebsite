import { title } from "process";
import React, { useState, useEffect, forwardRef } from "react";
import '../../index.css'

const experiences = [
    {
        organizationLogo: "/images/orgExperiences-kmk.png",
        organization: "Keluarga Mahasiswa Katolik BINUS University",
        borderColor: "#63101D", 
        arrowImage: "/images/orgExperiences-rightArrow.png", 
        roles: [
            {
                title: "President of KMK BINUS @Kemanggisan",
                description: [
                    "Responsible to handle and manage 7 divisions of KMK BINUS",
                    "Leading more than 60 activists and administrators",
                ]
            },
            {
                title: "Coordinator of Event Division at Rumpun Day",
                description: [
                    "Led all staffs that come from 4 different organizations (KMK, PO, KBMK, AIESEC)",
                    "Responsible to manage the main structure of the event (seminar themed: 'Menjalin Harmoni: Peran Literasi Keagamaan Dalam Menanggulangi Konflik Sosial')"
                ]
            },
            {
                title: "Activist of Event & KESORA Division",
                description: [
                    "Contributed to the planning and execution of the organization's weekly event.",
                    "Played part to arrange and organize routine sports and arts activities of the organization."
                ]
            },
            {
                title: "Coordinator of Event Division at LDK Aktivis KMK 2024",
                description: [
                    "Led all staffs from 5 distinct regions of KMK BINUS (Kemanggisan, Alam Sutera, Semarang, Bandung, Malang)",
                    "Responsible to managed the main activity and structure of the event"
                ]
            },
            {
                title: "Event Leader at STUDI BANDING EKSTERNAL KMK BINUS UNIVERSITY",
                description: [
                    "Took charge to lead and manage all the committee members that consisted of 4 diverse divisions",
                    "Invited and brought in KMK Mercu Buana as the partner of the comparative study themed 'Gathering Catholics Through Exploring Unity in Diversity.'"
                ]
            },
            {
                title: "Staff of Fundraising Division at Natal Bersama KMK BINUS Greater Jakarta 2023",
                description: [
                    "Was responsible to seek funding sources for the event"
                ]
            },
            {
                title: "Staff of Event Division at Talkshow: 'Leading Like The Savior'",
                description: [
                    "Played part to arrange the main rundown of the event"
                ]
            },
            
        ]
    },

    {
        organizationLogo: "/images/orgExperiences-binus.png",
        organization: "Binus University",
        borderColor: "#008ED3", 
        arrowImage: "/images/orgExperiences-rightArrowBlue.png", 
        roles: [
            {
                title: "Freshmen Leader for BINUSIAN 27",
                description: [
                    "Collaborated with fellow freshmen leaders, led more than 60 Freshmen throughout their orientation program",
                    "Brought and taught various materials to introduce their first year program"
                ]
            },
            {
                title: "Freshmen Partner for BINUSIAN 27",
                description: [
                    "Guided all freshmen in mobile application and technology major through their academic journey at first year program",
                    "provided support and resources throughout their weekly classes"
                ]
            }
        ]
    }
];



const OrganizationalExperiences = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="flex flex-col items-center mt-16" ref={ref}>
            <div className="w-[95%]">
                <h1 className="text-3xl md:text-4xl text-[#BBBBBB] w-[95%] font-medium">Organizational Experiences</h1>

                {experiences.map((experience, expIndex) => (
                    <div key={expIndex} className="w-full mt-12">
                        {/* Organization Info */}
                        <div className="flex flex-row items-center">
                            <img className="h-12 w-12" src={experience.organizationLogo} alt={`${experience.organization} logo`} />
                            <p className="text-[#BBBBBB] text-xl ml-3 font-normal">{experience.organization}</p>
                        </div>

                        {/* Role Cards */}
                        <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 xl:grid-cols-4 gap-6 mt-5">
                            {experience.roles.map((role, roleIndex) => (  
                                <div className="w-[240px] h-[220px] sm:w-[240px] sm:h-[220px] md:w-[260px] md:h-[210px] lg:w-[295px] lg:h-[220px] mx-auto" key={roleIndex}>
                                    <div  
                                    className="rounded-[20px] h-[220px] w-[100px] sm:h-[220px] md:h-[210px] lg:h-[220px] "
                                    style={{ backgroundColor: experience.borderColor }} 
                                    >
                                        <div    
                                            className="border-[3px] rounded-[20px] bg-[#1F1F1F] w-[240px] h-[220px] sm:w-[240px] sm:h-[220px] md:w-[260px] md:h-[210px] lg:w-[295px] lg:h-[220px] ml-3 p-4"
                                            style={{ border: `3px solid #444444` }} 
                                        >
                                            <h2 className="text-[#BBBBBB] text-base font-semibold">{role.title}</h2>

                                            <ul className="list-none mt-3">
                                                {role.description.map((desc, descIndex) => (
                                                    <li key={descIndex} className="text-[#BBBBBB] text-xs flex items-start mt-1">
                                                        <img 
                                                            className="w-4 h-4 mr-2 mt-1" 
                                                            src={experience.arrowImage} 
                                                            alt="Arrow icon" 
                                                        />
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default OrganizationalExperiences;

