function FindProxyForURL(url, host)
{
var proxy_yes = "PROXY 123.206.49.224:3128";
var proxy_no = "DIRECT";
var ip = dnsResolve(host);


if (shExpMatch(url,"*music.163.com*")) { return proxy_yes; }
// Proxy anything else
return proxy_no;
}
