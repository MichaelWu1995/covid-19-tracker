(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{100:function(e,t,a){e.exports={graphContainer:"LineGraph_graphContainer__PAJZ0"}},113:function(e,t,a){},130:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(0),r=a(10),s=a.n(r),o=a(15),i=a.n(o),l=a(24),u=a(18),d=a(260),j=a(261),b=a(262),f=a(263),h=a(255),v=a(259),p=(a(113),a(54)),x=a.n(p),O=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/countries",e.prev=1,e.next=4,x.a.get("https://disease.sh/v3/covid-19/countries");case 4:return t=e.sent,a=t.data,c=a.map((function(e){return{country:e.country,value:e.countryInfo.iso2,cases:e.cases,deaths:e.deaths,recovered:e.recovered,countryInfo:e.countryInfo}})),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t),e.prev=1,e.next=4,x.a.get(a);case 4:return c=e.sent,n=c.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/historical/all?lastdays=120",e.prev=1,e.next=4,x.a.get("https://disease.sh/v3/covid-19/historical/all?lastdays=120");case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),g=a(101);a(130);var w=function(e){var t=e.title,a=e.cases,n=e.active1,r=e.active2,s=e.active3,o=e.isBlue,i=e.isGreen,l=e.isRed,u=e.total,j=Object(g.a)(e,["title","cases","active1","active2","active3","isBlue","isGreen","isRed","total"]);return Object(c.jsx)(h.a,{onClick:j.onClick,className:"infoBox ".concat(n&&"infoBox--infected"," ").concat(r&&"infoBox-recoverd"," ").concat(s&&"infoBox-deaths"),children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(d.a,{className:"infoBox_title",color:"textSecondary",children:t}),Object(c.jsx)(d.a,{className:"infoBox_cases ".concat(o&&"infoBox_infected"," ").concat(i&&"infoBox_recovered"," ").concat(l&&"infoBox_deaths"),variant:"h4",children:a}),Object(c.jsxs)(d.a,{className:"infoBox_total",color:"textSecondary",children:[u," Total"]})]})})},C=a(266),N=a(267),k=(a(78),a(134),a(264)),_=a(265),B=a(19),S=a.n(B),I={cases:{rgb:"rgb(0, 0, 255, 0.7)",multiplier:800},recovered:{rgb:"rgb(0, 255, 0, 0.7)",multiplier:1200},deaths:{rgb:"rgb(255, 0, 0, 0.7)",multiplier:2e3}},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e,a){return Object(c.jsx)(k.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:I[t].rgb,fillColor:I[t].rgb,radius:Math.sqrt(e[t])*I[t].multiplier,children:Object(c.jsx)(_.a,{children:Object(c.jsxs)("div",{className:"info-container",children:[Object(c.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(c.jsx)("div",{className:"info-name",children:e.country}),Object(c.jsxs)("div",{className:"info-confirmed",children:["Cases: ",S()(e.cases).format("0,0")]}),Object(c.jsxs)("div",{className:"info-recovered",children:["Recovered: ",S()(e.recovered).format("0,0")]}),Object(c.jsxs)("div",{className:"info-deaths",children:["Deaths: ",S()(e.deaths).format("0,0")]})]})})},a)}))};var D=function(e){var t=e.countries,a=e.caseTypes,n=e.center,r=e.zoom;return Object(c.jsx)("div",{className:"map",children:Object(c.jsxs)(C.a,{center:n,zoom:r,scrollWheelZoom:!1,children:[Object(c.jsx)(N.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png"}),R(t,a)]})})},T=a(98),M=a.n(T);var Y=function(e){var t=e.countries;return Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{variant:"h6",children:"Live Cases By Country"}),Object(c.jsx)("div",{className:M.a.tableContainer,children:Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:t.map((function(e,t){var a=e.country,n=e.cases;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsx)(d.a,{children:a})}),Object(c.jsx)("td",{children:Object(c.jsx)(d.a,{children:Object(c.jsx)("strong",{children:S()(n).format("0,0")})})})]},t)}))})})})]})},A=a(99),E=a(100),z=a.n(E),G={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return S()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return S()(e).format("0a")}}}]}},L=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",c=[];for(var n in e[a]){if(t){var r={x:n,y:e[a][n]-t};c.push(r)}t=e[a][n]}return c},W=function(e){var t=e.caseTypes,a=Object(n.useState)({}),r=Object(u.a)(a,2),s=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=L,e.next=3,y();case 3:e.t1=e.sent,e.t2=t,a=(0,e.t0)(e.t1,e.t2),o(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(c.jsxs)("div",{className:z.a.graphContainer,children:[Object(c.jsxs)(d.a,{variant:"h6",children:[" Worldwide New ",t]}),s.length>0?Object(c.jsx)(A.Line,{options:G,data:{datasets:[{backgroundColor:"rgba(204,16,52,0.5)",borderColor:"#cc1034",data:s}]}}):"null"]})},J=a(67),H=a.n(J),Z=function(e){return e?"+".concat(S()(e).format("0.0a")):"+0"};var q=function(){var e,t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)("worldwide"),p=Object(u.a)(o,2),x=p[0],y=p[1],g=Object(n.useState)({}),C=Object(u.a)(g,2),N=C[0],k=C[1],_=Object(n.useState)([]),B=Object(u.a)(_,2),S=B[0],I=B[1],R=Object(n.useState)([34.80746,-40.4796]),T=Object(u.a)(R,2),M=T[0],A=T[1],E=Object(n.useState)(2),z=Object(u.a)(E,2),G=z[0],L=z[1],J=Object(n.useState)([]),q=Object(u.a)(J,2),F=q[0],K=q[1],P=Object(n.useState)("cases"),U=Object(u.a)(P,2),V=U[0],Q=U[1],X=Object(n.useState)(""),$=Object(u.a)(X,2),ee=$[0],te=$[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"worldwide",e.next=3,m("worldwide");case 3:t=e.sent,k(t),te(t.updated);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,O();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=7,O();case 7:t=e.sent,a=t.sort((function(e,t){return e.cases>t.cases?-1:1})),K(t),I(a);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsxs)("div",{className:"app_left",children:[Object(c.jsxs)("div",{className:"app_header",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{variant:"h1",className:"app_title",children:"COVID-19 TRACKER"}),Object(c.jsxs)(d.a,{className:"app_updated",color:"textSecondary",children:["Updated on: ",(e=ee,H()(e).format("YYYY-MM-DD HH:mm:ss"))]})]}),Object(c.jsx)(j.a,{children:Object(c.jsxs)(b.a,{variant:"outlined",value:x,onChange:function(e){var t=e.target.value;y(t),m(t).then((function(e){k(e),"worldwide"!==t?(A([e.countryInfo.lat,e.countryInfo.long]),L(4)):(A([34.80746,-40.4796]),L(2))}))},children:[Object(c.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),r.map((function(e,t){return Object(c.jsx)(f.a,{value:e.value,children:e.country},t)}))]})})]}),Object(c.jsxs)("div",{className:"app_stats",children:[Object(c.jsx)(w,{isBlue:!0,onClick:function(e){return Q("cases")},active1:"cases"===V,title:"Coronavirus Cases",cases:Z(N.todayCases),total:Z(N.cases)}),Object(c.jsx)(w,{isGreen:!0,onClick:function(e){return Q("recovered")},title:"Recovered",active2:"recovered"===V,cases:Z(N.todayRecovered),total:Z(N.recovered)}),Object(c.jsx)(w,{isRed:!0,onClick:function(e){return Q("deaths")},active3:"deaths"===V,title:"Deaths",cases:Z(N.todayDeaths),total:Z(N.deaths)})]}),Object(c.jsx)(D,{caseTypes:V,countries:F,center:M,zoom:G})]}),Object(c.jsx)(h.a,{className:"app_right",children:Object(c.jsxs)(v.a,{children:[Object(c.jsx)(Y,{countries:S}),Object(c.jsx)(W,{caseTypes:V})]})})]})};s.a.render(Object(c.jsx)(q,{}),document.getElementById("root"))},78:function(e,t,a){},98:function(e,t,a){e.exports={tableContainer:"Table_tableContainer__yjeW7"}}},[[229,1,2]]]);
//# sourceMappingURL=main.fc284be0.chunk.js.map