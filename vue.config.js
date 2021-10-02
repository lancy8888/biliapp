module.exports = {
    devServer: {
        port: 1255,
        proxy: {
            "/x": {
                target: "https://api.bilibili.com",
                onProxyReq(proxyReq) {
                    proxyReq.setHeader("origin","https://api.bilibili.com");
                    proxyReq.setHeader("referer","https://www.bilibili.com/v/channel");  
                }
            },
        },
    },
};