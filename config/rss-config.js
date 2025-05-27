// RSS源接口
// name: 信息源名称
// url: RSS URL地址
// category: 分类名称

/**
 * @typedef {object} RssSource
 * @property {string} name - 信息源名称
 * @property {string} url - RSS URL地址
 * @property {string} category - 分类名称
 */

// 默认配置
export const config = {
  sources: [
    {
      name: "太隐",
      url: "https://wangyurui.com/feed.xml",
      category: "个人博客",
    },
    {
      name: "更好生活",
      url: "https://quaily.com/jiayifun/feed/atom",
      category: "个人博客",
    },
    {
      name: "虹线",
      url: "https://1q43.blog/feed",
      category: "个人博客",
    },
    {
      name: "Owen的博客",
      url: "https://www.owenyoung.com/atom.xml",
      category: "个人博客",
    },
    {
      name: "壹葦可航",
      url: "https://letter.justgoidea.com/feed/atom",
      category: "个人博客",
    },
    {
      name: "槿呈Goidea",
      url: "https://justgoidea.com/rss.xml",
      category: "个人博客",
    },
    {
      name: "Another Dayu",
      url: "https://anotherdayu.com/feed/",
      category: "个人博客",
    },
    {
      name: "阮一峰的网络日志",
      url: "http://www.ruanyifeng.com/blog/atom.xml",
      category: "技术博客",
    },
    {
      name: "酷壳",
      url: "https://coolshell.cn/feed",
      category: "技术博客",
    },
    {
      name: "观人看时间",
      url: "https://feedpress.me/wx-iwatch1024",
      category: "wx-rss",
    },
    {
      name: "城市数据团",
      url: "http://www.jintiankansha.me/rss/GEYTAOBVGZ6DMZDEGEZGCNZXGQ4TCODBGQ2GKZLBGBSGEMBSMM4DMYRXGZRGKYLBGMYGKNJWMY3A====",
      category: "wx-rss",
    },
  ],
  maxItemsPerFeed: 30,
  dataPath: "./data",
}

export const defaultSource = config.sources[0]

/**
 * @param {string} url
 * @returns {RssSource | undefined}
 */
export function findSourceByUrl(url) {
  return config.sources.find((source) => source.url === url)
}

export function getSourcesByCategory() {
  return config.sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = []
    }
    acc[source.category].push(source)
    return acc
  }, {})
}
