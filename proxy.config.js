/* eslint-disable */
const HttpsProxyAgent = require('https-proxy-agent');
const proxyConfig = [
  {
    context: '/api',
    target: 'http://127.0.0.1:3100/',
    changeOrigin: true,
    secure: true
  }
];
 
function setupForCorporateProxy(proxyConfig) {
  var proxyServer = process.env.http_proxy || process.env.HTTP_PROXY;
  if (proxyServer) {
    var agent = new HttpsProxyAgent(proxyServer);
    console.log('Using corporate proxy server: ' + proxyServer);
    proxyConfig.forEach(function(entry) {
      entry.agent = agent;
    });
  }
  return proxyConfig;
}
 
module.exports = setupForCorporateProxy(proxyConfig);