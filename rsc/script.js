function whiteline(){document.getElementById("handle-line").style.background="#fff"}function destroywhite(){document.getElementById("handle-line").style.background="rgba(255, 255, 255, 0.5)"}$(document).ready(function(){$(".tab-content").addClass("clearfix").not(":first").hide();$("ul.tabs").each(function(){var e=$(this).find("li.current");if(e.length<1){$(this).find("li:first").addClass("current")}e=$(this).find("li.current a").attr("href");$(e).show()});$(document).on("click",'ul.tabs a[href^="#"]',function(i){i.preventDefault();var f=$(this).parents("ul.tabs").find("li");var g=$(this).attr("href");var h=f.filter(".current").find("a").attr("href");$(h).hide();f.removeClass("current");$(this).parent().addClass("current");$(g).show();history.pushState(null,null,window.location.search+$(this).attr("href"));return false});var c=window.location.hash;if(c!=""){try{var a=$("ul.tabs a[href^="+c+"]").parents("ul.tabs").find("li");var b=a.filter(".current").find("a").attr("href");$(b).hide();a.removeClass("current");$("ul.tabs a[href^="+c+"]").parent().addClass("current");$("#"+c.replace("#","")).show()}catch(d){}}});var canvas=document.getElementById("live");var ctx=canvas.getContext("2d");var data='<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px"><em>I</em> like <span style="color:white; text-shadow:0 0 2px blue;">cheese</span></div></foreignObject></svg>';var DOMURL=window.URL||window.webkitURL||window;var img=new Image();var svg=new Blob([data],{type:"image/svg+xml;charset=utf-8"});var url=DOMURL.createObjectURL(svg);img.onload=function(){ctx.drawImage(img,0,0);DOMURL.revokeObjectURL(url)};img.src=url;