(function(){"use strict";var e={6799:function(e,t,n){var a=n(9242),i=n(3396);const u=(0,i._)("div",{class:"app_bg"},null,-1);function r(e,t,n,a,r,s){const p=(0,i.up)("Header"),o=(0,i.up)("router-view"),d=(0,i.up)("WalletModal"),l=(0,i.up)("a-config-provider");return(0,i.wg)(),(0,i.j4)(l,{theme:e.themes},{default:(0,i.w5)((()=>[u,(0,i.Wm)(p),(0,i.Wm)(o),(0,i.Wm)(d)])),_:1},8,["theme"])}var s=n(7139),p=n.p+"img/logo.0b69ee64.png";const o=e=>((0,i.dD)("data-v-58b60b0e"),e=e(),(0,i.Cn)(),e),d={class:"head_box"},l={class:"head_left"},y=o((()=>(0,i._)("a",{class:"head_left_logo",href:"https://oortswap.com/"},[(0,i._)("div",{class:"logo_box"},[(0,i._)("img",{style:{width:"100%"},src:p,alt:""})])],-1))),m={class:"tab_box"},c=o((()=>(0,i._)("a",{href:"https://oortswap.com/"},"Home",-1))),f=o((()=>(0,i._)("a",{href:"https://app.oortswap.com/#/swap"},"Swap",-1))),w=o((()=>(0,i._)("a",{href:"https://app.oortswap.com/#/pool"},"Pools",-1))),b=o((()=>(0,i._)("a",{href:"https://huygens.ccnswap.org/#/swap"},"Ccnswap",-1))),T={class:"head_right"},h=["src"];function v(e,t,u,r,p,o){const v=(0,i.up)("router-link"),M=(0,i.up)("a-button");return(0,i.wg)(),(0,i.iD)("div",d,[(0,i._)("div",l,[y,(0,i._)("div",m,[c,f,w,(0,i.Wm)(v,{class:"menu_box","active-class":"active_menu",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Bridge")])),_:1}),b])]),(0,i._)("div",T,[(0,i.Wm)(M,{class:"head_right_btn",size:e.isMobile?"middle":"large",onClick:e.login},{default:(0,i.w5)((()=>[(0,i.wy)((0,i._)("img",{src:"MetaMask"==e.walletType?n(9685):n(4842),alt:""},null,8,h),[[a.F8,""!=e.walletType]]),(0,i.Uk)(" "+(0,s.zw)(e.address&&e.address.length>0?e.address:"Connect to a Wallet"),1)])),_:1},8,["size","onClick"])])])}var M=n(65),A=n(4870),g={name:"Header",setup(){const e=(0,M.oR)(),t=(0,A.qj)({address:(0,i.Fl)((()=>e.state.display_wallet_address)),walletType:(0,i.Fl)((()=>e.state.wallet_type)),isMobile:(0,i.Fl)((()=>e.state.isMobile))}),n={login(){e.dispatch("showWalletModal",!0)}};return{...(0,A.BK)(t),...n}}},x=n(89);const C=(0,x.Z)(g,[["render",v],["__scopeId","data-v-58b60b0e"]]);var k=C;const _={class:"modal_content"},O=["onClick"],I=["src"];function F(e,t,n,a,u,r){const p=(0,i.up)("a-modal");return(0,i.wg)(),(0,i.j4)(p,{centered:"",width:"420px",open:e.showLink,"onUpdate:open":t[0]||(t[0]=t=>e.showLink=t),title:"Connect to a wallet",footer:null,class:"link_modal_div",onCancel:e.handleCancel},{default:(0,i.w5)((()=>[(0,i._)("div",_,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.list,((t,n)=>((0,i.wg)(),(0,i.iD)("div",{class:"modal_item flex_row_space_between",key:n,onClick:n=>e.saveLinkWallet(t)},[(0,i._)("p",null,(0,s.zw)(t.name),1),(0,i._)("img",{src:t.icon,alt:""},null,8,I)],8,O)))),128))])])),_:1},8,["open","onCancel"])}var W=(0,i.aZ)({name:"WalletModal",setup(){const e=(0,M.oR)(),t=(0,i.Fl)({get(){return"828"==e.state.currnetChainId?a.list=[{name:"AleWallet",icon:n(4842)}]:a.list=[{name:"MetaMask",icon:n(9685)}],e.state.showLink},set(t){e.dispatch("showWalletModal",t)}}),a=(0,A.qj)({list:[]}),u={handleCancel(){e.dispatch("showWalletModal",!1)},saveLinkWallet(t){e.dispatch("showWalletModal",!1),e.dispatch("connectWallet",e.state.currnetChainId)}};return{showLink:t,...(0,A.BK)(a),...u}}});const Z=(0,x.Z)(W,[["render",F]]);var S=Z,B=n(4476),E={name:"App",components:{Header:k,WalletModal:S},setup(){const e=(0,M.oR)(),t=(0,A.qj)({screenWidth:null,themes:{token:{colorPrimary:"rgb(0, 88, 255)"}}});return(0,i.YP)((()=>t.screenWidth),(t=>{t<767?e.dispatch("setismobile",!0):e.dispatch("setismobile",!1)})),(0,i.bv)((()=>{window.notification=B.Z,t.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{t.screenWidth=document.body.clientWidth})()})),{...(0,A.BK)(t)}}};const R=(0,x.Z)(E,[["render",r]]);var U=R,P=n(2483);const N=[{path:"/",name:"bridge",component:()=>n.e(443).then(n.bind(n,4367))}],D=(0,P.p7)({history:(0,P.PO)("/"),routes:N});var L=D,j=n(4749),H=n(2201),Y=(0,M.MT)({state:{currnetChainId:"56",chainId:"",display_wallet_address:null,wallet_address:null,web3:null,provider:null,contract:null,isMobile:!1,wallet_type:"",showLink:!1},getters:{},mutations:{updateWallet(e,t){e.chainId=t.chainId,e.provider=t.provider,e.web3=new j.ZPm(t.provider),e.wallet_type=t.type,e.wallet_address=t.address;let n=t.address;if(n){let e=n.substr(0,5),t=n.substr(n.length-5);n=e+"..."+t}e.display_wallet_address=n},setIsMobile(e,t){e.isMobile=t},setShowLink(e,t){e.showLink=t},setCurrnetChainId(e,t){e.currnetChainId=t.chainId}},actions:{async switchChainid({commit:e},t){e("setCurrnetChainId",{chainId:t})},async connectWallet({commit:e},t){try{if("828"==t){if(!window.aleereum)return void window.open("https://www.alewallet.app/");let n=window.aleereum;n.on("on_account_change",(async function(a){3!=n.networkId?n.switchNetwork(3):e("updateWallet",{provider:n,address:n.account,type:"Ale",chainId:t})})),n.on("on_networkId_change",(async function(e){3!=n.networkId&&await n.switchNetwork(3)})),n.isConnected&&!n.islocked||await n.connect(),3!=n.networkId?await n.switchNetwork(3):e("updateWallet",{provider:n,address:n.account,type:"Ale",chainId:t})}else{if(!window.ethereum)return void window.open("https://metamask.io");const n=this,a=window.ethereum,i=H.Z.getNetwork(t),u=await new j.ZPm(a).eth.net.getId()+"";if(a.on("accountsChanged",(function(e){e!=n.state.wallet_address&&location.reload()})),a.on("networkChanged",(async function(n){if(n==t){await a.enable();let n=await a.request({method:"eth_requestAccounts"});e("updateWallet",{provider:a,address:n[0],type:"MetaMask",chainId:t})}})),u!=t)await a.request({method:"wallet_addEthereumChain",params:[i]}).catch((e=>{}));else{await a.enable();let n=await a.request({method:"eth_requestAccounts"});e("updateWallet",{provider:a,address:n[0],type:"MetaMask",chainId:t})}}}catch(n){alert(n),console.log(n),window.notification["error"]({message:"Error",description:"Connect wallet error"})}},showWalletModal({commit:e},t){e("setShowLink",t)},setismobile({commit:e},t){e("setIsMobile",t)}},modules:{}}),z=n(3718);n(1849);(0,a.ri)(U).use(Y).use(L).use(z.ZP).mount("#app")},2693:function(e,t,n){var a=n(6389),i=n(1097),u=n(5743),r=n.n(u);class s{stringToHex(e){for(var t="",n=0;n<e.length;n++)""==t?t=e.charCodeAt(n).toString(16):t+=e.charCodeAt(n).toString(16);return t="0x"+t,t}minus(e,t,n){try{return parseFloat((0,a.Z)(e).minus(t).toFixed(n))+""}catch(i){return""}}minusPow(e,t,n){try{return parseFloat((0,a.Z)(e).minus((0,a.Z)(10).pow(t)).toFixed(n))+""}catch(i){return""}}times(e,t,n){try{return parseFloat((0,a.Z)(e).times(t).toFixed(n,a.Z.roundDown))+""}catch(i){return""}}timesPow(e,t,n){try{return parseFloat((0,a.Z)(e).times((0,a.Z)(10).pow(t)).toFixed(n,a.Z.roundDown))+""}catch(i){return""}}div(e,t,n){try{return parseFloat((0,a.Z)(e).div(t).toFixed(n))+""}catch(i){return""}}divPow(e,t,n){try{return parseFloat((0,a.Z)(e).div((0,a.Z)(10).pow(t)).toFixed(n))+""}catch(i){return""}}numberToHex(e){try{return(0,i.Z)(e).toString(16)}catch(t){return""}}gt(e,t){try{return(0,a.Z)(e).gt((0,a.Z)(t))}catch(n){return""}}gte(e,t){try{return(0,a.Z)(e).gte((0,a.Z)(t))}catch(n){return""}}formatter(e){return r()(e).format("YYYY-MM-DD HH:mm:ss")}}t.Z=new s},2201:function(e,t,n){var a=n(4749),i=n(2693);const u={56:{chainId:"0x38",chainName:"BNBChain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc.meowrpc.com"],blockExplorerUrls:["https://bscscan.com/"]},970:{chainId:"0x3ca",chainName:"OORT-Mainnet",nativeCurrency:{name:"OORT",symbol:"OORT",decimals:18},rpcUrls:["https://mainnet-rpc.oortech.com"],blockExplorerUrls:["https://mainnet-scan.oortech.com/"]},828:{chainId:"0x2",chainName:"OORT-Huygens",nativeCurrency:{name:"CCN",symbol:"CCN",decimals:18},rpcUrls:["https://huygens-rpc.oortech.com"],blockExplorerUrls:["https://huygens-scan.oortech.com/"]}},r={56:{contract:"0x55d398326f99059fF775485246999027B3197955",decimals:18},970:{contract:"0xB80f7Bf6Dfff705729ADDEe32d1eb9CA8d2649C7",decimals:18},828:{contract:"0xaFCa1Db8295a969c7441c748A457568D9A20Fd49",decimals:18}},s={56:"0xadA211719c3FfC50BC11264B6789d91db2F0b0a0",970:"0x31145A583Fb429de218B6F1A79765451a888D316",828:"0xF7b1D558b88BAF1f8AfA85b8085C37Ca3f49589b"},p={56:"",970:"0x174876e800",828:""},o={56:[{inputs:[{internalType:"address",name:"_manager",type:"address"},{internalType:"address",name:"_usdt",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"orderno",type:"uint256"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"receiveAmt",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feeAmt",type:"uint256"},{indexed:!1,internalType:"uint256",name:"chainId",type:"uint256"}],name:"CallBridge",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"no",type:"uint256"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"chainId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"PayBridge",type:"event"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"admins",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"callBridge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"fee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeDenominator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"orderno",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"orders",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"receiveAmt",type:"uint256"},{internalType:"uint256",name:"feeAmt",type:"uint256"},{internalType:"uint256",name:"time",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"uint256",name:"no",type:"uint256"},{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"payBridge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"uint256",name:"",type:"uint256"}],name:"pays",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"time",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_admin",type:"address"},{internalType:"bool",name:"state",type:"bool"}],name:"setAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_fee",type:"uint256"}],name:"setFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_manager",type:"address"}],name:"setManager",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_minAmount",type:"uint256"}],name:"setMinAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalOrderAmt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalOrderFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalPayAmt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"widthdraw",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"widthdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],970:[{inputs:[{internalType:"address",name:"_usdt",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"orderno",type:"uint256"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"receiveAmt",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feeAmt",type:"uint256"},{indexed:!1,internalType:"uint256",name:"chainId",type:"uint256"}],name:"CallBridge",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderno",type:"uint256"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"MintToken",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"admins",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"callBridge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"fee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeDenominator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"no",type:"uint256"},{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mintToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"mints",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"time",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"orderno",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"orders",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"receiveAmt",type:"uint256"},{internalType:"uint256",name:"feeAmt",type:"uint256"},{internalType:"uint256",name:"time",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_admin",type:"address"},{internalType:"bool",name:"state",type:"bool"}],name:"setAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_fee",type:"uint256"}],name:"setFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_minAmount",type:"uint256"}],name:"setMinAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalOrderAmt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalOrderFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalPayAmt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"widthdraw",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"widthdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}],828:[{inputs:[{internalType:"address",name:"_usdt",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"uint256",name:"orderno",type:"uint256"},{indexed:!0,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint256",name:"receiveAmt",type:"uint256"},{indexed:!1,internalType:"uint256",name:"feeAmt",type:"uint256"},{indexed:!1,internalType:"uint256",name:"chainId",type:"uint256"}],name:"CallBridge",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"orderno",type:"uint256"},{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"MintToken",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"USDT",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"admins",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"chainId",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"callBridge",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"fee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"feeDenominator",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"minAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"no",type:"uint256"},{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mintToken",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"mints",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"time",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"orderno",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"orders",outputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint256",name:"receiveAmt",type:"uint256"},{internalType:"uint256",name:"feeAmt",type:"uint256"},{internalType:"uint256",name:"time",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_admin",type:"address"},{internalType:"bool",name:"state",type:"bool"}],name:"setAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_fee",type:"uint256"}],name:"setFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_minAmount",type:"uint256"}],name:"setMinAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalOrderAmt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalOrderFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalPayAmt",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"widthdraw",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"token",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"widthdrawToken",outputs:[],stateMutability:"nonpayable",type:"function"}]},d=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"value",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"minter",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_minter",type:"address"}],name:"setMinter",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"}];class l{getGass(e){return p[e]}getBridgeContractAddress(e){return s[e]}getUsdtContractAddress(e){return r[e]}getUsdtBalance(e,t){const n=r[e].decimals;return i.Z.divPow(t,n,4)}getUsdtContract(e){const t=r[e].contract,n=u[e].rpcUrls[0],i=new a.ZPm(n);return new i.eth.Contract(d,t)}getUsdtContractW(e){const t=r[e].contract,n=new a.ZPm(window.ethereum);return new n.eth.Contract(d,t)}getBridgeContractW(e){const t=s[e],n=o[e],i=new a.ZPm(window.ethereum);return new i.eth.Contract(n,t)}getNetwork(e){return u[e]}}t.Z=new l},4842:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQoSURBVHgBzZrNThNRFMdP0fqBUQohBkm0Q9AYTZQSN24MZeXGxPYJqE8APgHlCcQnAJ4ASNy4kRI2bghFF2oCttUIGkAKSlEavN7/nZlmKEPn3vmiv+QwdDrTnnPPueece6cR8gHGWIwfUlz6uGhcElxihpgUDclzWeaSi0QiRTotoDSXUS5zzD1LXDJcNAoLi+LbzF8mAjckIMXrGSW/wcgw3d1hUWB+eYN/0BALftTtwHemyAtMD5nTxl1IseZQ3uREIyInKA/XTZMCO3/ztPF7nvarRdrjUv1XpspBUbzXek4Tx9j5BF2MatR95Sm1RjVSJMPrxlT9yYiN8ho/LNHRImQLlFzZekmrW+PifxXaLiSot2OE4rEh2VvwBf31xc/OgALp1bQhUPzjRlZZ8XpgxP2uF7KX57kB/dYTLdYXRqxp5MCHjTF6/2PEs/Jg9ec4LX57Jnt5guuYtZ6oecAInYLTJ2xWcrRQHCS/udc1Tjc7hmUuxaj1cE+I0bN6QCpdrfLQCQIRjodSHsXcHDFfCAOM0c/I3H1w6D1s7IDy8K4kw0zvgGseSMreaabERrTxdHkjlhFy7XJKOmWu/ZolSWpeOGuckAo+Uzk7oGQvj+F4e4aiLccz8Lvvz8WEbcTOnzwpMIA/EdnJawJXv/ncTxVerACUvXN1VKRDp/tefWpveE30TIye3N4mBdrhgaTKHfiSh9enaaE0KJR/pM1JhYhMyq2qz68UDEio3oUq+viW7jS7cBHKcIUREuX9ZdFelMqTFAAJGNBHLrBTHFlkfXeWT8aZWogFjAYDNPLIFz66aC3Q0IVMnycDMMpvv6ZVs4efxM6SS6A0Wgo/+iEPxFrIBRj5IJR3sUYQhQxaOPb+VmSUxyRHUetsHRBZa3MvR4tr0l2nNMoGYMI6ZRiMZH19QFsRgAFFhJDSDCyVpxyvkS1uPiAMKKnc4ZQqES5ulZdpFOtYVvIASr1TuUerESJ5GDAje7VM1kF6rR6GllpzLcbSLEc+AeWxZq4ngNYCC/yiWcjmSaIrRWwjRJxGGH0/slXnpWQtpNZ3nR2t6DmxthWLemN5hvbSMYBRAxSWfkpggMwuVwIs7EUWIiOMpFbrGNUmYNLc4LJuq0h5AW5+vdIT2ERN32Uyl/WYBtR6IVkvIKYfdE9QUEhM9jHr9uKRZo6/kSWJuoCdBiwrQ6q2VoqGjjXsutE06f1RQ2AEWoY473FCAjod2xI8aXs9ww/ScYICh25zszLP18B6IcM589jIU2ZqhsTbhholiTQffemiCyOyrHnIkhtYcxiRJS/wD0ix03vIlyE/YPpj1gILDzzS1chvWPAhhVHPUpAw3RuTzF+E4szYMg8FwxD8UMPLE/w5r4pHyAeYHq9J0vdZzZ/caJZLyoagypeM44z5mMgL/wHZpa+Z5eEeCAAAAABJRU5ErkJggg=="},9685:function(e,t,n){e.exports=n.p+"img/metamask.bfcdc2a8.png"}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var u=t[a]={exports:{}};return e[a].call(u.exports,u,u.exports,n),u.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,u){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],u=e[d][2];for(var s=!0,p=0;p<a.length;p++)(!1&u||r>=u)&&Object.keys(n.O).every((function(e){return n.O[e](a[p])}))?a.splice(p--,1):(s=!1,u<r&&(r=u));if(s){e.splice(d--,1);var o=i();void 0!==o&&(t=o)}}return t}u=u||0;for(var d=e.length;d>0&&e[d-1][2]>u;d--)e[d]=e[d-1];e[d]=[a,i,u]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.3d1059d8.js"}}(),function(){n.miniCssF=function(e){return"css/about.7f65fa9e.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="OORTSwap:";n.l=function(a,i,u,r){if(e[a])e[a].push(i);else{var s,p;if(void 0!==u)for(var o=document.getElementsByTagName("script"),d=0;d<o.length;d++){var l=o[d];if(l.getAttribute("src")==a||l.getAttribute("data-webpack")==t+u){s=l;break}}s||(p=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+u),s.src=a),e[a]=[i];var y=function(t,n){s.onerror=s.onload=null,clearTimeout(m);var i=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(y.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=y.bind(null,s.onerror),s.onload=y.bind(null,s.onload),p&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,a,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css";var r=function(n){if(u.onerror=u.onload=null,"load"===n.type)a();else{var r=n&&n.type,s=n&&n.target&&n.target.href||t,p=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+s+")");p.name="ChunkLoadError",p.code="CSS_CHUNK_LOAD_FAILED",p.type=r,p.request=s,u.parentNode&&u.parentNode.removeChild(u),i(p)}};return u.onerror=u.onload=r,u.href=t,n?n.parentNode.insertBefore(u,n.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var i=n[a],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===e||u===t))return i}var r=document.getElementsByTagName("style");for(a=0;a<r.length;a++){i=r[a],u=i.getAttribute("data-href");if(u===e||u===t)return i}},a=function(a){return new Promise((function(i,u){var r=n.miniCssF(a),s=n.p+r;if(t(r,s))return i();e(a,s,null,i,u)}))},i={143:0};n.f.miniCss=function(e,t){var n={443:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=a(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,a){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var u=new Promise((function(n,a){i=e[t]=[n,a]}));a.push(i[2]=u);var r=n.p+n.u(t),s=new Error,p=function(a){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var u=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+u+": "+r+")",s.name="ChunkLoadError",s.type=u,s.request=r,i[1](s)}};n.l(r,p,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,u,r=a[0],s=a[1],p=a[2],o=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(p)var d=p(n)}for(t&&t(a);o<r.length;o++)u=r[o],n.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return n.O(d)},a=self["webpackChunkOORTSwap"]=self["webpackChunkOORTSwap"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6799)}));a=n.O(a)})();
//# sourceMappingURL=app.3d851f6e.js.map