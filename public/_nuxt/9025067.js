(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{270:function(t,e,n){var content=n(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(69).default)("1b7833da",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";n(270)},273:function(t,e,n){var o=n(68)(!1);o.push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.temp{font-weight:700;font-size:60px;letter-spacing:0}.temp,.title{color:#35495e}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:100px;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=o},276:function(t,e,n){"use strict";n.r(e);var o=n(26),c=(n(70),{data:function(){return{device:[]}},computed:{getDevice:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.$axios,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM",n.next=4,o.$get("http://localhost:3000/api/device/a84041935182d48d/latest",{method:"GET",mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Authorization:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjE3IiwiYXBwTmFtZSI6ImIxZGZmNDdlLTk4NWMtMTFlYi1hOGIzLTAyNDJhYzEzMDAwMyJ9.8kp2Mq7rvT7BkCjT0sKE15iL6N7cRtlBoffYZalverM"},withCredentials:!0,credentials:"same-origin"}).then((function(t){return console.log(t),e.device=t[5].data,t.data}),(function(t){console.log(t.response.status)}));case 4:n.sent;case 5:case"end":return n.stop()}}),n)})))()}},methods:{}}),r=(n(272),n(64)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("h1",{staticClass:"title"},[t._v("\n      lemony\n    ")]),t._v(" "),n("p",{staticClass:"temp"},[t._v(t._s(t.device)+" °C")])])])}),[],!1,null,null,null);e.default=component.exports}}]);