import React from 'react'
import home from "../assets/images/house-solid.svg"
import chart from "../assets/images/chart-column-solid.svg"
import calendar from "../assets/images/calendar-check-regular.svg"
import shopping from "../assets/images/bag-shopping-solid.svg"
import diary from "../assets/images/book-solid.svg"

const SideMenuItems: React.FC = () => {

    return (
        <div className="flex flex-col gap-1 w-auto  text-white">
            <ul>
                <li className="mb-4"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded"><img src={home} width={20} /></a></li>
                <li className="mb-4"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded"><img src={chart} width={20} /></a></li>
                <li className="mb-4"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded"><img src={calendar} width={20} /></a></li>
                <li className="mb-4"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded"><img src={diary} width={20} /></a></li>
                <li className="mb-4"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded"><img src={shopping} width={20} /></a></li>

            </ul>
        </div>
    )
}

export default SideMenuItems