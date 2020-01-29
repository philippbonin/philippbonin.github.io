var Logger = (function() {
  "use strict"

  const logurl = "https://getform.io/f/057f9739-8283-431e-bbbd-258ec3502092";
  const debugulr = "https://getform.io/f/5083aa1d-92b7-4586-8741-8e5c1a66e3df";

  var sendlog = function(logData,url){
     logData.append("Website", window.APP.DOMAIN );
     logData.append("Guid", window.APP.GUID );

      $.ajax({
        type: "POST",
        url: url,
        crossDomain: true,
        data: logData,
        dataType: "json",
        contentType: "multipart/form-data",
        processData: false,
        contentType: false,
        headers: {
          "Accept": "application/json"
        }
      });
  };

  var createlogentry = function(column,context){
    var logData = new FormData();
    logData.append(column, context);
  //loging for testing purpose
    sendlog(logData,logurl);
  };

  var createlogentries = function(formData){
  //loging for testing purpose
    sendlog(formData,logurl);
  };

  var createdebugentries = function(formData){
  //loging for testing purpose
    sendlog(formData,debugulr);
  };

return {
      createLog: createlogentry,
      createLogs: createlogentries,
      createDebug: createdebugentries
  };

})();

(function(window) {
window.APP.Logger = Logger;
})(window);
