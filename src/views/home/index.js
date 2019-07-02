import React from "react"
import "./index.css"
import { Carousel,Button } from 'antd';
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
                        <li className="iconfont">&#xe606;</li>
                    </ul>
              </div>
              <div className="main">
                  {/* 轮播图 */}
                <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                            </div>
                            <div>
                            <h3>2</h3>
                            </div>
                            <div>
                            <h3>3</h3>
                            </div>
                            <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                    <Button type="link" >
                    Link
                    </Button>
                    <Button type="primary" >
          Primary
        </Button>
              </div>
           
        
            </div>
        )
    }
}