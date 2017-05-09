function oauth(){
  alert( "Привет" );
  var params=getParams();

var code=params['code'];
  if(code!=undefined){
  var xhr = new XMLHttpRequest();
  var xhr_friends = new XMLHttpRequest();
    alert( code );
  xhr.open('GET', 'https://oauth.vk.com/access_token?client_id=6023864&client_secret=bHOZlrIcrVT6rUCUmNbV&redirect_uri=https://margar1ta.github.io/VKoauth/&code='+code, false);
  xhr.send();
    if (xhr.status != 200) {
    alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
   var response = JSON.parse(xhr.responseText ); // responseText -- текст ответа.
 var access_token=response.access_token;
  
  
   xhr_friends.open('GET', 'https://api.vk.com/method/friends.get?order=name&count=5&offset=0&fields=city&name_case=nom&version=5.64&access_token='+access_token, false);
  xhr_friends.send();
  if (xhr_friends.status != 200) {
    alert( xhr_friends.status + ': ' + xhr_friends.statusText ); // пример вывода: 404: Not Found
} else {
  var friends = JSON.parse(xhr_friends.responseText ).response.items;
   alert( friends[0].id );
  
}
  
  
}
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
