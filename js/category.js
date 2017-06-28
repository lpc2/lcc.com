/**
 * Created by Uncle Li on 2017/6/19.
 */
$(function () {
    gettitle();
    function gettitle() {
        $.ajax({
            url: "http://127.0.0.1:3000/api/getcategorytitle",
            type: "get",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var html = template("por", data);
                $("#panle_gri").html(html);
                console.log(data);
                $("#panle_gri > .panel-group > .panel > .panel-heading > h4 > a").on("click", function () {
                    var titleid  = $(this).attr("data-titleid");
                    console.log(titleid);
                    $.ajax({
                        url:"http://127.0.0.1:3000/api/getcategory",
                        data:{"titleid":titleid},
                        success:function(data){
                           console.log(data);
                            var innerHTML=template("mixTime",data);
                            //console.log(innerHTML);
                            var ht= "#"+titleid+" .panel-body  .row";
                            $(ht).html(innerHTML);
                        }
                    })
                })
            }
        })
    }


    //$.ajax({
    //    url: "http://127.0.0.1:3000/api/getcategory",
    //    data:{titleId:id},
    //    success: function (data) {
    //        console.log(data);
    //    }
    //})
});