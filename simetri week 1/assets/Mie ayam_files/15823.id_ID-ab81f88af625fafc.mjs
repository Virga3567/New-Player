"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[15823],{424181:(e,l,o)=>{var n,i,s,t,a;o.r(l),o.d(l,{default:()=>c});let r={fragment:{argumentDefinitions:n=[{defaultValue:null,kind:"LocalArgument",name:"userId"}],kind:"Fragment",metadata:null,name:"FollowersControllerQuery",selections:[{alias:null,args:i=[{kind:"Variable",name:"user",variableName:"userId"}],concreteType:null,kind:"LinkedField",name:"v3GetUserHandlerQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[s={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"data",plural:!1,selections:[t={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},a={alias:null,args:null,kind:"ScalarField",name:"followerCount",storageKey:null}],storageKey:null}],type:"V3GetUserHandler",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"FollowersControllerQuery",selections:[{alias:null,args:i,concreteType:null,kind:"LinkedField",name:"v3GetUserHandlerQuery",plural:!1,selections:[s,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"data",plural:!1,selections:[t,a,{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],type:"V3GetUserHandler",abstractKey:null}],storageKey:null}]},params:{id:"134b0b580aa92245148296845cace9afb35dc06c14786cdd346a49001d84a14b",metadata:{},name:"FollowersControllerQuery",operationKind:"query",text:null}};r.hash="3f98e2610960d7656d4ab516c46bd7af";let c=r;!function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(r.default||r)},224610:(e,l,o)=>{o.d(l,{HW:()=>t,YW:()=>_,i3:()=>u,o2:()=>d});var n=o(667294),i=o(498490),s=o(785893);let t=660,a={educationId:null,paddingRight:0,zIndex:660};function r(e,l){switch(l.type){case"FOOTER_SET_EDUCATION_ID":let{educationId:o}=l.payload;return{...e,educationId:o};case"FOOTER_SET_PADDING_RIGHT":let{paddingRight:n}=l.payload;return{...e,paddingRight:n};case"FOOTER_SET_Z_INDEX":let{zIndex:i}=l.payload;return{...e,zIndex:i};default:return e}}let{Provider:c,Consumer:d,useHook:_}=(0,i.Z)("footerContext");function u({children:e}){let[l,o]=(0,n.useReducer)(r,a),i=(0,n.useCallback)(e=>o({type:"FOOTER_SET_PADDING_RIGHT",payload:{paddingRight:e}}),[]),t=(0,n.useCallback)(e=>o({type:"FOOTER_SET_EDUCATION_ID",payload:{educationId:e}}),[]),d=(0,n.useCallback)(e=>o({type:"FOOTER_SET_Z_INDEX",payload:{zIndex:e}}),[]),_=(0,n.useMemo)(()=>({...l,setEducationId:t,setPaddingRight:i,setZIndex:d}),[l,t,i,d]);return(0,s.jsx)(c,{value:_,children:e})}},101736:(e,l,o)=>{o.d(l,{Z:()=>p});var n=o(667294),i=o(883119),s=o(803611),t=o(107941),a=o(144326),r=o(297728),c=o(115642),d=o(613756),_=o(785893);let u=new i.Ry(3);function h({anchor:e,children:l,displayOptions:o,onFlyoutDismiss:n}){let s=(0,a.ZP)(),{closeupWithinMasonryEnabled:d}=(0,c.x4)(),{checkExperiment:h}=(0,r.F)(),p=h("sg_dweb_sharesheet_update").anyEnabled?t.b7:void 0;return o?.shownWithinMasonry||o?.shownWithinProfileHeader?(0,_.jsx)(i.mh,{zIndex:o.shownWithinProfileHeader||d&&o?.shownWithinMasonry?u:p,children:(0,_.jsx)(i.xu,{position:o.inModal?"absolute":void 0,top:!!o.inModal||void 0,zIndex:o.inModal?t.b7:void 0,children:(0,_.jsx)(i.J2,{_deprecatedShowCaret:o.showCaret,accessibilityLabel:s.bt("Menu Berbagi", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,forceDirection:o.forceDirection??!1,idealDirection:o.idealDirection??"down",onDismiss:()=>{n()},positionRelativeToAnchor:!1,size:"flexible",children:l})})}):(0,_.jsx)(i.J2,{_deprecatedShowCaret:o?.showCaret,accessibilityLabel:s.bt("Menu Berbagi", "Share Menu", "SendShareController.ShareMenu.accessibilityLabel", undefined, true),anchor:e,forceDirection:o?.forceDirection??!1,idealDirection:o?.idealDirection??"down",onDismiss:()=>{n()},size:"flexible",children:l})}function p({children:e,flyoutDisplayOptions:l,isFlyoutOpen:o,loggingOptions:t,onClick:a,onFlyoutDismiss:r,onToggleFlyout:u,sendObject:p}){let g=(0,n.useRef)(null),{clientTrackingParams:m}=(0,c.x4)(),x=(0,s.Z)();return(0,_.jsxs)(i.xu,{ref:g,dangerouslySetInlineStyle:{__style:{pointerEvents:"auto"}},children:[(0,_.jsx)(i.xu,{children:e({handleSendShareFlyoutButtonClick:()=>{if(x){x();return}u()}})}),o&&(0,_.jsx)(i.xu,{position:"fixed",children:(0,_.jsx)(h,{anchor:g.current,displayOptions:l,onFlyoutDismiss:r,children:(0,_.jsx)(d.Z,{clientTrackingParams:m,component:t.component,element:t.element,onExternalSend:t.onExternalSend,onHide:()=>{a?.(),r()},sendType:p.type,sharedObject:{...p,type:"user"===p.type?"pinner":p.type},viewParameter:t.viewParameter,viewType:t.viewType})})})]})}},527867:(e,l,o)=>{o.d(l,{Z:()=>c});var n=o(883119),i=o(357013),s=o(144326),t=o(240760),a=o(383399),r=o(785893);function c({count:e,onClick:l,variant:o,size:c="300"}){let d=(0,s.ZP)(),{isAuth:_}=(0,a.Z)(),u=e<=0,h={followers:(0,t.nk)(d.nbt(["{{count}} pengikut"], e, "label for n followers", true),{count:(0,r.jsx)(i.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:e||0},"following-count")}),following:(0,t.nk)(d.nbt(["{{count}} mengikuti"], e, "label for n following users", true),{count:(0,r.jsx)(i.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:e||0},"follower-count")})};return _?(0,r.jsx)(n.xu,{"data-test-id":`profile-${o}-count`,display:"inlineBlock",children:(0,r.jsx)(n.iP,{disabled:u,onTap:()=>l(o),children:(0,r.jsx)(n.xv,{inline:!0,size:c,weight:u?"normal":"bold",children:h[o]})})}):(0,r.jsx)(n.xv,{inline:!0,children:h[o]})}},648246:(e,l,o)=>{o.d(l,{Z:()=>s});var n=o(883119),i=o(785893);function s({accessibilityLabel:e,color:l="default",icon:o,info:s}){return(0,i.jsxs)(n.kC,{gap:{row:7,column:0},children:[(0,i.jsx)(n.JO,{accessibilityLabel:e,color:l,icon:o,size:20}),s]})}},539823:(e,l,o)=>{o.d(l,{Z:()=>c});var n=o(883119),i=o(559028),s=o(144326),t=o(461661),a=o(146413),r=o(785893);function c({onTouch:e,size:l="xl",user:o,viewer:c}){let d=(0,s.ZP)(),{image_xlarge_url:_,username:u,avatar_color_index:h}=o??{},p=(0,a.Z)(o),g=(0,t.Z)({viewer:c,user:o})||c.isAuth&&c.isEmployee,m=(0,r.jsx)(i.qE,{color:h,name:u||"",outline:p,size:l,src:_??void 0});return g?(0,r.jsx)(n.iP,{accessibilityLabel:d.bt("Klik untuk membuka kode pin dan berbagi profil", "Click to open pincode and share profile", "AvatarWithPincode.pincodeEnabled.accessibilityLabel", undefined, true),fullWidth:!1,onTap:e,rounding:"circle",children:m}):m}},168857:(e,l,o)=>{o.d(l,{Eo:()=>n,I_:()=>a,Rf:()=>d,TL:()=>u,V1:()=>t,X9:()=>s,cO:()=>i,fk:()=>c,g:()=>_,wc:()=>r});let n=80,i=360,s=640,t=1244,a=488,r=275,c=488,d=80,_=211,u=64},804223:(e,l,o)=>{o.d(l,{Z:()=>k});var n,i=o(167912),s=o(883119),t=o(640498),a=o(602185),r=o(144326),c=o(961754),d=o(750077),_=o(383399),u=o(667294),h=o(573706),p=o(730212),g=o(200008),m=o(410150),x=o(527867),f=o(648246),b=o(146413),w=o(469760),y=o(179735),j=o(785893);let v=(0,y.Z)(()=>Promise.all([o.e(55678),o.e(5910)]).then(o.bind(o,215566)),void 0,"app-www-followersAuthDesktop-FollowersModalContainer"),P=(0,y.Z)(()=>Promise.all([o.e(97270),o.e(51699),o.e(15727)]).then(o.bind(o,591053)),void 0,"app-www-ProfileFollowers-ProfileFollowersModalGraphQL");function z({followersTotalCount:e,followingResource:l,followingTotalCount:o,isAboutDrawerVariant:n,isViewingOwnProfile:i,size:t="300",user:a}){let c=(0,r.ZP)(),d=new URL(window.location.href),_=(()=>{let{isAuthenticated:e}=(0,p.B)(),l=(0,m.HG)();return e&&l})(),{logContextEvent:y}=(0,h.v)(),z=d.pathname.includes("/_followers/")&&_,[C,A]=(0,u.useState)(z?"followers":null),k=()=>{A(null)},S=e=>{A(e),i&&y({event_type:101,view_type:4,view_parameter:3106,component:13056,element:"followers"===e?42:41})},I=(0,b.Z)(a);return(0,j.jsxs)(u.Fragment,{children:[n?(0,j.jsxs)(s.kC,{direction:"column",gap:{row:0,column:6},children:[!!e&&e>=0&&(0,j.jsx)(f.Z,{accessibilityLabel:c.bt("Ikon pengikut", "Followers icon", "profileHeader.followersIcon", undefined, true),icon:"person-add",info:(0,j.jsx)(g.Z,{items:[(0,j.jsx)(x.Z,{count:e,onClick:()=>S("followers"),size:t,variant:"followers"},"followersDisplay"),I?(0,j.jsx)(w.default,{user:a}):null]})}),o>=0&&(0,j.jsx)(f.Z,{accessibilityLabel:c.bt("Ikon mengikuti", "Following icon", "profileHeader.followingIcon", undefined, true),icon:"people",info:(0,j.jsx)(x.Z,{count:o,onClick:()=>S("following"),size:t,variant:"following"})})]}):(0,j.jsx)(g.Z,{items:[e&&e>=0?(0,j.jsx)(x.Z,{count:e,onClick:()=>S("followers"),size:t,variant:"followers"}):null,o>=0?(0,j.jsx)(x.Z,{count:o,onClick:()=>S("following"),size:t,variant:"following"}):null]}),"followers"===C&&(0,j.jsx)(P,{onDismiss:k,totalFollowersCount:e}),"following"===C&&(0,j.jsx)(v,{followersResource:l,onDismiss:k,totalFollowersCount:o,user:a,variant:C})]})}var C=o(461661);function A({isAboutDrawerVariant:e=!1,size:l="300",user:s}){let a=(0,_.Z)(),{id:r}=s,d=void 0!==n?n:n=o(424181),u=(0,i.useLazyLoadQuery)(d,{userId:r}),{following_count:h=0,interest_following_count:p=0}=s,g=u.v3GetUserHandlerQuery?.__typename==="V3GetUserHandler"?u.v3GetUserHandlerQuery.data:null,{followerCount:m,username:x}=g||{},f=(0,C.Z)({user:s,viewer:a}),b=(0,c.Z)({name:"UserFollowingResource",options:{exclude_not_explictly_followed:!!f||void 0,page_size:t.ZP.MAX_FETCH_NUM_FOLLOWERS_PER_PAGE,explicit_following:f,username:x}});return g?(0,j.jsx)(z,{followersTotalCount:m,followingResource:b,followingTotalCount:h-(p??0),isAboutDrawerVariant:e,isViewingOwnProfile:f,size:l,user:s}):null}function k(e){let l=(0,r.ZP)();return(0,j.jsx)(a.Z,{name:"SafeSuspense_ProfileHeader_FollowersController",children:(0,j.jsx)(d.Z,{fallback:(0,j.jsx)(s.xu,{padding:5,children:(0,j.jsx)(s.$j,{accessibilityLabel:l.bt("Memuat jumlah pengikut", "Loading follower counts", "profile.header.followerController", undefined, true),show:!0})}),children:(0,j.jsx)(A,{...e})})})}},651163:(e,l,o)=>{o.d(l,{Z:()=>v});var n=o(667294),i=o(883119),s=o(252071),t=o(823022),a=o(573706),r=o(144326),c=o(619348),d=o(240760),_=o(224610),u=o(241716),h=o(415787),p=o(785893);let g=new i.H3([new i.Ry(_.HW),new i.Ry(u.fe)]),m="/settings/account-settings/",x=({text:e})=>{let l=(0,n.useRef)(null),[o,s]=(0,n.useState)(!1);return o&&(0,h.nP)("client.profile.inspirational_badge_controls.info_tool_tip.rendered",{sampleRate:1}),(0,p.jsxs)(n.Fragment,{children:[o&&(0,p.jsx)(i.J2,{_deprecatedShowCaret:!0,anchor:l.current,color:"deprecatedBlue",idealDirection:"up",onDismiss:()=>s(!1),positionRelativeToAnchor:!1,size:"sm",children:(0,p.jsx)(i.xu,{padding:3,children:(0,p.jsx)(i.xv,{align:"center",color:"inverse",size:"200",children:e})})}),(0,p.jsx)(i.xu,{height:32,width:32,children:(0,p.jsx)(i.iP,{ref:l,fullHeight:!0,fullWidth:!0,onFocus:()=>s(!0),onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:(0,p.jsx)(i.hU,{accessibilityLabel:e,icon:"info-circle",iconColor:"gray",size:"sm"})})})]})},f=({badgeLabel:e,disabled:l,eligible:o,isChecked:n,setSelectedBadge:s})=>{let a=(0,p.jsx)(i.xu,{display:"inlineBlock",children:(0,p.jsx)(i.__,{htmlFor:`inspirational-badge-${e.id}`,children:(0,p.jsx)(i.xv,{overflow:"noWrap",children:(0,p.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:t.QP[0],color:o?"black":"gray"}},display:"inlineBlock",marginEnd:1,marginStart:1,paddingX:2,paddingY:1,rounding:1,children:e.label})})})});return(0,p.jsxs)(i.kC,{alignItems:"start",direction:"row",children:[(0,p.jsx)(i.xu,{display:"inlineBlock",marginBottom:2,marginEnd:2,children:(0,p.jsx)(i.XZ,{checked:n,disabled:l,id:`inspirational-badge-${e.id}`,name:"badges",onChange:({checked:l})=>s(e.id,l)},e.id)}),e.controlsTooltip?(0,p.jsx)(i.u,{idealDirection:"right",text:e.controlsTooltip,children:a}):a]},e.id)};function b({inspirationalSignal:e,onDismiss:l,onSubmit:o}){let{logContextEvent:s}=(0,a.v)(),_=(0,r.ZP)(),u=_.bt("Pelajari selengkapnya", "Learn more", "InspoBadges.learnMore", undefined, true),b=_.bt("Hubungi Kami", "Contact us", "InspoBadgeControls.contactUs", undefined, true),w=_.bt("Nilai merek", "Brand values", "InspoBadgeControls.brandValuesLegend", undefined, true),y=_.bt("Situs web merek Anda menunjukkan bahwa bisnis Anda selaras dengan nilai-nilai yang tercantum di bawah", "Your brand's website indicates that your business is aligned with the values listed below", "InspoBadges.brandValuesTooltip", undefined, true),j=_.bt("Komunitas", "Communities", "InspoBadgeControls.communitiesLegend", undefined, true),v=_.bt("Pemilik merek Anda mengidentifikasi dirinya sebagai anggota grup ini. Informasi ini hanya terkait dengan akun bisnis Anda dan tidak digunakan untuk menargetkan iklan. ", "Your brand's owner self-identified as a member of these groups. This information is only associated with your business account and isn't used to target ads. ", "InspoBadges.communityTooltip", undefined, true),P=_.bt("warna default", "default color", "InspoBadgeControls.defaultColor", undefined, true),z=(0,t.eT)(e),C=(0,t.hm)(e),A=(0,t.I)(_,z,e.badge_details),k=(0,t.I)(_,C,e.badge_details),S=A.filter(e=>t.yQ.includes(e.id)),I=A.filter(e=>t.Dm.includes(e.id)),Z=A.map(e=>e.id),L=k.map(e=>e.id),T=e.inspirational_badge_selection?.badgeColor||t.QP[0],[E,D]=(0,n.useState)(L),[F,B]=(0,n.useState)(!1),[R,M]=(0,n.useState)(T),H=(0,n.useRef)(null),O=!!(0,c.oo)(R),U=O?R.toUpperCase():t.QP[0],Q=U===t.QP[0]?`${U} (${P})`:U,W=Z.filter(e=>!E.includes(e)),N=L.length!==E.length||!E.every(e=>L.includes(e))||R!==T,$=(e,l)=>{D(l?[...E,e]:E.filter(l=>l!==e)),s({event_type:l?9675:9676,component:13911})};return(0,h.nP)("client.profile.inspirational_badge_controls.rendered",{sampleRate:1}),(0,p.jsx)(i.mh,{zIndex:g,children:(0,p.jsx)(i.To,{accessibilityDismissButtonLabel:_.bt("Tutup lembar Lencana Inspiratif", "Close Inspirational Badges sheet", "InspoBadgeControls.accessibilityDismissButtonLabel", undefined, true),accessibilityLabel:_.bt("Kustomisasi Lencana Inspiratif untuk profil bisnis", "Inspirational Badges customization for business profile", "InspoBadgeControls.accessibilitySheetLabel", undefined, true),footer:({onDismissStart:e})=>(0,p.jsxs)(i.kC,{direction:"row",justifyContent:"between",children:[(0,p.jsxs)(i.xu,{children:[(0,p.jsx)(i.xv,{color:"subtle",inline:!0,size:"200",children:_.bt("Ada pertanyaan terkait nilai merek?", "Have questions about brand values?", "InspoBadgeControls.haveQuestions", undefined, true)}),(0,p.jsx)("br",{}),(0,p.jsx)(i.xv,{color:"subtle",inline:!0,size:"200",weight:"bold",children:(0,p.jsx)(i.rU,{accessibilityLabel:b,display:"inlineBlock",href:"https://help.pinterest.com/en/contact",target:"blank",underline:"hover",children:b})})]}),(0,p.jsx)(i.xu,{children:(0,p.jsxs)(i.hE,{children:[(0,p.jsx)(i.zx,{color:"gray",onClick:e,text:_.bt("Batal", "Cancel", "InspoBadgeControls.cancel", undefined, true)}),(0,p.jsx)(i.zx,{color:"red",disabled:!N,onClick:()=>o({badgeColor:R,badgeOptOut:W}),text:_.bt("Simpan", "Save", "InspoBadgeControls.save", undefined, true)})]})})]}),heading:_.bt("Edit detail merchant", "Edit merchant details", "InspoBadgeControls.title", undefined, true),onDismiss:l,size:"sm",children:(0,p.jsx)(i.kC,{direction:"column",gap:{row:0,column:12},children:(0,p.jsxs)(i.kC,{direction:"column",gap:{row:0,column:4},children:[(0,p.jsxs)(i.xu,{children:[(0,p.jsxs)(i.xv,{inline:!0,children:[_.bt("Pinterest berkomitmen untuk menghubungkan pembeli dan merchant yang memiliki nilai kompatibel.", "Pinterest is committed to connecting shoppers and merchants with compatible values.", "InspoBadgeControls.description", undefined, true),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),_.bt("Menampilkan hingga tiga nilai merek dan/atau komunitas di profil Anda agar orang-orang di Pinterest tahu apa yang diwakili oleh bisnis Anda.", "Feature up to three brand values and/or communities on your profile to let people on Pinterest know what your business represents.", "InspoBadgeControls.description2", undefined, true)]})," ",(0,p.jsx)(i.xv,{inline:!0,weight:"bold",children:(0,p.jsx)(i.rU,{accessibilityLabel:u,display:"inlineBlock",href:t._f,onClick:()=>{s({event_type:9677,component:13911})},target:"blank",underline:"hover",children:u})})]}),(0,p.jsxs)(i.kC,{direction:"column",children:[(0,p.jsxs)(i.kC,{alignItems:"center",children:[(0,p.jsx)(i.xv,{inline:!0,overflow:"noWrap",size:"200",children:w}),(0,p.jsx)(x,{text:y})]}),(0,p.jsx)(i.xu,{paddingY:1,children:(0,p.jsx)(i.pg,{legend:w,legendDisplay:"hidden",children:(0,p.jsx)(i.kC,{direction:"column",gap:{row:0,column:3},children:S.map(e=>{let l=E.includes(e.id),o=E.length>=t.S4&&!l;return(0,p.jsx)(f,{badgeLabel:e,disabled:o,eligible:!0,isChecked:l,setSelectedBadge:$},e.id)})})})})]}),I.length>0&&(0,p.jsxs)(i.kC,{direction:"column",children:[(0,p.jsxs)(i.kC,{alignItems:"center",children:[(0,p.jsx)(i.xv,{inline:!0,overflow:"noWrap",size:"200",children:j}),(0,p.jsx)(x,{text:v})]}),(0,p.jsx)(i.xu,{paddingY:1,children:(0,p.jsx)(i.pg,{legend:j,legendDisplay:"hidden",children:(0,p.jsx)(i.kC,{direction:"column",gap:{row:0,column:3},children:I.map(e=>{let l=E.includes(e.id),o=E.length>=t.S4&&!l;return(0,p.jsx)(f,{badgeLabel:e,disabled:o,eligible:!0,isChecked:l,setSelectedBadge:$},e.id)})})})}),(0,p.jsx)(i.xv,{color:"subtle",inline:!0,size:"200",children:(0,d.nk)(_.bt("Untuk mengubah info komunitas, kunjungi {{ accountSettingsLink }}", "To change communities info, visit {{ accountSettingsLink }}", "InspoBadgeControls.changeCommunities", undefined, true),{accountSettingsLink:(0,p.jsx)(i.rU,{display:"inlineBlock",href:m,underline:"hover",children:(0,p.jsx)(i.xv,{color:"subtle",inline:!0,size:"200",weight:"bold",children:_.bt("pengaturan akun", "account settings", "InspoBadgeControls.accountSettingsLink", undefined, true)})},m)})})]}),(0,p.jsxs)(i.kC,{direction:"column",children:[(0,p.jsxs)(i.xu,{children:[(0,p.jsx)(i.xu,{marginBottom:4,marginTop:4,children:(0,p.jsx)(i.__,{htmlFor:"color-menu",children:(0,p.jsx)(i.xv,{size:"200",children:_.bt("Pilih warna label Anda", "Choose your label color", "InspoBadgeControls.labelColor", undefined, true)})})}),(0,p.jsx)(i.zx,{accessibilityControls:"color-menu",accessibilityExpanded:F,accessibilityHaspopup:!0,iconEnd:"arrow-down",onClick:()=>{s({event_type:9674,component:13911}),B(!0)},selected:F,size:"lg",text:Q})]}),(0,p.jsx)(i.xu,{ref:H}),F&&(0,p.jsx)(i.mh,{children:(0,p.jsx)(i.J2,{anchor:H.current,idealDirection:"down",onDismiss:()=>B(!1),positionRelativeToAnchor:!1,role:"listbox",shouldFocus:!0,size:"flexible",children:(0,p.jsxs)(i.xu,{borderStyle:"shadow",id:"color-menu",padding:4,rounding:2,width:"100%",children:[(0,p.jsx)(i.kC,{alignItems:"start",gap:{row:4,column:0},children:t.QP.map(e=>(0,p.jsx)(i.xu,{borderStyle:"lg",dangerouslySetInlineStyle:{__style:{borderColor:R===e?"black":e,backgroundColor:e}},height:48,marginBottom:4,rounding:"circle",width:48,children:(0,p.jsx)(i.iP,{fullHeight:!0,fullWidth:!0,onTap:()=>M(e),rounding:4})},e))}),(0,p.jsxs)(i.kC,{alignItems:"start",gap:{row:4,column:0},children:[(0,p.jsx)(i.xu,{borderStyle:"lg",dangerouslySetInlineStyle:{__style:{borderColor:O&&!t.QP.includes(R.toUpperCase())?"black":void 0,backgroundColor:U}},height:48,rounding:"circle",width:48}),(0,p.jsx)(i.nv,{id:"selected-color",onChange:({value:e})=>M(e.slice(0,7)),size:"lg",value:R})]})]})})})]})]})})})})}var w=o(961754),y=o(664331);let j=new i.Ry(10);function v(e){let{isOwnProfile:l,marginEnd:o=1,marginStart:c=1,userId:d,rounding:_=1,size:u="200"}=e,{logContextEvent:g}=(0,a.v)(),m=(0,r.ZP)(),x=m.bt("Pelajari selengkapnya", "Learn more", "InspoBadges.learnMore", undefined, true),f=m.bt("Baru!", "New!", "InspoBadges.newText", undefined, true),v=m.bt("Tunjukkan kepada pembeli nilai merek Anda dan komunitas tempat Anda bergabung", "Show shoppers your brand values and which communities you're a part of", "InspoBadges.editTooltipText", undefined, true),P=m.bt("Tambahkan detail merchant", "Add merchant details", "InspoBadges.toggleEditBadges", undefined, true),z=function(){let e=(0,y.Z)(),l=e.data?.id;return(0,w.Z)({name:"VerifiedMerchantResource",options:{userId:l}})}(),C=z.data||{},A=(0,t.Bu)({verifiedMerchant:C}),k=(0,n.useRef)(null),[S,I]=(0,n.useState)(t.Xe),[Z,L]=(0,n.useState)(!1),[T,E]=(0,n.useState)(!0),D=A?(0,t.hm)(S):[],F=(0,t.I)(m,D,S.badge_details),B=S.inspirational_badge_selection?.badgeColor||t.QP[0];(0,n.useEffect)(()=>{I(C.inspirational_signal||t.Xe)},[C.inspirational_signal]),(0,n.useEffect)(()=>{D&&D.length&&g({event_type:9667,view_type:4,component:13910})});let R=()=>{L(!0),E(!1),g({event_type:9671,component:13911})},M=()=>{g({event_type:9668,component:13910})},H=()=>{g({event_type:9670,component:13910})};return A&&(0,h.nP)("client.profile.inspirational_badges.rendered",{sampleRate:1,tags:{is_own_profile:l,num_badges:F.length,badge_color:B,user_id:C.id}}),A?(0,p.jsxs)(n.Fragment,{children:[(0,p.jsxs)(i.kC,{alignItems:"center",children:[F.map(e=>(0,p.jsx)(i.u,{link:(0,p.jsx)(i.xu,{"data-test-id":"inspirational-badge-tooltip-learn-more",children:(0,p.jsx)(i.rU,{accessibilityLabel:x,href:t.NG,onClick:H,target:"blank",children:(0,p.jsx)(i.xv,{color:"inverse",size:"100",weight:"bold",children:x})})}),text:e.description,zIndex:j,children:(0,p.jsx)(i.xv,{overflow:"noWrap",size:u,children:(0,p.jsx)(i.iP,{onMouseEnter:M,children:(0,p.jsx)(i.xu,{dangerouslySetInlineStyle:{__style:(0,t.ym)(B)},"data-test-id":"inspirational-badge",display:"inlineBlock",marginEnd:o,marginStart:c,paddingX:2,paddingY:1,rounding:_,children:e.label})})})},e.label)),l&&(0,p.jsxs)(n.Fragment,{children:[T&&(0,p.jsx)(i.mh,{zIndex:j,children:(0,p.jsx)(i.J2,{_deprecatedShowCaret:!0,anchor:k.current,color:"deprecatedBlue",idealDirection:"up",onDismiss:()=>{E(!1),g({event_type:9673,component:13911})},positionRelativeToAnchor:!1,size:"xs",children:(0,p.jsx)(i.xu,{padding:3,children:(0,p.jsxs)(i.xv,{align:"center",color:"inverse",inline:!0,size:"200",children:[(0,p.jsx)(i.xv,{inline:!0,weight:"bold",children:f})," ",v]})})})}),0===F.length&&(0,p.jsx)(i.xu,{display:"inlineBlock",children:(0,p.jsx)(i.iP,{fullWidth:!0,onTap:R,children:(0,p.jsx)(i.xv,{color:"subtle",children:P})})}),(0,p.jsx)(i.hU,{ref:k,accessibilityLabel:P,icon:"edit",iconColor:"gray",onClick:R,size:"sm"})]})]}),Z&&(0,p.jsx)(b,{inspirationalSignal:S,onDismiss:()=>L(!1),onSubmit:({badgeColor:e,badgeOptOut:l})=>{L(!1),s.Z.create("VerifiedMerchantResource",{userId:d,inspirational_badge_selection:{badgeColor:e,badgeOptOut:l}}).callUpdate().then(()=>z.refresh()),I({...S,inspirational_badge_selection:{badgeColor:e,badgeOptOut:l}}),g({event_type:9672,component:13911})}})]}):(0,p.jsx)(n.Fragment,{})}},373441:(e,l,o)=>{o.d(l,{Z:()=>v});var n=o(602185),i=o(383399),s=o(667294),t=o(883119),a=o(573706),r=o(212515),c=o(144326),d=o(240760),_=o(856256),u=o(252071),h=o(922664),p=o(224389),g=o(785893);function m({children:e,flyoutDirection:l,setShowMessageFlyout:o,showMessageFlyout:n,userId:i}){let{logContextEvent:r}=(0,a.v)(),[c,d]=(0,s.useState)(""),_=(0,s.useRef)(null),{conversationCreate:m,conversationOpen:x}=(0,h.Z)(),f=async()=>{d(""),o(!1),r({event_type:101,element:103,component:13946,view_type:4,view_parameter:3107});let e=u.Z.create("ConversationsResource",{user_ids:[i],text:c}),l=await e.callCreate(),n=l?.resource_response.data;m(n),x(n.id)};return(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(t.xu,{ref:_,children:e({toggleSendMessageFlyout:()=>{o(!n)}})}),n&&(0,g.jsx)(p.Z,{anchor:_.current,idealDirection:l,message:c,onDismiss:()=>o(!1),onMessageChange:d,onMessageSubmit:f})]})}var x=o(203743);let f=()=>Promise.all([o.e(1919),o.e(70814)]).then(o.bind(o,370814));function b({isOwnProfile:e,setShowMessageFlyout:l,size:o="lg",showMessageFlyout:n,user:i}){let{logContextEvent:u}=(0,a.v)(),h=(0,c.ZP)(),p=(0,s.useRef)(null),[b,w]=(0,s.useState)(!1),[y,j]=(0,s.useState)(),v=(0,_.V)(e,i?.partner?.profile_place||{},h.bt("Alamat disalin", "Address copied", "profileHeader.contactButton.toastText", undefined, true)),P=()=>{w(!1)},{id:z,partner:C}=i??{},{contact_email:A="",contact_phone:k="",contact_phone_country:S="",enable_profile_address:I,enable_profile_message:Z,profile_place:L={}}=C??{},T=k?y?.(k,{defaultCallingCode:S&&"0"!==S.phone_code?S.phone_code:null}):null;(0,r.Q)({component:13673,element:11953,object_id_str:z,view_type:4,view_parameter:3107});let E=async()=>{if(w(e=>!e),k&&!y){let e=await f();j(()=>e.parsePhoneNumberFromString)}u({event_type:101,component:13673,element:11953,object_id_str:z,view_type:4,view_parameter:3107})},D=e=>{u({event_type:101,component:13674,element:e,object_id_str:z,view_type:48,view_parameter:3107})},F=A||k,B={contact:h.bt("Hubungi", "Contact", "profileHeader.contactButton", undefined, true),sectionTitle:h.bt("Opsi kontak", "Contact options", "profileHeader.contactButton.contactOptions", undefined, true),message:h.bt("Pesan", "Message", "profileHeader.contactMenu.message", undefined, true),email:(0,d.nk)(h.bt("Email {{ contactEmail }}", "Email {{ contactEmail }}", "profileHeader.contactMenu.email", undefined, true),{contactEmail:A}),call:h.bt("Hubungi", "Call", "profileHeader.contactMenu.phoneNumber", undefined, true)};if(!F&&!Z)return null;let R=(0,_.T)(L||{});return(0,g.jsx)(m,{flyoutDirection:"up",setShowMessageFlyout:l,showMessageFlyout:n,userId:z,children:({toggleSendMessageFlyout:e})=>(0,g.jsxs)(s.Fragment,{children:[(0,g.jsx)(t.xu,{ref:p,children:(0,g.jsx)(t.zx,{onClick:()=>{F?E():e()},selected:b,size:o,text:B.contact})}),b&&(0,g.jsxs)(t.Lt,{anchor:p.current,disableMobileUI:!0,id:"profileHeader_contactMenu",idealDirection:"up",onDismiss:P,zIndex:new t.H3([x.Zu]),children:[(0,g.jsxs)(t.Lt.Section,{label:B.sectionTitle,children:[Z&&(0,g.jsx)(t.Lt.Item,{onSelect:()=>{e(),D(11956),P()},option:{label:B.message,value:B.message}}),A&&(0,g.jsx)(t.Lt.Link,{href:`mailto:${A}`,iconEnd:"visit",onClick:()=>{D(11954),P()},option:{label:B.email.join(""),value:B.email.join("")}}),T||k?(0,g.jsx)(t.Lt.Link,{href:`tel:${T?T.getURI():k}`,iconEnd:"visit",onClick:({dangerouslyDisableOnNavigation:e})=>{D(11955),e(),P()},option:{label:B.call,value:B.call}}):null]}),I&&(0,g.jsx)(t.Lt.Section,{label:h.bt("Alamat", "Address", "profileHeader.contactButton.address", undefined, true),children:(0,g.jsx)(t.Lt.Item,{onSelect:v,option:{label:R,value:R}})})]})]})})}var w=o(200617),y=o(461661),j=o(146413);function v(e){let{setShowMessageFlyout:l,size:o,showMessageFlyout:s,user:t}=e,a=(0,i.Z)(),r=(0,j.Z)(t),c=(0,y.Z)({user:t,viewer:a}),{blocked_by_me:d,id:_,partner:u={},should_show_messaging:h}=t,{should_show_messaging:p}=a,{contact_email:x="",contact_phone:f="",enable_profile_message:v}=u||{},P=!d&&!!h&&!!p;return P&&(x||f)?(0,g.jsx)(n.Z,{name:"ContactMenuButton",children:(0,g.jsx)(b,{isOwnProfile:c,setShowMessageFlyout:l,showMessageFlyout:s,size:o,user:t})}):P&&(v||!r)?(0,g.jsx)(m,{flyoutDirection:"up",setShowMessageFlyout:l,showMessageFlyout:s,userId:_,children:({toggleSendMessageFlyout:e})=>(0,g.jsx)(w.Z,{onClick:e,size:o,userId:_})}):null}},469760:(e,l,o)=>{o.r(l),o.d(l,{default:()=>u});var n=o(667294),i=o(883119),s=o(989820),t=o(357013),a=o(144326),r=o(240760),c=o(383399),d=o(461661),_=o(785893);function u({color:e="default",user:l,inline:o=!1,size:u}){let h=(0,a.ZP)(),p=(0,n.useRef)(null),g=(0,c.Z)(),m=new i.Ry(2);if(l?.profile_views===-1)return null;let x=l?.profile_views??0,f=x>=1e7?h.bt("Lebih dari 10 jt tayangan bulanan", "10m+ monthly views", "viewerCount.overTenMillion", undefined, true):(0,r.nk)(h.bt("{{ count }} {{ label }}", "{{ count }} {{ label }}", "viewerCount.templateString", undefined, true),{count:(0,_.jsx)(t.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:x||0},"pretty_number"),label:h.bt("tayangan bulanan", "monthly views", "viewerCount.monthlyViewsLabel", undefined, true)});return(0,_.jsx)(i.xu,{ref:p,children:(0,_.jsxs)(i.xv,{color:e,inline:o,size:u,weight:"normal",children:[f,(0,d.Z)({user:l,viewer:g})&&(0,_.jsx)(s.Qp,{anchor:p.current,customWrapper:({children:e})=>(0,_.jsx)(i.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,zIndex:m,children:e}),experienceIds:[502925],flyoutSize:"md",idealDirection:"down",onClickComplete:()=>window.open("https://www.pinterest.com/_/_/help/business/article/review-new-and-updated-reporting-metrics#section-15861","_blank"),placementId:19,showCaret:!0,textAlign:"center"})]})})}},856256:(e,l,o)=>{o.d(l,{T:()=>a,V:()=>r});var n=o(573706),i=o(476198),s=o(901450),t=o(785893);function a(e){let{street:l,extra_street:o,locality:n,region:i,postal_code:s,country:t}=e,a=l||"",r=o||"",c=n||"";return`${a}${r}${(a||r)&&","} ${c}${c&&","} ${i||""} ${s||""} ${t||""}`.trim()}function r(e,l,o){let{logContextEvent:r}=(0,n.v)(),{showToast:c}=(0,s.F9)();return()=>{r({event_type:101,element:12799,view_type:548,view_parameter:e?3106:3107}),navigator.clipboard.writeText(a(l)),c(({hideToast:e})=>(0,t.jsx)(i.Z,{onHide:e,text:o}))}}},613756:(e,l,o)=>{o.d(l,{Z:()=>d});var n=o(667294),i=o(883119),s=o(602185),t=o(144326),a=o(750077),r=o(785893);let c=(0,n.lazy)(()=>Promise.all([o.e(36075),o.e(36060),o.e(61116)]).then(o.bind(o,790169)));function d(e){let l=(0,t.ZP)();return(0,r.jsx)(s.Z,{name:"SafeSuspense_SendObjectLoader_SendObjectWrapper",children:(0,r.jsx)(a.Z,{fallback:(0,r.jsx)(i.xu,{alignItems:"center",display:"flex",justifyContent:"center",padding:2,width:"100%",children:(0,r.jsx)(i.$j,{accessibilityLabel:l.bt("Memuat yang dibagi", "Loading sharing", "Accessibility label for loading sharing UI", undefined, true),show:!0})}),children:(0,r.jsx)(c,{...e})})})}},586096:(e,l,o)=>{o.d(l,{Z:()=>h});var n=o(667294),i=o(883119),s=o(488792),t=o(144326),a=o(383399),r=o(265899),c=o(922664),d=o(461661),_=o(101736),u=o(785893);function h(e){let{bgColor:l,dataTestId:o="share-profile-auth",iconColor:h,useGestaltButton:p,user:g}=e,m=(0,t.ZP)(),[x,f]=(0,n.useState)(!1),b=(0,a.Z)(),w=(0,d.Z)({user:g,viewer:b}),y=(0,s.Z)(),j=w&&b.isPrivateProfile,{conversations:{showConversationsDropdown:v},dropdownOpen:P,setObjectAttachment:z}=(0,c.Z)(),C=m.bt("Kirim Profil", "Send Profile", "Accessible label for button to send this profile", undefined, true);return(0,u.jsx)(_.Z,{flyoutDisplayOptions:{shownWithinProfileHeader:!0},isFlyoutOpen:x,loggingOptions:{component:13675,element:12631,viewType:4},onFlyoutDismiss:()=>f(!1),onToggleFlyout:()=>{y({event_type:101,component:13675,element:1079,object_id_str:g?.id,view_type:4,view_parameter:w?3106:3107}),j?!v&&g?.id&&(z({type:"follow_invite",id:g.id}),P()):f(!x)},sendObject:{type:"user",description:"",name:g?.full_name,imageUrl:g?.image_large_url??"",url:`/${g?.username??""}/`,id:g?.id??""},children:({handleSendShareFlyoutButtonClick:e})=>(0,u.jsx)(i.xu,{"data-test-id":o,children:p?(0,u.jsx)(i.zx,{accessibilityLabel:C,onClick:()=>e(),selected:x,size:"lg",text:m.bt("Bagikan", "Share", "sendProfileButton.button", undefined, true)}):(0,u.jsx)(r.Z,{accessibilityLabel:C,bgColor:l,icon:"share",iconColor:h,onClick:()=>e(),selected:x})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/15823.id_ID-ab81f88af625fafc.mjs.map