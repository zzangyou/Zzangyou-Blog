module.exports = {
  "title": "zzangyou",
  "description": "a cool blog",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "留言板",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "zzangyou",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-bgm-player",
      {
        audios: [
          // 本地文件示例
          {
            name: '回강남역 4번 출구',
            artist: 'Plastic / Fallin` Dild',
            url: 'https://assets.smallsunnyfox.com/music/2.mp3',
            cover: 'https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg'
          },
         
        ]
      }], 
      [
        'cursor-effects',
        {
           size: 2, // size of the particle, default: 2
           shape: 'star', // shape of the particle, default: 'star'
           zIndex: 999999999, // z-index property of the canvas, default: 999999999
        }
     ],
    ['go-top'], 
     [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["blackCat"],

        modelStyle: {
          position: "fixed",
          left: "40px",
          bottom: "75px",
          opacity: "0.9",
          zIndex: 99999
        },
        btnStyle:{
          position: "fixed",
          left: "10px",
          bottom: "110px",
          opacity: "0.9",
          zIndex: 99999
        },
        messages:  {
    welcome:'欢迎来到我的小窝',
    home: '所有的为时已晚，其实都是恰逢其时',
    theme: '好吧，希望你能喜欢我的其他小伙伴。',
    close: '下次记得还要来看我噢'
  },
       messageStyle:{
        position: "fixed",
        left: '150px',
        bottom: '200px'
  }
      }
    ],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'j4iQmpSNziYUaivyJwO25Uir-gzGzoHsz',// your appId
        appKey: '3VtzJ8zJ9wA0IKgNcRjTM4Fq', // your appKey
      }
    }]
  ]
}