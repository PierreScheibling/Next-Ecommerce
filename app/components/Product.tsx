import Image from "next/image"
import formatPrice from "@/util/PriceFormat"
import {ProductType} from "@/types/ProductType"
import Link from "next/link"

export default function Product({name, image, unit_amount, id, description, metadata, size, category}: ProductType) {
    const {features} = metadata
    return (
        <Link href={{pathname: `/product/${id}`, query: {name, image, unit_amount, id, description, features, size, category}}}>
            <div>
                <Image src={image} alt={name} width={800} height={800} className="w-80 h-80 object-cover rounded-lg" priority={true}/>
                <div className="font-medium py-2">
                    <h1>{name}</h1>
                    <h2 className="text-sm text-primary">{unit_amount !== null ? formatPrice(unit_amount) : "0"}</h2>
                </div>
            </div>
        </Link>
    )
}