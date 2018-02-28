window.onload=function(){
	var zhongguo = document.querySelector(".zhongguo");
	var rav = document.getElementsByClassName("rav")[0];
	var yin1 = document.querySelector(".yin1");
	var li_1 = yin1.getElementsByTagName("li");
	var wodetaobao = document.querySelector(".wodetaobao");
	var shoucangjia = document.querySelector(".shoucangjia");
	var maijiazhongxin = document.querySelector(".maijiazhongxin");
	var lianxikefu = document.querySelector(".lianxikefu");
	var wangzhandaohang = document.querySelector(".wangzhandaohang");
	var yin2 = document.querySelector(".yin2");
	var yin3 = document.querySelector(".yin3");
	var yin4 = document.querySelector(".yin4");
	var yin5 = document.querySelector(".yin5");
	var yin6 = document.querySelector(".yin6");
	var yin7 = document.querySelector(".yin7");
	var li_2 = yin2.getElementsByTagName("li");
	var yonghuming = document.querySelector(".yonghuming");
	if (getCookie("b")) {
		yonghuming.innerHTML=getCookie("b")
	}
	zhongguo.onmouseover=function(){
		zhongguo.style.backgroundColor="white"
		yin1.style.display="block";
	}
	zhongguo.onmouseout=function(){
		zhongguo.style.backgroundColor="#f5f5f5"
		yin1.style.display="none";
	}
	yin1.onmouseover=function(){
		yin1.style.display="block";
	}
	yin1.onmouseout=function(){
		yin1.style.display="none";
	}
	for (var i=0;i<li_1.length;i++) {
		li_1[i].index=i;
		li_1[i].onclick=function(){
			this.index=i;
			zhongguo.innerHTML=this.innerHTML;
		}
	}
	wodetaobao.onmouseover=function(){
		wodetaobao.style.backgroundColor="white"
		yin2.style.display="block";
	}
	wodetaobao.onmouseout=function(){
		yin2.style.display="none";
		wodetaobao.style.backgroundColor="#f5f5f5"
	}
	yin2.onmouseover=function(){
		yin2.style.display="block";
	}
	yin2.onmouseout=function(){
		yin2.style.display="none";
	}
	shoucangjia.onmouseover=function(){
		shoucangjia.style.backgroundColor="white"
		yin3.style.display="block";
	}
	shoucangjia.onmouseout=function(){
		yin3.style.display="none";
		shoucangjia.style.backgroundColor="#f5f5f5"
	}
	yin3.onmouseover=function(){
		yin3.style.display="block";
	}
	yin3.onmouseout=function(){
		yin3.style.display="none";
	}
	maijiazhongxin.onmouseover=function(){
		maijiazhongxin.style.backgroundColor="white"
		yin4.style.display="block";
	}
	maijiazhongxin.onmouseout=function(){
		yin4.style.display="none";
		maijiazhongxin.style.backgroundColor="#f5f5f5"
	}
	yin4.onmouseover=function(){
		yin4.style.display="block";
	}
	yin4.onmouseout=function(){
		yin4.style.display="none";
	}
	lianxikefu.onmouseover=function(){
		lianxikefu.style.backgroundColor="white"
		yin5.style.display="block";
	}
	lianxikefu.onmouseout=function(){
		yin5.style.display="none";
		lianxikefu.style.backgroundColor="#f5f5f5"
	}
	yin5.onmouseover=function(){
		yin5.style.display="block";
	}
	yin5.onmouseout=function(){
		yin5.style.display="none";
	}
	wangzhandaohang.onmouseover=function(){
		wangzhandaohang.style.backgroundColor="white"
		yin6.style.display="block";
	}
	wangzhandaohang.onmouseout=function(){
		yin6.style.display="none";
		wangzhandaohang.style.backgroundColor="#f5f5f5"
	}
	yin6.onmouseover=function(){
		yin6.style.display="block";
	}
	yin6.onmouseout=function(){
		yin6.style.display="none";
	}
	window.onscroll=function(){
		var top = document.documentElement.scrollTop || document.body.scrollTop ;
		if(top>=400) {
		rav.style.top = 0;
	} else{
		rav.style.top = 250+"px";
	}
	}
	$(".shangpin p").on("mouseover",function(){
		$(".yin7").on("mouseover",function(){
		$(".yin7").show();
		$(".yin7").on("mouseout",function(){
		$(".yin7").hide();
	})
	})
		$(".yin7").show();
	})
	$(".shangpin p").on("mouseout",function(){
		$(".yin7").hide();
	})
	$("#r1").on("mouseover",function(){
		$(".yin8").show();
		$("#r1").css("border","red 1px solid")
		$("#r1").css("border-bottom","none")
	})
	$("#r1").on("mouseout",function(){
		$(".yin8").hide();
		$("#r1").css("border","none")
		$("#r1").css("border-right","solid 1px #9C9CB4")
		$("#r1").css("border-bottom","solid 1px #9C9CB4")
	})
	$("#r2").on("mouseover",function(){
		$(".yin8").show();
		$("#r2").css("border","red 1px solid")
		$("#r2").css("border-bottom","none")
	})
	$("#r2").on("mouseout",function(){
		$(".yin8").hide();
		$("#r2").css("border","none")
		$("#r2").css("border-right","solid 1px #9C9CB4")
		$("#r2").css("border-bottom","solid 1px #9C9CB4")
	})
	$("#r3").on("mouseover",function(){
		$(".yin8").show();
		$("#r3").css("border","red 1px solid")
		$("#r3").css("border-bottom","none")
	})
	$("#r3").on("mouseout",function(){
		$(".yin8").hide();
		$("#r3").css("border","none")
		$("#r3").css("border-right","solid 1px #9C9CB4")
		$("#r3").css("border-bottom","solid 1px #9C9CB4")
	})
	$(".lunbo1").on("mouseover",function(){
		$(".bt1").show();
		$(".bt2").show();
	})
	$(".lunbo1").on("mouseout",function(){
		$(".bt1").hide();
		$(".bt2").hide();
	})
		var k=0;
		var timer;
		$(".ig").eq(0).show().siblings().hide();
			Showtime();
		function Show(){
			$(".ig").eq(k).fadeIn(300).siblings().fadeOut(300);
			$(".tab").eq(k).addClass("list").siblings().removeClass("list");
			console.log(k);
		}
		function Showtime(){
			timer=setInterval(function(){
				k++;
				if (k==5) {
					k=0;
				}
				Show();
			},1000);
		}
		$(".lun2").on("mouseover",function(){
			console.log("d")
			clearInterval(timer);
		})
		$(".lun2").on("mouseout",function(){
			console.log("1")
			Showtime();
		})
		$(".lun2").eq(k).on("click",function(){
		k=$(this).index();
		Show()
	})
		$(".bt1").on("click",function(){
			k--;
			clearInterval(timer);
			if (k==0) {
				k==5;
			}
			Show();
			Showtime();
			console.log("3")		
		})
		$(".bt2").on("click",function(){
			clearInterval(timer);
			k++;
			if (k==4) {
				k==-1;
			}
			Show();
			Showtime();
			console.log("4")
		})
}
