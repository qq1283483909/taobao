window.onload=function(){
	    var center =document.getElementById("center");
		var cha= document.querySelector(".cha");
		var chaimg =cha.getElementsByTagName("img")[0];
		var zhucexieyi = document.getElementById("zhucexieye");
		var btn1 = document.getElementById("btn1");
		var xiaomi = document.getElementById("xiaomi");
		var yinph = document.querySelector(".yinph");
		var list = yinph.getElementsByTagName("ul")[0];
		var list_li = list.getElementsByTagName("li");
		var kuang1 = document.querySelector(".kuang1");
		var kc1 = document.querySelector(".kc1");
		var phone1 = document.getElementById("phone1");
		var phone2 = document.getElementById("phone2");
		var phone3 = document.getElementById("phone3");
		var span1 = document.getElementById("span1");
		var span2 = document.getElementById("span2");
		var span3 = document.getElementById("span3");
		var span7 = document.getElementById("span4");
		var span5 = document.getElementById("span5");
		var span6 = document.getElementById("span6");
		var box1 = document.querySelector(".box1");
		var span4 = box1.getElementsByTagName("span")[0];
		var yidong = box1.querySelector(".yidong");
		var huadao = box1.querySelector(".huadao");
		var gen = box1.querySelector(".gen");
		var btn2 = kc1.getElementsByTagName("button")[0];
		var hongxian = document.querySelector(".hongxian");
		var l2= document.querySelector(".l2");
		var l3= document.querySelector(".l3");
		var l4= document.querySelector(".l4");
		var kuang2 = document.querySelector(".kuang2");
		var shoujijs = document.getElementById("shoujijs");
		var yanzhengma = document.querySelector(".yanzhengma");
		var inp1=yanzhengma.getElementsByTagName("input")[0];
		var huoqu = document.getElementById("huoqu");
		var btn3 = kuang2.getElementsByTagName("button")[0];
		var chashou1 = kuang2.querySelector(".chashou1");
		var chashou2 = kuang2.querySelector(".chashou2");
		var kuang3 = document.querySelector(".kuang3");
		var shoujijs2 = document.getElementById("shoujijs2");
		var denglumima = document.getElementById("denglumima");
		var querenmima = document.getElementById("querenmima");
		var box2 = document.querySelector(".box2");
		var s1 = document.getElementById("s1");
		var s2 = document.getElementById("s2");
		var s3 = document.getElementById("s3");
		var s4 = document.getElementById("s4");
		var mima1 =document.querySelector(".mima1");
		var mima2 =document.querySelector(".mima2");
		var mima3 =document.querySelector(".mima3");
		var mima4 =document.querySelector(".mima4");
		var mima5 =document.querySelector(".mima5");
		var mima6 =document.querySelector(".mima6");
		var mima7 =document.querySelector(".mima7");
		var mima8 =document.querySelector(".mima8");
		var dengluming = document.getElementById("dengluming");
		var btn4 = kuang3.getElementsByTagName("button")[0];
		var kuang4 = document.querySelector(".kuang4");
		var mima9 =document.querySelector(".mima9");
		var mima10 =document.querySelector(".mima10");
		var mima11 =document.querySelector(".mima11");
		var mima12 =document.querySelector(".mima12");
		var mima13 =document.querySelector(".mima13");
		var mima14 =document.querySelector(".mima14");
		var yinhangka = document.getElementById("yinhangka");
		var shenfenzheng = document.getElementById("shenfenzheng");
		var zhifumima = document.getElementById("zhifumima");
		var querenzhufumima = document.getElementById("querenzhifumima");
		var chek = document.getElementById("chek");
		var btn5 = kuang4.getElementsByTagName("button")[0];
		var kuang5 = document.querySelector(".kuang5");
		var dd1 = document.getElementById("dd1");
		var dd2 = document.getElementById("dd2");
		var btn6 = kuang5.getElementsByTagName("button")[0];
		btn1.onclick=function(){
			console.log("10")
			$(".zhuce").css("display","none")
//			center.style.display="block";
		}
		cha.onmouseover=function(){
			chaimg.src="img/chacha2.png";
		}
		cha.onmouseout=function(){
			chaimg.src="img/chacha.png";
		}
		cha.onclick=function(){
			window.location.href="login.html";
		}
		xiaomi.onmouseover=function(){
			xiaomi.style.borderColor="orange"
			xiaomi.style.color="orange"
		}
		xiaomi.onmouseout=function(){
			xiaomi.style.borderColor="#c9b7c9"
			xiaomi.style.color="#c9b7c9"
		}	
		yinph.onclick=function(){
			yinph.style.display="none";
		}
		$("#phone1").on("click",function(){
			$(".yinph").toggle();
		})
//		$("#phone1").on("click",function(){
//			$(".yinph").hide();
//		})
//		phone1.onclick=function(evt){
//			yinph.style.display="block";
//			var  e=evt||event;
//			var a=e.clientX;
//			var b=e.clientY;
//			if (a>list.offsetLeft&&a<list.offsetLeft+list.offsetWidth&&b>list.offsetTop&&b<list.offsetHeight+list.offsetTop) {
//				yinph.style.display="block";
//			} else{
//				yinph.style.display="none";
//			}
//		}
		for (i=0;i<list_li.length;i++) {
			list_li[i].index=i;
			list_li[i].onclick=function(){
				this.index=i;
				phone1.innerHTML=this.innerHTML;
			}
		}
		phone2.onclick=function(){
			phone2.style.borderColor="cornflowerblue"
			phone2.onblur=function(){
				document.onclick=function(){
					phone2.style.borderColor="red"
					if(phone2.value.length==0) {
						span1.style.display="block"
						span3.style.display="none"
						span2.style.display="none"
					}else if(isNaN(phone2.value)==true) {
						span1.style.display="none"
						span2.style.display="block"
						span3.style.display="none"
					}else if(phone2.value.length==11){
						span1.style.display="none"
						span2.style.display="none"
						span3.style.display="block"
						phone2.style.borderColor="#C9B7C9"
					}else{
						span1.style.display="none"
						span2.style.display="block"
						span3.style.display="none"
					}
				}
			}
		}
		
		yidong.onmousedown=function(evt){
			var e=event||evt;
			var a=e.clientX-yidong.offsetLeft;
			document.onmousemove=function(evt){
				var e=event||evt;
				yidong.style.left=e.clientX-a+"px"
				gen.style.width=yidong.style.left
				if (e.clientX-a<0) {
					yidong.style.left=0
					document.onmousemove = null;
				}
				if(e.clientX-a>260){
					yidong.style.left=260;
					span4.innerHTML="验证通过";
					span4.style.color="white"
					yidong.style.display="none"
					huadao.style.display="block"
					document.onmousemove = null;
					yidong.onmousedown = null;
					if(huadao.style.display="block") {
						btn2.style.backgroundColor="orange"
						btn2.onmouseover=function(){
						btn2.style.backgroundColor="red"
						btn2.onmouseout=function(){
						btn2.style.backgroundColor="orange"
					}
					}
					}
				}
				document.onmouseup=function(){
					if (e.clientX-a>=260) {
						gen.style.width=yidong.style.left
						yidong.style.left= 260+"px"
						document.onmousemove = null;
					}else{
						yidong.style.left= 0+"px";
						gen.style.width=yidong.style.left
						document.onmousemove = null;
						document.onmouseup = null;						
					}
			}
			}
		}
		btn2.onmouseover=function(){
			btn2.style.color="white"
			btn2.onclick=function(){
				btn2.style.border="none"
			}
			btn2.onmouseout=function(){
				btn2.style.color="#999999"
			}
		}
		btn2.onclick=function(){
		if (huadao.style.display=="block"&&span3.style.display=="block") {
//			btn2.onclick=function(){
//				console.log("20")
				kuang1.style.display="none";
				kuang2.style.display="block";
//				hongxian.style.width=360+"px";
//				l2.style.backgroundColor="red";
				setCookie("x",phone2.value);
				if (getCookie("x")) {
					shoujijs.innerHTML=getCookie("x")
				}
//			}
		}else if(huadao.style.display=="block"&&span3.style.display!="block"){
				span1.style.display="block"
				span3.style.display="none"
				span2.style.display="none"
		}else if(span3.style.display=="block"&&huadao.style.display!="block"){
				span1.style.display="block";
				phone2.value="";
		}
		}
		huoqu.onmouseover=function(){
			huoqu.style.backgroundColor="#DEDEDE";
			huoqu.style.color="white";
			huoqu.onmouseout=function(){
				huoqu.style.backgroundColor="paleturquoise";
				huoqu.style.color="black";
		}
	}
		huoqu.onclick=function(){
			var num1 = parseInt(Math.random()*10);
			var num2 = parseInt(Math.random()*10);
			var num3 = String.fromCharCode(parseInt(Math.random()*26)+65);
			var num4 = String.fromCharCode(parseInt(Math.random()*26)+65);
			huoqu.innerHTML=num1+num4+num2+num3;
			chashou1.style.display="block";
		}
		btn3.onmouseover=function(){
			btn3.style.backgroundColor="#F73500"
			btn3.onmouseout=function(){
				btn3.style.backgroundColor="#FF4001"
			}
		}
		btn3.onclick=function(){
			var a = inp1.value.toUpperCase();
			if (a == huoqu.innerHTML) {
				kuang2.style.display="none";
				kuang3.style.display="block";
				setCookie("a",phone2.value);
				if (getCookie("a")) {
					shoujijs2.innerHTML=getCookie("a")
				}
				hongxian.style.width=360+"px";
				l2.style.backgroundColor="red"
			}else{
				chashou1.style.display="none";
				chashou2.style.display="block";
		}
			}
			denglumima.onclick=function(){
				box2.style.display="block";
				mima1.style.display="none";
				mima2.style.display="none";
			}
			denglumima.onblur=function(){
				box2.style.display="none";
				if (denglumima.value.length<6||denglumima.value.length>20) {
					mima1.style.display="block";
					mima2.style.display="none"
				}else if(denglumima.value.length>=6&&denglumima.value.length<12){
					mima2.style.display="block"
					mima1.style.display="none";
					s5.innerHTML="弱";
				}else if(denglumima.value.length>=12&&denglumima.value.length<18){
					mima2.style.display="block"
					mima1.style.display="none";
					s5.innerHTML="中";
				}else if(denglumima.value.length>=18&&denglumima.value.length<=20){
					mima2.style.display="block"
					mima1.style.display="none";
					s5.innerHTML="强";
				}
			}
			denglumima.onfocus=function(){
				denglumima.onkeyup=function(){
				if(denglumima.value.length<6||denglumima.value.length>20){
					s1.style.backgroundColor="#9C9CB4"
					s2.style.backgroundColor="#9C9CB4"
					s3.style.backgroundColor="#9C9CB4"
					s4.innerHTML="";
				}else if(denglumima.value.length>=6&&denglumima.value.length<12){
					s1.style.backgroundColor="red"
					s2.style.backgroundColor="#9C9CB4"
					s3.style.backgroundColor="#9C9CB4"
					s4.innerHTML="弱";
				}else if(denglumima.value.length>=12&&denglumima.value.length<18){
					s2.style.backgroundColor="red"
					s3.style.backgroundColor="#9C9CB4"
					s4.innerHTML="中";
				}else if(denglumima.value.length>=18&&denglumima.value.length<=20){
					s3.style.backgroundColor="red"
					s4.innerHTML="强";
				}
			}
		}
			querenmima.onclick=function(){
				mima3.style.display="block";
				mima4.style.display="none";
			}
			querenmima.onblur=function(){
				mima3.style.display="none";
				if (querenmima.value==denglumima.value&&querenmima.value.length<=20&&querenmima.value.length>=6) {
					mima7.style.display="block";
					mima4.style.display="none";
				}else{
					mima4.style.display="block";
					mima7.style.display="none";
				}
			}
			dengluming.onclick=function(){
				mima5.style.display="block"
				mima6.style.display="none";
				mima8.style.display="none";
			}
			dengluming.onblur=function(){
				mima5.style.display="none"
				if (dengluming.value.length<5||dengluming.value.length>25) {
					mima6.style.display="block";
					mima8.style.display="none";
				}else{
					mima8.style.display="block";
					mima6.style.display="none";
				}
			}
			btn4.onmouseover=function(){
			btn4.style.backgroundColor="#F73500"
			btn4.onmouseout=function(){
				btn4.style.backgroundColor="coral"
			}
		}
		btn4.onclick=function(){
			if (mima2.style.display=="block"&&mima7.style.display=="block"&&mima8.style.display=="block") {
				kuang3.style.display="none";
				kuang4.style.display="block";
				hongxian.style.width=540+"px";
				l3.style.backgroundColor="red"
				setCookie("y",denglumima.value);
			}else{
				mima6.style.display="block";
				mima8.style.display="none";
				mima4.style.display="block";
				mima7.style.display="none";
				mima1.style.display="block";
				mima2.style.display="none"
				dengluming.value="";
				denglumima.value="";
				querenmima.value="";
			}
		}
		yinhangka.onclick=function(){
			mima9.style.display="none";
			mima10.style.display="none";
			yinhangka.onblur=function(){
				if (yinhangka.value.length==16) {
					mima10.style.display="block";
					mima9.style.display="none";
				} else{
					mima9.style.display="block";
					mima10.style.display="none";
				}
			}
		}
		shenfenzheng.onclick=function(){
			mima11.style.display="none";
			mima12.style.display="none";
			shenfenzheng.onblur=function(){
				if (shenfenzheng.value.length==18) {
					mima12.style.display="block";
					mima11.style.display="none";
				} else{
					mima11.style.display="block";
					mima12.style.display="none";
				}
			}
		}
		phone3.onclick=function(){
			span7.style.display="none";
			span5.style.display="none";
			span6.style.display="none";
			phone3.onblur=function(){
				document.onclick=function(){
					if(phone3.value.length==0) {
						span7.style.display="block";
						span6.style.display="none";
						span5.style.display="none";
					}else if(isNaN(phone3.value)==true) {
						span7.style.display="none";
						span5.style.display="block";
						span6.style.display="none";
					}else if(phone3.value.length==11){
						span7.style.display="none";
						span5.style.display="none";
						span6.style.display="block";
						phone2.style.borderColor="#C9B7C9"
					}else{
						span7.style.display="none";
						span5.style.display="block";
						span6.style.display="none";
					}
				}
			}
		}
		querenzhufumima.onblur=function(){
				if (querenzhufumima.value==zhifumima.value) {
					mima13.style.display="block";
					mima14.style.display="none";
				}else{
					mima14.style.display="block";
					mima13.style.display="none";
				}
			}
		btn5.onclick=function(){
			if (mima13.style.display=="block"&&span6.style.display=="block"&&mima12.style.display=="block"&&mima10.style.display=="block"&&chek.checked) {
				kuang4.style.display="none"
				kuang5.style.display="block"
				hongxian.style.width=720+"px";
				l4.style.backgroundColor="red"
				setCookie("b",dengluming.value);
				if (getCookie("b")) {
					dd1.innerHTML=getCookie("b")
				}
				setCookie("c",phone3.value);
				if (getCookie("c")) {
					dd2.innerHTML=getCookie("c")
				}
			} else{
				mima14.style.display="block";
				mima13.style.display="none";
				span7.style.display="none";
				span5.style.display="block";
				span6.style.display="none";
				mima11.style.display="block";
				mima12.style.display="none";
				mima9.style.display="block";
				mima10.style.display="none";
			}
		}
		btn6.onclick=function(){
			window.location.href="index.html";
		}
}

