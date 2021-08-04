export default {

  //添加商品
  add_new_cart(state,cart){
    state.cartList.unshift(cart)
  },
  //商品数量加一
  add_cart_num(state,cart){
    cart.num++
  },

  //购物车商品与选择
  selects(state,product){
    product.slt=!product.slt
  },

  //全选
  select_all(state){
    state.cartList.map(n=>{
      return n.slt=true
    })
  },
  //反全选
  unselect_all(state){
    state.cartList.map(n=>{
      return n.slt=false
    })
  }
}
