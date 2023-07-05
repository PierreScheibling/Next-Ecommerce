import { SearchParamTypes } from "@/types/SearchParamTypes"
import { SearchProduct } from "@/app/components/SearchProduct"


export default async function Product({searchParams}: SearchParamTypes) {
    return (
        <>
            <SearchProduct searchParams={searchParams}/>
        </>
    )
}