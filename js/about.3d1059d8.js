"use strict";(self["webpackChunkOORTSwap"]=self["webpackChunkOORTSwap"]||[]).push([[443],{4367:function(e,a,n){n.r(a),n.d(a,{default:function(){return N}});var o=n(3396),t=n(7139),l=n.p+"img/arrow-down-grey.0bc64643.svg";const r=e=>((0,o.dD)("data-v-4fb4fd2e"),e=e(),(0,o.Cn)(),e),s={class:"bridge_box"},c={class:"exchange_box"},i=r((()=>(0,o._)("div",{class:"exchange_top"},[(0,o._)("p",null,"Bridge")],-1))),d={class:"exchange_bottom"},m={class:"exchange_item_box"},f={class:"exchange_item_top flex_row_space_between"},h={class:"flex_row",style:{cursor:"pointer"}},u=["src"],w=r((()=>(0,o._)("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",class:"sc-dyGzUR fjZPDO"},[(0,o._)("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#000000"})],-1))),p={class:"flex_row"},g=["src"],_={style:{"font-size":"14px",color:"rgb(0, 0, 0)","padding-left":"5px"}},k=r((()=>(0,o._)("img",{style:{},src:l,alt:""},null,-1))),T={class:"exchange_item_box"},b={class:"exchange_item_top flex_row_space_between"},x={class:"flex_row",style:{cursor:"pointer"}},v=["src"],y=r((()=>(0,o._)("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",class:"sc-dyGzUR fjZPDO"},[(0,o._)("path",{d:"M0.97168 1L6.20532 6L11.439 1",stroke:"#000000"})],-1))),C={class:"flex_row"},B=["src"],I={style:{"font-size":"14px",color:"rgb(0, 0, 0)","padding-left":"5px"}};function U(e,a,n,l,r,U){const Z=(0,o.up)("a-button"),D=(0,o.up)("a-menu-item"),W=(0,o.up)("a-menu"),z=(0,o.up)("a-dropdown"),V=(0,o.up)("a-input"),O=(0,o.up)("a-col"),S=(0,o.up)("a-row");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",c,[i,(0,o._)("div",d,[(0,o.Wm)(S,{align:"middle",justify:"center",gutter:[0,12]},{default:(0,o.w5)((()=>[(0,o.Wm)(O,{span:24,order:e.fromAndTo?3:1},{default:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o._)("div",f,[(0,o._)("h5",null,[(0,o.Uk)("From"),(0,o._)("span",null,(0,t.zw)(e.fromToken.chainName),1)]),(0,o._)("p",null,(0,t.zw)("Balance: "+e.fromToken.balance),1)]),(0,o.Wm)(V,{class:"exchange_item_input",size:"large",value:e.fromValue,"onUpdate:value":a[0]||(a[0]=a=>e.fromValue=a),placeholder:"0.0",bordered:!1,"max-length":50,onkeyup:e.fromValue=e.fromValue.match(/\d+(\.\d{0,8})?/)?e.fromValue.match(/\d+(\.\d{0,8})?/)[0]:"",onChange:e.onChange},{suffix:(0,o.w5)((()=>[(0,o.Wm)(Z,{type:"text",onClick:e.onFromMax},{default:(0,o.w5)((()=>[(0,o.Uk)("Max")])),_:1},8,["onClick"]),(0,o.Wm)(z,{trigger:["click"]},{overlay:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.fromData,(a=>((0,o.wg)(),(0,o.j4)(D,{onClick:n=>e.onFromCheck(a)},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o._)("img",{style:{width:"20px",height:"20px","border-radius":"50%"},src:a.icon,alt:""},null,8,g),(0,o._)("h4",_,(0,t.zw)(a.name)+"("+(0,t.zw)(a.chainName)+")",1)])])),_:2},1032,["onClick"])))),256))])),_:1})])),default:(0,o.w5)((()=>[(0,o._)("div",h,[(0,o._)("img",{src:e.fromToken.icon,alt:""},null,8,u),(0,o._)("h4",null,(0,t.zw)(e.fromToken.name),1),w])])),_:1})])),_:1},8,["value","onkeyup","onChange"])])])),_:1},8,["order"]),(0,o.Wm)(O,{span:24,order:2,class:"flex_column"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{type:"text",shape:"circle",onClick:e.onSwitch},{default:(0,o.w5)((()=>[k])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(O,{span:24,order:e.fromAndTo?1:3},{default:(0,o.w5)((()=>[(0,o._)("div",T,[(0,o._)("div",b,[(0,o._)("h5",null,[(0,o.Uk)("To"),(0,o._)("span",null,(0,t.zw)(e.toToken.chainName),1)]),(0,o._)("p",null,(0,t.zw)("Balance: "+e.toToken.balance),1)]),(0,o.Wm)(V,{class:"exchange_item_input",size:"large",value:e.toValue,"onUpdate:value":a[1]||(a[1]=a=>e.toValue=a),placeholder:"0.0",bordered:!1,disabled:""},{suffix:(0,o.w5)((()=>[(0,o.Wm)(z,{trigger:["click"]},{overlay:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.toData,(a=>((0,o.wg)(),(0,o.j4)(D,{onClick:n=>e.onToCheck(a)},{default:(0,o.w5)((()=>[(0,o._)("div",C,[(0,o._)("img",{style:{width:"20px",height:"20px","border-radius":"50%"},src:a.icon,alt:""},null,8,B),(0,o._)("h4",I,(0,t.zw)(a.name)+"("+(0,t.zw)(a.chainName)+")",1)])])),_:2},1032,["onClick"])))),256))])),_:1})])),default:(0,o.w5)((()=>[(0,o._)("div",x,[(0,o._)("img",{src:e.toToken.icon,alt:""},null,8,v),(0,o._)("h4",null,(0,t.zw)(e.toToken.name),1),y])])),_:1})])),_:1},8,["value"])])])),_:1},8,["order"])])),_:1}),e.address&&e.address.length>0?((0,o.wg)(),(0,o.j4)(Z,{key:0,block:"",class:"exchange_btn",onClick:e.onSwap,loading:e.swapLoad,disabled:""==e.fromValue||""==e.toValue,type:"primary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)(""!=e.fromValue&&""!=e.toValue?e.btnTitle:"Enter an amount"),1)])),_:1},8,["onClick","loading","disabled"])):((0,o.wg)(),(0,o.j4)(Z,{key:1,block:"",class:"exchange_btn",onClick:e.login,type:"default"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,t.zw)("Connect Wallet"))])),_:1},8,["onClick"]))])])])}n(560);var Z=n(2693),D=n(4870),W=n(65),z=n(2201),V=(0,o.aZ)({name:"Bridge",setup(){const e=(0,W.oR)(),a=(0,D.qj)({address:(0,o.Fl)((()=>e.state.wallet_address)),swapLoad:!1,fromValue:"",toValue:"",btnTitle:"Swap",fromToken:{icon:n(782),name:"USDT",chainId:"56",chainName:"BNB",balance:"~"},toToken:{icon:n(6911),name:"USDT",chainId:"970",chainName:"OORT",balance:"~"},fromData:[{icon:n(782),name:"USDT",chainId:"56",chainName:"BNB",balance:"~"},{icon:n(6911),name:"USDT",chainId:"970",chainName:"OORT",balance:"~"}],toData:[{icon:n(6911),name:"USDT",chainId:"970",chainName:"OORT",balance:"~"}]});(0,o.YP)((()=>[e.state.wallet_address]),(()=>t.refresh())),(0,o.bv)((()=>{t.refresh()}));const t={async refreshFromBalance(){if(a.fromToken&&e.state.wallet_address){const n=a.fromToken.chainId,o=z.Z.getUsdtContract(n);let t=await o.methods.balanceOf(e.state.wallet_address).call();a.fromToken.balance=z.Z.getUsdtBalance(n,t)}},async refreshToBalance(){if(a.toToken&&e.state.wallet_address){const n=a.toToken.chainId,o=z.Z.getUsdtContract(a.toToken.chainId);let t=await o.methods.balanceOf(e.state.wallet_address).call();a.toToken.balance=z.Z.getUsdtBalance(n,t)}},async refresh(){e.state.wallet_address&&(t.refreshFromBalance(),t.refreshToBalance())},async onFromMax(){a.fromValue=a.fromToken.balance,t.onChange()},async onFromCheck(n){a.fromToken=n,e.dispatch("switchChainid",a.fromToken.chainId);const o=a.fromData,l=Array();if("56"==a.fromToken.chainId)for(var r=0;r<o.length;r++){let e=o[r];e.chainId!=a.fromToken.chainId&&l.push({...e})}else l.push({...a.fromData[0]});a.toData=l,a.fromToken.chainId==a.toToken.chainId&&(a.toToken=a.toData[0]),t.refreshFromBalance(),t.refreshToBalance(),e.state.chainId==a.fromToken.chainId||e.dispatch("showWalletModal",!0)},async onToCheck(e){a.toToken=e,t.refreshToBalance()},async login(){e.dispatch("showWalletModal",!0)},async onChange(){a.toValue=Z.Z.times(a.fromValue,"0.99",4)},async onSwap(){try{if(e.state.chainId!=a.fromToken.chainId)return void e.dispatch("showWalletModal",!0);a.swapLoad=!0;const n=a.fromToken.chainId,o=e.state.wallet_address,l=z.Z.getBridgeContractAddress(n),r=z.Z.getUsdtContract(n),s=z.Z.getGass(n),c=await r.methods.balanceOf(o).call(),i=Z.Z.timesPow(a.fromValue,18,0),d=await z.Z.getBridgeContractW(n).methods.minAmount().call();if(!Z.Z.gte(i,d))return a.swapLoad=!1,void window.notification["error"]({message:"Error",description:"Minimum amount "+Z.Z.divPow(d,18,4)});if(Z.Z.gt(i,c))return a.swapLoad=!1,void window.notification["error"]({message:"Error",description:"Insufficient balance"});const m=await r.methods.allowance(o,l).call();Z.Z.gt(i,m)&&(a.btnTitle="Approve",await z.Z.getUsdtContractW(n).methods.approve(l,i).send({from:o,gasPrice:s})),a.btnTitle="Swap",await z.Z.getBridgeContractW(n).methods.callBridge(a.toToken.chainId,i).send({from:o,gasPrice:s}),a.swapLoad=!1,window.notification["success"]({message:"Success",description:""}),t.refreshFromBalance(),t.refreshToBalance()}catch(n){a.btnTitle="Swap",a.swapLoad=!1,window.notification["error"]({message:"Error",description:JSON.stringify(n)})}}};return{...(0,D.BK)(a),...t}}}),O=n(89);const S=(0,O.Z)(V,[["render",U],["__scopeId","data-v-4fb4fd2e"]]);var N=S},782:function(e,a,n){e.exports=n.p+"img/bnb-usdt.10ea85dc.png"},6911:function(e,a,n){e.exports=n.p+"img/oort-usdt.11783e26.png"}}]);
//# sourceMappingURL=about.3d1059d8.js.map