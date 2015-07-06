App.setPreference('AutoHideSplashScreen' ,'true');

App.info({
  name: 'Voto.gt 2015',
  description: 'An iOS app built with Meteor',
  version: '0.0.1'
});

App.icons({
  'iphone': 'public/images/ios/icons/icon-60.png',
  'iphone_2x': 'public/images/ios/icons/icon-60@2x.png'
});

App.launchScreens({
  'iphone': 'public/images/ios/Default-portrait~iphone.png',
  'iphone_2x': 'public/images/ios/Default-portrait~iphone.png',
  'iphone5': 'public/images/ios/Default-portrait@2x~iphone5.jpg',
  'iphone6': 'public/images/ios/Default-portrait@2x~iphone6.png'
});