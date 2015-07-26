function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY yanggis.f3322.org:3128";
var proxy_no = "DIRECT";
var ip = dnsResolve(host);

//if (shExpMatch(url,"*180.153.225.136*")) { return proxy_yes; }
//if (shExpMatch(url,"*118.244.244.124*")) { return proxy_yes; }
//if (shExpMatch(url,"*210.129.145.150*")) { return proxy_yes; }
//if (shExpMatch(url,"*182.16.230.98*")) { return proxy_yes; }
//if (shExpMatch(url,"*61.135.196.99*")) { return proxy_yes; }
//if (shExpMatch(url,"*220.181.185.150*")) { return proxy_yes; }
//if (shExpMatch(url,"*111.13.127.46*")) { return proxy_yes; }
//if (shExpMatch(url,"*211.151.50.10*")) { return proxy_yes; }
//if (shExpMatch(url,"*211.151.157.15*")) { return proxy_yes; }
//if (shExpMatch(url,"*123.126.99.57*")) { return proxy_yes; }
//if (shExpMatch(url,"*123.126.99.39*")) { return proxy_yes; }
//if (shExpMatch(url,"*220.181.154.137*")) { return proxy_yes; }
if (shExpMatch(url,"*ip138.com*")) { return proxy_yes; }
if (shExpMatch(url,"*xl.api.3g.youku.com*")) { return proxy_no; }
// no proxy
if (url.substring(7, 7 + ip.length) == ip) {  return "192.168.1.104:3128";}  
if (shExpMatch(url,"*google*")) { return proxy_no; }
// youku
//if (shExpMatch(url,"*59.175.148.231*")) { return proxy_no; }
//if (shExpMatch(url,"*182.140.226.79*")) { return proxy_no; }
//if (shExpMatch(url,"*182.140.226.173*")) { return proxy_no; }
//if (shExpMatch(url,"*182.140.226.78*")) { return proxy_no; }
//if (shExpMatch(url,"*61.147.204.232*")) { return proxy_no; }
//if (shExpMatch(url,"*61.147.204.176*")) { return proxy_no; }
//if (shExpMatch(url,"*61.160.198.240*")) { return proxy_no; }
//if (shExpMatch(url,"*61.160.199.76*")) { return proxy_no; }
//if (shExpMatch(url,"*61.183.116.141*")) { return proxy_no; }
//if (shExpMatch(url,"*119.147.157.39*")) { return proxy_no; }
//if (shExpMatch(url,"*119.147.157.21*")) { return proxy_no; }
//if (shExpMatch(url,"*119.97.154.176*")) { return proxy_no; }
//if (shExpMatch(url,"*119.97.154.138*")) { return proxy_no; }
//if (shExpMatch(url,"*119.84.43.19*")) { return proxy_no; }
//if (shExpMatch(url,"*119.84.43.45*")) { return proxy_no; }
//if (shExpMatch(url,"*119.84.113.46*")) { return proxy_no; }
//if (shExpMatch(url,"*118.180.19.110*")) { return proxy_no; }
//if (shExpMatch(url,"*124.232.159.81*")) { return proxy_no; }
//if (shExpMatch(url,"*222.216.189.233*")) { return proxy_no; }
//if (shExpMatch(url,"*222.216.189.175*")) { return proxy_no; }
//if (shExpMatch(url,"*116.10.191.25*")) { return proxy_no; }
//if (shExpMatch(url,"*116.211.116.113*")) { return proxy_no; }
//sohu
//if (shExpMatch(url,"*36.48.159.227*")) { return proxy_no; }
//if (shExpMatch(url,"*36.48.159.234*")) { return proxy_no; }
// Proxy anything else
return proxy_yes;
}
