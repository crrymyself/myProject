import './polyfill';
import dva from 'dva';

// import createHistory from 'history/createHashHistory';
// user BrowserHistory
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import 'moment/locale/zh-cn';
import './rollbar';

import './index.less';
// 测试新的项目
// 测试master
// 2019/9/5测试是否打包
// 2019/9/5测试是否打包 第二次
// 2019/9/5测试是否打包 第三次
// 2019/9/6测试是否打包 第四次！！！
// 2019/9/6测试是否打包 第五次！！
// 2019/9/7测试是否打包 第一次！！
// 2019/9/7测试是否打包 第二次！！
// 2019/9/7测试是否打包 第三次！！
// 2019/9/7测试是否打包 第四次！！
// 2019/9/7测试是否打包 第五次！！
// 2019/9/7测试是否打包 第六次！！
// 2019/9/7测试是否打包 第七次！！
// 2019/9/10测试是否打包 第二次！！
// 2019/9/10测试是否打包 第三次！！
// 2019/9/11测试是否打包 第一次！！
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Register global model
app.model(require('./models/global').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store; // eslint-disable-line
