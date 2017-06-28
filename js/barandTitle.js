/**
 * Created by Uncle Li on 2017/6/25.
 */
$(function(){
            Title();
      function  Title(){
          $.ajax({
              url:"http://127.0.0.1:3000/api/getbrandtitle",
              success:function(data){
                  console.log(data);
                   var htm=template("por",data);
                        $("#panle_gri").html(htm)

              }
          })
      }
});