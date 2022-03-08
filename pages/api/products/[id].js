import { AllProducts } from "../../../data/products";

export default function handler({query: {id}}, res){
    const filtered = AllProducts.filter(product => product.id === id)
    
    if(filtered.length > 0){
        res.status(200).json(filtered[0])
    }else{
        res.status(200).json({
            message: "data not found"
        })
    }
}