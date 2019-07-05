import React from "react"
import "./index.css"
import { Carousel} from 'antd';
import "@/static/iconfont/iconfont.css"
import img8 from '@/static/images/home8.png'
import img9 from '@/static/images/home9.png'
import img11 from '@/static/images/home11.png'
import recomd1 from '@/static/images/recomd1.png'
import recomd2 from '@/static/images/recomd2.png'
import list1 from '@/static/images/list1.png'
import slider1 from '@/static/images/slider1.jpg'
import slider2 from '@/static/images/slider2.png'

import store from "@/store"
import {connect} from "react-redux"
import {
    bannerlistAsync,
    catelistAsync,
    activitylistAsync,
    tagListAsync,
    catehotsellAsync,
    popularlistAsync,
    flashsaleAsync,
    newitemlistAsync,
    shoppingguideAsync,
    topcatelistAsync,
    temlistAsync
} from "@/action/home"
class Home extends React.Component{
    componentDidMount(){
        store.dispatch(bannerlistAsync())
        store.dispatch(catelistAsync())
        store.dispatch(activitylistAsync())
        store.dispatch(tagListAsync())
        store.dispatch(catehotsellAsync())
        store.dispatch(popularlistAsync())
        store.dispatch(flashsaleAsync())
        store.dispatch(newitemlistAsync())
        store.dispatch(shoppingguideAsync())
        store.dispatch(topcatelistAsync())
        store.dispatch(temlistAsync())
        
    }
    render(){
        let {bannerlist,cate,activity,tag,hot,popular,flash,newitem,shopping,topcate,tem}=this.props
        console.log(popular)
        return(
            <div id="home">
              <div className="header">
                    <div className="header-search">
                        <a href="#">网易严选</a>
                        <input results="s" type="search" size="20px" placeholder="搜索商品，共22231款好物"/>
                        <span>登录</span>
                    </div> 
                    <ul>
                        <li className="red">推荐</li>
                        <li>居家生活</li>
                        <li>服饰鞋包</li>
                        <li>美食酒水</li>
                        <li className="iconfont">&#xe69e;</li>
                    </ul>
              </div>
              <div className="main">
                  {/* 轮播图 */}
                <Carousel autoplay>
                    {
                        bannerlist.map((item)=>(
                            <div key={item.id}>
                                <img src={item.picUrl}/>
                            </div>
                        ))
                    }
                </Carousel>
                <div className="home_tip">
                    <p><i className="iconfont">&#xe69d;</i><span>网易自营品牌</span></p> 
                    <p><i className="iconfont">&#xe620;</i><span>30天无忧退货</span></p> 
                    <p><i className="iconfont">&#xe632;</i><span>48小时快速退款</span></p> 
                </div>
                <ul className="home_sort">
                    {
                        cate.map((item,index)=>(
                            <li key={index}>
                                <img src={item.picUrl}/>
                                <span>{item.text}</span>
                            </li>
                        ))
                    }
                </ul>
                {/* 没有数据未渲染 */}
                <div className="welfare">
                    <h2><span>一</span>新人专享礼<span>一</span></h2>
                    <div className="welfare_con">
                        <p className="welfare_con_l">
                            <span>新人专享礼包</span>
                            <img src={img8}/>
                        </p>
                        <div className="welfare_con_r">
                            <div>
                                <p>
                                    <span>福利社</span><br/>
                                    <span>今日特价</span>
                                </p>
                                <img src={img11} />
                            </div>
                            <div>
                                <p>
                                    <span>福利社</span><br/>
                                    <span>今日特价</span>
                                </p>
                                <img src={img11} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="provider leri">
                    <h2 className="provider_t hea">
                        <span>品牌制造商品直供</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <ul className="provider_con">
                        {
                            tag.map(item=>(
                                <li className="provider_bg" key={item.id} style={{backgroundImage:`url(${item.picUrl})`}}>
                                    <p>{item.name}</p>
                                    <span>{item.floorPrice}元起<i>上新</i></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="hot leri">
                    <h2 className="hea">类目热销榜</h2>
                    <ul>
                        {
                            hot.map(item=>(
                                <li key={item.picUrl}>
                                    <p>{item.categoryName}</p>
                                    <img src={item.picUrl}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="recommond leri">
                     <h2 className="recommond_t hea">
                        <span>人气推荐</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <ul>
                        {
                            popular.map(item=>(
                                <li key={item.id}>
                                    <img src={item.listPicUrl}/>
                                    <div>
                                        {/* <span>好货内部价</span> */}
                                        <p>{item.name}</p>
                                        {/* <i>{item.simpleDesc}</i> */}
                                        <p><i>￥{item.counterPrice}</i></p>
                                        {/* <span>{item.newItemFlag}</span> */}
                                    </div>
                                </li>
                            ))
                        }

                    </ul>
                   
                </div>
                <div className="limitTime leri">
                    <h2 className="limitTime_t hea">
                        <span>限时购</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <ul>
                        {
                            flash.map(item=>(
                                <li key={item.itemId}>
                                    <img src={item.picUrl}/>
                                    <span>￥{item.activityPrice}</span>
                                    <i>￥{item.originPrice}</i>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="newProduct leri">
                    <h2 className="newProduct_t hea">
                        <span>新品首发</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <ul>
                        {
                            newitem.map(item=>(
                                <li key={item.id}>
                                    <img src={item.listPicUrl}/>
                                    <p>{item.name}<i>￥{item.counterPrice}</i></p>
                                    <span>加价购</span>
                                </li>
                            ))
                        }
                       
                    </ul>
                </div>
                <div className="list leri">
                    {
                        shopping.map((item,index)=>(
                            <div key={index}>
                                <h2>{item.styleItem.title}</h2>
                                <span>{item.styleItem.desc}</span>
                                <p>
                                    <img src={item.styleItem.picUrlList[0]}/>
                                    <img src={item.styleItem.picUrlList[1]}/>
                                </p>
                            </div>
                        ))
                    }
                </div>
                {
                   topcate.map(item=>(
                    <div className="silder" key={item.titlePicUrl}>
                        <img src={item.titlePicUrl}/>
                        <ul>
                            {
                                item.itemList.map(tem=>(
                                    <li key={tem.id}>
                                        <img src={tem.listPicUrl}/>
                                        <p>{tem.name}<br/><i>￥{tem.counterPrice}</i></p>
                                    </li> 
                                ))
                            }
                        </ul>
                    </div>
                   )) 
                }
               
               
                <div className="foot">
                    <div>
                        <a href="#">下载App</a>
                        <a href="#">电脑版</a>
                    </div>
                    <p>网易公司版权所有 1997-2019</p>
                    <p>商品经营许可证:&nbsp;JY13301080111719</p>
                </div>
              </div>
            </div>
        )
      
    }
}
const mapStateToProps = (state)=>({
    bannerlist:state.home.bannerlist,
    cate:state.home.cate,
    activity:state.home.activity,
    tag:state.home.tag,
    hot:state.home.hot,
    popular:state.home.popular,
    flash:state.home.flash,
    newitem:state.home.newitem,
    shopping:state.home.shopping,
    topcate:state.home.topcate,
    tem:state.home.tem
})
const mapDispatchToProps = (dispatch)=>({
    
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)