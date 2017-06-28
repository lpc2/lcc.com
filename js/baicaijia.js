/**
 * Created by Uncle Li on 2017/6/24.
 */
$(function(){

        var titleid=getQueryString("titleid")||0;
        ti(titleid);
       function ti(titleid){
           $.ajax({
                    url:"http://127.0.0.1:3000/api/getbaicaijiaproduct",
                     data:{"titleid":titleid},
                     success:function(data){
                         console.log(data);
                         var ullis=template("ullis",data);
                         $(".media>ul").html(ullis);
                         $(".ul-wapper>ul>li>a").on("click",function(){
                             var btn=$(this).attr("data-titleid");
                             console.log(btn);
                             $.ajax({
                                    url:"http://127.0.0.1:3000/api/getbaicaijiaproduct",
                                     data:{"titleid":btn},
                                 success:function(data){
                                     var ullis=template("ullis",data);
                                     $(".media>ul").html(ullis);
                                 }
                             })
                         });
                     }
           })
       }





    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }











});

