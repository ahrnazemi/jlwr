jQuery(function(A){A(".clickable").live("click",function(C){if(A(C.target).closest("a[href]").length===0&&A(C.target).closest(".clickable").length===1){var B=A(this).attr("href")||A("a[href]:first",this).attr("href");
if(B){location.href=B
}}})
});
