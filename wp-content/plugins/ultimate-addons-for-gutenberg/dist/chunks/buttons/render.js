(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[9],{287:function(t,e,n){"use strict";var a=n(15),o=n.n(a)()((function(t){return t[1]}));o.push([t.i,'/**\n * Editor styles for the admin\n */\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .block-editor-inner-blocks,\n.wp-block[data-type="uagb/buttons"][data-btn-width="full"] .wp-block[data-type="uagb/buttons-child"] {\n  width: 100%; }\n\n.uagb-buttons__outer-wrap .block-editor-inner-blocks {\n  width: 100%; }\n  .uagb-buttons__outer-wrap .block-editor-inner-blocks .block-editor-block-list__layout {\n    display: inline-flex; }\n\n.uagb-buttons__outer-wrap .uagb-buttons__wrap .block-editor-block-list__layout .block-list-appender {\n  margin-right: -60px !important; }\n',""]),e.a=o},521:function(t,e,n){"use strict";n.r(e);var a,o=n(4),u=n.n(o),b=n(5),l=n(0),s=n.n(l),i=n(14),r=n.n(i),c=n(287),d=0,_={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=c.a.locals||{},p.use=function(){return d++||(a=r()(c.a,_)),p},p.unuse=function(){d>0&&!--d&&(a(),a=null)};var g=p,m=n(11);const w=["uagb/buttons-child"],k=t=>{Object(l.useLayoutEffect)(()=>(g.use(),()=>{g.unuse()}),[]),t=t.parentProps;const{attributes:e}=t,n=Object(m.a)(),{className:a,btn_count:o,buttons:i,stack:r,isPreview:c,buttonSize:d,buttonSizeTablet:_,buttonSizeMobile:p}=e,k=Object(l.useMemo)(()=>{const t=[];for(let e=0;e<o;e++)t.push(["uagb/buttons-child",i[e]]);return t},[o,i]),f=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/multi-button.png";return c?s.a.createElement("img",{width:"100%",src:f,alt:""}):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:u()(a,"uagb-buttons__outer-wrap",`uagb-btn__${d}-btn`,`uagb-btn-tablet__${_}-btn`,`uagb-btn-mobile__${p}-btn`,"uagb-editor-preview-mode-"+n.toLowerCase(),"uagb-block-"+t.clientId.substr(0,8))},s.a.createElement("div",{className:u()("uagb-buttons__wrap","uagb-buttons-stack-"+r)},s.a.createElement(b.InnerBlocks,{template:k,templateLock:!1,allowedBlocks:w,__experimentalMoverDirection:"desktop"===r?"vertical":"horizontal"}))))};e.default=s.a.memo(k)}}]);