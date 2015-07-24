function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY yanggis.f3322.org:3128";
var proxy_no = "DIRECT";
// no proxy
if (shExpMatch(url,"*ip138.com*")) { return proxy_no; }
if (shExpMatch(url,"*google*")) { return proxy_no; }
if (shExpMatch(url,"*baidu.com*")) { return proxy_no; }
if (shExpMatch(url,"*59.175.148.231*")) { return proxy_no; }
if (shExpMatch(url,"*182.140.226.79*")) { return proxy_no; }
if (shExpMatch(url,"*182.140.226.78*")) { return proxy_no; }
if (shExpMatch(url,"*61.147.204.232*")) { return proxy_no; }
if (shExpMatch(url,"*61.160.199.76*")) { return proxy_no; }
// Proxy anything else
return proxy_yes;
}
