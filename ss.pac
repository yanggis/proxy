function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY yanggis.f3322.org:3128";
var proxy_no = "DIRECT";
var ip = dnsResolve(host);
//if (url.substring(7, 7 + ip.length) == ip) {  return proxy_no;  }  
// no proxy
if (shExpMatch(url,"*ip138.com*")) { return proxy_no; }
if (shExpMatch(url,"*google*")) { return proxy_no; }
if (shExpMatch(url,"*baidu.com*")) { return proxy_no; }
if (shExpMatch(url,"*59.175.148.231*")) { return proxy_no; }
if (shExpMatch(url,"*182.140.226.79*")) { return proxy_no; }
if (shExpMatch(url,"*182.140.226.78*")) { return proxy_no; }
if (shExpMatch(url,"*61.147.204.232*")) { return proxy_no; }
if (shExpMatch(url,"*61.160.199.76*")) { return proxy_no; }
if (shExpMatch(url,"*119.147.157.39*")) { return proxy_no; }
if (shExpMatch(url,"*119.147.157.21*")) { return proxy_no; }
if (shExpMatch(url,"*119.84.43.19*")) { return proxy_no; }
// Proxy anything else
return proxy_yes;
}
