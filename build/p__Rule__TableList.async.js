(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0xWY":function(e,a,t){e.exports={packName:"antd-pro-pages-rule-create-form-packName"}},EScY:function(e,a,t){"use strict";t.r(a);var l,n,c,r,o=t("jehZ"),s=t.n(o),i=(t("IzEo"),t("bx4M")),d=(t("2qtc"),t("kLXV")),u=(t("14J3"),t("BMrR")),m=(t("+L6B"),t("2/Rp")),p=(t("jCWc"),t("kPKH")),h=(t("5NDa"),t("5rEg")),b=t("p0pE"),k=t.n(b),y=(t("/zsF"),t("PArb")),f=t("2Taf"),g=t.n(f),v=t("vZ4D"),E=t.n(v),S=t("l4Ni"),I=t.n(S),D=t("ujKo"),C=t.n(D),R=t("MhPg"),F=t.n(R),N=(t("y8nQ"),t("Vl3Y")),w=t("q1tI"),V=t.n(w),M=t("MuoO"),W=t("CkN6"),O=t("zHco"),x=(t("OaEy"),t("2fM7")),T={levelId:[{name:"\u4e00\u7ea7",num:1,background:"#08035D",color:"#F59A23"},{name:"\u4e8c\u7ea7",num:2,background:"#F59A23",color:"#CC1F07"},{name:"\u4e09\u7ea7",num:3,background:"#F3FF87",color:"#000000"},{name:"\u56db\u7ea7",num:4,background:"#FB4D4D",color:"#FFFFFF"},{name:"\u4e94\u7ea7",num:5,background:"#7324D7",color:"#FFFFFF"},{name:"\u516d\u7ea7",num:6,background:"#F3FF87",color:"#0E9FB7"},{name:"\u4e03\u7ea7",num:7,background:"#FF9687",color:"#88036B"}],symbol:[{name:"\u65e0",num:0},{name:"\u548c",num:1},{name:"\u6216",num:2}],levelDesc:[{level:1,levelDesc:"\u8d85\u7ea7\u5173\u952e\u8bcd"},{level:2,levelDesc:"\u4e0b\u7ebf\u5f85\u5ba1\u6838"},{level:3,levelDesc:"\u4e0b\u7ebf\u5df2\u5ba1\u6838"},{level:4,levelDesc:"\u9ad8\u4eae\u666e\u901a"},{level:5,levelDesc:"\u9ad8\u4eae\u654f\u611f"},{level:6,levelDesc:"\u53cc\u5ba1\u5173\u952e\u8bcd"},{level:7,levelDesc:"\u4e8b\u4ef6\u5173\u952e\u8bcd"}],checkStopWord:[{id:0,name:"\u4e0d\u68c0\u67e5"},{id:1,name:"\u68c0\u67e5"}]},A=t("0xWY"),L=t.n(A),P=N["a"].Item,j=x["a"].Option,B={labelCol:{span:6},wrapperCol:{span:14}},q=N["a"].create()(function(e){var a=e.modalVisible,t=e.isEdit,l=e.modalData,n=e.packageTitle,c=e.form,r=e.handleAdd,o=e.handleModalVisible,i=e.handleChange,u=e.handleSelectColorChange,m=e.backColorObj,p=e.wordPackage,b=e.uuid,k=e.levelName,y=e.checkRuleName,f=e.duplicateName,g=e.checkSymbol,v=l.ruleName,E=l.levelId,S=l.symbol,I=l.checkStopWord,D=l.ruleDesc,C=function(){c.validateFields(function(e,a){e||r(a,c.resetFields)})},R={rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u89c4\u5219\u8bcd\u5305!"}]},F=function(e){y(e.target.value)};return t&&(R.initialValue=n),V.a.createElement(d["a"],{destroyOnClose:!0,title:t?"\u7f16\u8f91\u89c4\u5219":"\u65b0\u5efa\u89c4\u5219",maskClosable:!1,visible:a,onOk:C,onCancel:function(){return o()}},V.a.createElement(P,s()({},B,{label:"\u89c4\u5219\u540d\u79f0",hasFeedback:!0}),c.getFieldDecorator("ruleName",{initialValue:t?v:"",rules:[{required:!0,message:"\u89c4\u5219\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]})(V.a.createElement(h["a"],{placeholder:"\u8bf7\u8f93\u5165",onBlur:F,suffix:null}))),f?V.a.createElement("div",{className:L.a.packName},"\u89c4\u5219\u540d\u91cd\u590d"):"",V.a.createElement(P,s()({label:"\u654f\u611f\u7b49\u7ea7"},B),c.getFieldDecorator("levelId",{initialValue:t?E:"",rules:[{required:!0,message:"\u654f\u611f\u7b49\u7ea7\u4e0d\u80fd\u4e3a\u7a7a"}],onChange:u})(V.a.createElement(x["a"],{placeholder:"\u8bf7\u9009\u62e9",style:{width:150}},T.levelId.map(function(e){return V.a.createElement(j,{key:e.num,value:e.num},e.name)}))),"\xa0\xa0 \u793a\u4f8b\uff1a",Object.keys(m).length>0?V.a.createElement("span",{style:m},k):""),V.a.createElement(P,s()({label:"\u89c4\u5219\u7c7b\u578b"},B),c.getFieldDecorator("symbol",{initialValue:t?T.symbol[S].num&&T.symbol[S].num:T.symbol[0].num,rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8fde\u63a5\u8bcd!"}]})(V.a.createElement(x["a"],{style:{width:150}},T.symbol.map(function(e){return V.a.createElement(j,{key:e.num,value:e.num},e.name)})))),g?V.a.createElement("div",{className:L.a.packName},"\u9009\u62e92\u4e2a\u62162\u4e2a\u4ee5\u4e0a\u89c4\u5219\u8bcd\u5305\uff0c\u8fde\u63a5\u8bcd\u4e0d\u80fd\u4e3a\u65e0"):"",V.a.createElement(P,s()({label:"\u8df3\u8fc7\u8bcd"},B),c.getFieldDecorator("checkStopWord",{initialValue:t&&null!==I?T.checkStopWord[I].id&&T.checkStopWord[I].id:T.checkStopWord[0].id,rules:[{required:!0,message:"\u8bf7\u68c0\u67e5\u547d\u4e2d\u8bcd\u4e2d\u7684\u8df3\u8fc7!"}]})(V.a.createElement(x["a"],{style:{width:150}},T.checkStopWord.map(function(e){return V.a.createElement(j,{key:e.id,value:e.id},e.name)})))),V.a.createElement(P,s()({label:"\u89c4\u5219\u8bcd\u5305"},B),c.getFieldDecorator("packageIds",R)(V.a.createElement(x["a"],{placeholder:"\u8bf7\u9009\u62e9",mode:"multiple",onChange:i,style:{width:"100%"}},p.map(function(e){return V.a.createElement(j,{key:e.dictId+b,value:e.wordDictTitle},e.wordDictTitle)})))),V.a.createElement(P,s()({},B,{label:"\u89c4\u5219\u63cf\u8ff0",hasFeedback:!0}),c.getFieldDecorator("ruleDesc",{initialValue:t?D:"",rules:[{required:!0,message:"\u89c4\u5219\u63cf\u8ff0\u4e0d\u80fd\u4e3a\u7a7a"}]})(V.a.createElement(h["a"].TextArea,{placeholder:"\u8bf7\u8f93\u5165"}))))}),z=q,Y=t("+n12"),J=t("ymFy"),K=t.n(J),H=N["a"].Item,Z=(l=Object(M["connect"])(function(e){var a=e.sceneRule,t=e.workpack,l=e.loading;return{sceneRule:a,workpack:t,loading:l.models.rule}}),n=N["a"].create(),l(c=n((r=function(e){function a(){var e,t;g()(this,a);for(var l=arguments.length,n=new Array(l),c=0;c<l;c++)n[c]=arguments[c];return t=I()(this,(e=C()(a)).call.apply(e,[this].concat(n))),t.myRef=V.a.createRef(),t.state={sceneId:t.props.match.params.sceneId,modalVisible:!1,selectedRows:[],backColorObj:{},levelName:"",isEdit:!1,modalData:{},symbol:0,packageIds:[],packageTitle:[],modal2Visible:!1,id:"",checkSymbol:!1},t.columns=[{title:"\u89c4\u5219id",dataIndex:"id",key:"id",sorter:function(e,a){return e.id-a.id}},{title:"\u6240\u5c5e\u573a\u666f",dataIndex:"sceneId",key:"sceneId"},{title:"\u8fde\u63a5\u8bcd",dataIndex:"symbol",key:"symbol",render:function(e,a){return t.getSymbol(a)}},{title:"\u89c4\u5219\u540d\u79f0",dataIndex:"ruleName",key:"ruleName"},{title:"\u89c4\u5219\u63cf\u8ff0",dataIndex:"ruleDesc",key:"ruleDesc"},{title:"\u654f\u611f\u7b49\u7ea7",dataIndex:"levelId",key:"levelId"},{title:"\u654f\u611f\u7b49\u7ea7\u63cf\u8ff0",dataIndex:"levelDesc",key:"levelDesc",render:function(e,a){return t.setStyle(a)}},{title:"\u8df3\u8fc7\u8bcd",dataIndex:"checkStopWord",key:"checkStopWord",render:function(e,a){return t.setStopWord(a)}},{title:"\u89c4\u5219\u5305\u542b\u7684\u8bcd\u5305\u96c6\u5408",dataIndex:"sensitiveWordPackageSet",key:"sensitiveWordPackageSet",render:function(e){return Array.isArray(e)&&e.map(function(e){return V.a.createElement("div",{key:e.id},e.wordDictTitle)})}},{title:"\u6dfb\u52a0\u4eba",dataIndex:"operator",key:"operator"},{title:"\u64cd\u4f5c",key:"\u64cd\u4f5c",render:function(e,a){return V.a.createElement(w["Fragment"],null,V.a.createElement("a",{onClick:function(){return t.handleDel(a)}},"\u5220\u9664"),V.a.createElement(y["a"],{type:"vertical"}),V.a.createElement("a",{onClick:function(){return t.edit(!0,!0,a)}},"\u7f16\u8f91"))}}],t.getSymbol=function(e){var a="";switch(e.symbol){case 0:a="\u65e0";break;case 1:a="\u548c";break;case 2:a="\u6216";break;default:}return a},t.setStyle=function(e){var a="";return a=V.a.createElement("span",{key:e.id,style:{background:"".concat(e.backColor),color:"".concat(e.fontColor)}},e.levelDesc),a},t.setStopWord=function(e){var a="";return T.checkStopWord.forEach(function(t){t.id===e.checkStopWord&&(a=t.name)}),a},t.handleSelectColorChange=function(e){var a={},l="";T.levelId.forEach(function(t){t.num===e&&(a.background=t.background,a.color=t.color,l=T.levelDesc[t.num-1].levelDesc)}),t.setState({backColorObj:a,levelName:l})},t.handleChange=function(e){var a=t.props.sceneRule.wordPackage,l=[],n=[];a.forEach(function(a){e.indexOf(a.wordDictTitle)>=0&&(l.push(a.dictId),n.push(a.wordDictTitle))}),t.setState({packageIds:l,packageTitle:n})},t.handleDel=function(e){t.setModal2Visible(!0,e.id)},t.handleBatchDel=function(){var e=t.state.selectedRows,a=[];e.map(function(e){return a.push(e.id)}),t.setModal2Visible(!0,a)},t.setModal2Visible=function(e,a){t.setState({modal2Visible:e,id:a})},t.deleteRule=function(e){var a=t.props.dispatch,l=Array.isArray(e)?e:[e],n=t.state.sceneId;a({type:"sceneRule/deleteRule",payload:{idList:l,sceneId:n,clearRow:t.myRef.current.cleanSelectedKeys,onClose:function(){return t.setModal2Visible(!1)}}})},t.handleStandardTableChange=function(e){var a=t.props.dispatch,l=t.state.sceneId,n={current:e.current,pageSize:e.pageSize,sceneId:l};a({type:"sceneRule/getPageData",payload:n})},t.handleFormReset=function(){var e=t.props,a=e.form,l=e.dispatch,n=t.state.sceneId;a.resetFields(),l({type:"sceneRule/seachRule",payload:{sceneId:n}})},t.handleSelectRows=function(e){t.setState({selectedRows:e})},t.handleSearch=function(e){e.preventDefault();var a=t.props,l=a.dispatch,n=a.form,c=t.state.sceneId;n.validateFields(function(e,a){if(!e){var t=k()({},a,{sceneId:c});l({type:"sceneRule/seachRule",payload:t})}})},t.handleModalVisible=function(e,a){t.setState({modalVisible:!!e,isEdit:a,checkSymbol:!1}),t.resetModal();var l=t.props.dispatch;l({type:"sceneRule/saveRuleNameStatus",payload:!1})},t.edit=function(e,a,l){t.handleModalVisible(e,a),t.setModalInitVal(l),t.handleSelectColorChange(l.levelId),t.setSymbol(l.symbol),t.setRuleWorkPack(l.sensitiveWordPackageSet)},t.setModalInitVal=function(e){t.setState({modalData:e})},t.setSymbol=function(e){t.setState({symbol:e})},t.setRuleWorkPack=function(e){var a=[],l=[];e.forEach(function(e){a.push(e.dictId),l.push(e.wordDictTitle)}),t.setState({packageIds:a,packageTitle:l})},t.handleAdd=function(e,a){var l=t.props,n=l.dispatch,c=l.sceneRule.duplicateName;if(!c){var r=t.state,o=r.sceneId,s=r.packageIds,i=r.backColorObj,d=r.isEdit,u=r.modalData,m=e;m.packageIds=s,Array.isArray(s)&&s.length>=2&&0===e.symbol?t.setState({checkSymbol:!0}):(T.levelDesc.forEach(function(e){e.level===m.levelId&&(m.levelDesc=e.levelDesc)}),n(d?{type:"sceneRule/updataRule",payload:k()({},m,{id:u.id,sceneId:o,fontColor:i.color,backColor:i.background,onClose:t.handleModalVisible,reset:t.resetModal})}:{type:"sceneRule/addRule",payload:k()({},m,{sceneId:o,fontColor:i.color,backColor:i.background,onClose:t.handleModalVisible,reset:t.resetModal})}),a())}},t.resetModal=function(){t.setState({backColorObj:{},packageTitle:[],packageIds:[]})},t.checkRuleName=function(e){var a=t.props.dispatch,l=t.state,n=l.modalData,c=l.isEdit,r=l.sceneId;e&&a(c?{type:"sceneRule/checkRuleName",payload:{id:n.id,sceneId:r,ruleName:e,isEdit:!0}}:{type:"sceneRule/checkRuleName",payload:{id:"",sceneId:r,ruleName:e}})},t}return F()(a,e),E()(a,[{key:"componentDidMount",value:function(){var e=this.state.sceneId,a=this.props.dispatch;a({type:"sceneRule/getRuleData",payload:{sceneId:e}}),a({type:"sceneRule/fetch",payload:{}})}},{key:"renderSimpleForm",value:function(){var e=this.props.form.getFieldDecorator;return V.a.createElement(N["a"],{onSubmit:this.handleSearch,layout:"inline"},V.a.createElement(u["a"],{gutter:{md:8,lg:24,xl:48}},V.a.createElement(p["a"],{md:8,sm:24},V.a.createElement(H,{label:"\u89c4\u5219\u540d\u79f0"},e("ruleName")(V.a.createElement(h["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),V.a.createElement(p["a"],{md:8,sm:24},V.a.createElement(H,{label:"\u6dfb\u52a0\u4eba"},e("operator")(V.a.createElement(h["a"],{placeholder:"\u8bf7\u8f93\u5165"})))),V.a.createElement(p["a"],{md:8,sm:24},V.a.createElement("span",{className:K.a.submitButtons},V.a.createElement(m["a"],{type:"primary",htmlType:"submit"},"\u641c\u7d22"),V.a.createElement(m["a"],{style:{marginLeft:8},onClick:this.handleFormReset},"\u6e05\u7a7a")))))}},{key:"render",value:function(){var e=this,a=this.props.sceneRule,t=a.data,l=a.isLoading,n=a.wordPackage,c=a.duplicateName,r=this.state,o=r.selectedRows,u=r.modalVisible,p=r.backColorObj,h=r.isEdit,b=r.modalData,k=r.packageTitle,y=r.levelName,f=r.modal2Visible,g=r.id,v=r.checkSymbol,E="".concat(Object(Y["a"])("title"),"\u89c4\u5219"),S={handleAdd:this.handleAdd,handleModalVisible:this.handleModalVisible};return V.a.createElement(O["a"],{title:E},V.a.createElement(d["a"],{title:"\u63d0\u793a",centered:!0,visible:f,onOk:function(){return e.deleteRule(g)},onCancel:function(){return e.setModal2Visible(!1)}},V.a.createElement("p",null,"\u786e\u8ba4\u5220\u9664\u8be5\u89c4\u5219\u5417\uff1f")),V.a.createElement(i["a"],{bordered:!1},V.a.createElement("div",{className:K.a.tableList},V.a.createElement("div",{className:K.a.tableListForm},this.renderSimpleForm()),V.a.createElement("div",{className:K.a.tableListOperator},V.a.createElement(m["a"],{icon:"plus",type:"primary",onClick:function(){return e.handleModalVisible(!0,!1)}},"\u65b0\u5efa"),o.length>0&&V.a.createElement("span",null,V.a.createElement(m["a"],{onClick:this.handleBatchDel},"\u6279\u91cf\u5220\u9664"))),V.a.createElement(W["a"],{selectedRows:o,loading:l,data:t,columns:this.columns,onSelectRow:this.handleSelectRows,onChange:this.handleStandardTableChange,ref:this.myRef}))),V.a.createElement(z,s()({},S,{modalVisible:u,isEdit:h,modalData:b,handleSelectColorChange:this.handleSelectColorChange,handleChange:this.handleChange,backColorObj:p,wordPackage:n,packageTitle:k,levelName:y,checkRuleName:this.checkRuleName,duplicateName:c,checkSymbol:v})))}}]),a}(w["PureComponent"]),c=r))||c)||c);a["default"]=Z},ymFy:function(e,a,t){e.exports={tableList:"antd-pro-pages-rule-table-list-tableList",tableListOperator:"antd-pro-pages-rule-table-list-tableListOperator",tableListForm:"antd-pro-pages-rule-table-list-tableListForm",submitButtons:"antd-pro-pages-rule-table-list-submitButtons"}}}]);