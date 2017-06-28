/**
 * Created by Uncle Li on 2017/6/25.
 */
$(function(){
      ge();
      function  ge(){
          $.ajax({
              url:'http://127.0.0.1:3000/api/getsitenav',
              success:function(data){
                  console.log(data);
                  var html=template("inlk",data)
                  $(".link").html(html);
              }
          })
      }
});