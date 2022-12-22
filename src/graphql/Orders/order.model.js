const orders=[
    {
        date: '18-dec-2022',
        subtotal:45.21+55.21,
        items:[
            {
                product:{
                    id:'red shoe',
                    description: 'red shoe',
                    price:45.21,
                },
                quantity:1,
            },
            {
                product:{
                    id:'blue jeans',
                    description:'blue jeans',
                    price:55.21
                },
                quantity:1
            }
        ]
    }
]

function getAllOrders(){
    return orders;
}

module.exports = {
    getAllOrders
}