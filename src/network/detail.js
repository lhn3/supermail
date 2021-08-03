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
//价格详情
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title;
    this.desc=itemInfo.desc;
    this.newPrice=itemInfo.price;
    this.oldPrice=itemInfo.oldPrice;
    this.discount=itemInfo.discountDesc;
    this.relPrice=itemInfo.lowNowPrice;
    this.columns=columns;
    this.services=services;
  }
}

//商品详情图片
export class Shop{
  constructor(shopInfo) {
    this.logo=shopInfo.shopLogo;
    this.name=shopInfo.name;
    this.sell=shopInfo.cSells;
    this.score=shopInfo.score;
    this.goods=shopInfo.cGoods;
  }
}

//参数详情
export class  GoodsParam {
  constructor(info,rule) {
    this.image=info.images?info.images[0]:''
    this.info=info.set;
    this.sizes=rule.tables;
  }
}


//推荐商品
export function detailRecommend() {
  return request({
    url:'/Recommend',
  })
}
