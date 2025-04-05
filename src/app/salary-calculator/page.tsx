import Salary1 from "../../../public/Salary-Calculator1.svg"
import Salary2 from "../../../public/Salary-Calculator2.svg"
import Image from "next/image"


export default function SalaryCalculator(){
    return(
        <div className="flex gap-5 items-start justify-evenly">
         <Image src={Salary1} className="max-w-[800px]" alt=""></Image>
         <Image src={Salary2} alt="" className="max-w-[400px]"></Image>
        </div>
    )
}