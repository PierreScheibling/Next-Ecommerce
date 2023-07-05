import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import {ProductType} from "@/types/ProductType"
import Link from "next/link"

export default function Product({name, image, unit_amount, id, description, metadata, size, category}: ProductType) {
    const {features} = metadata
    return (
        <Link href={{pathname: `/product/${id}`, query: {name, image, unit_amount, id, description, features, size, category}}}>
            <div className="mb-1">
                <Image src={image} alt={name} width={800} height={800} className="w-[100] h-64 md:h-[70vh] object-cover" priority={true}/>
                <div className="font-medium py-2">
                    <h1>{name}</h1>
                    <h2 className="text-sm font-thin">{unit_amount !== null ? formatPrice(unit_amount) : "0"}</h2>
                </div>
            </div>
        </Link>
    )
}