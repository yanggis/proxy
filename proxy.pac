function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = "166.111.77.32:3128";
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
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
     "ip.cn"
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
