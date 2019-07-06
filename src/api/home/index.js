import http from "@/utils/request";
// 首页轮播图数据接口
export const bannerlist =()=>http.get("/api/home/bannerlist")
// 首页分类列表接口
export const catelist =()=>http.get("/api/home/catelist")
// 首页活动接口
export const activitylist =()=>http.get("/api/home/activitylist")
// 品牌制造商直供接口
export const tagList =()=>http.get("/api/home/tagList")
// 类目热销榜接口
export const catehotsell =()=>http.get("/api/home/catehotsell")
// 人气推荐接口
export const popularlist =()=>http.get("/api/home/popularlist")
// 限时购接口
export const flashsale =()=>http.get("/api/home/flashsale")
// 新品首发接口
export const newitemlist =()=>http.get("/api/home/newitemlist")
// 购物指南接口
export const shoppingguide =()=>http.get("/api/home/shoppingguide")
// 推荐列表接口
export const topcatelist =()=>http.get("/api/home/top/catelist")
// 分类列表数接口
export const temlist =(id)=>http.get("/api/home/catelist/itemlist",id)




