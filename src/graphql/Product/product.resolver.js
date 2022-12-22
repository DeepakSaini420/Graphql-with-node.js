const { 
    getAllProducts,
    getProcductByPrice,
    getProuctById,
    addNewProductById,
    addReviewToProductById
 } = require('./product.model')

module.exports = {
    Query:{
        Product: ()=>{
            return getAllProducts();
        },
        productByPrice:(_,args)=>{
            return getProcductByPrice(args.minPrice,args.maxPrice)
        },
        productById:(_,args)=>{
            return getProuctById(args.id)
        }
    },
    Mutation:{
        addNewProduct:(_,args)=>{
            return addNewProductById(args.id,args.description,args.price);
        },
        addRivewToProduct:(_,args)=>{
            return addReviewToProductById(args.id,args.rating,args.comment)
        }
    }
}