$(function(){$("div#editor_side_bar").hide();$("#editor").focus(function(){$("div#editor_side_bar").fadeIn("slow")});$("#editor").blur(function(){$("div#editor_side_bar").fadeOut("slow")});$(".question-body img, .answer-body img, .comment-text img").each(function(){$(this).css({maxWidth:"100%",cursor:"pointer"}).removeAttr("width").removeAttr("height")}).live("click",function(){var h=$(this).clone().css({maxWidth:null,cursor:"default"});h.hide().appendTo("body");var b=h.width(),f=h.height();h.remove().show();var c=$(window).width(),g=$(window).height();var e,a;e=Math.min(b+30,c*0.95);a=Math.min(f+75,g*0.95);var d=$("<div>");d.append(h).dialog({hide:"fade",show:"fade",modal:true,width:e,height:a,close:function(i,j){$(this).remove()}});if($.fn.scrollview&&(b>e||f>a)){d.scrollview()}})});