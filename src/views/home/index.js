import React from "react"
import "./index.css"
import { Carousel} from 'antd';
import "@/static/iconfont/iconfont.css"
import img1 from '@/static/images/home1.jpg'
import img2 from '@/static/images/home2.jpg'
import img3 from '@/static/images/home3.jpg'
import img4 from '@/static/images/home4.jpg'
import img5 from '@/static/images/home5.jpg'
import img6 from '@/static/images/home6.jpg'
import img8 from '@/static/images/home8.png'
import img9 from '@/static/images/home9.png'
import img11 from '@/static/images/home11.png'
import bg1 from '@/static/images/bg1.png'
import hot1 from '@/static/images/hot1.png'
import hot2 from '@/static/images/hot2.png'
import recomd1 from '@/static/images/recomd1.png'
import recomd2 from '@/static/images/recomd2.png'
import list1 from '@/static/images/list1.png'
import slider1 from '@/static/images/slider1.jpg'
import slider2 from '@/static/images/slider2.png'
export default class Home extends React.Component{
    render(){
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
                    <div className="home_auto">
                        <img src={img1}/>
                    </div>
                    <div>
                        <img src={img2}/>
                    </div>
                    <div>
                        <img src={img3}/>
                    </div>
                    <div>
                        <img src={img4}/>
                    </div>
                    <div>
                        <img src={img5}/>
                    </div>
                    <div>
                        <img src={img6}/>
                    </div>
                    <div>
                        <img src={img5}/>
                    </div>
                    <div>
                        <img src={img6}/>
                    </div>

                </Carousel>
                <div className="home_tip">
                    <p><i className="iconfont">&#xe69d;</i><span>网易自营品牌</span></p> 
                    <p><i className="iconfont">&#xe620;</i><span>30天无忧退货</span></p> 
                    <p><i className="iconfont">&#xe632;</i><span>48小时快速退款</span></p> 
                </div>
                <ul className="home_sort">
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                    <li>
                        <img src={img9}/>
                        <span>新品首发</span>
                    </li>
                </ul>
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
                        <li className="provider_bg" style={{backgroundImage:`url(${bg1})`}}>
                            <p>海外制造商</p>
                            <span>9.9元起<i>上新</i></span>
                        </li>
                        <li className="provider_bg" style={{backgroundImage:`url(${bg1})`}}>
                            <p>海外制造商</p>
                            <span>29.9元起</span>
                        </li>
                        <li className="provider_bg" style={{backgroundImage:`url(${bg1})`}}>
                            <p>海外制造商</p>
                            <span>29.9元起</span>
                        </li>
                        <li className="provider_bg" style={{backgroundImage:`url(${bg1})`}}>
                            <p>海外制造商</p>
                            <span>29.9元起</span>
                        </li>
                    </ul>
                </div>
                <div className="hot leri">
                    <h2 className="hea">类目热销榜</h2>
                    <div className="hot_t">
                        <p>
                            <span>热销榜</span>
                            <img src={hot1}/>
                        </p>
                        <p>
                            <span>热销榜</span>
                            <img src={hot1}/>
                        </p>
                    </div>
                    <ul>
                        <li>
                            <span>居家生活榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>居家生活榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>热销榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>热销榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>热销榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>热销榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>热销榜</span>
                            <img src={hot2}/>
                        </li>
                        <li>
                            <span>热销榜</span>
                            <img src={hot2}/>
                        </li>
                    </ul>
                </div>
                <div className="recommond leri">
                     <h2 className="recommond_t hea">
                        <span>人气推荐</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <div className="recommond_m">
                        <img src={recomd1}/>
                        <div>
                            <span>好货内部价</span>
                            <p>提花拉丝三件套，可折叠可以</p>
                            <i>提花拉丝三件套，可折叠可以</i>
                            <em>￥159</em>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套  可折叠<i>￥159</i></p>
                            <span>特价</span>
                            <span>特价</span>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套<i>￥159</i></p>
                            <span>加价购</span>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套<i>￥159</i></p>
                            <span>加价购</span>
                        </li>
                    </ul>
                   
                </div>
                <div className="limitTime leri">
                    <h2 className="limitTime_t hea">
                        <span>限时购</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <ul>
                        <li>
                            <img src={recomd2}/>
                            <span>￥143</span>
                            <i>￥100</i>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <span>￥143</span>
                            <i>￥100</i>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <span>￥143</span>
                            <i>￥100</i>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <span>￥143</span>
                            <i>￥100</i>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <span>￥143</span>
                            <i>￥100</i>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <span>￥143</span>
                            <i>￥100</i>
                        </li>
                    </ul>
                </div>
                <div className="newProduct leri">
                    <h2 className="newProduct_t hea">
                        <span>新品首发</span>
                        <a href="#">更多<i className="iconfont">&#xe607;</i></a>
                    </h2>
                    <ul>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套 可折叠<i>￥159</i></p>
                            <span>加价购</span>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套 可折叠<i>￥159</i></p>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套 可折叠<i>￥159</i></p>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套 可折叠<i>￥159</i></p>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套 可折叠<i>￥159</i></p>
                        </li>
                        <li>
                            <img src={recomd2}/>
                            <p>提花拉丝三件套 可折叠<i>￥159</i></p>
                        </li>
                    </ul>
                </div>
                <div className="list leri">
                    <div>
                        <h2>9.9超值一口价</h2>
                        <span>花点小钱，过得舒服</span>
                        <p>
                            <img src={list1}/>
                            <img src={list1}/>
                        </p>
                    </div>
                    <div>
                        <h2>9.9超值一口价</h2>
                        <span>花点小钱，过得舒服</span>
                        <p>
                            <img src={list1}/>
                            <img src={list1}/>
                        </p>
                    </div>
                    <div>
                        <h2>9.9超值一口价</h2>
                        <span>花点小钱，过得舒服</span>
                        <p>
                            <img src={list1}/>
                            <img src={list1}/>
                        </p>
                    </div>
                    <div>
                        <h2>9.9超值一口价</h2>
                        <span>花点小钱，过得舒服</span>
                        <p>
                            <img src={list1}/>
                            <img src={list1}/>
                        </p>
                    </div>
                </div>
                <div className="silder">
                    <img src={slider1}/>
                    <ul>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i>></p>
                        </li>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i></p>
                            <span>250直减券</span>
                        </li>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i></p>
                        </li>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i></p>
                        </li>
                    </ul>
                </div>
                <div className="silder">
                    <img src={slider1}/>
                    <ul>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i><em>￥200</em></p>
                            <span>奥莱特惠</span>

                        </li>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i></p>
                        </li>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i><em>￥200</em></p>
                            <span>奥莱特惠</span>
                        </li>
                        <li>
                            <img src={slider2}/>
                            <p>提花拉丝三件套 可折叠<br/><i>￥159</i></p>
                        </li>
                    </ul>
                </div>
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