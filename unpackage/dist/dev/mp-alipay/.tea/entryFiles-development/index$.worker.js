if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/uni-grid/uni-grid?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-grid-item/uni-grid-item?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-fav/uni-fav?hash=4f3f44db986be84bb3e7c699e0f2fdbffe19a890');
require('../../components/uni-load-more/uni-load-more?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-notice-bar/uni-notice-bar?hash=4f3f44db986be84bb3e7c699e0f2fdbffe19a890');
require('../../components/m-icon/m-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/m-input?hash=f0c33a72036e350f447a1e7381f703ef53b0bbfe');
require('../../components/uni-list/uni-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-badge/uni-badge?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-list-item/uni-list-item?hash=7322ed165ee1fd4519e7fb7396363e67a50dd5aa');
require('../../components/uni-steps/uni-steps?hash=4f3f44db986be84bb3e7c699e0f2fdbffe19a890');
require('../../components/uni-segmented-control/uni-segmented-control?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/tabControl-tag/tabControl-tag?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../components/uni-goods-nav/uni-goods-nav?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/main/main?hash=7511080b5670a3a794745ed31a972c6aa55442f7');
require('../../pages/login/login?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/reg/reg?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/pwd/pwd?hash=6897e903d083952ecd6187542adcad382dab05ba');
require('../../pages/user/user?hash=f669784241b8130930603434dd44aec5c9945f0c');
require('../../pages/shop/shop?hash=7e5cfc671b9e0449c7e142fde9e2e23c349e6606');
require('../../pages/order/order?hash=8d2a5b2d5fc12074b291c698b86c77deebba01fc');
require('../../pages/button/button?hash=56df4be230f7220563402609c23a2fbab82dd02a');
require('../../pages/griditem/griditem1?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem2?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem3?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem4?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem5?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem6?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem7?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem8?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/griditem/griditem9?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/list/list1?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/list/list2?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/list/list3?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/list/list4?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}