import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const NetProfitCard: React.FC = () => {
    const percentage = 70; // Adjust this value as needed

    return (
        <div className=" bg-gray-800 text-white p-4 rounded-lg h-full">
            <div className=" flex">Net Profit</div>
            <div className="flex flex-row justify-between items-center">
                <div>
                    <p className="text-2xl font-bold">$ 6759.25</p>
                    <div className="flex  mt-2">
                        <span className="text-green-500 mr-2">▲ 3%</span>
                    </div>
                </div>
                <div>
                    <div className='h-16 w-16'>
                        <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                                pathColor: `#6488ea`,
                                textColor: '#ffff',
                                trailColor: '#B8B8FF',
                            })}
                        />
                    </div>
                    <p className="text-xs mt-2">*The value here has been rounded off.</p>
                </div>
            </div>
        </div>
    );
};

export default NetProfitCard;
