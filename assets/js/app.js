$(function(){
    var guid = function() {
       var nav = window.navigator;
       var screen = window.screen;
       var guid = nav.mimeTypes.length;
       guid += nav.userAgent.replace(/\D+/g, '');
       guid += nav.plugins.length;
       guid += screen.height || '';
       guid += screen.width || '';
       guid += screen.pixelDepth || '';
       return guid;
   };
//set guid for loging the different controller calls
  window.APP.GUID = guid();
  window.APP.DOMAIN = "ilvybonin.de";
  window.APP.Router.init();

  window.addEventListener("load", function() {
    var preloader = jQuery('.preloader');
    var preloaderArea = jQuery('.preloader-area');
    preloader.fadeOut();
    preloaderArea.delay(1000).fadeOut('slow');

    
  });

});
