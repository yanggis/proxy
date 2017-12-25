function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var tsinghuaServer = "166.111.77.32:3128"; //"202.38.92.100:3128";
    var guangdaServer = "47.74.134.79:8188";
    var wudaServer = "202.114.114.34:3129";
    //
    var proxylist0 = new Array(
    //"link.springer.com",
    //"www.springer.com"
     "www.yggyy.com",
      "www.yggyy2.com"
);
    var proxylist1 = new Array(
    //"www.nature.com",
    //"link.springer.com",
    //"www.tandfonline.com",
    //"verify.nature.com",
    "www.yggyy3.com",
    "ip.cn"
);

    var proxylist2 = new Array(
     "www.tandfonline.com",
    "verify.nature.com",
     "link.springer.com",
    "www.springer.com",
    "onlinelibrary.wiley.com",
    "ieeexplore.ieee.org",
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
     "nvsm.cnki.net",
     "pdf.d.cnki.net",
     "caj.d.cnki.net",
     "login.cnki.net",
    "docdownload.cnki.net",
    "my.gzhu.edu.cn",
    "cas.gzhu.edu.cn",
    "newoa.gzhu.edu.cn",
     "202.192.18.21",
     "202.192.18.192",
     "202.192.18.158",
      "202.192.18.162",
      "202.192.18.53",
      "202.192.18.180",
      "202.192.18.178",
      "202.192.18.175"
);
  for(var i=0; i<proxylist0.length; i++) {
    var value = proxylist0[i];
    if ( localHostOrDomainIs(host, value) ) { return "PROXY "+wudaServer;}
   }
    
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
