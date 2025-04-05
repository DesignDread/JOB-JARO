import Salary1 from "../../../public/Chat1.svg"
import Salary2 from "../../../public/Chat2.svg"
import Image from "next/image"


export default function SalaryCalculator(){
    return(
        <div className="flex gap-5 items-start justify-evenly">
         <Image src={Salary1} className="max-w-[300px]" alt=""></Image>
         <Image src={Salary2} alt="" className="max-w-[900px] max-h-[1200px] sticky"></Image>
        </div>
    )
}