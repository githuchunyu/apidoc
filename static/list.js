[
  {
    "name": "stocks",
    "title": "接口块组",
    "description": "这是这一块的介绍文字",
    "list": [
      {
        "type": "GET",
        "url": "some/do",
        "title": "这是接口的标题名称",
        "auth": "all",
        "name": "some_do",
        "description": "这是一段接口的简要介绍",
        "request": [
          {
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "股票字符串",
            "require":true,
            "example":"SZ000001"
          },
          {
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "除权模式",
            "require":false,
            "default":"fa",
            "options":[
              {"option":"fa","label":"前复权"},
              {"option":"ba","label":"后复权"},
              {"option":"no","label":"不复权"}
            ]
          },
          {
            "type": "String",
            "optional": false,
            "field": "from_date",
            "description": "开始日期，如果不填，默认为所有数据的起点或终点（day_offset为负）",
            "require":false,
            "example":"2018-01-01",
            "default":"推算"
          },
          {
            "type": "Int",
            "optional": false,
            "field": "day_offset",
            "description": "开始日期的偏移，>0往后偏移，<0往前偏移",
            "require":false,
            "example":"70",
            "default":"70"
          },
          {
            "type": "Int",
            "optional": false,
            "field": "day_count",
            "description": "包含天数，必须>=0",
            "require":false,
            "example":"70",
            "default":"70"
          }
        ],
        "response":[
          {
            "field":"data",
            "type":"String",
            "description":""
          },
          {
            "field":"data.dates",
            "type":"Array[]",
            "description":"日期列表"
          },
          {
            "field":"data.values",
            "type":"Array[]",
            "description":"数据列表，[开盘,收盘,最高,最低]"
          },
          {
            "field":"data.volume",
            "type":"Array[]",
            "description":"交易量列表"
          }
        ],
        "example":  {
          "dates":["20180101"],
          "values":[[0,0,0,0]],
          "volume":[0]
        }
      }
    ]
  }
]
