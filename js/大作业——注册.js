window.onload = function(){
//实现轮播效果
//保存当前焦点元素的索引
var current_index=0;
//5000表示调用周期，以毫秒为单位，5000毫秒就是5秒
var timer=window.setInterval(autoChange, 5000);
//获取所有轮播按钮
var button_li=document.getElementById("button").getElementsByTagName("li");
//获取所有banner图
var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
//遍历元素
for(var i=0;i<button_li.length;i++){
	//添加鼠标滑过事件
	button_li[i].onmouseover=function(){
		//定时器存在时清除定时器
		if(timer){
			clearInterval(timer);
		}
		//遍历元素
		for(var j=0;j<pic_div.length;j++){
			//将当前索引对应的元素设为显示
			if(button_li[j]==this){
				current_index=j; //从当前索引位置开始
				button_li[j].className="current";
				pic_div[j].className="current";
			}else{
				//将所有元素改变样式
				pic_div[j].className="pic";
				button_li[j].className="but";
			}
		}
	}
	//鼠标移出事件
	button_li[i].onmouseout=function(){
		//启动定时器，恢复自动切换
		timer=setInterval(autoChange,5000);			
	}
}
function autoChange(){
	//自增索引
	++current_index;
	//当索引自增达到上限时，索引归0
	if (current_index==button_li.length) {
		current_index=0;
	}
	for(var i=0;i<button_li.length;i++){
		if(i==current_index){
			button_li[i].className="current";
			pic_div[i].className="current";
		}else{
			button_li[i].className="but";
			pic_div[i].className="pic";
		}
	}
	}

function tableChange(){
		//Table栏
		//获得#SwitchNav中所有的<li>元素
		var lis = document.getElementById("SwitchNav").getElementsByTagName("li");
		//获得#SwitchBigPic中所有的<a>元素
		var spans=document.getElementById("SwitchBigPic").getElementsByTagName("span");
		//保存当前焦点元素的索引
		var current_index=0;
		//启动定时器
		var timer = setInterval(autoChange,3000);
		//遍历lis，为各<li>元素添加事件
		for(var i=0;i<lis.length;i++){
			//<li>的鼠标移入事件
			lis[i].onmouseover = function(){
				//定时器存在时清除定时器
				if(timer){
					clearInterval(timer);
				}
				//遍历lis
				for(var i=0;i<lis.length;i++){
					//设置当前焦点元素的样式
					if(lis[i]==this){
						spans[i].className = "sp";					
						//保存当前索引，当恢复自动切换时继续切换
						current_index = i;
					//设置非当前焦点元素的样式
					}else{
						spans[i].className = "";	
					}
				}
			}
			//<li>的鼠标移出事件
			lis[i].onmouseout = function(){
				//启动定时器，恢复图片自动切换
				timer = setInterval(autoChange,3000);
			}
		}
		//定时器周期函数-图片自动切换
		function autoChange(){
			//自增索引
			++current_index;
			//当索引自增达到上限时，索引归0
			if (current_index == lis.length) {
				current_index=0;
			}
			//遍历lis，将所有元素取消焦点样式
			for (var i=0; i<lis.length; i++) {
				spans[i].className = "";	
			}
			//为当前索引元素添加焦点样式
			spans[current_index].className = "sp";
		}	
	}
	tableChange();
	}
