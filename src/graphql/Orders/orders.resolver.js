const { getAllOrders } = require('./order.model')

module.exports = {
    Query:{
        orders : (parent,args)=>{
            return getAllOrders()
        }
    }
}