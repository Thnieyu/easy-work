
// 获取导航栏中的所有链接
var links = document.querySelectorAll(".nav a");
// 获取工作区中的所有div
var divs = document.querySelectorAll(".work");

// 遍历所有的链接
for (var i = 0; i < links.length; i++) {
    // 为每个链接添加点击事件的监听器
    links[i].addEventListener("click", function(event) {
        // 阻止链接的默认跳转行为
        event.preventDefault();
        // 获取当前点击的链接的href属性值，即对应的div的id
        var target = this.getAttribute("href");
        // 遍历所有的div
        for (var j = 0; j < divs.length; j++) {
            // 如果div的id和链接的id相同，就显示该div，否则就隐藏该div
            if (divs[j].getAttribute("id") == target.getAttribute("id")) {
                divs[j].style.display = "block";
            } else {
                divs[j].style.display = "none";
            }
        }
        // 遍历所有的链接
        for (var k = 0; k < links.length; k++) {
            // 如果链接的href属性值和当前点击的链接的href属性值相同，就激活该链接，否则就取消激活该链接
            if (links[k].getAttribute("href") == target) {
                links[k].classList.add("active");
            } else {
                links[k].classList.remove("active");
            }
        }
    });
}

{/* <div class="work" id="edu">教育经历</div>
<div class="work" id="exp">实践经历</div>
<div class="work" id="pro">科研项目</div>
<div class="work" id="ski">技能爱好</div>
<div class="work" id="hon">获奖荣誉</div>
<div class="work" id="eva">自我评价</div> */}
