import { useEffect, useState } from "react";
import fourdots from "../assets/images/fourdots.svg"
import message from "../assets/images/envelope-solid.svg"
import settings from "../assets/images/gear-solid.svg"
import notifications from "../assets/images/bell-solid.svg"
import { Menuitems } from "./sidemenuitems"
import SideMenuItems from "./menu";
import Dashboardalignment from "./dashboardalignment";
const RootLayout: React.FC = () => {

    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden ">
                <header className="w-full bg-[#495057] h-[50px] flex justify-between shadow items-center ">
                    <div className="flex gap-3 items-center pl-5 pt-3">
                        <img src={fourdots} alt="umcslogo" width={20} />
                        <input type="text" placeholder="Search" className="bg-gray-700 p-2 rounded pl-2 ml-3" />
                    </div>
                    <div className="pr-[5px] flex items-center gap-4 ">
                        <span>
                            <img src={message} alt="umcslogo" width={30} className="border-none rounded-full p-2 bg-[white] bg-opacity-25" />
                        </span>
                        <span >
                            <img src={settings} alt="umcslogo" width={30} className="border-none rounded-full p-2 bg-[white] bg-opacity-25" />
                        </span>
                        <span>
                            <img src={notifications} alt="umcslogo" width={30} className="border-none rounded-full p-2 bg-[white] bg-opacity-25" />
                        </span>
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" className="w-8 h-8 rounded-full" />

                    </div>
                </header>
                <div className="flex overflow-hidden bg-[#495057]">
                    <aside
                        className={` bg-[#495057] overflow-y-auto pl-3`}
                    >
                        <SideMenuItems />
                    </aside>
                    <main className="  flex flex-col gap-[4px] w-full rounded-[5px] p-[1rem] overflow-auto">
                        <Dashboardalignment />
                    </main>
                </div>
            </div>
        </>
    );
};

export default RootLayout;
