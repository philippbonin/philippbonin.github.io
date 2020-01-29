var Router = (function() {
  "use strict"

  var loadHTML = function(file, id){
    var loading = $.Deferred();
     $.get( file )
      .done(function( data ) {
          $('body').find('#'+id).html(data);
          loading.resolve();
    });
    return loading.promise();
  };

  var init = function(){
    // use #! to hash
    var root = null;
    var useHash = true; // Defaults to: false
    var hash = '#!'; // Defaults to: '#'
    var router = new Navigo(root, useHash, hash);

    router.on('home',
     function () {
        var loadingView = loadHTML('./templates/default.html', 'view');
        loadingView.done(function(){
          window.APP.Logger.createLog("Controller", "/Page:home" );
        });
      });

    router.on('*',
     function () {
        var loadingView = loadHTML('./templates/default.html', 'view');
        loadingView.done(function(){
          window.APP.Logger.createLog("Controller", "/Page:init");
        		var launchDay = new Date(2020, 7-1, 11);
        		$('#timer').countdown({
        			until: launchDay,
        			format: 'dHMS'
        		});
        });
    });

    router.resolve();
  }

//--------------------------------------ROUTER SCRIPT END
  return {
        init: init,
    };

})();

(function(window) {
  window.APP.Router = Router;
})(window);
