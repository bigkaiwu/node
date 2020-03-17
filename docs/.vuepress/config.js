const path = require('path');

module.exports = {
    title: '个人文档',
    description: '练习文档',
    // 配置侧边栏
    themeConfig: {
      sidebar: {
        '/guide/': genSidebarConfig('Guide')
      },
      nav: [
        { text: 'Home', link: '/' },                      // 根路径
        { text: 'Guide', link: '/guide/' },
        { text: 'External', link: 'https://google.com' }, // 外部链接
        // 下拉列表显示分组
        {
          text: '高级',
          items: [
            { 
              text: '算法', 
              items: [
                { text: '冒泡', link: '/test/one/' },
                { text: '快速', link: '/test/two/' }
              ] 
            },
            { 
              text: '设计模式', 
              items: [
                { text: '工厂', link: '/test/one/' },
                { text: '单例', link: '/test/two/'},
              ] 
            },
          ]
        }
      ]
    },
    //配置图片路径
    configureWebpack: {
      resolve: {
        alias: {
          '@vuepress': path.join(__dirname, '../images/vuepress'),
          //上面../images/vuepress路径是相对于config.js文件的路径。
        }
      }
    }
  }

  function genSidebarConfig (title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'a',
          'b'
        ]
      }
    ]
  }