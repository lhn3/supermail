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
  }
}
