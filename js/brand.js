/**
 * Created by Uncle Li on 2017/6/25.
 */
$(function(){
     var brandtitleid=getQueryString("brandtitleid");

    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

        function and(brandtitleid,callck){
            $.ajax({
                url:'http://127.0.0.1:3000/api/getbrand',
                data:{"brandtitleid":brandtitleid},
                success:function(data){
                    console.log(data);
                    var uls=template("uls",data);
                    $(".uls").html(uls);
                    console.log(data);

                    callck()
                }
               })
       }
    and(brandtitleid,function(productId){
        $.ajax({
            url:"http://127.0.0.1:3000/api/getbrandproductlist",
            data:{"brandtitleid":brandtitleid,"pagesize":4},
            success:function(data){
                console.log(data);
                var lefi=template("lefi",data);
                $(".list").html(lefi);
                var productId=data.result[0].productId;
                var productImg=data.result[0].productImg;
                var productName=data.result[0].productName;

                get(productId,productImg,productName)
            }
        })
    });

        function get(productId,productImg,productName){
            $.ajax({
                url:"http://127.0.0.1:3000/api/getproductcom",
                data:{"productid":productId},
                success:function(data){
                    console.log(data);

                   var html=template("pos",data);
                    console.log(html);
                    $(".llll").html(html);
                    var img=productImg;
                    var Nata=productName;
                    console.log(Nata);
                    $(".comment>ul>li>.left>.pic").html(img);
                    $(".comment>ul>li>.left>.tit").html(Nata)
                }
            })
        }

});