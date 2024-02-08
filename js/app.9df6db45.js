(function(){"use strict";var t={8455:function(t,e,i){var s=i(9242),r=i(3396);const n=(0,r._)("header",{class:"header container"},[(0,r._)("a",{href:"#",class:"header__logo"},[(0,r._)("img",{src:"img/Logo.svg",alt:"Логотип",class:"logo"})])],-1),o=(0,r._)("h1",{style:{display:"none"}},"Avia",-1),c=(0,r._)("footer",{class:"footer"},null,-1);function a(t,e){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,o,((0,r.wg)(),(0,r.j4)(i,{key:t.$route.fullPath})),c],64)}var l=i(89);const d={},p=(0,l.Z)(d,[["render",a]]);var u=p,g=i(2483),k=i(7139);const f={class:"content container"},m={class:"content__filter"},h={class:"content__list"};function _(t,e,i,n,o,c){const a=(0,r.up)("TicketsFilter"),l=(0,r.up)("TicketsFilterTop"),d=(0,r.up)("TicketsList");return(0,r.wg)(),(0,r.iD)("main",f,[(0,r._)("div",m,[(0,r.Wm)(a,{filterStopsIds:o.filterStopsIds,"onUpdate:filterStopsIds":e[0]||(e[0]=t=>o.filterStopsIds=t),ticketsFlag:o.ticketsFlag,"onUpdate:ticketsFlag":e[1]||(e[1]=t=>o.ticketsFlag=t),ticketsPerList:o.ticketsPerList,"onUpdate:ticketsPerList":e[2]||(e[2]=t=>o.ticketsPerList=t)},null,8,["filterStopsIds","ticketsFlag","ticketsPerList"]),(0,r.wy)((0,r._)("button",{class:"btn-reset-filters",onClick:e[3]||(e[3]=(0,s.iM)(((...t)=>c.resetFilters&&c.resetFilters(...t)),["prevent"]))}," Сбросить фильтры ",512),[[s.F8,o.filterPriorities>0||o.filterStopsIds.indexOf(1)&&o.filterStopsIds.length>0||!o.filterStopsIds.indexOf(1)&&o.filterStopsIds.length>1]])]),(0,r._)("div",h,[(0,r.Wm)(l,{filterPriorities:o.filterPriorities,"onUpdate:filterPriorities":e[4]||(e[4]=t=>o.filterPriorities=t),ticketsFlag:o.ticketsFlag,"onUpdate:ticketsFlag":e[5]||(e[5]=t=>o.ticketsFlag=t),ticketsPerList:o.ticketsPerList,"onUpdate:ticketsPerList":e[6]||(e[6]=t=>o.ticketsPerList=t)},null,8,["filterPriorities","ticketsFlag","ticketsPerList"]),(0,r.Wm)(d,{tickets:c.ticketsData,"onUpdate:tickets":e[7]||(e[7]=t=>c.ticketsData=t)},null,8,["tickets"]),(0,r._)("button",{class:(0,k.C_)(["btn-more",{"disabled-btn--active":!this.ticketsFlag}]),onClick:e[8]||(e[8]=(0,s.iM)(((...t)=>c.showMore&&c.showMore(...t)),["prevent"]))}," Показать еще 5 билетов! ",2)])])}var v=[{idTicket:15,price:12400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:5,stop:["AWE","QWEE","QWEAS"]},duration:150}},{idTicket:14,price:9400,carrier:"",segments:{origin:"",destination:"",date:"08:10-12:30",stops:{id:4,stop:["AWE","QWEE"]},duration:190}},{idTicket:13,price:15400,carrier:"",segments:{origin:"",destination:"",date:"12:10-17:30",stops:{id:3,stop:["AWE"]},duration:100}},{idTicket:12,price:11400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:2,stop:[]},duration:225}},{idTicket:11,price:10400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:5,stop:["AWE","QWEE","QWEAS"]},duration:225}},{idTicket:10,price:12400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:5,stop:["AWE","QWEE","QWEAS"]},duration:225}},{idTicket:9,price:9400,carrier:"",segments:{origin:"",destination:"",date:"08:10-12:30",stops:{id:4,stop:["AWE","QWEE"]},duration:225}},{idTicket:8,price:15400,carrier:"",segments:{origin:"",destination:"",date:"12:10-17:30",stops:{id:3,stop:["AWE"]},duration:140}},{idTicket:7,price:11400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:2,stop:[]},duration:225}},{idTicket:6,price:10400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:5,stop:["AWE","QWEE","QWEAS"]},duration:225}},{idTicket:5,price:12400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:5,stop:["AWE","QWEE","QWEAS"]},duration:225}},{idTicket:4,price:9400,carrier:"",segments:{origin:"",destination:"",date:"08:10-12:30",stops:{id:4,stop:["AWE","QWEE"]},duration:225}},{idTicket:3,price:15400,carrier:"",segments:{origin:"",destination:"",date:"12:10-17:30",stops:{id:3,stop:["AWE"]},duration:170}},{idTicket:2,price:11400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:2,stop:[]},duration:225}},{idTicket:1,price:10400,carrier:"",segments:{origin:"",destination:"",date:"10:10-15:30",stops:{id:5,stop:["AWE","QWEE","QWEAS"]},duration:225}}];const P={class:"radio-list"},T=["value"],w={class:"radio-list__custom"};function E(t,e,i,n,o,c){return(0,r.wg)(),(0,r.iD)("div",P,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.getCategories,(t=>((0,r.wg)(),(0,r.iD)("label",{class:"radio-list__label",key:t.id},[(0,r.wy)((0,r._)("input",{type:"radio",class:"radio-list__radio",name:"price",value:t.id,"onUpdate:modelValue":e[0]||(e[0]=t=>c.currentPriority=t)},null,8,T),[[s.G2,c.currentPriority]]),(0,r._)("span",w,(0,k.zw)(t.name),1)])))),128))])}var y=[{id:1,name:"Самый дешевый"},{id:2,name:"Самый быстрый"},{id:3,name:"Оптимальный"}],F={data(){return{currentTicketsFlag:!0,currentTicketsPerList:5}},props:["filterPriorities","ticketsFlag","ticketsPerList"],computed:{getCategories(){return y},currentPriority:{get(){return this.filterPriorities},set(t){this.$emit("update:filterPriorities",t),this.$emit("update:ticketsFlag",this.currentTicketsFlag),this.$emit("update:ticketsPerList",this.currentTicketsPerList)}}}};const W=(0,l.Z)(F,[["render",E]]);var b=W;const x={class:"tickets-list"};function S(t,e,i,s,n,o){const c=(0,r.up)("TicketItem");return(0,r.wg)(),(0,r.iD)("ul",x,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.tickets,(t=>((0,r.wg)(),(0,r.j4)(c,{key:t.idTicket,price:t.price,stops:t.stops,date:t.date},null,8,["price","stops","date"])))),128))])}const L={class:"tickets-list__item ticket"},I={class:"ticket__price"},D=(0,r._)("img",{src:"img/s7.png",alt:"company",class:"ticket__img"},null,-1),A=(0,r._)("span",{class:"ticket__something-time span-text"}," MOW – HKT ",-1),O=(0,r._)("span",{class:"ticket__time-spending span-text"}," В пути ",-1),Q={class:"ticket__transfers span-text"},U={class:"ticket__something-time-text p-text"},M=(0,r._)("p",{class:"ticket__time-spending-text p-text"}," 21ч 15м ",-1),j={style:{display:"flex"}},H=(0,r.uE)('<span class="ticket__something-time span-text"> MOW – HKT </span><span class="ticket__time-spending span-text"> В пути </span><span class="ticket__transfers span-text"> 1 пересадка </span><p class="ticket__something-time-text p-text"> 11:20 – 00:50 </p><p class="ticket__time-spending-text p-text"> 13ч 30м </p><p class="ticket__transfers-text p-text"> HKG </p>',6);function C(t,e,i,s,n,o){return(0,r.wg)(),(0,r.iD)("li",L,[(0,r._)("span",I,(0,k.zw)(i.price)+" Р ",1),D,A,O,(0,r._)("span",Q,(0,k.zw)(0!==i.stops.length?i.stops.length:"")+" пересадки ",1),(0,r._)("p",U,(0,k.zw)(i.date),1),M,(0,r._)("ul",j,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.stops,(t=>((0,r.wg)(),(0,r.iD)("li",{class:"ticket__transfers-text p-text",key:t},(0,k.zw)(t)+"  ",1)))),128))]),H])}var K={props:["price","stops","date"]};const Z=(0,l.Z)(K,[["render",C]]);var $=Z,z={props:["tickets"],components:{TicketItem:$}};const Y=(0,l.Z)(z,[["render",S]]);var G=Y;const R={class:"filter"},V={action:"#",class:"form filter__form",method:"get"},q={class:"form__block"},B=(0,r._)("legend",{class:"form__legend"}," Количество пересадок ",-1),J={class:"check-list"},N={class:"check-list__label"},X=["value"],tt={class:"check-list__custom"};function et(t,e,i,n,o,c){return(0,r.wg)(),(0,r.iD)("aside",R,[(0,r._)("form",V,[(0,r._)("fieldset",q,[B,(0,r._)("ul",J,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.filterStopsData,(t=>((0,r.wg)(),(0,r.iD)("li",{class:"check-list__item",key:t.id},[(0,r._)("label",N,[(0,r.wy)((0,r._)("input",{type:"checkbox",class:"check-list__check",name:"transfer",value:t.id,checked:1,"onUpdate:modelValue":e[0]||(e[0]=t=>c.currentStopsIds=t)},null,8,X),[[s.e8,c.currentStopsIds]]),(0,r._)("span",tt,(0,k.zw)(t.name),1)])])))),128))])])])])}var it=[{id:1,name:"Все"},{id:2,name:"Без пересадок"},{id:3,name:"1 пересадка"},{id:4,name:"2 пересадки"},{id:5,name:"3 пересадки"}],st={data(){return{currentTicketsFlag:!0,currentTicketsPerList:5}},props:["filterStopsIds","ticketsFlag","ticketsPerList"],computed:{filterStopsData(){return it},currentStopsIds:{get(){return this.filterStopsIds},set(t){this.$emit("update:filterStopsIds",t),this.$emit("update:ticketsFlag",this.currentTicketsFlag),this.$emit("update:ticketsPerList",this.currentTicketsPerList)}}}};const rt=(0,l.Z)(st,[["render",et]]);var nt=rt,ot={data(){return{filterStopsIds:[1],filterPriorities:0,list:1,ticketsPerList:5,ticketsFlag:!0}},components:{TicketsFilterTop:b,TicketsList:G,TicketsFilter:nt},computed:{ticketsData(){const t=(this.list-1)*this.ticketsPerList;return this.filteredTickets.length<=2?(document.body.style.overflow="hidden",document.body.style.paddingRight+="17px"):(document.body.style.overflow=null,document.body.style.paddingRight=null),this.filteredTickets?this.filteredTickets.map((t=>({...t,date:t.segments.date,stops:t.segments.stops.stop.map((t=>t)),id:t.segments.stops.id,time:t.segments.duration}))).slice(t,t+this.ticketsPerList):[]},filteredTickets(){let t=v;return t=1===this.filterStopsIds.length&&this.filterStopsIds.includes(1)?t.map((t=>t)):t.filter((t=>this.filterStopsIds.includes(t.segments.stops.id))),1===this.filterPriorities&&(t=t.filter((t=>t.price<13e3)).sort(((t,e)=>t.price-e.price))),2===this.filterPriorities&&(t=t.filter((t=>t.segments.duration<200)).sort(((t,e)=>t.segments.duration-e.segments.duration))),3===this.filterPriorities&&(t=t.filter((t=>t.segments.duration<200&&t.price<13e3)).sort(((t,e)=>t.price-e.price))),t}},methods:{resetFilters(){this.filterStopsIds=[1],this.filterPriorities=0,this.ticketsPerList=5,this.ticketsFlag=!0},stopShowing(){this.filteredTickets.length!==this.ticketsData.length&&0!==this.ticketsData.length||(this.ticketsFlag=!1)},showMore(){this.ticketsPerList+=5}},beforeUpdate(){this.stopShowing()}};const ct=(0,l.Z)(ot,[["render",_]]);var at=ct;const lt={style:{"text-align":"center",padding:"50px 0"}};function dt(t,e){return(0,r.wg)(),(0,r.iD)("h2",lt,"Страница не найдена!")}const pt={},ut=(0,l.Z)(pt,[["render",dt]]);var gt=ut;const kt=[{name:"tickets",component:at,path:"/"},{name:"notFound",component:gt,path:"/:pathMatch(.*)*"}],ft=(0,g.p7)({history:(0,g.r5)(),routes:kt});var mt=ft;(0,s.ri)(u).use(mt).mount("#app")}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s].call(n.exports,n,n.exports,i),n.exports}i.m=t,function(){var t=[];i.O=function(e,s,r,n){if(!s){var o=1/0;for(d=0;d<t.length;d++){s=t[d][0],r=t[d][1],n=t[d][2];for(var c=!0,a=0;a<s.length;a++)(!1&n||o>=n)&&Object.keys(i.O).every((function(t){return i.O[t](s[a])}))?s.splice(a--,1):(c=!1,n<o&&(o=n));if(c){t.splice(d--,1);var l=r();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[s,r,n]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,n,o=s[0],c=s[1],a=s[2],l=0;if(o.some((function(e){return 0!==t[e]}))){for(r in c)i.o(c,r)&&(i.m[r]=c[r]);if(a)var d=a(i)}for(e&&e(s);l<o.length;l++)n=o[l],i.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return i.O(d)},s=self["webpackChunkavia_vue"]=self["webpackChunkavia_vue"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[998],(function(){return i(8455)}));s=i.O(s)})();
//# sourceMappingURL=app.9df6db45.js.map