(window["webpackJsonpmonster-rolodex"]=window["webpackJsonpmonster-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),s=n.n(r),c=(n(13),n(1)),i=n(2),l=n(4),m=n(3),d=n(5),u=(n(14),n(15),n(16),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={img:"https://robohash.org/1"},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://robohash.org/".concat(this.props.monster.id+10)).then(function(t){return e.setState({img:"https://robohash.org/".concat(e.props.monster.id)})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"monster-card col-sm-12 col-md-4 col-lg-3"},o.a.createElement("div",{className:"col-sm-12 inner-card"},o.a.createElement("img",{src:this.state.img,alt:""}),o.a.createElement("h5",null," ",this.props.monster.name,"  "),o.a.createElement("p",null,this.props.monster.email)))}}]),t}(o.a.Component)),h=function(e){return o.a.createElement("div",{className:"card-list-container container"},o.a.createElement("div",{className:"row"},e.monsters.map(function(e){return o.a.createElement(u,{key:e.id,monster:e})})))},f=(n(17),function(e){return o.a.createElement("div",{class:"search-box-container"},o.a.createElement("input",{type:"search",onChange:e.handleChange,placeholder:"search your monster"}))}),p=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSearchChange=function(e){console.log(e.target.value);var t=n.state.originalMonsters.filter(function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())});n.setState({monsters:t})},n.state={originalMonsters:[],monsters:[{id:1,name:"adfadszbbnfa asd"},{id:2,name:"adadgfadsfa asd"},{id:3,name:"adfaasfdsfa asd"},{id:4,name:"adfadsdsfa asd"}]},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({monsters:t,originalMonsters:t})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",{className:"App-header"}," Monster- Rolodex "),o.a.createElement(f,{handleChange:this.handleSearchChange}),o.a.createElement(h,{monsters:this.state.monsters}," "))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7591d2d0.chunk.js.map