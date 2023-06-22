import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({searchParams}: SearchParamTypes) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between align-center gap-12">
            < Image src={searchParams.image} alt={searchParams.name} width={800} height={800} className="w-2/5 md:w-80 md:h-100 object-cover rounded-lg" priority={true}/>
            <div className="">
                <h1 className="text-2xl py-2 font-medium">{searchParams.name}</h1>
                <p className="py-2 text-justify font-light">{searchParams.description}</p>
                <p className="py-2">{searchParams.features}</p>
            <div className="flex gap-2">
                <p className="font-bold text-primary">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
            </div>
            <AddCart {...searchParams}/>
            </div>
        </div>
    )
}