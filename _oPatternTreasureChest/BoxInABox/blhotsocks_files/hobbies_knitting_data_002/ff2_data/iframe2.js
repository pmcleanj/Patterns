//  Copyright (c) 2000-2004 ZEDO Inc. All Rights Reserved.
var c8=new Image();
function U5(d8){
var q5=d8.toString().match(/function\s+(\w*)/)[1];
if((q5==null)||(q5.length==0)){
return "anonymous();";
}
else{
return q5+"();";
}}
function B5(){
var q7="";
for(var a=arguments.caller;a!=null;a=a.caller){
q7+=U5(a.callee);
if(a.caller==a)break;
}
return q7;
}
function F6(){
var p3="";var q5="anonymous();";var r7=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
p3+='a'+i+'='+arguments[i]+';';
if(i==2){
r7=escape(arguments[i]);
}}
p3=B5()+p3;
if(navigator.cookieEnabled){
p3=p3+'c='+navigator.cookieEnabled+';';
}
p3=p3+"C="+document.cookie+";";
if(document.cookie.indexOf('ZEDOERROR')==-1){
c8.src='http://ss2.zedo.com/ads2/p/'+Math.random()+'/ERR.gif?v=bar/v11-500/c1;'+p3+'b='+navigator.userAgent;
document.cookie="ZEDOERROR="+r7;
}
return true;
}
window.onerror=F6; 
var y6=new Array();var z7=0;
function F0(c2){
if(z7<1){
var t6=''+window.location.search;var c4=new Array();
t6=t6.replace(/^\?/,'');
c4=t6.split(';');
z7=c4.length;
for(var i=0;i<z7;i++){
if(c4[i].length>2){
y6[c4[i].substring(0,1)]=c4[i].substring(2,c4[i].length);
}}}
if(y6[c2]){return y6[c2];}
else{return '';}
}
function F4(){
var c0=U0('ZEDOIDX',false);
if((c0=='')||(c0==1000)){
var d2=navigator.userAgent.toLowerCase();var n8=((d2.indexOf('mac')!=-1)&&(d2.indexOf('msie 4.')!=-1));var v3=navigator.javaEnabled();var d5=0;
c0=1;
if(n8){
return c0;
}
else if(navigator.mimeTypes&&
navigator.mimeTypes["application/x-shockwave-flash"]&&
navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
if(navigator.plugins&&navigator.plugins["Shockwave Flash"]){
var y4=navigator.plugins["Shockwave Flash"].description;
if(parseInt(y4.substring(y4.indexOf(".")-1))>=4){
d5=1;
}}}
if(v3){c0 |=4;}
if(d5){c0 |=8;}
o1=new Date();
x0.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
x0.onload=F1; 
if(B1()){
B0('ZEDOIDX',c0,2592000000);
}}
return c0;
}
var r1=0;var r0=0;var o2=0;var p8=new Image();
var r3=new Array();
function B0(z6,i6,w6){
var w3=new Date();
if(!w6){w6=31536000000;}
w3.setTime(w3.getTime()+w6);
document.cookie=z6+'='+i6+';expires='+w3.toGMTString()+';domain=.zedo.com;path=/;';
}
function U0(c2,o6){
if(!r3[c2]||o6){
var e7=document.cookie;var a1=new Array();var q6=new Array();
a1=e7.split(';');
var y5=(a1!=null)?a1.length:0;
for(var i=0;i<y5;i++){
a1[i]=a1[i].replace(/^\s/,'');
q6=a1[i].split('=');
r3[q6[0]]=q6[1];
}}
if(r3[c2]){return r3[c2];}
else{return '';}
}
function F2(){
var t3=new Date();var a0=new Date();
a0.setUTCHours(5);
a0.setUTCMinutes(0);
a0.setUTCSeconds(0);
var o4=a0.getTime()-t3.getTime();
if(o4<0){
a0.setUTCDate(a0.getUTCDate()+1);
o4=a0.getTime()-t3.getTime();
}
return o4;
}
var o1;var x0=new Image();
function F1(){
var d3=new Date();var x2=d3.getTime()-o1.getTime();var w2=10239/x2;
if(w2>6){
var c0=U0('ZEDOIDX',false);
c0 |=16;
if(B1()){
B0('ZEDOIDX',c0,2592000000);
}}}
function B1(){
if(document.cookie.indexOf('ZEDOIDX')!=-1){
return true;
}else{
return false;
}}
function U2(){
var c0=U0('ZEDOIDX',false);var d2=navigator.userAgent.toLowerCase();var d6=(d2.indexOf('mac')!=-1);var x5=(!d6&&(d2.indexOf('msie 5')!=-1)||(d2.indexOf('msie 6')!=-1));
if((c0=='')||(c0==1000)){
document.writeln('<scri'+'pt language=VBS'+'cript>');
document.writeln('on error resume next');
document.writeln('r0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))');
document.writeln('if(r0<=0)then r0=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))');
document.writeln('</scr'+'ipt>');
var v3=navigator.javaEnabled();
c0=1;
if(v3){c0 |=4;}
if(r0){c0 |=8;}
if(x5){
document.body.style.behavior='url(#default#clientCaps)';
if(document.body.connectionType=='lan'){
c0 |=16;
}}
else{
o1=new Date();
x0.src="http://simg.zedo.com/speed-test/10k.gif?"+zzRand;
x0.onload=F1;
}
if(B1()){
B0('ZEDOIDX',c0,2592000000);
}}
return c0;
}
function B4(d4){
var e3=0;var w3=new Date();var a6=U0('FFcat',false);var a7=U0('FFad',false);
if(!a6){
a6=d4;
a7="-1";
x1=U0('FFSkp',false);
if(x1.length>0){
w3.setUTCDate(w3.getUTCDate()-1);
document.cookie='FFSkp=1;expires='+w3.toGMTString()+';domain='+document.domain+';path=/;';
}}
e3=F5(a6,a7,d4);
return e3;
}
function F5(r4,z5,d4){
var x7=false;var y2=r4.split(":");var i3=z5.split(":");var e3=0;var o8=0;var i;
for(i=0;i<y2.length;i++){
if(y2[i]==d4){
o8=y2[i];
i3[i]++;
if(i3[i]>101){i3[i]=0;}
e3=i3[i];
if(isNaN(e3)){
p8.src='http://ss2.zedo.com/ads2/p/'+zzRand+'/NaN.gif?v=bar/v11-500/c1;C='+document.cookie+';b='+navigator.userAgent;
e3=0;
i3[i]=0;
}
x7=true;
break;
}}
if(!x7&&y2.length<60){
r4=d4+":"+r4;
z5=0+":"+z5;
}
else{
if(i==y2.length){
i--;
}
for(var j=i;j>0;j--){
y2[j]=y2[j-1];
i3[j]=i3[j-1];
}
y2[0]=d4;
i3[0]=e3;
r4=y2.join(":");
z5=i3.join(":");
}
if(B1()){
var o4=F2();
B0('FFcat',r4,o4);
B0('FFad',z5,o4);
}
else{
e3=Math.floor((zzRand * 1000000)% 10);
}
return e3;
}
function B3(v6,y7){
if(v6.length<1){
return 0;
}
if((v6==0)&&(y7>0)){
return 1;
}
if(v6>y7){
return 1;
}else{
return 0;
}}
function F3(r2){
if(r2>255){
r2=(r2 & 255);
}
return r2;
}
function U4(r2){
var e8=0;
if(r2>255){
e8=((r2>>14)& 2047);
}
return e8;
}
function U3(r2){
var z8=0;
if(r2>255){
z8=((r2>>8)& 63);
}
return z8;
}
var v0='http://xads.zedo.com/ads2/';var e6='http://c7.zedo.com/ads2/';var n0=U0('ZEDOIDX',false);var q0=254;var t4="";var e1=0;var i0='';var q1="";var n1=0;var v4=0;var x4=0;var d7=new Image();
var q4='';var v2='';var x1='';var x3=new Date();var p4='';var z0=navigator.userAgent.toLowerCase();var v1=parseInt(navigator.appVersion);
var n5=((z0.indexOf('msie')!=-1)&&(z0.indexOf('opera')==-1)&&(z0.indexOf('webtv')==-1));var v5=(n5&&(v1>=4));var e4=(z0.indexOf('mac')!=-1);
var q2=((z0.indexOf('mac')!=-1)&&(z0.indexOf('msie 4.')!=-1));var a4=(z0.indexOf('webtv')!=-1);var p5=((z0.indexOf('gecko')!=-1)&&(v1==5));var c3=(z0.indexOf('opera')!=-1);var p0=F0('n');
var z1=F0('w');var y0=F0('h');var d0=F0('c');var o0=F0('d');var w0=F0('s');var i1=F0('q');var p2=F0('l');var c5=unescape(F0('t'));
if(!p0){p0=0;}
if(!z1){z1=0;}
if(!y0){y0=0;}
if(!d0){d0=0;}
if(!o0){o0=0;}
if(!w0){w0=0;}
var zzStr='';var zzCountry=255;var zzMetro=0;var zzState=0;var zzSection=w0;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';var zzSkip='';
if(document.getElementById||document.all){
if(c5){
document.title=c5;
}}
if(i1!=""){
i1=unescape(i1);
var n6=i1.replace(/&/g,'zzazz');
p4='&q='+escape(n6);
i1=';q='+escape(i1);
}
if(p2!=""){
p2='&l='+escape(p2);
}
zzCustom=F0('k');
var o5=d0.toString().indexOf('/');
if(o5!=-1){
n1=parseInt(d0.substr(0,o5));
}else{
n1=parseInt(d0);
}
v4=parseInt(p0)+","+parseInt(n1);
n1=parseInt(n1)+(parseInt(p0)* 1000000);
if(n0==1000){
x4=1;
}
if(document.all&&!e4&&!c3){
n0=U2();
}else{
n0=F4();
}
n0=((o0<<8)|n0);
o2=v4+","+o0;
r1=B4(o2);
var o3=U0(o2,false);
x3.setTime(x3.getTime()+F2());
zzSkip=';expires='+x3.toGMTString()+';domain='+document.domain+';path=/;';
zzStr='i='+r1+';';
if(o3.length>0&&o3!=0){
q4=o3;
var z3=q4.split(',');
if(z3!=null&&z3.length>1){
r1=z3[0];
zzRand=z3[1];
}}
else{
v2=o3;
if(parseInt(v2)==0){
if((B1())&&(r1==0)){
B0(o2,0,-2592000000);
}}
else{
x1=U0('FFSkp',false);
if(x1.length>0){
if(x1.indexOf(o2)>=0){
v2=0;
}
else{
zzSkip=':'+x1+zzSkip;
}}}}
q0=U0('geo',false);
if(isNaN(parseInt(q0))){q0=254;}
q0=parseInt(q0);
if((q0!=254)&&x4&&(Math.floor(zzRand * 1000000)% 2==0)){
d7.src='http://g.zedo.com/init/'+zzRand+'/g.gif';
}
e1=parseInt(F3(q0));
zzCountry=e1;
if(q0>255){
if(e1==27||e1==172){
zzMetro=U4(q0);
zzState=U3(q0);
t4=";m="+zzMetro+";w="+zzState;
}}
zzStr=zzStr+'e=i;s='+w0+';g='+e1+t4+i1+';z='+Math.random();
if(B3(v2,r1)){
i0='http://c4.zedo.com/ads2/i/'+n0+'/'+q0+'/'+n1+'/99/b.js';
document.write('<scr'+'ipt language="JavaScript" src="'+i0+'"></sc'+'ript>');
}else{
i0=e6+'d/'+n0+'/'+'0'+'/'+p0+'/'+d0+'/e'+r1+'.js?s='+zzSection+p4+p2+'&z='+zzRand;
document.write('<scr'+'ipt language="JavaScript" src="'+i0+'"></sc'+'ript>');
}