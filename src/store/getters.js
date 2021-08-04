export default {
  //购物车总数量
  cartLength(state){
    if (state.cartList.length){
      return state.cartList.length
    }else {
      return 0
    }
  },
  cartlist(state){
    return state.cartList
  },

  //返回选中的商品列表
  relCheck(state){
    return state.cartList.filter(function (cart) {
      return cart.slt
    })
  },
}
