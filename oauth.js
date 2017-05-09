function oauth(){
  alert( "Привет" );
  var params=getParams();

var code=params['code'];
  
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
