// const HOST = 'http://m.maoyan.com';
const HOST = 'http://localhost:3000';
/*
正在热映的初始请求
method： GET
*/
const CATELIST_APT_AJAX = HOST + '/ajax/catelist';
/*
正在热映的更多请求
method： GET
params: movieIds
*/
const CATELIST_ITEMLIST_API_AJAX = HOST + '/ajax/catelist/itemlist';

export default {
    CATELIST_APT_AJAX,
    CATELIST_ITEMLIST_API_AJAX
}
//https://h5api.m.tmall.com/h5/com.taobao.tmallsearch.service.tmallnavservice/1.0