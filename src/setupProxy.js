const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/api",{
        target:"https://www.littleemmayang.com",
        changeOrigin:true
    }))
}