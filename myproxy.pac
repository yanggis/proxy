function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = “PROXY proxy.uku.im:8888″;
var proxy_no = “DIRECT”;

//unlock youku
if (shExpMatch(url, “*v.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*api.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*play.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*openapi.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*play.api.3g.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*tv.api.3g.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*api.3g.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*i.play.api.3g.youku.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*a.play.api.3g.youku.com*”)) { return proxy_yes; }

//unlock tengxun
if (shExpMatch(url, “*s.plcloud.music.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*i.y.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*vv.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*tt.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*ice.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*tjsa.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*a10.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*xyy.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*vcq.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*vsh.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*vbj.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*bobo.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*flvs.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*bkvv.video.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*info.zb.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*zb.s.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*3g.music.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*mqqplayer.3g.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*proxy.music.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*mqqplayer.3g.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*proxymc.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*sns.video.qq.com*”)) { return proxy_yes; }

//unlock sohu
if (shExpMatch(url, “*hot.vrs.sohu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*live.tv.sohu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*pad.tv.sohu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*my.tv.sohu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*api.tv.sohu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*access.tv.sohu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*zb.s.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*zb.s.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*zb.s.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*zb.s.qq.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*zb.s.qq.com*”)) { return proxy_yes; }

if (shExpMatch(url, “http://www.hulu.com*”)) { return proxy_yes; }
if (shExpMatch(url, “*hulu.com*”)) { return proxy_yes; }
// Proxy anything else
return proxy_no;
}
