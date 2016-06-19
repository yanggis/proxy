function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = "104.236.184.163:4567";
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
    "sohu.vod.cdn.myqcloud.com",
    "sohu.vodnew.lxdns.com",
    "tools.aplusapi.pptv.com",
    "dispatcher.video.sina.com.cn",
    "plt.data.pplive.com",
    "epg.api.pptv.com",
    "117.135.161.99",
    "115.182.217.26", //cctv
    "mobile.api.hunantv.com",
    "ac.qq.com",
    "douban.fm",
    "www.kuwo.cn",
    "220.249.243.70",  //QQ
    "117.185.116.152", //QQ
    "101.227.139.217", //QQ
    "59.37.96.220", //QQ
    "140.207.69.99", //QQ
    "182.254.34.151", //QQ
    "103.7.30.89", //QQ
    "103.7.31.186", //QQ
    "14.18.245.250", //QQ
    "182.254.116.117", //QQ
    "118.244.244.124",
    "122.72.82.31",
    "123.126.99.39",
    "123.126.99.57",
    "180.153.225.136",
    "182.16.230.98",
    "210.129.145.150",
    "211.151.157.15",
    "211.151.50.10",
    "220.181.154.137",
    "220.181.185.150",
    "api.hubo.ott.sohu.com",
    "api.launch.hd.sohu.com",
    "qc.hd.cp45.ott.cibntv.net",
    "apistat.wasu.cn",
    "dyn.ugc.pps.tv",
    "ip.kankan.xunlei.com",
    "mobilefeedback.kugou.com",
    "music.sina.com.cn",
    "my.tv.sohu.com",
    "openapi.youku.com",
    "pay.tudou.com",
    "pay.video.qq.com",
    "pay.youku.com",
    "paybak.video.qq.com",
    "play.g3proxy.lecloud.com",
    "sohu.vodnew.lxdns.com",
    "st.live.letv.com",
    "stat.3g.music.qq.com",
    "tms.is.ysten.com",
    "tt.video.qq.com",
    "tv.aiseet.atianqi.com",
    "user-mobile.youku.com",
    "v5.pc.duomi.com",
    "video.sina.com.cn",
    "web-play.pplive.cn",
    "xl.api.3g.youku.com",
    "sasdk.3g.qq.com",
    "live.g3proxy.lecloud.com",
    "gslb.live.video123456.com",
    "acc.music.qq.com",
    "api.appsdk.soku.com",
    "app.bilibili.com",
    "www.soku.com",
    "wtv.v.iask.com",    
    "api.tv.sohu.com",
    "pad.api.hunantv.com",
    "www.bilibili.com",
    "bangumi.bilibili.com",
    "bkvv.play.aiseet.atianqi.com",
    "vv.play.aiseet.atianqi.com", 
    "dpool.sina.com.cn", 
    "module.youku.com", 
    "pl.youku.com", 
    "v.pptv.com", 
    "hot2.vrs.sohu.com", 
    "api.launch.hd.sohu.com", 
    "api.hubo.ott.sohu.com", 
    "v2.tudou.com", 
    "v.youku.com", 
    "play.youku.com", 
    "s.plcloud.music.qq.com", 
    "i.y.qq.com", 
    "hot.vrs.sohu.com", 
    "hot.vrs.letv.com", 
    "cache.video.qiyi.com", 
    "cache.vip.qiyi.com", 
    "v.api.hunantv.com", 
    "vv.video.qq.com", 
    "flvs.video.qq.com", 
    "bkvv.video.qq.com", 
    "qzs.qq.com", 
    "info.zb.qq.com", 
    "geo.js.kankan.xunlei.com", 
    "web-play.pplive.cn", 
    "v.pps.tv", 
    "ipservice.163.com", 
    "so.open.163.com", 
    "vxml.56.com", 
    "play.baidu.com", 
    "v.iask.com", 
    "www.yinyuetai.com", 
    "api.letv.com", 
    "live.gslb.letv.com", 
    "static.itv.letv.com", 
    "static.api.sports.letv.com",
    "ip.apps.cntv.cn", 
    "vdn.apps.cntv.cn", 
    "vdn.live.cntv.cn", 
    "a.play.api.3g.youku.com", 
    "i.play.api.3g.youku.com", 
    "api.3g.youku.com", 
    "tv.api.3g.youku.com", 
    "play.api.3g.tudou.com", 
    "tv.api.3g.tudou.com", 
    "api.3g.tudou.com", 
    "iface.iqiyi.com", 
    "iface2.iqiyi.com", 
    "cache.m.iqiyi.com", 
    "dynamic.app.m.letv.com", 
    "dynamic.meizi.app.m.letv.com", 
    "dynamic.search.app.m.letv.com", 
    "dynamic.live.app.m.letv.com", 
    "listso.m.areainfo.ppstream.com", 
    "epg.api.pptv.com", 
    "play.api.pptv.com", 
    "m.letv.com", 
    "api.mob.app.letv.com", 
    "interface.bilibili.com", 
    "3g.music.qq.com", 
    "proxy.music.qq.com", 
    "proxymc.qq.com", 
    "ip2.kugou.com", 
    "ip.kugou.com", 
    "client.api.ttpod.com", 
    "mobi.kuwo.cn", 
    "tingapi.ting.baidu.com", 
    "music.baidu.com", 
    "serviceinfo.sdk.duomi.com", 
    "music.163.com", 
    "www.xiami.com", 
    "spark.api.xiami.com", 
    "iplocation.geo.qiyi.com", 
    "sns.video.qq.com", 
    "ip138.com"
);

var reglist = new Array(
     "*121.46.19.*", //s
     "*123.125.123.*" //s
);
  
  for(var i=0; i<proxylist.length; i++) {
    var value = proxylist[i];
    if ( localHostOrDomainIs(host, value) ) { return "PROXY "+proxyserver;}
   }
   
 for(var i=0; i<reglist.length; i++) {
  var value = reglist[i];
   if ( shExpMatch(url, value) ) { return "PROXY "+proxyserver;}
  }


//youku
if (shExpMatch(url, "*youku.com*") 
   && (!shExpMatch(url, "*static.youku.com*"))
   && (!shExpMatch(url, "*static.atm.youku.com*"))
   && (!shExpMatch(url, "*p.l.youku.com*"))
   && (!shExpMatch(url, "*v.l.youku.com*"))
   && (!shExpMatch(url, "*html.atm.youku.com*"))
   && (!shExpMatch(url, "*hz.youku.com*"))
   ) {return "PROXY "+proxyserver;}
return "DIRECT";
}
