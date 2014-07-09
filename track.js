var TRACK = TRACK || {};
var AJAX = AJAX || {};

/*arrayKeyvalue : associateArray */
TRACK = function (arrayKeyvalue,url) {
    this.requestPage=url;
    this.arrayKeyvalue = arrayKeyvalue;
    var ajaxrequest = new AJAX();
    this.enter = function () {
          var formdata = new FormData();
          for (var v in this.arrayKeyvalue) {
              formdata.append(v, this.arrayKeyvalue[v]);
          }
            ajaxrequest.request(this.requestPage, formdata).done(function (e) { return e; });
        }
    this.exit = function () { return;}
  }
AJAX = function () {
      this.request = function (url, data) {
          return $.ajax({ url: url, type: 'post', data: data, async: true, processData: false, contentType: false });
       }
}


