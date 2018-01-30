$(function () {

// 载入黑条页头
$("#HeaderLine").load("general.html .headercon");
// 载入带搜索页头
$("#HeaderShop").load("general.html .headershopcon");
// 载入页脚
$("#FootLine").load("general.html .footcon");
// 载入通用左侧导航
$("#LeftMenu").load("general.html .leftmenucon");
// 载入合同页面左侧栏
// $("#ContractLeftMenu").load("general.html .contractcon");
// 载入登陆层内容
$("#signinModal").load("general.html .signincon");
// 载入普通用户注册层内容
$("#registerModal").load("general.html .registercon");
// 载入企业用户登录层内容
$("#companysigninModal").load("general.html .companysignincon");

// 激活弹出消息
 $('[data-toggle="popover"]').popover()

// 上传存根预览
$("#fileUpload").on('change', function () {
   var thisbtn= $("#fileUpload");
   var text = $(this).parents(".inputbox").children('span').text();
    UpLoadImg(thisbtn,'#image-holder'); 
    $(this).parents(".inputbox").children('span').text(text === '选择文件' ? '编辑' : '编辑'); 


});

// 印花生产单页面花型上传,预览
$("#patternUpload").on('change', function () { 
    var thisbtn= $("#patternUpload");
    Effects(thisbtn,'#image-map');
    $(".inputbox span").css("display","none");
});
    

//印花生产单页面上传图片放大
/*$(".addbtn").on('click',function () {
    var wid = $("#pattern-holder img").width();
    var hei = $("#pattern-holder img").height();
    //alert("1");
    $("#image-map img").css({"width":(wid+50)+"px","height":(hei+50)+"px"})
    return false;
})
//印花生产单页面上传图片缩小
$(".rebtn").on('click', function () {
    var wid = $("#pattern-holder img").width();
    var hei = $("#pattern-holder img").height();
    //console.log(wid,hei);
    $("#image-map img").css({"width":(wid-50)+"px","height":(hei-50)+"px"})
    return false;
})*/
// 我的花型页面花型上传预览
$("#patUpload").on('change', function () {
    var thisbtn= $("#patUpload");
    UpLoadImg(thisbtn,'#pat-holder'); 

});
// 我的花型页面花型原稿上传,按钮文字变化
$("#patUpload2").on('change', function () { 
    if (typeof (FileReader) != "undefined") { 
        $("#patUpload2").parents(".inputbox").find('span').text('更换花型原稿');
    } else {
        alert("你的浏览器不支持FileReader.");
    }
});
// 录入合同页面单据上传预览
$("#hetongUpload").on('change', function () { 
    var thisbtn= $("#hetongUpload");
    UpLoadImg(thisbtn,'#hetong-holder'); 
});
$("#hetongUpload2").on('change', function () { 
    var thisbtn= $("#hetongUpload2");
    UpLoadImg(thisbtn,'#hetong-holder2'); 
});
$("#hetongUpload3").on('change', function () { 
    var thisbtn= $("#hetongUpload3");
    UpLoadImg(thisbtn,'#hetong-holder3'); 
});


// 点击登陆浮层中的立即注册按钮,浮层切换
$('#signinModal').on('shown.bs.modal', function () {
    $("#registerLink").click(function(){
            $("#signinModal").modal("hide");
            $("#registerModal").modal("show");        

    });
});
// 激活滑块验证码
$('#registerModal').on('shown.bs.modal', function () {
  $('#drag').drag();

});

$('#companysigninModal').on('shown.bs.modal', function () {
  $('#drag2').drag();
});

// 收藏页面编辑开关
 $('.colltop .normalele').click(function () {
        $('.pagemain').addClass('editx');
     });
   $('.editbox #completebtn').click(function () {
      $('.pagemain').removeClass('editx');
   });

// 订单信息页面联系人信息显示全部和收起全部切换
$('.showhidden .blue').click(function () {
    var text = $(this).text();
    $(this).text(text === '显示全部' ? '收起全部' : '显示全部');
    $(this).parents(".infolist").find('.infos').toggle("slow");
   });

// 订单信息页面三期付款优惠券显示隐藏
$('.voucherbtn').click(function () {
    var text = $(this).text();
    $(this).text(text === '展开查看更多' ? '收起' : '展开查看更多');
    $(this).parents(".voucher").find('.v2').slideToggle("slow");
   });


// 花型颜色管理按钮开关
 $('.pandf .btn.normalele').click(function () {
        var text = $(this).text();
        $(this).text(text === '批量管理' ? '完成' : '批量管理');
        if($(".tab-content").hasClass('editx')){
             $(".tab-content").removeClass('editx');
        } else{
             $(".tab-content").addClass('editx');
        }
       
     });
   $('.editbox #completebtn').click(function () {
      $('.pagemain').removeClass('editx');
   });

// 企业用户注册提交资料页面图片上传预览
$("#companyreg1").on('change', function () { 
     var thisbtn= $("#companyreg1");
    UpLoadImg(thisbtn,'#company-holder1'); 

});
$("#companyreg2").on('change', function () { 
     var thisbtn= $("#companyreg2");
    UpLoadImg(thisbtn,'#company-holder2');
   
});

// 实名认证页面上传预览
$("#fileUpload1").on('change', function () { 
    var thisbtn= $("#fileUpload1");
    UpLoadImg(thisbtn,'#image-holder1');

});
$("#fileUpload2").on('change', function () { 
    var thisbtn= $("#fileUpload2");
    UpLoadImg(thisbtn,'#image-holder2');
});
$("#fileUpload3").on('change', function () { 
     var thisbtn= $("#fileUpload3");
    UpLoadImg(thisbtn,'#image-holder3');
});

// 分类查看商品列表页面切换查看方式
$('#ViewMode1').click(function () {
     $(this).addClass('active');
     $('#ViewMode2').removeClass('active')
      $('.goodslistcon').removeClass('viewmode');
   });
$('#ViewMode2').click(function () {
     $(this).addClass('active');
     $('#ViewMode1').removeClass('active')
      $('.goodslistcon').addClass('viewmode');
   });


// 产品详情页-颜色展开收起功能
$('.updown a').click(function () {
    var text = $(this).text();
    $(this).text(text === '查看全部' ? '收起' : '查看全部');
    $(this).parents(".colorchose").find('.colorcon').slideToggle("slow");
   });

// 月结对账单页面上传预览
$("#moonUpload1").on('change', function () { 
     var thisbtn= $("#moonUpload1");
    UpLoadImg(thisbtn,'#moon-holder1');
    thisbtn.parents(".inputbox").hide();

});
$("#moonUpload2").on('change', function () { 
    var thisbtn= $("#moonUpload2");
    UpLoadImg(thisbtn,'#moon-holder2');
    thisbtn.parents(".inputbox").hide();
});
$("#moonUpload3").on('change', function () { 
    var thisbtn= $("#moonUpload3");
    UpLoadImg(thisbtn,'#moon-holder3');
    thisbtn.parents(".inputbox").hide();
    
});
$("#moonUpload4").on('change', function () { 
     var thisbtn= $("#moonUpload4");
    UpLoadImg(thisbtn,'#moon-holder4');
    thisbtn.parents(".inputbox").hide();
});
$(".uphzpz .blue").click(function () {
    var thisblue =$(this).parents(".uploadbox");
       thisblue.find('.imghold').empty();
       thisblue.find('.inputbox').toggle();

 });  

 // 单据作废功能
  $('.voidbtn').click(function () {
    var text = $(this).text();
    $(this).text(text === '作废' ? '取消作废' : '作废');
    $(".void").toggle();
   });

// 返回顶部
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

    // 新建单据页面获取当前日期并赋值给日期选择框
    var date=new Date();
    var year=date.getFullYear(); //获取当前年份
    var mon=date.getMonth()+1; //获取当前月份
    var da=date.getDate(); //获取当前日
    var mytime=year+"年"+mon+"月"+da+"日";
    $(".inputtable caption .datepicker").val(mytime);
    $(".today.datepicker").val(mytime);


   // 限制备注中输入字符不超过100
   $(".textareabox").keyup(function(){  
        var txtLeng = $(' .textareabox ').val().length;      //把输入字符的长度赋给txtLeng
        //拿输入的值做判断
        if( txtLeng>100 ){  
        //输入长度大于100时span显示0
        $('.tipss span').text(' 0 '); 
        //截取输入内容的前100个字符，赋给fontsize
        var fontsize = $('.textareabox').val().substring(0,100);
        //显示到textarea上
        $('.textareabox ').val( fontsize );
        }else{
        //输入长度小于100时span显示100减去长度
        $('.tipss span').text(100-txtLeng);  
        }
  });

   // 新建印花生产单页面左侧按钮点击效果
   $("a.sgray").click(function() {
       var sNO=$(this).text();
       if($(this).hasClass('sblack')){
         if($(this).next().hasClass('sblack')){
            return;
         }else{
          $(this).removeClass('sblack')
           $("#Yhbox").children('.tbline:last').remove(); 
           $(".tabs").children('.onetab:last').remove(); 
            }
       }else{
            if($(this).prev().hasClass('sblack')){
                 $(this).addClass("sblack");
                 $("#Yhbox").append("<div class='tbline'><span class='sblack'>"+sNO+"</span><span class='sright'><input type='text' class='form-control' placeholder=''></span></div> ");
                 $(".tabs").append("<div class='onetab' style='left:10px;top:"+(sNO*40)+"px;'><a href='javascript:void(0)'>"+sNO+"</a></div>")
             }
            }
   });
   
 // 录入合同页面添加删除功能
 $("#addCmx").click(function() {
    var Ctbline="<tr><td><input type='text' class='form-control text-left' placeholder=''></td>"
                        + "  <td><!-- 下拉菜单 -->"
                        + "    <div class='dropdown chose100'>"
                        + "       <input type='text' class='form-control text-left' placeholder='请填写' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> "
                        + "      <div class='dropdown-menu hetongtb' aria-labelledby='Khchose'>"
                        + "        <div class='scrollbar-rail'>"
                        + "        <ul>                         "  
                        + "         <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li> "                                     
                        + "        </ul>"
                        + "      </div>"
                        + "      </div>"
                        + "    </div>"
                        + "    <!-- 下拉菜单 -->"
                        + "</td>"
                        + "<td><!-- 下拉菜单 -->"
                        + "  <div class='dropdown chose100'>"
                        + "      <input type='text' class='form-control text-left' placeholder='请填写' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> "
                        + "      <div class='dropdown-menu hetongtb' aria-labelledby='Khchose'>"
                        + "        <div class='scrollbar-rail'>"
                        + "        <ul>                         "  
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li>"
                        + "          <li><a href=''>123456</a></li> "                   
                        + "       </ul>"
                        + "      </div>"
                        + "      </div>"
                        + "    </div>"
                        + "    <!-- 下拉菜单 -->"
                        + "</td>"
                        + "<td><input type='text' class='form-control text-left' placeholder=''></td>"
                        + "<td><input type='text' class='form-control text-left' placeholder=''></td>"
                        + "<td><input type='text' class='form-control text-left' placeholder=''></td>"
                        + "<td><input type='text' class='form-control text-left' placeholder=''></td>"
                        + "<td><input type='text' class='form-control text-left' placeholder=''></td>"
                        + "<td align='center'>¥29000.00</td>"
                        + "<td align='center'><p>10个工作日</p> "
                        + "  <input type='text' class='form-control datepicker' data-provide='datepicker' placeholder='请选择时间'>"
                        + "</td>"
                        + "<td align='center' class='no-print'><a class='deletetr' href='javascript:void(0)'><img src='images/delete.png' alt=''></a></td>"
                        + "</tr>";
     $("#addCtable tbody").append(Ctbline);
 });
$("#addCtable").on("click",".deletetr",function(){
   $(this).parents("tr").remove();
});
$(".contracth3").on("click",".chosefu",function(){
   $(".chose-menu").show();
});
$(".chose-menu").on("click","a",function(){
    var toptxt=$(this).text();
    $(".chosefu").text(toptxt);
    $(".chose-menu").hide();
});

// 产品详情页面颜色选择效果
$(".colorchose li").click(function() {
    if ($(this).hasClass('active')) {

    }else{
        $(".colorchose li").removeClass('active');
        $(this).addClass('active');
    }
    
});
$(".detailstab .toptabs>li").click(function() {
    $(this).siblings("li").find('a').removeClass('hideafter');
    $(this).prev("li").find('a').addClass('hideafter');
});

// 品质标准收起展开
$("#pzbzBtn").click(function() {
    var text = $(this).text();
    $(this).text(text === '收起' ? '展开查看' : '收起');
    $("#pzbzTable").slideToggle("10000");
});

// 样品页面挂卡入库浮层添加功能
$("#gkrkadd").click(function() {
   var Gkruline=" <tr><td><!-- 下拉菜单 -->" 
            + "              <div class='dropdown'>" 
            + "                  <input type='text' class='form-control text-left' placeholder='请填写编号' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> " 
            + "                  <div class='dropdown-menu ' aria-labelledby='Khchose'>" 
            + "                    <div class='scrollbar-rail'>" 
            + "                    <ul>                          "  
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>  "                                          
            + "                    </ul>" 
            + "                  </div>" 
            + "                  </div>" 
            + "                </div>" 
            + "                <!-- 下拉菜单 -->" 
            + "</td><td><!-- 下拉菜单 -->" 
            + "              <div class='dropdown'>" 
            + "                  <input type='text' class='form-control text-left' placeholder='请填写色号' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> " 
            + "                  <div class='dropdown-menu ' aria-labelledby='Khchose'>" 
            + "                    <div class='scrollbar-rail'>" 
            + "                    <ul>                          "  
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>" 
            + "                      <li><a href=''>123456</a></li>  "                                          
            + "                    </ul>" 
            + "                  </div>" 
            + "                  </div>" 
            + "                </div>" 
            + "                <!-- 下拉菜单 -->" 
            + "</td>" 
            + "<td><input type='text' class='form-control text-left' placeholder=''></td>" 
            + "<td><input type='text' class='form-control text-left' placeholder=''></td>" 
            + "<td><input type='text' class='form-control text-left' placeholder=''></td>" 
            + "<td><input type='text' class='form-control text-left' placeholder=''></td>" 
            + "<td><input type='text' class='form-control text-left' placeholder=''></td>" 
            + "<td><input type='text' class='form-control text-left' placeholder=''></td>"
            + "<td><a class='deleteGtr' href='javascript:void(0)'><img src='images/delete.png' alt=''></a></td></tr> "
    $("#gkrk tbody").append(Gkruline);
});
$("#gkrk").on("click",".deleteGtr",function(){
   $(this).parents("tr").remove();
});



});

// ---------------------------------------------------

// 上传预览函数
var UpLoadImg = function(c1,c2){
     if (typeof (FileReader) != "undefined") { 
        var image_holder = $(c2);
        image_holder.empty(); 
        var reader = new FileReader();
        reader.onload = function (e) {
            $("<img />", {
                "src": e.target.result,
                "class": "thumb-image",
                "id": "new-image"
            }).appendTo(image_holder);
            //console.log(e.target.result);
        }

        image_holder.show();
        reader.readAsDataURL(c1[0].files[0]);
    } else {
        alert("你的浏览器不支持FileReader.请使用IE10以上版本.");
    }
    
};
//<img src='img/women.jpg' width='555' height='320' alt='horse'/>
var Effects = function(c1,c2){
    if (typeof (FileReader) != "undefined") {
        var image_holder = $(c2);
        image_holder.empty();
        var reader = new FileReader();
        reader.onload = function (e) {
            $("<img />", {
                "src": e.target.result,
                "class": "thumb-image",
                "id": "new-image"
            }).appendTo(image_holder);
            //console.log(e.target.result);
            var map = L.map('image-map',{
                minZoom:1,
                maxZoom:4,
                center:[0,0],
                zoom:1,
                crs: L.CRS.Simple
            });

            var w = 2000,
                h = 1500,
                url = e.target.result;
            var southWest = map.unproject([0,h],map.getMaxZoom()-1);
            var northEast = map.unproject([w,0],map.getMaxZoom()-1);
            var bounds = new L.LatLngBounds(southWest,northEast);

            L.imageOverlay(url,bounds).addTo(map);

            map.setMaxBounds(bounds);
        }

        image_holder.show();
        reader.readAsDataURL(c1[0].files[0]);
    } else {
        alert("你的浏览器不支持FileReader.请使用IE10以上版本.");
    }

};
