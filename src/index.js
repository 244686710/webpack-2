let xhr = new XMLHttpRequest();

// http://loacalhost: 8080  webpack-dev-server转发
xhr.open('GET', '/app/user', true);

xhr.onload = function () {
    console.log(xhr.response)
}

xhr.send();