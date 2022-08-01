
export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

export interface IProductCard {
    id: number
    title:string
    price:string
    category:string
    description:string
    image:string
    
}

