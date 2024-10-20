import React, {useState, useEffect, forwardRef} from "react";
import '../../index.css';


const ContactList = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div className="flex flex-col items-center mt-16" ref={ref}>
            <div className="w-[95%]">
                <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl text-[#BBBBBB] w-[95%] font-medium">Contact me!</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-5 mb-5 ">
                    <div className="flex flex-col items-center sm:max-w-[270px] sm:h-[132px] md:w-[270px] md:h-[132px] md:mx-auto  lg:max-w-[300px] lg:w-[300px] lg:h-[140px] bg-[#202020] rounded-[10px]">
                        <img className= "w-[48px] h-[48px] mt-5" src="/images/contactLogo-wa.png" alt="Whatsapp logo"/>
                        <h3 className="font-medium text-2xl text-[#BBBBBB] text-center mt-4">+6281338326678</h3>
                    </div>

                    <div className="flex flex-col items-center sm:max-w-[270px] sm:h-[132px] md:w-[270px] md:h-[132px] md:mx-auto lg:max-w-[300px] lg:w-[300px] lg:h-[140px] bg-[#202020] rounded-[10px]">
                        <img className= "w-[48px] h-[35px] mt-8" src="/images/contactLogo-gmail.png" alt="email logo"/>
                        <h3 className="font-medium text-lg text-[#BBBBBB] text-center mt-5">johansenmarlee21@gmail.com</h3>
                    </div>

                    <div className="flex flex-col items-center sm:max-w-[270px] sm:h-[132px] md:w-[270px] md:h-[132px] md:mx-auto lg:max-w-[300px] lg:w-[300px] lg:h-[140px] bg-[#202020] rounded-[10px]">
                        <img className= "w-[48px] h-[48px] mt-5" src="/images/contactLogo-linkedin.png" alt="linkedin logo"/>
                        <h3 className="font-medium text-2xl text-[#BBBBBB] text-center mt-4">Johansen Marlee</h3>
                    </div>

                    <div className="flex flex-col items-center sm:max-w-[270px] sm:h-[132px] md:w-[270px] md:h-[132px] md:mx-auto lg:max-w-[300px] lg:w-[300px] lg:h-[140px] bg-[#202020] rounded-[10px]">
                        <img className= "w-[48px] h-[42px] mt-7" src="/images/contactLogo-outlook.png" alt="outlook logo"/>
                        <h3 className="font-medium text-lg text-[#BBBBBB] text-center mt-5">johansen.marlee@binus.ac.id</h3>
                    </div>
                </div>

                


            </div>
        </div>
    )
});


export default ContactList;
