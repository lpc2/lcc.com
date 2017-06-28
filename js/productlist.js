/**
 * Created by Uncle Li on 2017/6/19.
 */
$(function () {

    var categoryId=getQueryString("categoryid");
    console.log(categoryId);
    var pageid=getQueryString("pageid");
    teevee(categoryId);
    geteve(categoryId,pageid);
    console.log(pageid);
    //categoryid
        function teevee(categoryId){
            $.ajax({
                url:"http://127.0.0.1:3000/api/getcategorybyid",
                data:{"categoryid":categoryId},
                success:function(data){
                    console.log(data.result[0].category);
                    console.log(data);
                   var ht=template("ol",data);
                    $(".breadcrumb").html(ht);
                }
            })
        }

    function  geteve(categoryId,pageid){
        $.ajax({
            url:"http://127.0.0.1:3000/api/getproductlist",
            data:{"categoryid":categoryId,
                "pageid":pageid||1},
            success:function(data){
                console.log(data);
                //console.log(data.totalCount);
               var ye =Math.ceil(data.totalCount/data.pagesize);
                console.log(ye);
                var pai="";
               for(var i=0; i<ye; i++){
                   //var url="";
                var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i + 1);
                   console.log(url);
                   pai+="<option value="+url+" class='data'>第"+(i+1)+"/"+(ye)+"页</option> "
               }

                if (pageid <= 1) {
                    pageid = 1;
                    prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + pageid;
                    nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid) + 1);
                } else if (pageid >= ye) {
                    pageid = ye;
                    prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (pageid - 1);
                    nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid));
                }
                else {
                    prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (pageid - 1);
                    nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid) + 1);
                }


                var  prevUrl;
                var nextUrl;
                console.log(prevUrl);
                $(".shang").attr("href",prevUrl);
                $('.xia').attr("href", nextUrl);
               //console.log(ye);
                $("#city").html(pai);
                console.log(data);
                var html=template("media",data);
                $(".list").html(html);
            }
        })
    }
    //window.location.href=url+ind++;
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    //var categoryId = getQueryString("categoryid");
    ////获取地址栏的pageid参数 也就是当前的页码数
    //var pageid = getQueryString("pageid");
    //console.log(pageid);
    //getCategory(categoryId);
    ////调用获取商品列表的时候 同时把pageid传入 获取到第几页的数据
    //setProdcutList(categoryId, pageid);
    ////获取商品分类名称函数
    //function getCategory(categoryId) {
    //    $.ajax({
    //        url: "http://127.0.0.1:3000/api/getproductlist",
    //        success: function (data) {
    //            //console.log(data.result[0].category);
    //            // var html = template("categoryTitleTmp",data);
    //            // console.log(html);
    //            // $('.breadcrumb').html(html);
    //            // $('#productList > .category-title > ol > li:last-child') 获取到分类名称所在的li标签
    //            // data.result[0].category 是获取返回的数据的result属性里面的第一个对象里面的category属性
    //            //$('.breadcrumb > li:last-child').html(data.result[0].category);
    //            var htlm = template("ol", data);
    //            $(".breadcrumb").html(htlm);
    //        }
    //    });
    //}
    //
    ////获取商品列表的函数
    //function setProdcutList(categoryId, pageid) {
    //    // pageid = ;
    //    $.ajax({
    //        url: "http://127.0.0.1:3000/api/getproductlist",
    //        data: {
    //            "categoryid": categoryId,
    //            "pageid": pageid || 1
    //        },
    //        success: function (data) {
    //            console.log(data);
    //            // console.log(data.totalCount +"-----"+ data.pagesize);
    //            //页码数 用总条数 /  每页大小
    //            var page = data.totalCount / data.pagesize;
    //            // console.log(page);
    //            var pageli = "";
    //            for (var i = 0; i < page; i++) {
    //                //循环生成 第几页的li标签
    //                // var url = "productlist.html?categoryid=" + categoryId + "pageid=" + pageid;
    //                // var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i+1);
    //                var url = "productlist.html?categoryid=" + categoryId + "&pageid=" + (i + 1);
    //                pageli += "<option>第" + (i + 1) + "/" + (page) + "页</option> ";
    //                //pageli += "<li><a href=" + url + ">第" + (i + 1) + "/" + (page) + "页</a></li>";
    //            }
    //            console.log(pageid);
    //            //$('#dLabel').html("第" + pageid + "页" + '<span class="caret"></span>');
    //            //如果当前页数已经到了第一页 给当前页面数变成2  2 -1 就只能 == 1
    //            if (pageid <= 1) {
    //                pageid = 2;
    //            } else if (pageid >= page) {
    //                //如果当前页数已经到了第最后一页 给当前页数变成最后一页 - 1  3+1 == 4
    //                pageid = page - 1;
    //            }
    //            var prevUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (pageid - 1);
    //            var nextUrl = "productlist.html?categoryid=" + categoryId + "&pageid=" + (parseInt(pageid) + 1);
    //            $('.shang').attr("href", prevUrl);
    //            $('.xia').attr("href", nextUrl);
    //            // $('#dLabel').append('<span class="caret"></span>');
    //            //$('.dropdown-menu').html(pageli);
    //            //var html = template("productListTmp", data);
    //            //$('.product-list').html(html);
    //            $("#city").html(pageli);
    //            var html = template("media", data);
    //            $(".list").html(html);
    //
    //        }
    //    })
    //}
    //
    ////是用来获取url中的参数的值的 根据参数名获取参数值
    //function getQueryString(name) {
    //    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    //    var r = window.location.search.substr(1).match(reg);
    //    if (r != null) {
    //        return unescape(r[2]);
    //    }
    //    return null;
    //}
});

