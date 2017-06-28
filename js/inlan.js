/**
 * Created by Uncle Li on 2017/6/22.
 */
$(function(){
    get();
    var i=0;
    var datal={};
    function get(){
        $.ajax(({
            url:"http://127.0.0.1:3000/api/getinlanddiscount",
            success:function(data){
                datal=data;
                var newdata={
                    "result":[]
                };
                for(var i=0; i<4; i++){
                    newdata.result.push(data.result[i])
                };
                console.log(data);
                var html=template("zao",newdata);
                //console.log(html);
                $(".innnt>ul").html(html)
            }
        }))
    }
    //var j=0;
    //var daa={};
    //$(window).scroll(function(){
    //     //console.log("scrollTop:"+$(document.body).scrollTop());
    //     //console.log("height:"+$(document.body).height());
    //     //console.log(window.screen.height);
    //    //window.screen 屏幕
    //     //页面高度 - 屏幕的高度 = 滚动条的最大高度var oo=$(document.body).scrollTop() >=$(document.body).height()-window.screen.height;console.log(oo);
    //
    //    //页面的高度
    //    //var scroll=$(window).scrollTop();
    //    //var screen=$(window).screen.height;
    //    //console.log(screen);
    //    if($(document.body).scrollTop() >=
    //        $(document.body).height()-window.screen.height){
    //        console.log("到底了");
    //        $.ajax({
    //            url:"http://127.0.0.1:3000/api/getinlanddiscount",
    //            success:function(data){
    //                console.log(data);
    //                daa=data;
    //                var newdata={
    //                    "result":[]
    //                };
    //                for(var j=0; j<4; j++){
    //                    newdata.result.push(data.result[j])
    //                };
    //                var html=template("zao",newdata);
    //                //console.log(html);
    //                $(".innnt>ul").append(html)
    //            }
    //        })
    //    }
    //});
    //    $(window).on("scroll",function(){
    //        var scroll=$(window).scrollTop();
    //        console.log(scroll);
    //    })



});