function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = "yanggis.f3322.org:3128";
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
    //"p.l.youku.com",
    //"v.l.youku.com",
    //"hz.youku.com",
    "s.webp2p.letv.com",
    "selector.webp2p.letv.com",
    "vv.play.aiseet.atianqi.com", 
    "dpool.sina.com.cn", 
    "module.youku.com", 
    "pl.youku.com", 
    "v.pptv.com", 
    "hot2.vrs.sohu.com", 
    "api.launch.hd.sohu.com", 
    "api.hubo.ott.sohu.com", 
    "v2.tudou.com", 
    "gslb.letvapp.net", 
    "v.youku.com", 
    "api.youku.com", 
    "play.youku.com", 
    "s.plcloud.music.qq.com", 
    "i.y.qq.com", 
    "hot.vrs.sohu.com", 
    "live.tv.sohu.com", 
    "pad.tv.sohu.com", 
    "my.tv.sohu.com", 
    "hot.vrs.letv.com", 
    "data.video.qiyi.com", 
    "cache.video.qiyi.com", 
    "cache.vip.qiyi.com", 
    "v.api.hunantv.com", 
    "vv.video.qq.com", 
    "tt.video.qq.com", 
    "ice.video.qq.com", 
    "tjsa.video.qq.com", 
    "a10.video.qq.com", 
    "xyy.video.qq.com", 
    "vcq.video.qq.com", 
    "vsh.video.qq.com", 
    "vbj.video.qq.com", 
    "bobo.video.qq.com", 
    "flvs.video.qq.com", 
    "bkvv.video.qq.com", 
    "qzs.qq.com", 
    "info.zb.qq.com", 
    "geo.js.kankan.xunlei.com", 
    "web-play.pptv.com", 
    "web-play.pplive.cn", 
    "dyn.ugc.pps.tv", 
    "v.pps.tv", 
    "inner.kandian.com", 
    "ipservice.163.com", 
    "so.open.163.com", 
    "zb.s.qq.com", 
    "ip.kankan.xunlei.com", 
    "vxml.56.com", 
    "music.sina.com.cn", 
    "play.baidu.com", 
    "v.iask.com", 
    "tv.weibo.com", 
    "wtv.v.iask.com", 
    "video.sina.com.cn", 
    "www.yinyuetai.com", 
    "api.letv.com", 
    "live.gslb.letv.com", 
    "static.itv.letv.com", 
    "ip.apps.cntv.cn", 
    "vdn.apps.cntv.cn", 
    "vdn.live.cntv.cn", 
    "vip.sports.cntv.cn", 
    "a.play.api.3g.youku.com", 
    "i.play.api.3g.youku.com", 
    "api.3g.youku.com", 
    "tv.api.3g.youku.com", 
    "play.api.3g.youku.com", 
    "play.api.3g.tudou.com", 
    "tv.api.3g.tudou.com", 
    "api.3g.tudou.com", 
    "api.tv.sohu.com", 
    "access.tv.sohu.com", 
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
    "mqqplayer.3g.qq.com", 
    "proxy.music.qq.com", 
    "proxymc.qq.com", 
    "ip2.kugou.com", 
    "ip.kugou.com", 
    "client.api.ttpod.com", 
    "mobi.kuwo.cn", 
    "mobilefeedback.kugou.com", 
    "tingapi.ting.baidu.com", 
    "music.baidu.com", 
    "serviceinfo.sdk.duomi.com", 
    "music.163.com", 
    "www.xiami.com", 
    "spark.api.xiami.com", 
    "iplocation.geo.qiyi.com", 
    "sns.video.qq.com", 
    "v5.pc.duomi.com", 
    "tms.is.ysten.com", 
    "internal.check.duokanbox.com", 
    "openapi.youku.com", 
    "ip138.com"
    //====================
    //"lives.l.qq.com",
    //"pay.video.qq.com",
    //"omgmta.qq.com",
    //"mobile.video.qq.com",
    //"video.coral.qq.com",
    //"dp3.qq.com",
    //"sns.video.qq.com",
    //"live.qq.com"
    //====================
);

for(var i=0; i<proxylist.length; i++) {
  var value = proxylist[i];
  if ( localHostOrDomainIs(host, value) ) { return "PROXY "+proxyserver;}
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
