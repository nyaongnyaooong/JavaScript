const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

function templateHTML(title, webpageBody) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    ${webpageBody}
  </body>
  </html>
  `;
}

function basicBody(title, pageList) {
  var returnValue = '<h1><a href="/">' + title + '</a></h1>';

  //작성 계속 - 목차 시작
  returnValue += '<h2>' + title + '</h2>' + '<ul>';
  //목차 작성
  for(var i = 0; i < pageList.length; i++) {
    returnValue += '<li><a href="/?id=' + pageList[i] + '">' + pageList[i] + '</a></li>';       
  }
  //body의 목차 마무리
  returnValue +='</ul>';
  returnValue +='<a href="/create">create</a>';

  return returnValue;
        
}



var title;
var app = http.createServer(function(request,response) {

  fs.readdir('./web1/htmlpages/', function(err, pageList) {

    //url을 읽어옴
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    
/*
    if(_url == '/favicon.ico') {
      return response.writeHead(404);
    }
*/



    //url이 없으면 (초기)
    if(_url == '/') {
      title = 'Welcome';
      var webpageBody = basicBody(title, pageList);

      webpageBody += '<p>Welcome to Webpage!</p>';

      var template = templateHTML(title, webpageBody);

  
      response.writeHead(200); 
      response.end(template);

    }
    else if (_url == '/create') {
      title = 'create';
      var webpageBody = basicBody(title, pageList);

      //폼시작
      //create_process주소로 post방식으로 데이터를 전송
      //<form action="http://localhost:3000/process_create" method="post">
      
      //한줄텍스트 name = title로 보냄
      //<input type="text" name="title" placeholder="title">
      //여러줄텍스트 name description로 보냄
      //<textarea name="description" placeholder="description"></textarea>
      //제출 버튼
      //<input type="submit">

      //폼종료

      webpageBody +=  `
      <form action="http://localhost:3000/create_process" method="post">
        <p>
          <input type="text" name="title" placeholder="title">
        </p>
        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>
        <p>
          <input type="submit">
        </p>
      </form>
    `;

      var template = templateHTML(title, webpageBody);

  
      response.writeHead(200); 
      response.end(template);
    }

    //create 데이터 전송에 대한 코드
    else if(_url == '/create_process') {
      var body = '';
      request.on('data', function(data){
          body = body + data;
      });
      request.on('end', function(){
          var post = qs.parse(body);
          var title = post.title;
          var description = post.description
      });
      response.writeHead(200);
      response.end('success');
    }

    //url 존재시 id값을 타이틀로함
    else if(queryData.id != undefined) {
      title = queryData.id;
      var webpageBody = basicBody(title, pageList);

      //쿼리데이터 id와 같은 이름의 파일을 불러옴
      if (queryData.id == undefined) {
        webpageBody += '<p>Welcome to Webpage!</p>';

        var template = templateHTML(title, webpageBody);

        response.writeHead(200); 
        response.end(template);
      }
      else {
        fs.readFile('./web1/htmlpages/' + queryData.id, 'utf8' , function(err, pageContent) {
          //바디에 파일 내용 추가
          webpageBody += '<p>' + pageContent + '</p>';
      
          //바디를 포함한 전체 템플릿 작성
          var template = templateHTML(title, webpageBody);
      
          response.writeHead(200); 
          response.end(template);
        });
      }
    }
    else {
      response.writeHead(404);
      response.end('Not found');
    }
  
  });
});
app.listen(3000);