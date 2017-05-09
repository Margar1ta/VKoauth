function oauth(){
  alert( "Привет" );
  var params=getParams();

var code=params['code'];
  if(code!=undefined){
var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;

var xhr = new XHR();
var xhr_friends = new XHR();
// (2) запрос на другой домен :)
alert( code );
xhr.open('GET', 'https://oauth.vk.com/access_token?client_id=6023864&client_secret=bHOZlrIcrVT6rUCUmNbV&redirect_uri=https://margar1ta.github.io/VKoauth/&code='+code, true);

xhr.onload = function() {
  alert( this.responseText );
  var response = JSON.parse(this.responseText ); // responseText -- текст ответа.
 var access_token=response.access_token;
 
 
 xhr_friends.open('GET', 'https://api.vk.com/method/friends.get?order=name&count=5&offset=0&fields=city&name_case=nom&version=5.64&access_token='+access_token, true);
    
  xhr_friends.onload = function() {
  var friends = JSON.parse(this.responseText ).response.items;
   alert( friends[0].id );
  }
  xhr_friends.onerror = function() {
  alert( 'Ошибка ' + this.status );
  xhr_friends.send();
}
 
 
}

xhr.onerror = function() {
  alert( 'Ошибка ' + this.status );
}

xhr.send();
    
  }
}


function getParams(){
  var params = window
    .location
    .search
    .replace('?','')
    .split('&')
    .reduce(
        function(arr,param){
            var a = param.split('=');
            arr[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return arr;
        },
        {}
    ); 
  return params;
}
