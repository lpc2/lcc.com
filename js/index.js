$(function(){
            menu();
            function menu(){
                $.ajax({
                     url:"http://182.254.146.100:3000/api/getindexmenu",
                     dataType:"json",
                     type:"get",
                     success:function(data){
                         console.log(data);
                         var html=template("menuTo",data);
                         $("#menu").html(html);
                         $("#menu>.row>div:nth-child(8)").on("click",function(){
                             // toggleÇÐ»»
                             $("#menu>.row>div:nth-last-child(-n+4)").toggle(200);
                         });
                         }
                })
            }
        commodity();
        function commodity(){
                $.ajax({
                    url:"http://127.0.0.1:3000/api/getmoneyctrl",
                    dataType:"json",
                    type:"get",
                    success:function(data){
                        console.log(data);
                        var html=template("commodity",data);
                        $(".recommen-list").html(html);
                    }
                })

        }

});