$(function () {
    function get_info() {
        var data;
        $.ajax({
            url: 'js/index.json?=230110',
            type: 'GET',
            dataType: "json",
            async: false,
            success: function (res) {
                data = res;
            }
        })
        return data;
    }
    var data = get_info();
    for (var dataKey in data['data']) {
        var sub_data = data['data'][dataKey];
        var title = sub_data['title'];
        var images = sub_data['images'];
        var color = sub_data['color'];
        var href = sub_data['href'];
        var gridli = 
        '<li class="grid-transform-container">'+
            '<div class="grid-transform-base">'+
                '<figure  style="background-color:'+ color +';" class="grid-figure-placeholder">'+
                    '<img data-lazy-src="'+ images +'" alt="img">'+
                '</figure>'+
                '<a class="grid-link" href="'+href+'"></a>'+
                '<div class="grid-box-overlay">'+
                '<div class="grid-flex-overlay-content">'+
                '<div class="grid-title">'+title+'</div>'+
                '<div class="grid-actions-container">'+
        '<div class="grid-actions-icon leancloud_visitors">'+
        '<svg class="grid-icon-read fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"></path></svg><span class="grid-text leancloud-visitors-count"></span>'+
        '</div>'+
        '</div>'+
        '</div>'+'</div>'+'</div>'+'</li>';
        $('.grid-li').append(gridli);
    };
    $(".grid-transform-base a").each(function(){var _hreh = $(this).attr('href');$(this).next().children().children().children(".leancloud_visitors").attr("id",'/'+_hreh);});      
    lazyLoadInit({coverColor:"#F1F3F7",coverDiv:"",offsetBottom:0,offsetTopm:0,showTime:1100,});
    $.getScript("js/Valine.min.js", function(){new Valine({el: '#vcomments',app_id: '',app_key: '',visitor: true,});});
});
window.onpageshow = function(e) {if (e.persisted) { window.location.reload();}};
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {document.title = '👨🏻‍💻';};
$('.footer-box').load('/footer.html');
$(document).keydown(function(event){if(event.keyCode==13){location.href='index.html';};if(event.keyCode==68){window.open('https://dribbble.com/svnyang') };if(event.keyCode==66){window.open('https://www.behance.net/svnyang') };if(event.keyCode==73){window.open('https://www.instagram.com/____s.y______/') };if(event.keyCode==80){window.open('https://www.pinterest.com/svnyang')};if(event.keyCode==88){window.open('http://1.sunyang.vip/iis-85.png')};if(event.keyCode==90){window.open('https://svnyang.zcool.com.cn/') };});
window.addEventListener("load", function() {console.log("\n%c孙洋' Blog%cv6.1%c\n\n", "padding: 8px; background: #09203f; font-family: 'Sitka Heading'; font-weight: bold; font-size: large; color: white;", "padding: 8px; background: #ff5450; font-family: 'Sitka Text'; font-size: large; color: #eee;", "");console.log("联系请发邮件至%c svnyang@163.com（ 邮件标题请以“姓名-原因”命名）", "color:#537895");console.log(`页面加载完毕消耗了${Math.round(performance.now() * 100) / 100}ms`);});
var typed = new Typed('#typed', {strings: ["Scroll down to see more"],startDelay: 100,typeSpeed: 50,loop: false,cursorChar: '_',showCursor:false,backSpeed: 60});
function nFormatter(num,digits){const si=[{value:1,symbol:""},{value:1E3,symbol:"K"},{value:1E6,symbol:"M"},{value:1E9,symbol:"G"},{value:1E12,symbol:"T"},{value:1E15,symbol:"P"},{value:1E18,symbol:"E"}];const rx=/\.0+$|(\.[0-9]*[1-9])0+$/;let i;for(i=si.length-1;i>0;i--){if(num>=si[i].value){break}}return(num/si[i].value).toFixed(digits).replace(rx,"$1")+si[i].symbol}
//**浏览量**//a && a.text(r) 替换  nFormatter(r)