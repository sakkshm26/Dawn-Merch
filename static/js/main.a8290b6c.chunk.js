(this["webpackJsonpdawn-merch"]=this["webpackJsonpdawn-merch"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},40:function(e,t,c){},48:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(15),i=c.n(s),r=(c(37),c(38),c(4)),a=c(0);var j=function(){return Object(a.jsxs)("section",{className:"home",children:[Object(a.jsx)("h1",{children:"We Bring The Good Cart To Life"}),Object(a.jsxs)("div",{className:"boxes",children:[Object(a.jsx)("div",{className:"box1",children:Object(a.jsx)(r.b,{to:"/products",children:Object(a.jsx)("button",{children:"SHOP NOW"})})}),Object(a.jsx)("div",{className:"box2",children:Object(a.jsx)(r.b,{to:"/products",children:Object(a.jsx)("button",{children:"SHOP NOW"})})}),Object(a.jsx)("div",{className:"box3",children:Object(a.jsx)(r.b,{to:"/products",children:Object(a.jsx)("button",{children:"SHOP NOW"})})})]}),Object(a.jsx)("h2",{children:"Fresh and cosy new looks for your adventures"})]})},o=c(5),d=(c(40),c(11)),l=c(8),b=c(9);c(48);var u=function(e){e.icon;var t=Object(n.useState)(1),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){1==s?document.getElementById("home").classList.add("toggle"):2==s&&document.getElementById("products").classList.add("toggle"),3==s&&document.getElementById("about").classList.add("toggle"),4==s&&document.getElementById("contact").classList.add("toggle")}),[s]),Object(a.jsx)("div",{className:"mobile-nav-links",children:Object(a.jsxs)("ul",{className:"links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"home",to:"/",onClick:function(){return i(1)},children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"products",to:"/products",onClick:function(){return i(2)},children:"Products"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"about",to:"/about",onClick:function(){return i(3)},children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"contact",to:"/contact",onClick:function(){return i(4)},children:"Contact"})})]})})};var O=function(){var e=Object(n.useState)(l.a),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){c==l.d?(document.getElementsByClassName("mobile-nav-links")[0].removeAttribute("id","hide"),document.getElementsByClassName("icon")[0].classList.add("white"),document.body.classList.add("hide-overflow")):(document.getElementsByClassName("mobile-nav-links")[0].setAttribute("id","hide"),document.getElementsByClassName("icon")[0].classList.remove("white"),document.body.classList.remove("hide-overflow"))}),[c]),Object(a.jsxs)("div",{id:"mobile-navbar",children:[Object(a.jsx)(d.a,{icon:c,onClick:function(){c==l.a?s(l.d):s(l.a)},className:"icon"}),Object(a.jsx)(u,{})]})};var h=function(){var e=Object(b.c)((function(e){return e.handleCart})),t=Object(n.useState)(1),c=Object(o.a)(t,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){1==s?document.getElementById("home").classList.add("toggle"):2==s&&document.getElementById("products").classList.add("toggle"),3==s&&document.getElementById("about").classList.add("toggle"),4==s&&document.getElementById("contact").classList.add("toggle")}),[s]),Object(a.jsx)("nav",{children:Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)("div",{className:"logo",children:Object(a.jsx)("p",{children:Object(a.jsx)(r.b,{to:"/",onClick:function(){return i(1)},children:"Dawn Merch"})})}),Object(a.jsx)("div",{id:"desktop-navbar",children:Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"home",to:"/",onClick:function(){return i(1)},children:"Home"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"products",to:"/products",onClick:function(){return i(2)},children:"Products"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"about",to:"/about",onClick:function(){return i(3)},children:"About"})}),Object(a.jsx)("li",{children:Object(a.jsx)(r.b,{id:"contact",to:"/contact",onClick:function(){return i(4)},children:"Contact"})})]})}),Object(a.jsx)(O,{}),Object(a.jsxs)("div",{className:"buttons",id:"desktop-navbar",children:[Object(a.jsxs)("div",{className:"btn",children:[Object(a.jsx)(d.a,{icon:l.c}),Object(a.jsx)("button",{children:Object(a.jsx)(r.b,{to:"/login",children:"Login"})})]}),Object(a.jsxs)("div",{className:"btn",children:[Object(a.jsx)(d.a,{icon:l.f}),Object(a.jsx)("button",{children:Object(a.jsx)(r.b,{to:"/register",children:"Register"})})]}),Object(a.jsxs)("div",{className:"btn",children:[Object(a.jsx)(d.a,{icon:l.b}),Object(a.jsx)("button",{children:Object(a.jsxs)(r.b,{to:"/cart",children:["Cart (",e.length,")"]})})]})]})]})})},x=c(16),m=c.n(x);c(67);var f=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),j=Object(o.a)(i,2),d=j[0],l=j[1],b=Object(n.useState)(c),u=Object(o.a)(b,2),O=u[0],h=u[1];Object(n.useEffect)((function(){document.getElementById("products").classList.add("toggle")}),[]),Object(n.useEffect)((function(){l(!0),m.a.get("https://fakestoreapi.com/products").then((function(e){l(!1),s(e.data),h(e.data)})).catch((function(){console.log("Some error occurred")}))}),[]);var x=function(){return Object(a.jsx)("div",{className:"loading",children:"Loading ..."})},f=function(e){var t=c.filter((function(t){return t.category===e}));h(t)},g=function(){return Object(a.jsxs)("div",{className:"products",children:[Object(a.jsxs)("div",{className:"button",children:[Object(a.jsx)("button",{className:"btn",onClick:function(){return h(c)},children:"All"}),Object(a.jsx)("button",{className:"btn",onClick:function(){return f("men's clothing")},children:"Men's Clothing"}),Object(a.jsx)("button",{className:"btn",onClick:function(){return f("women's clothing")},children:"Women's Clothing"}),Object(a.jsx)("button",{className:"btn",onClick:function(){return f("electronics")},children:"Electronics"}),Object(a.jsx)("button",{className:"btn",onClick:function(){return f("jewelery")},children:"Jewelery"})]}),Object(a.jsx)("div",{className:"cards",children:O.map((function(e){return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:e.image}),Object(a.jsxs)("div",{className:"card-text",children:[Object(a.jsx)("h2",{children:e.title.substring(0,18)}),Object(a.jsxs)("p",{children:["Rs.",e.price]}),Object(a.jsx)("button",{children:Object(a.jsx)(r.b,{to:"/products/".concat(e.id),children:"Buy Now"})})]})]},e.id)}))})]})};return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsx)("h2",{children:"Latest Collection"}),Object(a.jsx)("hr",{}),d?Object(a.jsx)(x,{}):Object(a.jsx)(g,{})]})},g=c(2);c(68);var v=function(){var e=Object(g.g)().id,t=Object(n.useState)([]),c=Object(o.a)(t,2),s=c[0],i=c[1],j=Object(n.useState)(!1),d=Object(o.a)(j,2),l=d[0],u=d[1],O=Object(b.b)();Object(n.useEffect)((function(){u(!0),m.a.get("https://fakestoreapi.com/products/".concat(e)).then((function(e){u(!1),i(e.data)})).catch((function(){console.log("Some error occurred")}))}),[]);var h=function(){return Object(a.jsx)("div",{className:"loading",children:"Loading..."})},x=function(){return Object(a.jsxs)("div",{className:"product-info",children:[Object(a.jsx)("img",{src:s.image}),Object(a.jsxs)("div",{className:"product-text",children:[Object(a.jsx)("h2",{className:"category",children:s.category}),Object(a.jsx)("h2",{className:"title",children:s.title}),Object(a.jsxs)("p",{className:"rating",children:["Rating : ",s.rating&&s.rating.rate," \u2605"]}),Object(a.jsxs)("p",{className:"price",children:["Rs.",s.price]}),Object(a.jsx)("p",{className:"description",children:s.description}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{className:"add",onClick:function(){return function(e){O(function(e){return{type:"ADDITEM",payload:e}}(e))}(s)},children:"Add to Cart"}),Object(a.jsx)(r.b,{to:"/cart",children:Object(a.jsx)("button",{className:"go",children:"Go to Cart"})})]})]})]})};return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"container",children:l?Object(a.jsx)(h,{}):Object(a.jsx)(x,{})})})};c(69);var p=function(e){var t=e.price,c=(e.setTemp,Object(n.useState)(1)),s=Object(o.a)(c,2),i=s[0],r=s[1],j=Object(n.useState)(t),d=Object(o.a)(j,2),l=d[0],b=d[1];return Object(n.useEffect)((function(){b((t*i).toFixed(2))}),[i]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"price",children:[Object(a.jsxs)("p",{children:["Rs. ",t]}),Object(a.jsxs)("p",{children:["Total Rs. ",Object(a.jsx)("span",{className:"total-value",children:l})]})]}),Object(a.jsxs)("div",{className:"quantity",children:[Object(a.jsx)("button",{onClick:function(){i>0&&r((function(e){return e-1}))},children:"-"}),Object(a.jsx)("p",{children:Object(a.jsx)("span",{className:"qty",children:i})}),Object(a.jsx)("button",{onClick:function(){return r((function(e){return e+1}))},children:"+"})]})]})};var N=function(){var e=Object(b.c)((function(e){return e.handleCart})),t=Object(b.b)();return Object(a.jsx)("div",{className:"cart",children:e.length?Object(a.jsx)("div",{className:"cart-items",children:e.map((function(e){return Object(a.jsxs)("div",{className:"product-section",children:[Object(a.jsxs)("div",{className:"cart-product",children:[Object(a.jsx)("img",{src:e.image}),Object(a.jsxs)("div",{className:"details",children:[Object(a.jsx)("h3",{className:"title",children:e.title.substring(0,18)}),Object(a.jsx)("p",{className:"category",children:e.category.toUpperCase()}),Object(a.jsxs)("p",{className:"rating",children:[e.rating.rate," \u2605"]}),Object(a.jsx)("div",{className:"data",children:Object(a.jsx)(p,{price:e.price})})]})]}),Object(a.jsx)(d.a,{icon:l.e,className:"delete-icon",onClick:function(){t(function(e){return{type:"DELITEM",payload:e}}(e))}})]})}))}):Object(a.jsxs)("div",{className:"empty",children:[Object(a.jsx)("h1",{children:"Your Cart is Empty!"}),Object(a.jsx)("p",{children:"Let's buy something"})]})})};var y=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(h,{}),Object(a.jsxs)(g.c,{children:[Object(a.jsx)(g.a,{exact:!0,path:"/Dawn-merch",element:Object(a.jsx)(j,{})}),Object(a.jsx)(g.a,{exact:!0,path:"/products",element:Object(a.jsx)(f,{})}),Object(a.jsx)(g.a,{exact:!0,path:"/products/:id",element:Object(a.jsx)(v,{})}),Object(a.jsx)(g.a,{exact:!0,path:"/cart",element:Object(a.jsx)(N,{})})]})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),i(e),r(e)}))},k=c(17),E=c(32),L=c(10),B=[],w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,c=t.payload;switch(t.type){case"ADDITEM":var n=e.find((function(e){return e.id===c.id}));if(n)return e.map((function(e){return e.id===c.id?Object(L.a)(Object(L.a)({},e),{},{qty:e.qty+1}):e}));var s=t.payload;return[].concat(Object(E.a)(e),[Object(L.a)(Object(L.a)({},s),{},{qty:1})]);case"DELITEM":var i=e.find((function(e){return e.id===c.id}));return 1==i.qty?e.filter((function(e){return e.id!==c.id})):e.map((function(e){return e.id===c.id?Object(L.a)(Object(L.a)({},e),{},{qty:e.qty-1}):e}));default:return e}},S=Object(k.a)({handleCart:w}),I=Object(k.b)(S);i.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(b.a,{store:I,children:Object(a.jsx)(y,{})})}),document.getElementById("root")),C()}},[[70,1,2]]]);
//# sourceMappingURL=main.a8290b6c.chunk.js.map