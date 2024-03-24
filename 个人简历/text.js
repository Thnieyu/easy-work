
var oBtn1 = document.getElementById("jy");
var oBtn2 = document.getElementById("zy");
var oBtn3 = document.getElementById("xm");
var oBtn4 = document.getElementById("hj");
var oBtn5 = document.getElementById("zw");
var c =document.getElementById("con");

oBtn1.onclick = function () {
    
    c.innerHTML="<h2>教育经历<br></h2>";
    c.innerHTML+=" <p ><b>湖南理工学院，岳阳</b>   2021--至今<br>"
    c.innerHTML+="<p>本科   计算机科学与技术，GPA:前20% <br></p>"
    c.innerHTML+="<p>主修课程：java面向对象、人工智能导论、Web应用开发、算法分析与设计、计算机网络、网络工程与实践等</p>" 
            
}
oBtn2.onclick = function () {
    c.innerHTML=" <h2>专业技能</h2> ";
    c.innerHTML+="<p>熟练掌握多种算法并具备代码实现能力，比如搜索、动态规划、Dijkstra、贪心等<br></p>";
    c.innerHTML+="<p>掌握Vscode、Idea、Eclipse、SQL Sever等工具，熟悉数据库操作<br></p>";
    c.innerHTML+="<p>熟悉javascript、html5、css3开发与调试技术与Vue框架，熟悉java与python<br></p>"
    c.innerHTML+="<p>熟悉Linux环境下常用命令以及相关工具的使用，如gdb、Git、Vim等<br></p>"
   
}
oBtn3.onclick = function () {
    c.innerHTML="  <h2>项目经历</h2>";
    c.innerHTML+=" <b>医院信息管理系统 <br></b>"
    c.innerHTML+="<p>运用javafx实现系统界面化，连接数据库采用sql语言实现对数据库的管理<br></p>"
    c.innerHTML+="<b><br>智建笑园<br></b>"
    c.innerHTML+=" <p>使用javafx实现界面化，采用多线程和通过类名实现反射机制<br></p>"
}
oBtn4.onclick = function () {
    c.innerHTML = " ";
    c.innerHTML += "<h2>获奖荣誉</h2>";
    c.innerHTML += "<span>CCPC中国程序设计大赛铜奖<br>Robocom机器人开发者大赛编程技能赛全国总决赛三等奖<br></span>"
    c.innerHTML +="<span>“挑战杯”大学生创新创业大赛校赛二等奖<br>“互联网+”大学生创新创业大赛校赛二等奖<br>三好学生<br>学业奖学金三等奖</span>"
}

oBtn5.onclick = function () {
    c.innerHTML="<h2> 自我评价</h2> ";
    c.innerHTML+="<p> 有较强的自我控制力，良好的团队合作能力，抗压能力强<br></p>"
    c.innerHTML+="<p>热爱编程，希望能学习到一些更前沿的事物并能熟练使用<br></p>"
}

