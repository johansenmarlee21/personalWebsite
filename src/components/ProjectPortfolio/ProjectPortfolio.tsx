import React, { forwardRef } from "react";

const projects = [
    {
        title: "Buzivest",
        description: "Buzivest is a finance-based application developed using Kotlin, Firebase, SQLite, and Apps Script. This application is designed to facilitate investment in small businesses, known as UMKM (Usaha Mikro Kecil Menengah) in Indonesia. Buzivest offers various features, enabling investors to purchase shares when small businesses seek capital for expansion. The application aims to support and empower small businesses by providing them with access to necessary funding.",
        image: "/images/project-photo-buzivest-dim.png",
        smallImage: ["/images/project-android.png"],
        languages: ["/images/logo-project-kotlin.png", "/images/logo-project-firebase.png"],
        pdf: "/images/project-1-pesonalWebsite.pdf"
    },
    {
        title: "Rubbylexion",
        description: "RUBBYLEXION is an augmented reality-based application designed to bring a fresh and engaging experience to the world of Rubik's Cube. The app allows users to scan a graphed Rubik's Cube and view a 3D model of the characters associated with each side of the cube in augmented reality. The whole application was made by Unity supported by the C# language.",
        image: "/images/project-photo-rubbylexion-dim.png",
        smallImage: ["/images/project-android.png"],
        languages: ["/images/logo-project-unity.png", "/images/logo-project-csharp.png"],
        pdf: "/images/project-2-personalWebsite.pdf"
    },
    {
        title: "Readwell",
        description: "Was built to encourage the young generation to start reading books while embracing digitalization. It features a simple user interface consisting of three main menus. The entire project was developed by a team of 3 people (2 developers, 1 UI/UX designer). The application was constructed using the flutter framework while utilizing the Firestore and Google authentication featured by Firebase.",
        image: "/images/project-photo-readwell-dim.png",
        smallImage: ["/images/project-android.png"],
        languages: ["/images/logo-project-flutter.png", "/images/logo-project-firebase.png"],
        pdf: "/images/project-3-personalWebsite.pdf"
    },
    {
        title: "Willify",
        description: "Willify is a responsive music streaming platform website designed with a focus on user experience across all devices. The platform features five distinct pages, including three main pages, crafted using HTML, CSS, and JavaScript. The development journey commenced with structuring and designing the primary UI in Figma. I managed every aspect of the website's development, ensuring a seamless and enjoyable experience for users on any device.",
        image: "/images/project-photo-willify-dim.png",
        smallImage: ["/images/project-android.png", "/images/project-web.png"],
        languages: ["/images/logo-project-html.png", "/images/logo-project-javascript.png", "/images/logo-project-css.png"],
        pdf: "/images/project-4-personalWebsite.pdf"
    },
    {
        title: "Personal Website",
        description: "This project is a personal portfolio website developed using React and TypeScript to showcase my past works and experiences. The site features a sleek and interactive design, with Tailwind CSS used for responsive styling. The website was created to establish an online presence, highlight my projects, and provide potential employers or collaborators with quick access to my professional background.",
        image: "/images/project-photo-personalwebsite.png",
        smallImage: ["/images/project-android.png", "/images/project-web.png"],
        languages: ["/images/logo-project-react.png", "/images/logo-project-typescript.png"],
        pdf: "/images/project-5-personalWebsite.pdf"
    }
];

const ProjectPortfolio = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="project-portfolio flex flex-col items-center mt-8 w-full" ref={ref}>
            <h2 className="text-3xl md:text-4xl text-[#BBBBBB] w-[95%] font-medium">
                Check my latest projects!
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 custom-xl:grid-cols-5 custom-xl-2:grid-cols-6 gap-6 w-[95%] mt-5">
                {projects.map((project, index) => (
                    <div key={index} className="project-card bg-[#1F1F1F] border-2 border-[#444444] rounded-lg p-3 flex flex-col items-center mx-auto custom-sm-1:w-[250px] sm:w-[270px] md:w-auto">
                        <img className="project-card-bigimage w-full h-60 rounded-lg mb-4 border border-gray-600" src={project.image} alt={project.title} />
                        <div className="devices-available flex gap-4 mb-3 mr-auto">
                            {project.smallImage.map((smallImage, i) => (
                                <img key={i} src={smallImage} alt="smallImage" className="w-4 h-6" />
                            ))}
                        </div>
                        <h3 className="text-xl text-[#5B67D6] font-medium mr-auto">{project.title}</h3>
                        <p className="text-sm text-gray-400 mt-0.5 mb-3">{project.description}</p>
                        <div className="project-bottom-area flex justify-between w-full mt-auto">
                            <div className="languages-used flex gap-1">
                                {project.languages.map((language, i) => (
                                    <img key={i} src={language} alt="language logo" className="w-9 h-9" />
                                ))}
                            </div>
                            <button className="detail-button bg-[#5B67D6] text-black font-medium py-0.5 px-2 rounded-md transition-colors hover:bg-indigo-400" onClick={() => window.open(project.pdf, '_blank')}>
                                Detail
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default ProjectPortfolio;
