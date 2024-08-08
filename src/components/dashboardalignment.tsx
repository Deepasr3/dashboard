import React from 'react'
import Chartdetails from './chartdetails'
import CustomerFeedback from './feedback'
import Goalsdashboard from './goalsdashboard'
import NetProfitCard from './progress'
import Salesdetails from './salesdetails'
import Tablecomponent from './tablecomponent'

const Dashboardalignment = () => {
    return (
        <div className="p-4 grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-1">
            <div><Salesdetails />
            </div>
            <div><NetProfitCard />
            </div>
            <div><Chartdetails />
            </div>
            <div><Goalsdashboard />
            </div>
            <div><Tablecomponent />
            </div>
            <div><CustomerFeedback />
            </div>
        </div>
    )
}

export default Dashboardalignment