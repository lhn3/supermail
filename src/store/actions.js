export default {

    //添加商品到购物车
    addCart(context,cart){
      //find函数，遍历找到符合的返回item这个值或对象给pro
      let product=context.state.cartList.find(function (item) {
        return item.id===cart.id
      })
      //判断列表中是否有这个对象，有的话改变里面的对应数量即可
      if(product){
        //调用mutations中数量添加函数
        context.commit('add_cart_num',product)
      }else {
        //调用mutations中物品添加函数
        context.commit('add_new_cart',cart)
      }
    },
  }
