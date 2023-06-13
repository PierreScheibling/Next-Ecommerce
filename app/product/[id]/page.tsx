import Image from "next/image"
import { SearchParamTypes } from "@/types/SearchParamTypes"
import formatPrice from "@/util/PriceFormat"
import AddCart from "./AddCart"

export default async function Product({searchParams}: SearchParamTypes) {
    return (
        <div className="flex justify-between gap-24 p-12 text-gray-700">
            < Image src={searchParams.image} alt={searchParams.name} width={200} height={200} className="w-full h-80 object-cover rounded-lg"/>
            <div className="text-grey-700">
                <h1 className="text-2xl py-2 font-medium">{searchParams.name}</h1>
                <p className="py-2 text-justify font-light">{searchParams.description}</p>
                <p className="py-2">{searchParams.features}</p>
            <div className="flex gap-2">
                <p className="font-bold text-teal-700">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
            </div>
            <AddCart {...searchParams}/>
            </div>
        </div>
    )
}