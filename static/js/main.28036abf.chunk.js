(this["webpackJsonpmy-demo"]=this["webpackJsonpmy-demo"]||[]).push([[0],{103:function(e,a){function t(e){return"[object Function]"===Object.prototype.toString.call(e)}e.exports={isFunction:t,handleSuccessCb:function(e){var a=e.key,n=e.value,r=e.successCb;t(r)&&r&&r(a,n)},handleFailCb:function(e){var a=e.errorMsg,n=e.failCb;if(a)throw t(n)&&n&&n(a),new Error(a)},handleStorageList:function(e){return e.reduce((function(e,a){return e[a.key]=a,e}),{})}}},180:function(e,a,t){e.exports=t(341)},186:function(e,a,t){},297:function(e,a,t){var n=t(298);window.local_storage_demo=n([]),e.exports=n},298:function(e,a,t){var n=t(299),r=t(300),o=t(301),l=t(103),c=l.handleSuccessCb,i=l.handleStorageList;e.exports=function(e){var a=i(e);return{storager:window.localStorage,get:function(e,t,r){var o,l={storager:this.storager,storageList:a,key:e,failCb:r};return n(l),this.storager[e]&&(o=this.storager.getItem(e))&&(o=JSON.parse(o)),c({key:e,value:o,successCb:t}),o},set:function(e,t,n,o){var l={storager:this.storager,storageList:a,key:e,failCb:o};r(l),"undefined"!==typeof t&&(t=JSON.stringify(t),this.storager.setItem(e,t)),c({key:e,value:t,successCb:n})},remove:function(e,t,n){var r={storager:this.storager,storageList:a,key:e,failCb:n};o(r),this.storager.removeItem(e),c({key:e,successCb:t})},clear:function(e){this.storager.clear(),c({successCb:e})}}}},299:function(e,a,t){var n=t(103).handleFailCb;e.exports=function(e){var a=e.storager,t=e.storageList,r=e.key,o=e.failCb,l="";switch(!0){case!!t.hasOwnProperty(r):if(a.hasOwnProperty(r)){var c=[];["key","fromPage","use","des"].forEach((function(e){t[r].hasOwnProperty(e)||c.push(e)})),c.length&&(l="\u9879\u76ee\u7684src/constants\u6587\u4ef6\u914d\u7f6e\u7684".concat(r,"\u952e\u5bf9\u8c61\u7f3a\u5c11").concat(c.join(),"\u5b57\u6bb5,\u8bf7\u5148\u914d\u7f6e").concat(c.join(),"\u5b57\u6bb5"))}else l="localStorage\u6ca1\u6709".concat(r,"\u952e\uff0c\u8bf7\u786e\u8ba4\u662f\u5426\u5b58\u8fc7").concat(r,"\u952e");break;default:l="\u8bf7\u5148\u53bb\u68c0\u67e5\u914d\u7f6e\u7684\u5217\u8868\u914d\u7f6e".concat(r,"\u952e")}n({errorMsg:l,failCb:o})}},300:function(e,a,t){var n=t(103).handleFailCb;e.exports=function(e){var a=e.storager,t=e.storageList,r=e.key,o=e.failCb,l="";switch(!0){case!t.hasOwnProperty(r):l="\u8bf7\u5148\u53bb\u68c0\u67e5\u914d\u7f6e\u7684\u5217\u8868\u914d\u7f6e".concat(r,"\u952e\u914d\u7f6e").concat(r,"\u952e");break;case a.hasOwnProperty(r):l="".concat(r,"\u952e\u5df2\u7ecf\u88ab\u4f7f\u7528\uff0c\u8bf7\u66f4\u6362key\u503c")}n({errorMsg:l,failCb:o})}},301:function(e,a,t){var n=t(103).handleFailCb;e.exports=function(e){var a=e.storager,t=e.storageList,r=e.key,o=e.failCb,l="";switch(!0){case!t.hasOwnProperty(r):l="\u8bf7\u5148\u53bb\u68c0\u67e5\u914d\u7f6e\u7684\u5217\u8868\u914d\u7f6e".concat(r,"\u952e,\u8bf7\u68c0\u67e5\u662f\u5426\u6ca1\u6709\u5b58\u50a8").concat(r,"\u952e");case!a.hasOwnProperty(r):l="\u672c\u5730localStorage \u6ca1\u6709\u5b58\u50a8".concat(r,"\u952e,\u8bf7\u5148\u5b58\u50a8").concat(r,"\u952e")}n({errorMsg:l,failCb:o})}},329:function(e,a,t){},330:function(e,a){e.exports=[]},336:function(e,a,t){},337:function(e,a,t){},338:function(e,a,t){},339:function(e,a,t){},340:function(e,a,t){},341:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),l=t.n(o),c=(t(185),t(86)),i=t(55),s=t(173),u=t(48),m=t(96),f=t(348),d=t(349),y=t(344),p=t(39),g=t(342),b=(t(186),t(343)),h=t(346),v=t(347),E=t(350);function k(e){var a=["key","getItem","setItem","removeItem","clear","length"],t=[];for(var n in e)a.indexOf(n)<0&&t.push({key:n,value:e[n]});return t}function w(){var e;(e=300,new Promise((function(a){return setTimeout(a,e)}))).then((function(){return window.location.reload(!0)}))}function C(e){E.a.error({message:e})}function S(e){E.a.success({message:e})}var O=t(97),P=t.n(O),j={dbName:"storage",version:1,tables:[{tableName:"storage_list",option:{keyPath:"id"},indexs:[{key:"id",option:{unique:!0}},{key:"key"},{key:"fromPage"},{key:"use"},{key:"des"}]}]};function I(){return new Promise((function(e,a){P()(j).then((function(a){a.queryAll({tableName:"storage_list",success:function(a){return e(a)}})}),(function(e){a(e)}))}))}function F(){return new Promise((function(){P()(j).then((function(e){e.close_db()}),(function(e){console.error(e)}))}))}var _=function(e,a,t){if(void 0===t&&("boolean"==typeof a?(t=a,a=void 0):"boolean"==typeof e&&(t=e,e=void 0)),void 0===e&&void 0===a?(e=0,a=1):void 0===a&&(a=e,e=0),e>a){var n=e;e=a,a=n}if(t||e%1||a%1){var r=Math.random(),o="".concat(r).length-1;return Math.min(e+(parseFloat("1e-".concat(o)),a))}return e+Math.floor(Math.random()*(a-e+1))}(1e6,9999999),x={labelCol:{span:6},wrapperCol:{span:18}},L={wrapperCol:{offset:6,span:18}};var q=function(e){var a=b.a.useForm(),t=Object(u.a)(a,1)[0];return r.a.createElement(h.a,{title:"\u589e\u52a0\u914d\u7f6e\u8868",visible:e.visible,onCancel:e.handleCancel,footer:!1},r.a.createElement(b.a,Object.assign({form:t},x,{name:"basic",initialValues:{remember:!0},onFinish:function(a){I().then((function(n){var r,o=!1;n.forEach((function(e){a.key===e.key&&(o=!0)})),o?d.b.error("".concat(a.key,"\u5df2\u7ecf\u91cd\u540d,\u8bf7\u66f4\u6362")):((r=Object(m.a)({id:_++},a),new Promise((function(e,a){P()(j).then((function(a){a.insert({tableName:"storage_list",data:r,success:function(a){return e(a)}})}),(function(e){a(e)}))}))).then((function(){return d.b.success("".concat(a.key,"\u589e\u52a0\u6210\u529f"))})),t.resetFields(),e.handleCancel("add".concat(_)))}))}}),r.a.createElement(b.a.Item,{label:"key",name:"key",rules:[{required:!0,message:"Please input key!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,{label:"fromPage",name:"fromPage",rules:[{required:!0,message:"Please input fromPage!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,{label:"use",name:"use",rules:[{required:!0,message:"Please input use!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,{label:"des",name:"des",rules:[{required:!0,message:"Please input des!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,L,r.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Submit"))))},M=t(297),N={visible:!1,actionType:"",storageList:[]};function T(e,a){switch(a.type){case"add":case"del":case"save":case"closeModal":return Object(m.a)(Object(m.a)({},e),a.payload);default:return e}}var A=function(){var e=function(){var e=["key","fromPage","use","des","action"].map((function(e){return{title:e,dataIndex:e,key:e}}));return e[e.length-1].render=function(e,a){return r.a.createElement(f.a,{title:"\u786e\u4fe1\u5220\u9664?",onConfirm:function(){var e;(function(e){return new Promise((function(a,t){P()(j).then((function(t){t.delete_by_primaryKey({tableName:"storage_list",target:e,success:function(e){return a(e)}})}),(function(e){t(e)}))}))})(e=a.id).then((function(){l({type:"del",payload:{actionType:"del".concat(e)}}),d.b.success("\u5220\u9664\u6210\u529f")}))}},r.a.createElement("a",null,"\u5220\u9664"))},e}(),a=Object(n.useReducer)(T,N),t=Object(u.a)(a,2),o=t[0],l=t[1];return Object(n.useEffect)((function(){return I().then((function(e){var a=[];e.forEach((function(e){Object.keys(e).length&&a.push(e)})),l({type:"save",payload:{visible:!1,storageList:[].concat(a)}}),window.local_storage_demo=M(a)})),F}),[o.actionType]),r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(y.a,{title:"\u68c0\u67e5\u914d\u7f6e\u5217\u8868",bordered:!1,headStyle:{textAlign:"center"},style:{width:"100%",minHeight:"100vh"}},r.a.createElement(p.a,{onClick:function(){l({type:"add",payload:{visible:!0}})},type:"primary",style:{marginBottom:16}},"\u6dfb\u52a0"),r.a.createElement(g.a,{dataSource:Object(s.a)(o.storageList),columns:e,pagination:!1}),r.a.createElement(q,{visible:o.visible,handleCancel:function(e){l({type:"closeModal",payload:{visible:!1,actionType:e}})}})))},J=(t(329),t(134)),V=t.n(J),H=["key","value"].map((function(e){return{title:e,dataIndex:e,key:e}}));var B=function(){var e=k(V.a.storager),a=Object(n.useState)(e),t=Object(u.a)(a,2),o=t[0],l=t[1];return Object(n.useEffect)((function(){function e(){l((function(){return k(V.a.storager)}))}return window.addEventListener("storage",e,!1),function(){window.removeEventListener("storage",e,!1)}}),[]),r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(y.a,{title:"\u672c\u5730localStroage\u7684\u5217\u8868",bordered:!1,headStyle:{textAlign:"center"},style:{width:"100%",minHeight:"100vh"}},r.a.createElement(g.a,{dataSource:o,columns:H,pagination:!1})))},K=t(345),R=(t(336),t(337),{labelCol:{span:4},wrapperCol:{span:20}}),z={wrapperCol:{offset:4,span:20}};var D=function(){var e=b.a.useForm(),a=Object(u.a)(e,1)[0];function t(e,t){S("localStorage\u8bbe\u7f6e\u6210\u529f\uff0ckey\uff1a".concat(e,"\uff0cvalue\uff1a").concat(t)),a.resetFields(),w()}return r.a.createElement(b.a,Object.assign({form:a},R,{name:"basic",initialValues:{remember:!0},onFinish:function(e){var a=e.key,n=e.value;window.local_storage_demo.set(a,n,t,C)}}),r.a.createElement(b.a.Item,{label:"key",name:"key",rules:[{required:!0,message:"Please input localStorage key!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,{label:"value",name:"value",rules:[{required:!0,message:"Please input localStorage value!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,z,r.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Submit")))};t(338);var G=function(){var e=b.a.useForm(),a=Object(u.a)(e,1)[0];function t(e,t){S("key\u4e3a".concat(e,",\u83b7\u53d6\u7684\u503c\u4e3a:").concat(t)),a.resetFields()}return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{form:a,layout:"inline",onFinish:function(e){window.local_storage_demo.get(e.key,t,C)},initialValues:{remember:!0}},r.a.createElement(b.a.Item,{label:"key",name:"key",placeholder:"key",rules:[{required:!0,message:"Please input localStorage key!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,null,r.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Submit"))))};t(339);var Q=function(){var e=b.a.useForm(),a=Object(u.a)(e,1)[0];function t(e){S("key\u4e3a".concat(e,"\u79fb\u9664\u6210\u529f")),w()}return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{form:a,layout:"inline",onFinish:function(e){window.local_storage_demo.remove(e.key,t,C)},initialValues:{remember:!0}},r.a.createElement(b.a.Item,{label:"key",name:"key",placeholder:"key",rules:[{required:!0,message:"Please input localStorage key!"}]},r.a.createElement(v.a,{allowClear:!0})),r.a.createElement(b.a.Item,null,r.a.createElement(p.a,{type:"primary",htmlType:"submit"},"Submit"))))};t(340);var U=function(){function e(){S("\u6e05\u9664\u6240\u6709localStorage\u6210\u529f"),w()}return r.a.createElement("div",null,r.a.createElement(p.a,{type:"primary",onClick:function(){window.local_storage_demo.clear(e)}},"Submit"))},W=K.a.Panel;var X=function(){return r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(y.a,{title:"localStorage\u64cd\u4f5c",bordered:!1,headStyle:{textAlign:"center"},style:{width:"100%",minHeight:"100vh"}},r.a.createElement(K.a,{defaultActiveKey:["1"]},r.a.createElement(W,{header:"\u8bbe\u7f6e",key:"1"},r.a.createElement(D,null)),r.a.createElement(W,{header:"\u83b7\u53d6",key:"2"},r.a.createElement(G,null)),r.a.createElement(W,{header:"\u79fb\u9664",key:"3"},r.a.createElement(Q,null)),r.a.createElement(W,{header:"\u6e05\u7a7a",key:"4"},r.a.createElement(U,null)))))};var Y=function(){return r.a.createElement(c.a,null,r.a.createElement(i.a,{span:8},r.a.createElement(A,null)),r.a.createElement(i.a,{span:8},r.a.createElement(B,null)),r.a.createElement(i.a,{span:8},r.a.createElement(X,null)))};l.a.render(r.a.createElement(Y,null),document.getElementById("root"))}},[[180,1,2]]]);
//# sourceMappingURL=main.28036abf.chunk.js.map