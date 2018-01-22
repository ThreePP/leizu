$(document).ready(function(){
				$("#qianshourenname").blur(function(){
					var qianshouren=$("#qianshourenname").val();
					if(qianshouren!=''){
						$("#qianshourenname").css("background-image","url(./images/choblue.png)");
						var shijian=new Date();
						var mydate=shijian.getFullYear()+"年"+(shijian.getMonth()+1)+"月"+shijian.getDate()+"日";
						$("#qianshoushijian").val(mydate);
						$("#qianshoushijian").css("background-image","url(./images/choblue.png)");
					}else{
						$("#qianshourenname").css("background-image","url(./images/chogray.png)");
					}
				});
				$("#qianshoushijian").blur(function(){
					var qianshou=$("#qianshoushijian").val();
					if(qianshou!=''){
						$("#qianshoushijian").css("background-image","url(./images/choblue.png)");
					}else{
						$("#qianshoushijian").css("background-image","url(./images/chogray.png)");
					}
				});
				
				$("#qianshourenname2").blur(function(){
					var qianshouren2=$("#qianshourenname2").val();
					if(qianshouren2!=''){
						$("#qianshourenname2").css("background-image","url(./images/choblue.png)");
						var shijian2=new Date();
						var mydate2=shijian2.getFullYear()+"年"+(shijian2.getMonth()+1)+"月"+shijian2.getDate()+"日";
						$("#qianshoushijian2").val(mydate2);
						$("#qianshoushijian2").css("background-image","url(./images/choblue.png)");
					}else{
						$("#qianshourenname2").css("background-image","url(./images/chogray.png)");
					}
				});
				$("#qianshoushijian2").blur(function(){
					var qianshou2=$("#qianshoushijian2").val();
					if(qianshou2!=''){
						$("#qianshoushijian2").css("background-image","url(./images/choblue.png)");
					}else{
						$("#qianshoushijian2").css("background-image","url(./images/chogray.png)");
					}
				});
});