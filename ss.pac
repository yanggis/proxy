function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY yanggis.f3322.org:3128";
var proxy_no = "DIRECT";
var ip = dnsResolve(host);


if (shExpMatch(url,"*ip138.com*")) { return proxy_yes; }
if (shExpMatch(url,"*weather.com*")) { return proxy_no; }
// no proxy
if (url.substring(7, 7 + ip.length) == ip) {  return proxy_no;}  
if (shExpMatch(url,"*google*")) { return proxy_no; }

// Proxy anything else
return proxy_no;
}
