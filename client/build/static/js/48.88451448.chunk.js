"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[48],{1830:function(e,l,n){n.d(l,{Z:function(){return Z}});var a=n(4395),s=n(4554),i=n(3400),t=n(890),c=n(4663),r=n(7394),d="Header_title__spwlb",o="Header_header__3unaQ",u="Header_appBar__m76Ro",x=n(2791),h=n(2279),_=function(e){var l=e.children,n=e.window,a=(0,h.Z)({disableHysteresis:!0,threshold:0,target:n?n():void 0});return(0,x.cloneElement)(l,{elevation:a?4:0})},m=n(184),Z=function(e){var l=e.name,n=e.handleArrowAction;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{children:(0,m.jsx)(a.Z,{className:u,children:(0,m.jsxs)(s.Z,{className:o,children:[(0,m.jsx)(i.Z,{onClick:n,children:(0,m.jsx)(r.Z,{})}),(0,m.jsx)(t.Z,{className:d,children:l})]})})}),(0,m.jsx)(c.Z,{})]})}},8048:function(e,l,n){n.r(l),n.d(l,{default:function(){return De}});var a,s=n(9439),i=n(1889),t=n(2791),c=n(7689),r="details_mainGrid__f7zod",d="details_name__iIHQ4",o="details_walletBox__mKhHH",u="details_detailGrid__t16B-",x="details_detailsGrid__wSu6P",h="details_nameGrid__eoKet",_="details_walletName__lbMUu",m="details_walletBalance__ZBbsH",Z="details_walletIcon__8c2SY",j="details_detailHeader__8g9fE",f="details_headerGrid__hqFII",v="details_iconGrid__i6PNA",N="details_buttonGrid__yjPYJ",p="details_delete__e50BA",g="details_detailName__meURu",w="details_detailBalance__TExg0",C="details_detailIcon__KAinl",b="details_avatar__2sctl",y="details_balance__yhOX3",P="details_balanceCard__9QRu7",k="details_checkBoxCard__T04tL",B="details_formGroup__j6OSN",S="details_formHelper__82z4s",I="details_card__jhviL",U="details_cancelButton__QB+tr",A="details_field__E7cy4",T="details_fieldBox__14WSM",E="details_button__g0bg+",W="details_deleteButton__THZaC",D="details_buttonDisabled__ht5gT",L="details_label__H+LjH",F=n(4456),H=n(221),G=n(3400),M=n(3044),z=n(890),R=n(4554),O=n(7924),V={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},Q=new Uint8Array(16);function K(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(Q)}for(var X=[],J=0;J<256;++J)X.push((J+256).toString(16).slice(1));function Y(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(X[e[l+0]]+X[e[l+1]]+X[e[l+2]]+X[e[l+3]]+"-"+X[e[l+4]]+X[e[l+5]]+"-"+X[e[l+6]]+X[e[l+7]]+"-"+X[e[l+8]]+X[e[l+9]]+"-"+X[e[l+10]]+X[e[l+11]]+X[e[l+12]]+X[e[l+13]]+X[e[l+14]]+X[e[l+15]]).toLowerCase()}var q=function(e,l,n){if(V.randomUUID&&!l&&!e)return V.randomUUID();var a=(e=e||{}).random||(e.rng||K)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,l){n=n||0;for(var s=0;s<16;++s)l[n+s]=a[s];return l}return Y(a)},$=n(3763),ee=n(9418),le=n(3859),ne=n(184),ae=function(e){var l=e.excludedList,n=e.includedList,a=e.handleWalletDetail,s=function(e){return e.map((function(e){return(0,ne.jsxs)(i.ZP,{onClick:function(){a(e)},container:!0,className:u,children:[(0,ne.jsx)(i.ZP,{item:!0,children:(0,ne.jsx)(G.Z,{className:Z,children:(0,ne.jsx)(M.Z,{src:ee.U[e.imageId-1].image})})}),(0,ne.jsxs)(i.ZP,{item:!0,className:h,children:[(0,ne.jsx)(z.Z,{className:_,children:e.name}),(0,ne.jsxs)(z.Z,{className:m,children:[e.initialBalance>=0?"+":"-",(0,le.E)(e.currency)," ",e.initialBalance.toFixed(2)]})]})]},e._id)}))};return(0,ne.jsxs)(ne.Fragment,{children:[!!n.length&&(0,ne.jsxs)(i.ZP,{item:!0,xs:5,children:[(0,ne.jsxs)(R.Z,{className:o,children:[(0,ne.jsx)(z.Z,{className:d,children:$.uQ[0]}),(0,ne.jsx)(O.Z,{orientation:"horizontal"})]}),s(n)]},q()),!!l.length&&(0,ne.jsxs)(i.ZP,{item:!0,xs:5,children:[(0,ne.jsxs)(R.Z,{className:o,children:[(0,ne.jsx)(z.Z,{className:d,children:$.uQ[1]}),(0,ne.jsx)(O.Z,{orientation:"horizontal"})]}),s(l)]},q())]})},se=n(1413),ie=n(7621),te=n(9504),ce=n(6151),re=n(5574),de=n(9012),oe=n(2114),ue=n(4454),xe=n(7071),he=n(6739),_e=n(4371),me=n(5661),Ze=n(9157),je=n(2447),fe=n(7123),ve=n(8182),Ne=function(e){var l=e.initialBalance,n=e.selectedWallet,a=(e.handleExcludeCheckBox,(0,F.I0)()),i=(0,t.useState)(!1),c=(0,s.Z)(i,2),r=c[0],d=c[1],o=(0,t.useState)(l),u=(0,s.Z)(o,2),x=u[0],h=u[1],_=function(){d((function(e){return!e}))};return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(O.Z,{orientation:"horizontal"}),(0,ne.jsx)(te.Z,{className:P,onClick:_,children:(0,ne.jsx)(ce.Z,{className:y,children:"Adjust Balance"})}),(0,ne.jsxs)(re.Z,{fullWidth:!0,maxWidth:"xs",open:r,children:[(0,ne.jsx)(me.Z,{children:"Adjust Balance"}),(0,ne.jsx)(O.Z,{orientation:"horizontal"}),(0,ne.jsx)(Ze.Z,{children:(0,ne.jsxs)(R.Z,{className:T,children:[(0,ne.jsxs)("label",{className:L,children:["Enter current balance for ",(null===n||void 0===n?void 0:n.name)||"wallet"]}),(0,ne.jsx)(je.Z,{variant:"standard",className:A,value:x,type:"tel",onChange:function(e){h(+e.target.value)},fullWidth:!0,InputProps:{disableUnderline:!0}})]})}),(0,ne.jsxs)(fe.Z,{children:[(0,ne.jsx)(ce.Z,{onClick:_,className:U,children:"cancel"}),(0,ne.jsx)(ce.Z,{disabled:l===x,onClick:function(){(null===n||void 0===n?void 0:n._id)&&a((0,H.ru)(n._id,(0,se.Z)((0,se.Z)({},n),{},{initialBalance:x}))),_()},className:l===x?(0,ve.Z)(E,D):E,children:"Done"})]})]})]})},pe=n(3366),ge=n(7462),we=n(4419),Ce=n(6934),be=n(1402),ye=n(5878),Pe=n(1217);function ke(e){return(0,Pe.Z)("MuiDialogContentText",e)}(0,ye.Z)("MuiDialogContentText",["root"]);var Be=["children","className"],Se=(0,Ce.ZP)(z.Z,{shouldForwardProp:function(e){return(0,Ce.FO)(e)||"classes"===e},name:"MuiDialogContentText",slot:"Root",overridesResolver:function(e,l){return l.root}})({}),Ie=t.forwardRef((function(e,l){var n=(0,be.Z)({props:e,name:"MuiDialogContentText"}),a=n.className,s=(0,pe.Z)(n,Be),i=function(e){var l=e.classes,n=(0,we.Z)({root:["root"]},ke,l);return(0,ge.Z)({},l,n)}(s);return(0,ne.jsx)(Se,(0,ge.Z)({component:"p",variant:"body1",color:"text.secondary",ref:l,ownerState:s,className:(0,ve.Z)(i.root,a)},n,{classes:i}))})),Ue="confirmation_divider__OjIgV",Ae=function(e){var l=e.name,n=e.className,a=e.title,i=e.content,c=e.failure,r=e.success,d=e.successCN,o=e.failureCN,u=e.handleSuccessAction,x=(0,t.useState)(!1),h=(0,s.Z)(x,2),_=h[0],m=h[1],Z=function(){m(!1)};return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(ce.Z,{className:n,onClick:function(){m(!0)},children:l}),(0,ne.jsxs)(re.Z,{open:_,keepMounted:!0,onClose:Z,fullWidth:!0,maxWidth:"xs","aria-describedby":"alert-dialog-slide-description",children:[(0,ne.jsx)(me.Z,{children:a}),(0,ne.jsx)(O.Z,{className:Ue}),(0,ne.jsx)(Ze.Z,{children:(0,ne.jsx)(Ie,{id:"alert-dialog-slide-description",children:i})}),(0,ne.jsxs)(fe.Z,{children:[(0,ne.jsx)(ce.Z,{className:o,onClick:Z,children:c}),(0,ne.jsx)(ce.Z,{className:d,onClick:u,children:r})]})]})]})},Te=n(2494),Ee=function(e){var l=e.wallet,n=e.handleWalletDetail,a=e.walletsLen,r=(0,F.I0)(),d=(0,c.s0)(),o=(0,_e.Z)().user,u=(0,t.useState)(!1),Z=(0,s.Z)(u,2),P=Z[0],A=Z[1],T=(0,t.useState)(l),E=(0,s.Z)(T,2),D=E[0],L=E[1],R=function(){A(!1)},V=function(e){L((function(l){return l?(0,se.Z)((0,se.Z)({},l),{},{isTotalExcluded:e.target.checked}):l})),(null===D||void 0===D?void 0:D._id)&&r((0,H.ru)(D._id,(0,se.Z)((0,se.Z)({},D),{},{isTotalExcluded:e.target.checked})))};return D&&(0,ne.jsx)(i.ZP,{item:!0,xs:6,children:(0,ne.jsxs)(ie.Z,{className:I,children:[(0,ne.jsx)(te.Z,{children:(0,ne.jsxs)(i.ZP,{container:!0,className:f,children:[(0,ne.jsxs)(i.ZP,{item:!0,xs:6,className:v,children:[(0,ne.jsx)(G.Z,{"aria-label":"close",onClick:function(){return n(null)},sx:{color:function(e){return e.palette.grey[500]}},children:(0,ne.jsx)(he.Z,{})}),(0,ne.jsx)(z.Z,{className:j,children:"Wallet Details"})]}),(0,ne.jsxs)(i.ZP,{className:N,item:!0,xs:6,children:[(0,ne.jsx)(Ae,{handleSuccessAction:function(){(null===D||void 0===D?void 0:D._id)&&r((0,H.tJ)(D._id)),1===a?d("/expense/wallet",{replace:!0}):L(null)},className:p,name:"Delete",success:"Delete",failure:"cancel",content:$.kW,title:$._O,successCN:W,failureCN:U}),!D.isArchived&&(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(ce.Z,{className:y,onClick:function(){return A(!0)},children:"Edit"}),(0,ne.jsx)(re.Z,{open:P,children:(0,ne.jsx)(Te.Z,{handleClose:R,title:$.E4,type:$.dm,data:D,handleSave:function(e){(null===D||void 0===D?void 0:D._id)&&r((0,H.ru)(null===D||void 0===D?void 0:D._id,e)),R()}})})]})]})]})}),(0,ne.jsx)(O.Z,{orientation:"horizontal"}),(0,ne.jsx)(te.Z,{children:(0,ne.jsxs)(i.ZP,{container:!0,className:x,children:[(0,ne.jsx)(i.ZP,{item:!0,children:(0,ne.jsx)(G.Z,{className:C,children:(0,ne.jsx)(M.Z,{sx:{width:56,height:56},src:ee.U[D.imageId-1].image})})}),(0,ne.jsxs)(i.ZP,{item:!0,className:h,children:[(0,ne.jsx)(z.Z,{className:g,children:D.name}),(0,ne.jsx)(z.Z,{className:w,children:D.currency})]})]})}),(0,ne.jsx)(O.Z,{orientation:"horizontal"}),(0,ne.jsx)(te.Z,{children:(0,ne.jsxs)(i.ZP,{container:!0,className:x,children:[(0,ne.jsx)(i.ZP,{item:!0,children:(0,ne.jsx)(G.Z,{className:C,children:(0,ne.jsx)(M.Z,{className:b,children:null===o||void 0===o?void 0:o.email.charAt(0).toUpperCase()})})}),(0,ne.jsxs)(i.ZP,{item:!0,className:h,children:[(0,ne.jsx)(z.Z,{className:_,children:null===o||void 0===o?void 0:o.email.split("@")[0]}),(0,ne.jsx)(z.Z,{className:m,children:null===o||void 0===o?void 0:o.email})]})]})}),(0,ne.jsx)(O.Z,{orientation:"horizontal"}),(0,ne.jsxs)(te.Z,{className:k,children:[(0,ne.jsxs)(de.Z,{className:B,children:[(0,ne.jsx)(oe.Z,{control:(0,ne.jsx)(ue.Z,{disabled:D.isArchived,checked:D.isTotalExcluded,onChange:V}),label:"Excluded from Total"}),(0,ne.jsx)(xe.Z,{className:S,children:'Ignore this wallet and its balance in the "Total" mode'})]}),(0,ne.jsxs)(de.Z,{className:B,children:[(0,ne.jsx)(oe.Z,{control:(0,ne.jsx)(ue.Z,{checked:D.isArchived,onChange:function(e){L((function(l){return l?(0,se.Z)((0,se.Z)({},l),{},{isArchived:e.target.checked}):l})),(null===D||void 0===D?void 0:D._id)&&r((0,H.ru)(D._id,(0,se.Z)((0,se.Z)({},D),{},{isArchived:e.target.checked})))}}),label:"Archived"}),(0,ne.jsx)(xe.Z,{className:S,children:"Freeze this wallet and stop generating bills & recurring transactions."})]})]}),!D.isArchived&&(0,ne.jsx)(Ne,{initialBalance:D.initialBalance,selectedWallet:D,handleExcludeCheckBox:V})]})})},We=n(1830),De=function(){var e=(0,F.I0)(),l=(0,c.s0)(),n=(0,F.v9)((function(e){return e.wallet})).wallets,a=(0,t.useState)(null),d=(0,s.Z)(a,2),o=d[0],u=d[1],x=function(e){u(e)};(0,t.useEffect)((function(){e((0,H.iL)())}),[e]);return(0,ne.jsxs)(ne.Fragment,{children:[(0,ne.jsx)(We.Z,{disabled:!n.length,name:$.cN,handleArrowAction:function(){l("/expense/transactions")}}),(0,ne.jsxs)(i.ZP,{container:!0,className:r,children:[(0,ne.jsx)(ae,{excludedList:n.filter((function(e){return e.isTotalExcluded})),includedList:n.filter((function(e){return!e.isTotalExcluded})),handleWalletDetail:x}),o&&(0,ne.jsx)(Ee,{walletsLen:n.length,handleWalletDetail:x,wallet:o})]})]})}},2494:function(e,l,n){n.d(l,{Z:function(){return Ze}});var a=n(9439),s=n(7621),i=n(9504),t=n(890),c=n(7924),r=n(1889),d=n(2447),o=n(9012),u=n(2114),x=n(4454),h=n(7071),_=n(6151),m=n(2791),Z=n(3466),j=n(3400),f=n(3044),v=n(5574),N=n(5661),p=n(4554),g=n(9157),w=n(5982),C=n(2821),b=n(6739),y=n(2167),P=n(9371),k=n(3735),B=n.n(k),S=n(8058),I=n.n(S),U="wallet_card__lsvIg",A="wallet_cardContent__k3skP",T="wallet_walletHeader__xUddA",E="wallet_divider__LmVI6",W="wallet_label__+BuLP",D="wallet_field__Cjcd9",L="wallet_currencyField__Hc3bl",F="wallet_walletBox__XM3LJ",H="wallet_formGroup__uEdX9",G="wallet_formHelper__-bLRk",M="wallet_containerGrid__F8197",z="wallet_buttonGrid__Ksi6f",R="wallet_button__kTXUE",O="wallet_cancelButton__tCac2",V="wallet_buttonDisabled__e4ANu",Q="wallet_currencyHeader__Ct2hV",K="wallet_searchBox__XT4sN",X="wallet_currencyOuterBox__Txal5",J="wallet_currencyBox__dU7oW",Y="wallet_currencyName__rFelV",q="wallet_currencyCode__Gnm66",$="wallet_currencyNameGrid__kfGT7",ee="wallet_flag__7sRMP",le="wallet_iconGrid__3vKlz",ne="wallet_iconOuterBox__BBn73",ae="wallet_avatar__WgTFa",se="wallet_dialogTitle__YlqLj",ie="wallet_pointer__aul4p",te=n(5489),ce=n(184),re=function(e){var l=e.handleSelectedCurrency,n=e.selectedCurrency,s=(0,m.useState)(!1),i=(0,a.Z)(s,2),c=i[0],o=i[1],u=(0,m.useState)(te.M),x=(0,a.Z)(u,2),h=x[0],_=x[1],k=function(){o((function(e){return!e}))};return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)(d.Z,{className:L,variant:"standard",placeholder:"Select currency",onClick:k,value:n.name,sx:{input:{cursor:"pointer"}},inputProps:{readOnly:!0},InputProps:{disableUnderline:!0,startAdornment:(0,ce.jsx)(Z.Z,{position:"start",children:(0,ce.jsx)(j.Z,{children:n.name?(0,ce.jsx)(f.Z,{sx:{width:24,height:24},className:ie,children:(0,ce.jsx)(I(),{currency:n.code,height:18})}):(0,ce.jsx)(w.Z,{sx:{background:"#f5f5f5"}})})}),endAdornment:(0,ce.jsx)(Z.Z,{position:"end",children:(0,ce.jsx)(j.Z,{className:ie,children:(0,ce.jsx)(C.Z,{})})})}}),(0,ce.jsxs)(v.Z,{maxWidth:"sm",open:c,children:[(0,ce.jsxs)(N.Z,{sx:{m:0,p:2},children:[(0,ce.jsx)(j.Z,{"aria-label":"close",onClick:k,sx:{color:function(e){return e.palette.grey[500]}},children:(0,ce.jsx)(b.Z,{})}),(0,ce.jsx)(t.Z,{className:Q,children:"Currency"}),(0,ce.jsx)(p.Z,{className:K,children:(0,ce.jsx)(d.Z,{variant:"standard",placeholder:"Search",onChange:function(e){var l=e.target.value.toLowerCase(),n=te.M.filter((function(e){return e.name.toLowerCase().includes(l)||e.code.toLowerCase().includes(l)}));_(n)},InputProps:{disableUnderline:!0,startAdornment:(0,ce.jsx)(Z.Z,{position:"start",children:(0,ce.jsx)(j.Z,{children:(0,ce.jsx)(y.Z,{})})})}})})]}),(0,ce.jsx)(g.Z,{children:(0,ce.jsx)(p.Z,{className:X,children:h.map((function(e,a){var s=n.name===e.name||!1;return(0,ce.jsxs)(r.ZP,{container:!0,onClick:function(){return l(e),void k()},className:J,children:[(0,ce.jsx)(r.ZP,{item:!0,xs:1,className:ee,children:(0,ce.jsx)(I(),{currency:e.code,height:28})}),(0,ce.jsxs)(r.ZP,{item:!0,xs:7,className:$,children:[(0,ce.jsx)(t.Z,{className:Y,children:e.name}),(0,ce.jsxs)(t.Z,{className:q,children:[e.code," - ",B()(e.code)]})]}),s&&(0,ce.jsx)(r.ZP,{item:!0,xs:2,children:(0,ce.jsx)(j.Z,{children:(0,ce.jsx)(P.Z,{sx:{color:"#5dfa7f"}})})})]},a)}))})})]})]})},de=n(5228),oe=n(3896),ue=n(1235),xe=n(9418),he=function(e){var l=e.selectedIcon,n=e.handleIconSelection,s=(0,m.useState)(!1),i=(0,a.Z)(s,2),c=i[0],d=i[1],o=function(){d((function(e){return!e}))};return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsxs)(r.ZP,{item:!0,xs:3,onClick:o,className:le,children:[(0,ce.jsx)(j.Z,{children:(0,ce.jsx)(f.Z,{src:l.image})}),(0,ce.jsx)(ue.Z,{})]}),(0,ce.jsxs)(v.Z,{open:c,fullWidth:!0,maxWidth:"xs",children:[(0,ce.jsxs)(N.Z,{className:se,children:[" ",(0,ce.jsx)(j.Z,{"aria-label":"close",onClick:o,sx:{color:function(e){return e.palette.grey[500]}},children:(0,ce.jsx)(b.Z,{})}),(0,ce.jsx)(t.Z,{className:Q,children:"Select icon"})]}),(0,ce.jsxs)(g.Z,{children:[(0,ce.jsx)(de.Z,{value:"basic",centered:!0,children:(0,ce.jsx)(oe.Z,{label:"Basic",value:"basic"})}),(0,ce.jsx)(p.Z,{className:ne,children:xe.U.map((function(e){return(0,ce.jsx)(f.Z,{onClick:function(){return n(e),void o()},className:ae,src:e.image},e.id)}))})]})]})]})},_e=n(8182),me=n(3763),Ze=function(e){var l,n=e.handleSave,Z=e.title,j=e.data,f=e.handleClose,v=e.type,N=(0,m.useState)({name:(null===j||void 0===j?void 0:j.currency)||"",code:(null===(l=te.M.find((function(e){return e.name===(null===j||void 0===j?void 0:j.currency)})))||void 0===l?void 0:l.code)||""}),p=(0,a.Z)(N,2),g=p[0],w=p[1],C=(0,m.useState)((null===j||void 0===j?void 0:j.name)||""),b=(0,a.Z)(C,2),y=b[0],P=b[1],k=(0,m.useState)(null!==j&&void 0!==j&&j.imageId?xe.U[j.imageId-1]:xe.U[0]),B=(0,a.Z)(k,2),S=B[0],I=B[1],L=(0,m.useState)((null===j||void 0===j?void 0:j.initialBalance)||0),Q=(0,a.Z)(L,2),K=Q[0],X=Q[1],J=(0,m.useState)((null===j||void 0===j?void 0:j.isTotalExcluded)||!1),Y=(0,a.Z)(J,2),q=Y[0],$=Y[1],ee=(0,m.useState)(!1),le=(0,a.Z)(ee,2),ne=le[0],ae=le[1],se=v===me.JV&&!!y&&!!g.name||v===me.dm&&ne;return(0,ce.jsx)(ce.Fragment,{children:(0,ce.jsx)(s.Z,{className:U,children:(0,ce.jsxs)(i.Z,{className:A,children:[(0,ce.jsx)(t.Z,{className:T,children:Z}),(0,ce.jsx)(c.Z,{className:E}),(0,ce.jsxs)(r.ZP,{container:!0,children:[(0,ce.jsx)(he,{selectedIcon:S,handleIconSelection:function(e){I(e),ae(!0)}}),(0,ce.jsxs)(r.ZP,{item:!0,xs:8.5,className:F,children:[(0,ce.jsx)("label",{className:W,children:"Wallet name"}),(0,ce.jsx)(d.Z,{variant:"standard",className:D,onChange:function(e){ae(!0),P(e.target.value)},placeholder:"Your wallet name?",value:y,InputProps:{disableUnderline:!0}})]})]}),(0,ce.jsxs)(r.ZP,{container:!0,className:M,children:[(0,ce.jsxs)(r.ZP,{className:F,item:!0,xs:7,children:[(0,ce.jsx)("label",{className:W,children:"Currency"}),(0,ce.jsx)(re,{selectedCurrency:g,handleSelectedCurrency:function(e){w(e),ae(!0)}})]}),(0,ce.jsxs)(r.ZP,{className:F,item:!0,xs:4.5,children:[(0,ce.jsx)("label",{className:W,children:"Initial Balance"}),(0,ce.jsx)(d.Z,{variant:"standard",className:D,value:K>0?K:"",type:"number",placeholder:"0",onChange:function(e){X(+e.target.value),ae(!0)},InputProps:{inputProps:{min:0},disableUnderline:!0}})]})]}),(0,ce.jsxs)(o.Z,{className:H,children:[(0,ce.jsx)(u.Z,{control:(0,ce.jsx)(x.Z,{onChange:function(){$((function(e){return!e})),ae(!0)},value:q}),label:"Excluded from Total"}),(0,ce.jsx)(h.Z,{className:G,children:'Ignore this wallet and its balance in the "Total" mode'})]}),(0,ce.jsxs)(r.ZP,{className:z,children:[v===me.dm&&(0,ce.jsx)(_.Z,{className:O,onClick:f,children:"Cancel"}),(0,ce.jsx)(_.Z,{disabled:!se,className:se?R:(0,_e.Z)(R,V),onClick:function(){n({currency:g.name,imageId:S.id,isTotalExcluded:q,initialBalance:K,name:y})},children:"Save"})]})]})})})}}}]);
//# sourceMappingURL=48.88451448.chunk.js.map