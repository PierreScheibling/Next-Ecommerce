export type ProductType  = {
    name : string
    image: string
    unit_amount: number | null
    quantity?: number | 1
    id: string
    description: string
    metadata: MetadataType
    size: string[]
    category: string
}

type MetadataType = {
    features: string
}