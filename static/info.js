{
    "name": "ruok接口文档",
    "intro": "ruok网络服务统一接口中心",
    "title": "API文档",
    "urlPro": "https://api.company.com/",
    "urlDev": "https://apitest.company.com/",
    "description": "这里是描述信息",
    "example":{
        "code":0,
        "message":"",
        "data":""
    },
    "stateCode": [
        {"code":"0","message":"成功","description":"没有异常且没有逻辑错误"},
        {"code":"11","message":"缺少token","description":"用户或管理员登录时需要token"},
        {"code":"12","message":"token不正确或已过期","description":"上述token不正确或已过期"},
        {"code":"21","message":"传入参数验证不通过","description":"参数的数量、格式等不符合要求"},
        {"code":"22","message":"缺少必要的cookie","description":"有些接口可能需要一些cookie数据"},
        {"code":"23","message":"验证码错误","description":"手机验证码错误"},
        {"code":"24","message":"需要管理员权限","description":"管理员没有登录的情况下提示此错误"},
        {"code":"25","message":"权限不足","description":"每个接口的权限不尽相同，如果权限不足时提示此错误"},
        {"code":"71","message":"请求过于频繁","description":"接口自定义了请求频率限制"},
        {"code":"72","message":"请求超过每小时限额","description":"接口自定义了请求频率限制"},
        {"code":"73","message":"请求超过每天限额","description":"接口自定义了请求频率限制"},
        {"code":"74","message":"不在允许的时间范围内","description":"接口自定义了可以请求此接口的时间限定"},
        {"code":"81","message":"记录已存在","description":"创建记录时错误"},
        {"code":"82","message":"记录不存在","description":"删除记录时错误"},
        {"code":"83","message":"不能重复操作","description":"不能重复操作"},
        {"code":"84","message":"数据超出记录范围","description":"数据超出记录范围"},
        {"code":"85","message":"数据存在其他依赖","description":"不能轻易的修改某些数据记录"},
        {"code":"86","message":"数据已经生效，不能再修改","description":"生效后不能再修改的数据"},
        {"code":"98","message":"第三方接口返回错误","description":"微信等接口调用返回错误"},
        {"code":"99","message":"服务器异常","description":"语法错误导致的其他异常"}
    ]
}
