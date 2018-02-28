function getStyleAttr(obj, attr) {
		if(window.getComputedStyle) { //支持IE9+, 谷歌, 火狐..获取页面元素样式
			return getComputedStyle(obj, null)[attr];
			//var style = window.getComputedStyle("元素", "伪类");
		}else{
			return obj.currentStyle[attr]; //支持IE8-
	   }
}
function yunsu(obj,attr,target,sd,s,fn){
	if (attr=="opacity") {
		target=target*100;
		target=parseInt(target);
	} else{
		target=target;
	}
		clearInterval(obj.timer);
	obj.timer =setInterval(function(){
		if (attr=="opacity") {
			var start=getStyleAttr(obj,attr)*100;
			start=parseInt(start);
		} else{
			var start =parseInt(getStyleAttr(obj,attr));
		}
		console.log(start);
 		console.log(target)
//      console.log(speed);
		var speed =sd;
//		if (target<start) {
//			speed*=-1
//		} 
		if (speed>0) {
				if(start>=target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();			
			}
			return;
		}else{
			if(attr=="opacity"){
				obj.style.opacity = (start+speed)/100;
			    obj.style.filter = "alpha(opacity="+(start+speed)+")";
			}else{
				obj.style[attr] = start+speed+"px";
			}
			
		}
		} else {
				if(start<=target){
			clearInterval(obj.timer);
			//判断是否存在回调函数
			if(fn){
				fn();			
			}
			return;
		}else{
			if(attr=="opacity"){
				obj.style.opacity = (start+speed)/100;
			    obj.style.filter = "alpha(opacity="+(start+speed)+")";
			}else{
				obj.style[attr] = start+speed+"px";
			}
			
		}
		}
//				if(start==target){
//			clearInterval(obj.timer);
//			//判断是否存在回调函数
//			if(fn){
//				fn();			
//			}
//			return;
//		}else{
//			if(attr=="opacity"){
//				obj.style.opacity = (start+speed)/100;
//			    obj.style.filter = "alpha(opacity="+(start+speed)+")";
//			}else{
//				obj.style[attr] = start+speed+"px";
//			}
//			
//		}
	},s)
}
