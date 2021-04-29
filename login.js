//获取元素
var ipt = document.querySelector('#sr');
var er = document.querySelector('.sr_error');
var srIcon = document.querySelector('.shuru_icon')

var pwd = document.querySelector('#pwd')
var per = document.querySelector('.pwd_error')
var psrIcon = document.querySelector('.pwd_icon')

er.style.display = 'none';
per.style.display = 'none';

srIcon.style.display = 'none';
psrIcon.style.display='none'
//注册事件 失去焦点
ipt.onblur = function () {
    //根据表单里的长度 来判断
    if (this.value.length < 6 || this.value.length > 16) {
        er.style.display = 'inline-block';
        srIcon.style.display = 'inline-block';
        srIcon.style.backgroundImage = "url(../img/error.png)";
        er.innerText='长度不正确,账号长度应为6-16字符'  
    } else if((this.value.charCodeAt(0)>=48) && (this.value.charCodeAt(0)<=57)){
        er.style.display = 'inline-block';
        srIcon.style.display = 'inline-block';
        srIcon.style.backgroundImage = "url(../img/error.png)";
        er.innerText = '首字符必须为字母';
    } else {
        er.style.display = 'inline-block';
        srIcon.style.display = 'inline-block';
        srIcon.style.backgroundImage = "url(../img/success.png)";
        er.innerText = '输入正确';
    }
}

pwd.onblur = function () {
    if (this.value.length < 8 || this.value.length > 16) {
        per.style.display = 'inline-block';
        psrIcon.style.display='inline-block'
        psrIcon.style.backgroundImage = "url(../img/error.png)";
        per.innerText='密码输入错误'
    } else {
        per.style.display = 'inline-block';
        psrIcon.style.display='inline-block'
        psrIcon.style.backgroundImage = "url(../img/success.png)";
        per.innerText='密码输入正确'

    }
}

var btn = document.querySelector('.over');

function fun() {
    alert('你已经提交了');
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
         timer=setTimeout(() => {
         fn();
    }, delay);
    } 
}
var time = 1000;
btn.addEventListener('click',debounce(fun,time),false);


