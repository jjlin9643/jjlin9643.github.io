import{r,o as l,c as o,a as g,g as m,h as c,u,e as y}from"./index.ba299e5d.js";const h={class:"inline-block whitespace-pre-wrap"},x={key:0,class:"-ml-1"},k={props:{text:{type:String,default:""},speed:{type:Number,default:100},cursor:{type:String,default:"|"},delay:{type:Number,default:0}},emits:["waiting","typing","done"],setup(i,{emit:t}){const e=i;let p=0,n=0,a=r(!1),s=r("");setTimeout(d,e.delay),t("waiting");function d(){a.value=!0,n=setInterval(f,e.speed),t("typing")}function f(){s.value=e.text.slice(0,p++),s.value.length>=e.text.length&&_()}function _(){a.value=!1,clearInterval(n),t("done")}return(v,w)=>(l(),o("span",null,[g("span",h,[m(c(u(s))+" ",1),u(a)?(l(),o("span",x,c(e.cursor),1)):y("",!0)])]))}};export{k as _};
