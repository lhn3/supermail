import {request} from "./request";

export function getDetail(id) {
  return request({
    url:'/detail',
    params:{
      iid:id
    }
  })
}

//建立类来保存数据传入
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.relPrice=itemInfo.lowNowPrice
    this.columns=columns
    this.services=services
  }
}
