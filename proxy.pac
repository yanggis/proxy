function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var tsinghuaServer = "166.111.72.242:3128";
    var guangdaServer = "yanggis:8188";
    //159.226.249.93:8080 zky
    // qh
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist1 = new Array(
    "www.nature.com",
    "link.springer.com",
    "onlinelibrary.wiley.com",
    "www.springer.com",
    "ip.cn"
);

    var proxylist2 = new Array(
    "webofscience.com",
    "sciencemag.org",
    "ieeexplore.ieee.org",
    "www.sciencedirect.com",
    "acw.sciencedirect.com",
    "acw.elsevier.com",
    "journals.sagepub.com",
    "journals.cambridge.org",
     "www.cnki.net",
    "kns.cnki.net",
    "navi.cnki.net",
    "docdownload.cnki.net",
    "my.gzhu.edu.cn",
    "www.gzhu.edu.cn",
    "cas.gzhu.edu.cn"
);
    
 for(var i=0; i<proxylist1.length; i++) {
    var value = proxylist1[i];
    if ( localHostOrDomainIs(host, value) ) { return "PROXY "+tsinghuaServer;}
   }
   
 for(var i=0; i<proxylist2.length; i++) {
    var value = proxylist2[i];
    if ( localHostOrDomainIs(host, value) ) { return "PROXY "+guangdaServer;}
   }
    
return "DIRECT";
}
