import React from 'react'
import goal from "../assets/images/circle-radiation-solid.svg"
import dishes from "../assets/images/burger-solid.svg"
import menus from "../assets/images/bowl-food-solid.svg"

const Goalsdashboard: React.FC = () => {
    return (
        <div className='grid grid-rows-3 h-full bg-gray-800 text-white rounded-md  gap-3 p-2'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row gap-3 items-center'><img src={goal} alt="goal" className='border-none rounded-full p-4 bg-[#EE161F] bg-opacity-25' /> <div>Goals</div>  </div>

                <div><i className='pi pi-angle-right border-none rounded-full p-1 bg-[white] bg-opacity-25' /></div>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row gap-3 items-center'><img src={dishes} alt="dishes" className='border-none rounded-full p-4 bg-[#256BE4] bg-opacity-25' /><div>Popular Dishes</div></div>
                <div><i className='pi pi-angle-right border-none rounded-full p-1 bg-[white] bg-opacity-25' /></div></div>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-row gap-3 items-center' ><img src={menus} alt="menus" className='border-none rounded-full p-4 bg-[#6130F3] bg-opacity-25' /><div>Menus</div></div>
                <div><i className='pi pi-angle-right border-none rounded-full p-1 bg-[white] bg-opacity-25' /></div></div>
        </div>
    )
}

export default Goalsdashboard