function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY yanggis.f3322.org:3128";
var proxy_no = "DIRECT";
// no proxy
if (shExpMatch(url,"*ip138.com*")) { return proxy_no; }
if (shExpMatch(url,"*google*")) { return proxy_no; }
if (shExpMatch(url,"*baidu.com*")) { return proxy_no; }
if (shExpMatch(url,"*/youku/*")) { return proxy_no; }

// Proxy anything else
return proxy_yes;
}
