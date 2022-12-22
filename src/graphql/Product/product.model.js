const Product = [
    {
        id:'red shoe',
        description: 'red shoe',
        price:45.21,
        reviews:[]
    },
    {
        id:'blue jeans',
        description:'blue jeans',
        price:55.21,
        reviews:[]
    }
]

function getAllProducts() {
    return Product
}

function getProcductByPrice(minPrice,maxPrice){
    return Product.filter((product)=> product.price>=minPrice && product.price<=maxPrice);
}

function getProuctById(id){
    return Product.find((product)=> product.id===id)
}

function addNewProductById(id,description,price){
    const product = Product.find((product)=>product.id===id);
    if(product) return product;
    const newProduct = {
        id,
        description,
        price,
        reviews:[]
    }
    Product.push(newProduct);
    return newProduct
}

function addReviewToProductById(id,rating,comment=""){
    const product = Product.find((product)=> product.id === id)
    if(!product) return Product
    const review = {
        rating,
        comment
    }
    console.log(product)
    product.reviews.push(review)
    return product
}

module.exports = {
    getAllProducts,
    getProcductByPrice,
    getProuctById,
    addNewProductById,
    addReviewToProductById
}