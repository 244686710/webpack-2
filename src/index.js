import '@/components/component'
let xhr = new XMLHttpRequest();

let url = '';
if(DEV) {
    url = 'http://localhost:8080'
} else {
    url = 'http://baidu.com'
}
console.log(url)
// http://loacalhost: 8080  webpack-dev-server转发
xhr.open('GET', '/app/user', true);

xhr.onload = function () {
    console.log(xhr.response)
}

xhr.send();