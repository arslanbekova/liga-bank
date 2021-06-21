(this["webpackJsonpliga-bank"]=this["webpackJsonpliga-bank"]||[]).push([[0],{25:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(18),s=a.n(c),l=(a(25),a(0)),i=function(){var e={SERVICE:{title:"\u0423\u0441\u043b\u0443\u0433\u0438",path:"services.html"},CREDIT:{title:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442",path:"credit.html"},CONVERTER:{title:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442",path:"converter.html"},CONTACT:{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",path:"contacts.html"},QUESTION:{title:"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441",path:"question.html"}};return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"header__wrapper",children:[Object(l.jsxs)("div",{className:"logo header__logo-wrapper",children:[Object(l.jsx)("img",{className:"logo__image",src:"./img/logo.svg",width:"28",height:"25",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041b\u0438\u0433\u0430 \u0411\u0430\u043d\u043a"})," ",Object(l.jsx)("span",{className:"logo__text",children:"\u041b\u0418\u0413\u0410 \u0411\u0430\u043d\u043a"})]}),Object(l.jsxs)("nav",{className:"header__navigation navigation",children:[Object(l.jsx)("ul",{className:"navigation__list site-list",children:Object.values(e).map((function(t){return Object(l.jsx)("li",{className:"site-list__item",children:Object(l.jsx)("a",{href:t.path,className:"site-list__link ".concat(t.title===e.CONVERTER.title?"site-list__link--active":""),children:t.title})},t.title)}))}),Object(l.jsx)("ul",{className:"navigation__list user-list",children:Object(l.jsx)("li",{className:"user-list__item",children:Object(l.jsx)("a",{className:"user-list__link user-list__link--login",href:"login.html",children:"\u0412\u043e\u0439\u0442\u0438 \u0432 \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u0431\u0430\u043d\u043a"})})})]})]})})},r=function(){return Object(l.jsx)("section",{className:"promo",children:Object(l.jsxs)("div",{className:"promo__wrapper",children:[Object(l.jsx)("h1",{className:"promo__h1",children:"\u041b\u0438\u0433\u0430 \u0411\u0430\u043d\u043a"}),Object(l.jsx)("p",{className:"promo__intro",children:"\u041a\u0440\u0435\u0434\u0438\u0442\u044b \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439"}),Object(l.jsx)("a",{className:"button button--calculate",href:"credit.html",children:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442"})]})})},o=a(6),u=a(8),j=a(3),m=a(4),h=a.n(m),d=a(19),b=a.n(d),_=function(e){var t=e.onSaveResult,a=e.results,c=["RUB","USD","EUR","GBP","CNY"],s=1,i=7,r=10,m="RUB",d="USD",_={avaliableAmount:"",wantedAmount:"",currentDate:h()(new Date).format("YYYY-MM-DD"),avaliableCurrency:m,wantedCurrency:d},O=function(){var e=b.a.create({baseURL:"https://api.frankfurter.app",timeout:5e3});return e.interceptors.response.use((function(e){return e}),(function(e){throw e})),e}(),f=h()(new Date).subtract(i,"day").format("YYYY-MM-DD"),x=h()(new Date).format("YYYY-MM-DD"),p=Object(n.useState)(_),v=Object(o.a)(p,2),N=v[0],g=v[1],w=N,y=Object(n.useState)(!0),C=Object(o.a)(y,2),A=C[0],D=C[1],Y=function(e,t,a,n){return O.get("/".concat(n,"?amount=").concat(e,"&from=").concat(t,"&to=").concat(a)).then((function(e){return e.data}))},R=function(e){Y(e,N.avaliableCurrency,N.wantedCurrency,N.currentDate).then((function(t){w.wantedAmount=t.rates[N.wantedCurrency],w.avaliableAmount=e,g(Object(j.a)({},w))})).catch((function(e){return e}))};return Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("h2",{className:"form__title",children:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442\u0435\u0440 \u0432\u0430\u043b\u044e\u0442"}),Object(l.jsxs)("fieldset",{className:"form__field form__field--is-avaliable",children:[Object(l.jsx)("h3",{className:"form__field-title",children:"\u0423 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c"}),Object(l.jsx)("input",{className:"form__input form__input--number",type:"number",value:N.avaliableAmount,min:s,id:"is-available",name:"is-available",placeholder:"1000",onChange:function(e){var t=Number(e.target.value);if(D(!1),t<s)return w.avaliableAmount=_.avaliableAmount,w.wantedAmount=_.wantedAmount,g(Object(j.a)({},w)),void D(!0);R(t)}}),Object(l.jsx)("select",{className:"form__option",onChange:function(e){w.avaliableCurrency=e.target.value,g(Object(j.a)({},w)),R(N.avaliableAmount)},defaultValue:_.avaliableCurrency,children:c.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]}),Object(l.jsxs)("fieldset",{className:"form__field form__field--wanted",children:[Object(l.jsx)("h3",{className:"form__field-title",children:"\u0425\u043e\u0447\u0443 \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438"}),Object(l.jsx)("input",{className:"form__input form__input--number",type:"number",value:N.wantedAmount,min:s,id:"wanted",name:"wanted",placeholder:"1000",onChange:function(e){var t=Number(e.target.value);if(D(!1),t<s)return w.wantedAmount=_.avaliableAmount,w.avaliableAmount=_.wantedAmount,g(Object(j.a)({},w)),void D(!0);!function(e){Y(e,N.wantedCurrency,N.avaliableCurrency,N.currentDate).then((function(t){w.avaliableAmount=t.rates[N.avaliableCurrency],w.wantedAmount=e,g(Object(j.a)({},w))})).catch((function(e){return e}))}(t)}}),Object(l.jsx)("select",{className:"form__option",onChange:function(e){w.wantedCurrency=e.target.value,g(Object(j.a)({},w)),R(N.avaliableAmount)},defaultValue:_.wantedCurrency,children:c.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]}),Object(l.jsxs)("fieldset",{className:"form__field",children:[Object(l.jsx)("label",{className:"visually-hidden",htmlFor:"exchange-date",children:"\u0416\u0435\u043b\u0430\u0435\u043c\u0430\u044f \u0434\u0430\u0442\u0430 \u043e\u0431\u043c\u0435\u043d\u0430"}),Object(l.jsx)("input",{className:"form__input form__input--exchange-date",id:"exchange-date",type:"date",name:"exchange-date",required:!0,value:N.currentDate,min:f,max:x,onChange:function(e){w.currentDate=h()(e.target.value).format("YYYY-MM-DD"),g(Object(j.a)({},w)),""!==N.avaliableAmount&&""!==N.wantedAmount&&Y(N.avaliableAmount,N.avaliableCurrency,N.wantedCurrency,N.currentDate).then((function(e){w.wantedAmount=e.rates[N.wantedCurrency],g(Object(j.a)({},w))}))}})]}),Object(l.jsx)("button",{className:"button button--save",type:"button",onClick:function(){a.length===r&&a.pop(),a.unshift(Object(j.a)({},N)),t(Object(u.a)(a))},disabled:A,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"})]})},O=a(20),f=function(e){var t=e.onClearResults,a=e.results;return Object(l.jsx)("section",{className:"exchange-history",children:Object(l.jsxs)("div",{className:"exchange-history__wrapper",children:[Object(l.jsx)("h2",{className:"exchange-history__title",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0430\u0446\u0438\u0438"}),Object(l.jsx)("ul",{className:"exchange-history__list",children:a.length?a.map((function(e){return Object(l.jsxs)("li",{className:"exchange-history__item",children:[Object(l.jsx)("span",{className:"exchange-history__option exchange-history__option--date",children:h()(e.currentDate).format("DD.MM.YYYY")}),Object(l.jsxs)("span",{className:"exchange-history__option exchange-history__option--amount-from",children:[e.avaliableAmount," ",e.avaliableCurrency]}),Object(l.jsxs)("span",{className:"exchange-history__option exchange-history__option--amount-to",children:[e.wantedAmount," ",e.wantedCurrency]})]},Object(O.a)(5))})):""}),Object(l.jsx)("button",{className:"button button--clear",type:"button",onClick:function(){a.length=0,t(Object(u.a)(a))},disabled:!a.length,children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"})]})})},x=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(l.jsxs)("article",{className:"converter",children:[Object(l.jsx)(_,{onSaveResult:c,results:a}),Object(l.jsx)(f,{onClearResults:c,results:a})]})},p=function(){return Object(l.jsxs)("main",{children:[Object(l.jsx)(r,{}),Object(l.jsx)(x,{})]})},v=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"footer__wrapper",children:[Object(l.jsxs)("div",{className:"logo footer__logo-wrapper",children:[Object(l.jsx)("img",{className:"logo__image",src:"./img/logo.svg",width:"28",height:"25",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041b\u0438\u0433\u0430 \u0411\u0430\u043d\u043a"})," ",Object(l.jsx)("span",{className:"logo__text",children:"\u041b\u0418\u0413\u0410 \u0411\u0430\u043d\u043a"})]}),Object(l.jsx)("p",{className:"footer__contacts footer__contacts--address",children:"150015, \u0433. \u041c\u043e\u0441\u043a\u0432\u0430, \u0443\u043b. \u041c\u043e\u0441\u043a\u043e\u0432\u0441\u043a\u0430\u044f, \u0434. 32 \u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043b\u0438\u0446\u0435\u043d\u0437\u0438\u044f \u0411\u0430\u043d\u043a\u0430 \u0420\u043e\u0441\u0441\u0438\u0438 \u21161050 \u24b8 \u041b\u0438\u0433\u0430 \u0411\u0430\u043d\u043a, 2019"}),Object(l.jsx)("ul",{className:"footer__nav",children:Object.values({SERVICE:{title:"\u0423\u0441\u043b\u0443\u0433\u0438",path:"services.html"},CREDIT:{title:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c \u043a\u0440\u0435\u0434\u0438\u0442",path:"credit.html"},CONTACT:{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b",path:"contacts.html"},QUESTION:{title:"\u0417\u0430\u0434\u0430\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441",path:"question.html"}}).map((function(e){return Object(l.jsx)("li",{className:"footer__nav-item",children:Object(l.jsx)("a",{href:e.path,children:e.title})},e.title)}))}),Object(l.jsxs)("div",{className:"footer__contacts footer__contacts--message",children:[Object(l.jsx)("p",{className:"footer__number",children:"*0904"}),Object(l.jsx)("p",{className:"footer__intro",children:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0434\u043b\u044f \u0430\u0431\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u041c\u0422\u0421, \u0411\u0438\u043b\u0430\u0439\u043d, \u041c\u0435\u0433\u0430\u0444\u043e\u043d, \u0422\u0435\u043b\u04352"})]}),Object(l.jsxs)("div",{className:"footer__contacts footer__contacts--phone",children:[Object(l.jsx)("p",{className:"footer__number",children:"8 800 111 22 33"}),Object(l.jsx)("p",{className:"footer__intro",children:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0433\u043e\u0440\u043e\u0434\u043e\u0432 \u0420\u043e\u0441\u0441\u0438\u0438"})]}),Object(l.jsx)("ul",{className:"footer__social social-list",children:Object.values({FACEBOOK:{title:"\u041c\u044b \u043d\u0430 \u0444\u0435\u0439\u0441\u0431\u0443\u043a",iconId:"facebook"},INSTAGRAM:{title:"\u041c\u044b \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c",iconId:"instagram"},TWITTER:{title:"\u041c\u044b \u0432 \u0442\u0432\u0438\u0442\u0442\u0435\u0440\u0435",iconId:"twitter"},YOUTUBE:{title:"\u041c\u044b \u043d\u0430 \u044e\u0442\u0443\u0431",iconId:"youtube"}}).map((function(e){return Object(l.jsx)("li",{className:"social-list__item",children:Object(l.jsxs)("a",{className:"social-list__link",href:"#",children:[Object(l.jsx)("span",{className:"visually-hidden",children:e.title}),Object(l.jsx)("svg",{className:"social-list__icon footer__icon footer__icon--".concat(e.iconId),width:"9",height:"16","aria-hidden":"true",children:Object(l.jsx)("use",{xlinkHref:"./img/sprite-manual.svg#icon-".concat(e.iconId)})})]})},e.iconId)}))})]})})},N=function(){return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(i,{}),Object(l.jsx)(p,{}),Object(l.jsx)(v,{})]})};s.a.render(Object(l.jsx)(N,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.74ad1b07.chunk.js.map