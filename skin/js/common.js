//jquery特效开始
$(document).ready(function(){

	//初始化
	first_width=$(".current").parent().width();
	first_position=$(".current").parent().position().left;
	$("#nav ul i").width(first_width);
	$("#nav ul i").css('left',first_position+'px');	
	//检测移动
	$("#nav ul li").mouseenter(function(e){
	//计算当前宽度
	cur_width=$(this).width();
	//计算当前位置
	cur_position=$(this).position().left;
	//移动i标签
	$("#nav ul i").stop().animate({
    		left:cur_position+'px',
   			width:cur_width+'px'
		});
	});
	
	//离开nav则归零
	$("#nav").mouseleave(function(e) {
	//计算原li宽度
	init_width=$(".current").parent().width();
	//计算原li位置
	init_position=$(".current").parent().position().left;	
	//移动i标签
		$("#nav ul i").stop().animate({
    		left:init_position+'px',
   			width:init_width+'px'
		});   
    	});






//图片标签移动效果

$("#index_product_list .pro_li").mouseenter(function(e){
	//鼠标进入，检测li中是否已有cur类
	if(!$("#index_product_list .pro_li").hasClass("cur")){//之前不存在cur，进行初始化
		$(this).addClass("cur");
		$(this).find(".li_img i").css({'left':'0px','top':'0px','display':'none'}).fadeIn(300);
	}else{//已有cur，先检测两者相对位置 ptb:(1,相对cur下),(-1,相对cur上) plr:(1,相对cur右),(-1,相对cur左边)
		ptb=$(this).offset().top-$(".cur").offset().top;
		plr=$(this).offset().left-$(".cur").offset().left;
		if(ptb<0){tb=-1;}else if(ptb==0){tb=0;}else{tb=1;}
		if(plr<0){lr=-1;}else if(plr==0){lr=0;}else{lr=1;}	
		
		//确定位置后，确定cur块移动方位和距离,设置当前块起始位置
		act={};
		if(lr==-1){act.left='-100%';}else if(lr==0){act.left='0px';}else{act.left='100%';}//确定cur块移动方位和距离
		if(tb==-1){act.top='-100%';}else if(tb==0){act.top='0px';}else{act.top='100%';}
	
		if(lr==-1){l="100%";}else if(lr==0){l="0px";}else{l="-100%";}//确定当前块起始移动位置。最后都移动到left0top0处
		if(tb==-1){t="100%";}else if(tb==0){t="0px";}else{t="-100%";}
		
		//移动cur块
		$(".cur").find(".li_img i").animate(act,120,"swing");
		$(".cur").removeClass("cur");
		$(this).addClass("cur");
		
		//移动当前
		$(this).find(".li_img i").css("left",l).css("top",t);//重置起始位置
		$(this).find(".li_img i").animate({left:'0px',top:'0px'},280,"swing");
		
	}
	});


//离开#index_product_list
$("#index_product_list").mouseleave(function(e){
	$(".cur").find(".li_img i").animate({"opacity":0}).animate({"top":"-100%"},1).animate({"opacity":"1"},1);
	$(".cur").removeClass("cur");
	});


	
	
	
	
	
	
//显示日期
showTime(".showtime")	

//下拉菜单
$('#navigate').find('>ul').addClass('dropmenu').find('li:has(ul)').addClass('hasmenu');
$('.dropmenu li.hasmenu').mousemove(function(){
	$(this).find('>ul').show();
});
$('.dropmenu li.hasmenu').mouseleave(function(){
	$(this).find('>ul').hide();
});
						
});
//jquery 结束

//日期函数
function showTime(showid){                                
var today = new Date();
var weekday=new Array(7)
weekday[0]="星期日" 
weekday[1]="星期一"
weekday[2]="星期二"
weekday[3]="星期三"
weekday[4]="星期四"
weekday[5]="星期五"
weekday[6]="星期六"                                       
var y=today.getFullYear()+"年";
var month=today.getMonth()+1+"月";
var td=today.getDate()+"日";
var wd=weekday[today.getDay()];
timestr="今天是"+y+month+td+" "+wd
$(showid).html(timestr);
}

//获取浏览量
function showNum(cid,ctype,cshow,showid){
	$.get('/config/count.asp',{id:cid,stype:ctype,show:cshow},function(data){
		$(showid).html(data);
	});
}


//搜索
function chkseach(sn){
if(sn.skw.value==""){
alert("请输入搜索关键词！"); 
sn.skw.focus(); 
return false;
}
if(sn.skw.value=="请输入搜索关键词"){
alert("请输入搜索关键词！"); 
sn.skw.focus(); 
return false;
}
return true;
}
function clearsearch(sn){
if(sn.value=="请输入搜索关键词")
sn.value="";
}
function redosearch(sn){
if(sn.value=="")
sn.value="请输入搜索关键词";
}
//end

//邮箱格式
function is_email(str)
{ if((str.indexOf("@")==-1)||(str.indexOf(".")==-1))
{
return false;
}
return true;
}

//feedback
function Checkfeedback(form1){
if(form1.name.value==""){
alert("请输入你的姓名！");
form1.name.focus();
return false;
}
if(form1.email.value==""){
alert("请输入你的邮箱！");
form1.email.focus();
return false;
}
if(!is_email(form1.email.value))
{ alert("邮箱格式错误！");
form1.email.focus();
return false;
}

if(form1.tel.value==""){
alert("请输入你的电话！");
form1.tel.focus();
return false;
}
if(form1.CompanyName.value==""){
alert("请输入你的公司！");
form1.CompanyName.focus();
return false;
}
if(form1.address.value==""){
alert("请输入你的地址！");
form1.address.focus();
return false;
}
if(form1.title.value==""){
alert("请输入你的标题");
form1.title.focus();
return false;
}
if(form1.content.value==''){
alert("请输入你的内容！");
form1.content.focus();
return false;
}
if(form1.validatecode.value==""){
alert("请输入你的验证码！");
form1.validatecode.focus();
return false;
}
return true;
}
//end

//切换
function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++){
  if (i==Num){
   thisObj.className = "active"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "normal"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}

//加入收藏 
function AddFavorite() {
sURL = encodeURI(window.location);
try{  
window.external.addFavorite(window.location,document.title);  
}catch(e) {  
try{  
window.sidebar.addPanel(document.title,window.location,"");  
}catch (e) {  
alert("加入收藏失败，请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");
}  
}
}

//设为首页
function SetHome(){
if (document.all) {
document.body.style.behavior='url(#default#homepage)';
document.body.setHomePage(window.location);
}else{
alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
}
}











