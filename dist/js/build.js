function colourblindReset(){($(".comic-strip").hasClass("is-cb-protanopia")||$(".comic-strip").hasClass("is-cb-protanomaly")||$(".comic-strip").hasClass("is-cb-deuteranopia")||$(".comic-strip").hasClass("is-cb-deuteranomaly")||$(".comic-strip").hasClass("is-cb-tritanopia")||$(".comic-strip").hasClass("is-cb-tritanomaly")||$(".comic-strip").hasClass("is-cb-achromatopsia")||$(".comic-strip").hasClass("is-cb-achromatomaly"))&&$(".comic-strip").removeClass("is-cb-protanopia is-cb-protanomaly is-cb-deuteranopia is-cb-deuteranomaly is-cb-tritanopia is-cb-tritanomaly is-cb-achromatopsia is-cb-achromatomaly")}function bubblesResize(){$w=$(".comic-frame").width()/265+"em",$(".bubble").css({"font-size":$w})}function bubbleBrowserZoom(){let e=document.querySelector(".bubble"),t=window.getComputedStyle(e);parseInt(t.getPropertyValue("font-size"),10)>23&&($(".comic-strip").addClass("is-closed-caption-mode is-browserZoom"),$(".js-closedcaptions").addClass("is-active").attr("disabled",!0).attr("aria-pressed","true"))}function bubbles(){$(".comic-strip").addClass("is-loading"),bubblesResize(),bubbleBrowserZoom(),$(".bubble svg").remove(),$(".bubble").each(function(e){xmlns="http://www.w3.org/2000/svg",b_stroke=4,b_handle_length=8,b_width=$(this).outerWidth(),b_height=$(this).outerHeight(),t_direction=$(this).data("direction"),"short"==$(this).data("length")?t_length=50:"normal"==$(this).data("length")?t_length=100:"long"==$(this).data("length")?t_length=200:t_length=$(this).data("length"),b_1_node_x=b_stroke/2,b_1_node_y=b_height/2,b_1_handle_in_x=b_1_node_x,b_1_handle_in_y=b_height/b_handle_length*(b_handle_length-1),b_1_handle_out_x=b_1_node_x,b_1_handle_out_y=b_height/b_handle_length,b_2_node_x=b_width/2,b_2_node_y=b_stroke/2,b_2_handle_in_x=b_width/b_handle_length,b_2_handle_in_y=b_2_node_y,b_2_handle_out_x=b_width/b_handle_length*(b_handle_length-1),b_2_handle_out_y=b_2_node_y,b_3_node_x=b_width-b_stroke/2,b_3_node_y=b_1_node_y,b_3_handle_in_x=b_3_node_x,b_3_handle_in_y=b_1_handle_out_y,b_3_handle_out_x=b_3_node_x,b_3_handle_out_y=b_1_handle_in_y,b_4_node_x=b_2_node_x,b_4_node_y=b_height-b_stroke/2,b_4_handle_in_x=b_2_handle_out_x,b_4_handle_in_y=b_4_node_y,b_4_handle_out_x=b_2_handle_in_x,b_4_handle_out_y=b_4_node_y,b_path="M"+b_1_node_x+","+b_1_node_y+" ",b_path+="C"+b_1_handle_out_x+","+b_1_handle_out_y,b_path+=" "+b_2_handle_in_x+","+b_2_handle_in_y,b_path+=" "+b_2_node_x+","+b_2_node_y,b_path+="S"+b_3_handle_in_x+","+b_3_handle_in_y,b_path+=" "+b_3_node_x+","+b_3_node_y+" ",b_path+="S"+b_4_handle_in_x+","+b_4_handle_in_y,b_path+=" "+b_4_node_x+","+b_4_node_y,b_path+="S"+b_1_handle_in_x+","+b_1_handle_in_y,b_path+=" "+b_1_node_x+","+b_1_node_y,b_path+=" z","left"==$(this).data("position")&&(bezier_point_0={x:b_4_node_x-b_stroke/2,y:b_4_node_y-b_stroke/2},bezier_control_out={x:b_4_handle_out_x-b_stroke/2,y:b_4_handle_out_y-b_stroke/2},bezier_control_in={x:b_1_handle_in_x-b_stroke/2,y:b_1_handle_in_y-b_stroke/2},bezier_point_1={x:b_1_node_x-b_stroke/2,y:b_1_node_y-b_stroke/2},bezier_node_1=Bezier(bezier_point_0,bezier_control_out,bezier_control_in,bezier_point_1,".45"),bezier_node_2=Bezier(bezier_point_0,bezier_control_out,bezier_control_in,bezier_point_1,".2")),"right"==$(this).data("position")&&(bezier_point_0={x:b_4_node_x-b_stroke/2,y:b_4_node_y-b_stroke/2},bezier_control_in={x:b_4_handle_in_x-b_stroke/2,y:b_4_handle_in_y-b_stroke/2},bezier_control_out={x:b_3_handle_out_x-b_stroke/2,y:b_3_handle_out_y-b_stroke/2},bezier_point_1={x:b_3_node_x-b_stroke/2,y:b_3_node_y-b_stroke/2},bezier_node_1=Bezier(bezier_point_0,bezier_control_in,bezier_control_out,bezier_point_1,".2"),bezier_node_2=Bezier(bezier_point_0,bezier_control_in,bezier_control_out,bezier_point_1,".45")),t_girth=(bezier_node_2.x-bezier_node_1.x)/4,"center"==$(this).data("position")&&(t_girth=10,bezier_node_2={x:b_width/2+2*t_girth-b_stroke/2,y:b_height-b_stroke/2-b_stroke/2},bezier_point_0={x:b_width/2-2*t_girth-b_stroke/2,y:b_height-b_stroke/2-b_stroke/2},bezier_control_out={x:b_4_handle_out_x-b_stroke/2-b_stroke/2,y:b_4_handle_out_y-b_stroke/2-b_stroke/2},bezier_control_in={x:b_1_handle_in_x-b_stroke/2-b_stroke/2,y:b_1_handle_in_y-b_stroke/2-b_stroke/2},bezier_point_1={x:b_width/2+2*t_girth-b_stroke/2,y:b_height-b_stroke/2-b_stroke/2},bezier_node_1=Bezier(bezier_point_0,bezier_control_out,bezier_control_in,bezier_point_1,"1"),bezier_node_2=Bezier(bezier_point_0,bezier_control_out,bezier_control_in,bezier_point_1,"0"),t_girth=(bezier_node_2.x-bezier_node_1.x)/2),"left"==t_direction&&(t_x0=bezier_node_2.x,t_y0=bezier_node_2.y,t_x1=bezier_node_1.x,t_y1=bezier_node_1.y,t_x2=bezier_node_2.x,t_y2=bezier_node_2.y+t_length/10,t_x3=bezier_node_2.x-t_girth,t_y3=bezier_node_2.y+t_length,t_x4=bezier_node_2.x,t_y4=bezier_node_2.y),"right"==t_direction&&(t_x0=bezier_node_1.x,t_y0=bezier_node_1.y,t_x1=bezier_node_2.x,t_y1=bezier_node_2.y,t_x2=bezier_node_1.x,t_y2=bezier_node_1.y+t_length/10,t_x3=bezier_node_1.x+t_girth,t_y3=bezier_node_1.y+t_length,t_x4=bezier_node_1.x,t_y4=bezier_node_1.y),t_path="M"+t_x0+","+t_y0,t_path+="L"+t_x1+","+t_y1,t_path+="Q"+t_x2+","+t_y2,t_path+=" "+t_x3+","+t_y3,t_path+="L"+t_x4+","+t_y4,t_path+="z",b_svg=document.createElementNS(xmlns,"svg"),b_svg_path=document.createElementNS(xmlns,"path"),t_svg_path1=document.createElementNS(xmlns,"path"),t_svg_path2=document.createElementNS(xmlns,"path"),b_svg.setAttribute("viewBox","0 0 "+b_width+" "+(b_height+t_length)),b_svg.setAttribute("width",b_width),b_svg.setAttribute("height",b_height+t_length),b_svg_path.setAttribute("d",b_path),b_svg_path.setAttribute("stroke","#000"),b_svg_path.setAttribute("stroke-width",b_stroke),b_svg_path.setAttribute("stroke-linecap","round"),b_svg_path.setAttribute("stroke-linejoin","round"),b_svg_path.setAttribute("fill","green"),t_svg_path1.setAttribute("d",t_path),t_svg_path1.setAttribute("stroke","#000"),t_svg_path1.setAttribute("stroke-width",2*b_stroke),t_svg_path1.setAttribute("stroke-linecap","round"),t_svg_path1.setAttribute("stroke-linejoin","round"),t_svg_path1.setAttribute("fill","#000"),t_svg_path2.setAttribute("d",t_path),t_svg_path2.setAttribute("fill","#fff"),b_svg.appendChild(t_svg_path1),b_svg.appendChild(b_svg_path),b_svg.appendChild(t_svg_path2),$(this).append(b_svg)}),$(".comic-strip").removeClass("is-loading"),bubblesResize()}function YBX(e,t,_,s,i){e=e.x,t=t.x,_=_.x;var o=cubic((s=s.x)-3*_+3*t-e,3*_-6*t+3*e,3*t-3*e,e-i);return Bezier(p0,c0,c1,p1,o)}function Bezier(e,t,_,s,i){var o={x:0,y:0},n=1-i,r=n*n,a=r*n;return o.x=e.x*a+3*t.x*r*i+3*_.x*n*i*i+s.x*i*i*i,o.y=e.y*a+3*t.y*r*i+3*_.y*n*i*i+s.y*i*i*i,o}function cubic(a,b,c,d){var m,m2,k,n,n2,x,r,rc,theta,sign,dans,f=eval(3*c/a-b*b/(a*a))/3,g=eval(b*b*b/(a*a*a)*2-9*b*c/(a*a)+d/a*27)/27,h=eval(g*g/4+f*f*f/27);return h>0?(m=eval(-g/2+Math.sqrt(h)),k=m<0?-1:1,m2=eval(Math.pow(m*k,1/3)),m2*=k,n=eval(-g/2-Math.sqrt(h)),k=n<0?-1:1,n2=eval(Math.pow(n*k,1/3)),n2*=k,x=eval(m2+n2-b/(3*a))):(r=eval(Math.sqrt(g*g/4-h)),k=r<0?-1:1,rc=Math.pow(r*k,1/3)*k,theta=Math.acos(-g/(2*r)),x=eval(rc*Math.cos(theta/3)*2-b/(3*a)),x*=1e14,x=Math.round(x),x/=1e14),f+g+h==0&&(d<0&&(sign=-1),d>=0&&(sign=1),sign>0&&(dans=Math.pow(d/a,1/3),dans*=-1),sign<0&&(d*=-1,dans=Math.pow(d/a,1/3)),x=dans),x}$(function(){$(document).keyup(function(e){return window.addEventListener("keydown",function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&$(".dropdown").hasClass("is-focussed")&&e.preventDefault()},!1),27===e.keyCode&&$(".dropdown").hasClass("is-focussed")&&($(".dropdown").removeClass("is-focussed"),$(".dropdown__selected").focus()),38===e.keyCode&&$(".dropdown").hasClass("is-focussed")?($(":focus").hasClass("js-cb-normal")?$(":focus").parents("ul").prev().focus():$(":focus").hasClass("dropdown__selected")||$(":focus").parent().prev().find("button").focus(),!1):40===e.keyCode&&$(".dropdown").hasClass("is-focussed")?($(":focus").hasClass("dropdown__selected")?$(":focus").next().find("li:first-child > button").focus():$(":focus").hasClass("js-cb-achromatomaly")||$(":focus").parent().next().find("button").focus(),!1):void 0}),$("body").on("click",function(){$(".dropdown").removeClass("is-focussed")}),$(".js-highcontrast").on("click",function(){return $(".comic-strip").hasClass("is-high-contrast-mode")?($(".comic-strip").removeClass("is-high-contrast-mode"),$(this).removeClass("is-active").attr("aria-pressed","false"),$(".comic-strip img").each(function(){var e=$(this).data("src");$(this).attr("src",e)})):($(".comic-strip").addClass("is-high-contrast-mode"),$(this).addClass("is-active").attr("aria-pressed","true"),$(".comic-strip img").each(function(){var e=$(this).data("contrast");$(this).attr("src",e)})),!1}),$(".js-rtl").on("click",function(){return $(".comic-strip").hasClass("is-rtl-mode")?($(".comic-strip").removeClass("is-rtl-mode"),$(this).removeClass("is-active").attr("aria-pressed","false")):($(".comic-strip").addClass("is-rtl-mode"),$(this).addClass("is-active").attr("aria-pressed","true")),!1}),$(".js-bubbles").on("click",function(){return bubbles(),!1}),$(".js-closedcaptions").on("click",function(){return $(".comic-strip").hasClass("is-closed-caption-mode")?($(".comic-strip").removeClass("is-closed-caption-mode"),$(this).removeClass("is-active").attr("aria-pressed","false"),$(".comic-strip").data("fontsize","100"),$(".font-sizer .text strong").text("100%"),$(".comic-strip .caption-closed").css("font-size","100%"),$(".js-resize-up").attr("disabled",!1),$(".js-resize-down").attr("disabled",!0)):($(".comic-strip").addClass("is-closed-caption-mode"),$(this).addClass("is-active").attr("aria-pressed","true")),!1}),$(".font-sizer .btn").on("click",function(){var e=$(".comic-strip").data("fontsize");return $(this).hasClass("js-resize-up")&&(e=parseFloat(e)+10),$(this).hasClass("js-resize-down")&&(e=parseFloat(e)-10),100!=e&&200!=e&&($(".js-resize-down").attr("disabled",!1),$(".js-resize-up").attr("disabled",!1)),100!=e?($(".comic-strip").addClass("is-closed-caption-mode"),$(".js-closedcaptions").addClass("is-active").attr("aria-pressed","true"),$(".comic-strip").addClass("is-resized")):($(".comic-strip").hasClass("is-browserZoom")||($(".comic-strip").removeClass("is-closed-caption-mode"),$(".js-closedcaptions").removeClass("is-active").attr("aria-pressed","false")),$(".comic-strip").removeClass("is-resized")),100==e&&$(".js-resize-down").attr("disabled",!0),200==e&&$(".js-resize-up").attr("disabled",!0),$(".comic-strip").data("fontsize",e),$(".font-sizer .text strong").text(e+"%"),$(".comic-strip .caption-closed").css("font-size",e+"%"),!1}),$(".dropdown__selected").on("click",function(e){$(this).parent().hasClass("is-focussed")?$(this).parent().removeClass("is-focussed"):$(this).parent().addClass("is-focussed"),e.stopPropagation()}),$(".btn-option").on("click",function(){return $text=$(this).text(),$(this).parents(".dropdown").find(".dropdown__selected strong").text($text),$(this).parents(".dropdown").removeClass("is-focussed"),$(this).parents(".dropdown").find(".dropdown__selected").focus(),$text=$text.toLowerCase(),$(this).hasClass("js-cb-normal")?colourblindReset():$(".comic-strip").hasClass("is-cb-"+$text)||(colourblindReset(),$(".comic-strip").addClass("is-cb-"+$text)),!1}),bubbles()});