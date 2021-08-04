export default {

  //添加商品
  add_new_cart(state,cart){
    state.cartList.unshift(cart)
  },
  //商品数量加一
  add_cart_num(state,cart){
    cart.num++
  },

  selects(state,product){
    product.slt=!product.slt
  }
  }
