export default {
  appKey: '185ce49be88544da81741a01b1f1ea2c',
  appId: '500010015',
  productName: 'Yanshee',
  /* appKey: '4e9ee9418bcb4fa3b0e37dfe863c6db6',
  appId: '500010048',
  productName: 'uCodeWin', */
  debugUrl: 'https://test79.ubtrobot.com/v1/upgrade-rest/version/available?productName=Yanshee', // 测试地址
  productUrl: 'https://apis.ubtrobot.com/v1/upgrade-rest/version/available?productName=Yanshee', // 正式地址


  /**
   * http请求，
   * @param url {!string} API地址
   * @param init 相关参数
   * @param callback {function (error, response) => {}} 回调
   */
  request: (url, init, callback) => {
    let myInit = {
      method: 'GET', // get方法
      headers: {
        // 根据协议添加头部
        ContentType: 'application/json',
        Accept: 'application/json',
      },
      mode: 'cors', // 跨域
      cache: 'default',
    };

    if (init) {
      myInit = Object.assign({}, myInit, init);
    }

    fetch(new Request(url, myInit), myInit)
      .then(response => response.json())
      .then((response) => {
        if (callback) {
          callback(null, response);
        }
      })
      .catch((err) => {
        console.log(err);
        if (callback) {
          callback(err);
        }
      });
  },
};
