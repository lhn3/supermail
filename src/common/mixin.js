export const resMixin={
  //使用混入函数可以调用其封装好的生命周期函数与自己的生命周期函数一同执行
  //
  data(){
  },
  mounted(){
    console.log('混入函数')
  },
  methods:{
  }
}
