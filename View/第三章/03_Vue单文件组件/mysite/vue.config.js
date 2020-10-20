module.exports = {
    lintOnSave:false, //关闭eslint
    devServer:{
        // 每次修改完这个文件,一定要重新启动才能生效
        // mock数据模拟
        before(app,server){
            // 接口d
            app.get('/api/cartList',(req,res)=>{
                res.json({
                    result:[
                        { id: 1, title: "Vue实战开发", price: 188, active: true, count: 1 },
                        { id: 2, title: "React实战开发", price: 288, active: true, count: 1 },
                    ]
                })
            })
        }
    }
}