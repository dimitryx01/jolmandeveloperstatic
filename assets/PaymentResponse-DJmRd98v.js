import{c as t,b as p,a as x,d as y,j as e,B as u,L as h}from"./index-CoBtywNP.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=t("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a=t("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),k=["approved","rejected","failed","voided","processing","pending"],b={approved:{Icon:N,className:"text-green-500"},rejected:{Icon:a,className:"text-red-500"},failed:{Icon:a,className:"text-red-500"},voided:{Icon:a,className:"text-red-500"},processing:{Icon:l,className:"text-amber-500"},pending:{Icon:l,className:"text-amber-500"},unknown:{Icon:g,className:"text-muted-foreground"}};function j(){const{t:s}=p(),{lang:m}=x(),[n]=y(),o=(n.get("bold-tx-status")||"").toLowerCase(),c=k.includes(o)?o:"unknown",r=n.get("bold-order-id"),{Icon:d,className:i}=b[c];return e.jsxs("div",{className:"min-h-screen flex flex-col items-center justify-center px-4 text-center",children:[e.jsx(d,{className:`w-16 h-16 mb-4 ${i}`}),e.jsx("h1",{className:"text-2xl font-bold mb-4",children:s(`paymentResponse.${c}.title`)}),e.jsx("p",{className:"max-w-xl mb-4",children:s(`paymentResponse.${c}.description`)}),e.jsx("p",{className:"max-w-xl text-sm text-muted-foreground mb-2",children:s("paymentResponse.emailNote")}),r&&e.jsxs("p",{className:"text-sm text-muted-foreground",children:[s("paymentResponse.orderLabel"),": ",r]}),e.jsx(u,{asChild:!0,className:"mt-6",children:e.jsx(h,{to:`/${m}`,children:s("paymentResponse.backHome")})})]})}export{j as default};
