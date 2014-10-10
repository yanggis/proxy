function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = '192.168.1.112:808';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
        "http://hot.vrs.sohu.com/*",
        "http://vv.video.qq.com/*",
        "www.cyberciti.biz",
        "mail.google.com",
        "www.pandora.com",
        "www.google.com"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( localHostOrDomainIs(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }
    return "DIRECT";
}
