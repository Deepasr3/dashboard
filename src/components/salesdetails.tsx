import React from 'react';
import ordered from "../assets/images/store-slash-solid.svg";
import delivered from "../assets/images/calendar-check-solid.svg";
import cancelled from "../assets/images/basket-shopping-solid.svg";
import revenue from "../assets/images/exchange-dollar-line.svg"
import './salesdetails.css'

const Salesdetails: React.FC = () => {
  const salesarray = [{ icon: ordered, total: 75, profit: "3%", name: "Total Orders", profitrange: "increases" }, { icon: delivered, total: 70, profit: "3%", name: "Total delivered", profitrange: "decreases" }, { icon: cancelled, total: "05", profit: "3%", name: "Total Cancelled", profitrange: "increases" }, { icon: revenue, total: "$12k", profit: "3%", name: "Total Revenue", profitrange: "decreases" }]
  return (
    <div className="grid grid-cols-4 gap-3">
      {salesarray.map((item, index) => (
        <div key={index} className="bg-gray-800 text-white p-2 rounded-lg flex flex-col">
          <div className='flex flex-col items-start'>
            <img src={item.icon} alt={item.name} className={`w-8 h-8 border-none rounded-full p-2 ${item?.name === "Total Orders" ? "bg-[#EE161F]" : item?.name === "Total delivered" ? "bg-[#173530]" : item?.name === "Total Cancelled" ? "bg-[#1862E2]" : item?.name === "Total Revenue" ? "bg-[#D522D7]" : ""} bg-opacity-25`} />
            <div className="text-sm">{item.name}</div>
          </div>
          <div className="flex flex-row justify-between items-center">

            <div className="text-xl font-bold mt-2">{item.total}</div>
            <div className={`text-sm mt-1 ${item.profitrange.includes('decreases') ? 'text-red-500' : 'text-green-500'}`}>
              {item.profitrange.includes('decreases') ? '↓' : '↑'} {item.profit}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Salesdetails