
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import profile1 from "../assets/images/profile-1.jpg"
import profile2 from "../assets/images/profile-2.jpg"
import profile3 from "../assets/images/profile-3.jpg"
import profile4 from "../assets/images/profile-4.jpg"
import profile5 from "../assets/images/profile-5.jpg"
import profile6 from "../assets/images/profile-6.jpg"

const Tablecomponent = () => {
    const products = [{ profile: profile1, customer: "wane warden", orderno: "1234415", amount: "$243", status: "Delivered" },
    { profile: profile2, customer: "jane kooper", orderno: "1234344", amount: "$342", status: "Delivered" },
    { profile: profile3, customer: "Guy hawkins", orderno: "32124", amount: "$12", status: "Cancelled" },
    { profile: profile4, customer: "Kristin watson", orderno: "1565478", amount: "$123", status: "pending" },
    { profile: profile5, customer: "Kody fisher", orderno: "16567", amount: "$43", status: "Delivered" },
    { profile: profile6, customer: "Savanaah nyagan", orderno: "1233432", amount: "$879", status: "Delivered" },
    ]

    const statusBodyTemplate = (product: any) => {
        if (product?.status === "Delivered") {
            return (
                <div className='bg-green-300 text-green-900 rounded-lg pl-2 pr-2 w-max'>{product.status} </div>
            )
        } else {
            return (
                <div className='bg-red-300 text-red-900 rounded-lg pl-2 pr-2 w-max'>{product.status} </div>
            )
        }
    };
    const customerTemplate = (product: any) => {
        return (
            <div className='flex flex-row gap-2'>
                <img src={product?.profile} alt="user-profile" style={{ height: "30px", width: "30px" }} className='rounded-full' />
                <div>{product?.customer}</div>
            </div>
        )
    }
    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold">Products</span>
        </div>
    );

    return (
        <div>
            <DataTable value={products} header={header} tableStyle={{ width: "100%", borderRadius: "3px" }}
                className="w-full"
                pt={{
                    header: { className: "p-2 text-2xl bg-[#1F2937] text-white" },
                    root: { className: "rounded-lg" }

                }}>
                <Column body={customerTemplate} header="Customer Name" className='bg-[#1F2937]' pt={{ headerCell: { className: "bg-[#1F2937] text-white" } }}></Column>
                <Column header="Order No" field='orderno' className='bg-[#1F2937]' pt={{ headerCell: { className: "bg-[#1F2937] text-white" } }}></Column>
                <Column field="amount" header="Amount" className='bg-[#1F2937]' pt={{ headerCell: { className: "bg-[#1F2937] text-white" } }}></Column>
                <Column header="Status" body={statusBodyTemplate} className='bg-[#1F2937]' pt={{ headerCell: { className: "bg-[#1F2937] text-white" } }}></Column>
            </DataTable>
        </div>
    );
}

export default Tablecomponent
