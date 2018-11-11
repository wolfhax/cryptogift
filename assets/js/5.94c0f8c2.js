(window.webpackJsonp=window.webpackJsonp||[]).push([[5,10],{123:function(t,e,a){"use strict";a.r(e);var r={name:"GiftBox",props:{gift:{type:Object,default:{}}}},s=a(4),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"shadow-lg border-0 rounded-0",attrs:{"no-body":""}},[a("b-card-body",[a("h5",[t._v("Dear "+t._s(t.gift.content.receiver)+",")]),t._v(" "),a("p",{staticClass:"card-text pt-4 pb-3"},[t._v(t._s(t.gift.content.message))]),t._v(" "),a("h6",[t._v(t._s(t.gift.content.sender))]),t._v(" "),a("small",[t._v(t._s(t.gift.formattedDate))])]),t._v(" "),t.gift.amount>0&&t.gift.purchaser!==t.gift.beneficiary?a("b-card-footer",[a("small",{staticClass:"text-muted"},[t._v("\n            You received "),a("strong",[t._v(t._s(t.gift.amount)+" ETH")]),t._v(" at "),a("a",{attrs:{href:t.gift.beneficiaryLink,target:"_blank"}},[t._v(t._s(t.gift.beneficiary))])])]):t._e(),t._v(" "),a("b-card-img",{staticClass:"rounded-0",attrs:{src:t.$withBase("assets/images/cryptogift-header.jpg"),alt:"CryptoGift",bottom:""}})],1)},[],!1,null,null,null);o.options.__file="GiftBox.vue";e.default=o.exports},196:function(t,e,a){"use strict";a.r(e);var r={name:"About",components:{GiftBox:a(123).default},data:function(){return{gift:{loaded:!0,visible:!0,id:0,amount:3,content:{sender:"Luigi",receiver:"Mario",message:"You may be getting older but at least I still look great! Happy birthday best friend!"},formattedDate:(new Date).toLocaleString(),purchaser:"0x0000000000000000000000000000000000000000",beneficiary:"0x8888888888888888888888888888888888888888",beneficiaryLink:"https://etherscan.io/address/0x8888888888888888888888888888888888888888#internaltx",style:1}}}},s=a(4),o=Object(s.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",[a("b-col",{attrs:{lg:"8","offset-lg":"2"}},[a("b-alert",{attrs:{show:"",variant:"info"}},[t._v("👇 below is how a CryptoGift looks like.")])],1),t._v(" "),a("b-col",{staticClass:"mb-3",attrs:{lg:"8","offset-lg":"2"}},[a("gift-box",{attrs:{gift:t.gift}})],1),t._v(" "),a("b-col",{attrs:{lg:"8","offset-lg":"2"}},[a("b-card",{staticClass:"shadow-lg",attrs:{"no-body":""}},[a("b-card-body",[a("p",{staticClass:"card-text"},[t._v("\n                    A CryptoGift is an ERC721 Collectible or NFT Token to store a message into the Ethereum Blockchain."),a("br"),t._v("\n                    Send Ethereum to a friend for birthday, or send a love message. Crypt and make it eternal."),a("br"),a("br"),t._v("\n                    Choose your and your receiver name, write an awesome message, decide how many ETH do you want to Gift (also zero) and\n                    sign yor Gift using "),a("a",{attrs:{href:"https://metamask.io/",target:"_blank"}},[t._v("MetaMask")]),t._v("."),a("br"),t._v("\n                    Copy and share gift link and encryption key with your receiver. Only who hold the key can decrypt your message.\n                ")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n                    Make your Gift unique on the Blockchain!\n                ")]),t._v(" "),a("b-button",{attrs:{variant:"outline-success",to:"/send.html",size:"lg"}},[t._v("Send a CryptoGift")])],1)],1)],1)],1)},[],!1,null,null,null);o.options.__file="About.vue";e.default=o.exports}}]);