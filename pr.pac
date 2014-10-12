function FindProxyForURL(url, host)
{
// variable strings to return
var proxy_yes = "PROXY 192.168.1.112:808";
var proxy_no = "DIRECT";
if (shExpMatch(url, "http://hot.vrs.sohu.com/.*")) { return proxy_yes; }
if (shExpMatch(url, "http://vv.video.qq.com/.*")) { return proxy_yes; }
if (shExpMatch(url, "http://api.letv.com/.*")) { return proxy_yes; }
// Proxy anything else
return proxy_no;
}
