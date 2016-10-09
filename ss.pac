#smartproxy config file
#字符’#’用于注释
#参数每行一条，参数名称和值之间用空格分隔，使用”name value1 value2 … valueN”格式。
#同一参数名称可以在多行出现，系统会将其值自动合并成一个数组。
#TAG:session_name
#设置VPN连接会话名称。默认值：无。非必须。
session_name smartproxy
#TAG:welcome_info
#设置VPN连接后的欢迎信息。默认值：无。非必须。
welcome_info Welcome to smartproxy!
#TAG:ip
#设置VPN的IP地址。默认值：10.8.0.2。非必须。
ip 10.8.0.2
#TAG:dns
#设置VPN的DNS地址，设置后系统将使用该DNS，若不设置系统将使用原来的DNS。默认值：无。非必须。
dns 8.8.4.4
dns 8.8.8.8
#TAG:dns
#DNS缓存时间，单位秒，用于防DNS污染。默认值：30。非必须。
dns_ttl 30
#TAG:route 非必须。
#设置VPN路由，符合该路由的网络都会通过VPN。默认值：0.0.0.0/0。非必须。
route 0.0.0.0/0
#TAG:proxy
#目前支持HTTP(CONNECT)和Shadowsocks(table加密)两种代理。必须。
#可以设置多个代理，但是目前系统只会使用第一个。
#需要用户名密码验证的代理服务器地址
#proxy http://username:password@hostname:port
#无需验证的代理服务器
proxy http://222.169.41.179:3128
proxy http://119.29.177.231:8080
#shadowsocks地址（目前method仅支持table）
#proxy ss://method:password@hostname:port
#Base64加密的shadowsocks地址（目前method仅支持table）
#proxy ss://YmYtY2ZiOnRlc3RAMTkyLjE2OC4xMDAuMTo4ODg4
#TAG:outside_china_use_proxy
#设置国外网站是否走代理。默认值：on。非必须。
#outside_china_use_proxy on
#TAG:direct_domain
#设置直连的域名。非必须。
#direct_domain baidu.com qq.com taobao.com
#direct_domain sina.com 163.com sohu.com
#TAG:proxy_domain
#设置需要代理的域名。非必须。
proxy_domain ip.cn hot.vrs.sohu.com letv.com youtube.com
chinatunnel	112.65.200.156
chinatunnel	114.80.72.56
chinatunnel	183.61.38.211
chinatunnel	101.227.169.200
chinatunnel	58.251.60.32
chinatunnel	58.251.60.33
chinatunnel	219.133.60.190
chinatunnel	42.120.226.92
chinatunnel	121.201.15.101
chinatunnel	101.227.172.20
chinatunnel	101.227.172.24
chinatunnel	101.227.188.172
chinatunnel	103.231.71.6
chinatunnel	103.243.94.139
chinatunnel	103.7.31.186
chinatunnel	103.7.31.188
chinatunnel	106.38.219.10
chinatunnel	106.38.219.21
chinatunnel	106.38.219.36
chinatunnel	111.206.108.45
chinatunnel	111.206.212.239
chinatunnel	112.253.22.134
chinatunnel	115.182.200.242
chinatunnel	115.182.200.248
chinatunnel	115.182.92.127
chinatunnel	117.121.2.246
chinatunnel	117.121.26.91
chinatunnel	117.135.161.101
chinatunnel	118.123.97.196
chinatunnel	119.188.108.241
chinatunnel	119.188.145.10
chinatunnel	119.188.145.8
chinatunnel	119.188.147.49
chinatunnel	120.132.47.231
chinatunnel	120.132.47.233
chinatunnel	120.132.47.240
chinatunnel	121.14.55.148
chinatunnel	122.13.71.100
chinatunnel	123.125.111.100
chinatunnel	123.125.111.66
chinatunnel	123.125.117.82
chinatunnel	123.125.195.111
chinatunnel	123.125.29.155
chinatunnel	123.126.56.253
chinatunnel	123.126.98.150
chinatunnel	123.150.175.180
chinatunnel	123.150.175.181
chinatunnel	123.59.122.228
chinatunnel	123.59.21.170
chinatunnel	123.59.21.237
chinatunnel	124.250.52.57
chinatunnel	125.39.141.138
chinatunnel	14.17.43.112
chinatunnel	101.226.76.244
chinatunnel	140.205.160.62
chinatunnel	140.205.220.98
chinatunnel	163.177.68.162
chinatunnel	163.177.72.166
chinatunnel	163.177.79.177
chinatunnel	180.149.136.219
chinatunnel	180.153.106.25
chinatunnel	180.153.106.26
chinatunnel	180.76.141.217
chinatunnel	180.76.182.240
chinatunnel	182.118.18.101
chinatunnel	183.56.172.10
chinatunnel	203.205.147.229
chinatunnel	203.205.151.100
chinatunnel	203.205.151.211
chinatunnel	211.151.153.48
chinatunnel	218.60.108.135
chinatunnel	218.60.45.42
chinatunnel	220.181.118.49
chinatunnel	220.181.118.60
chinatunnel	220.181.119.13
chinatunnel	220.181.90.67
chinatunnel	223.252.199.5
chinatunnel	36.110.223.252
chinatunnel	42.62.59.196
chinatunnel	43.250.12.28
chinatunnel	43.250.12.31
chinatunnel	43.250.12.57
chinatunnel	43.250.12.72
chinatunnel	43.250.15.45
chinatunnel	43.250.15.50
chinatunnel	45.112.212.31
chinatunnel	45.112.212.42
chinatunnel	45.112.212.43
chinatunnel	45.112.212.45
chinatunnel	45.112.213.32
chinatunnel	45.112.213.33
chinatunnel	58.63.237.200
chinatunnel	58.83.178.16
chinatunnel	58.83.190.29
chinatunnel	59.151.12.97
chinatunnel	59.37.116.23
chinatunnel	59.37.96.188
chinatunnel	59.82.1.230
chinatunnel	59.82.1.82
chinatunnel	59.82.12.31
chinatunnel	59.82.12.38
chinatunnel	59.82.244.64
chinatunnel	59.82.246.31
chinatunnel	60.217.240.41
chinatunnel	60.28.173.86
chinatunnel	60.28.200.72
chinatunnel	61.131.55.91
chinatunnel	203.205.150.18
chinatunnel	203.205.128.137
chinatunnel	103.7.30.64
chinatunnel	112.90.78.145
chinatunnel	202.46.41.176
chinatunnel	203.205.150.17
chinatunnel	203.205.151.234
chinatunnel	211.147.4.31
chinatunnel	223.252.199.7
chinatunnel	47.88.138.238
chinatunnel	58.250.9.114
chinatunnel	59.37.96.240
chinatunnel	211.151.82.226
chinatunnel	183.57.48.66
chinatunnel	14.17.32.236
chinatunnel	183.61.49.155
chinatunnel	101.226.76.166
#end of file
