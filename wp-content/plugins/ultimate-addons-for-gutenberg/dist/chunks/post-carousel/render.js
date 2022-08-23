(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[77],{224:function(t,e,o){"use strict";o.d(e,"b",(function(){return g})),o.d(e,"a",(function(){return c})),o.d(e,"e",(function(){return d})),o.d(e,"c",(function(){return y})),o.d(e,"d",(function(){return h}));var a=o(132),r=o(135),s=o(133),n=o(130),i=o(131),l=o(134),p=o(2);function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}const b=Object(p.createContext)({parentName:"",parentClassName:"",isLoading:!1}),g=t=>{let{parentName:e="",parentClassName:o="",children:a}=t;const r={parentName:e,parentClassName:o};return React.createElement(b.Provider,{value:r},a)},c=[["uagb/post-image"],["uagb/post-taxonomy"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],d=(t,e,o,a,r)=>{if(!o)return;const s=y(t);let n=[];return o.map((o,i)=>{let[l,b={}]=o;b.children&&b.children.length>0&&(n=d(t,e,b.children,a,r));const g=s[l];return g?React.createElement(p.Suspense,{key:i,fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(g,u({},b,{post:e,attributes:a,categoriesList:r}))):null})},m={};function w(t){t.context||(t.context="any"),k(t,"context","string"),k(t,"blockName","string"),_(t,"component");const{context:e,blockName:o,component:a}=t;m[e]||(m[e]={}),m[e][o]=a}const _=(t,e)=>{if(t[e]){if("function"==typeof t[e])return;if(t[e].$$typeof&&t[e].$$typeof===Symbol.for("react.lazy"))return}throw new Error(`Incorrect value for the ${e} argument when registering a block component. Component must be a valid React Element or Lazy callback.`)},k=(t,e,o)=>{const a=typeof t[e];if(a!==o)throw new Error(`Incorrect value for the ${e} argument when registering a block component. It was a ${a}, but must be a ${o}.`)};w({blockName:"uagb/post-title",component:a.a}),w({blockName:"uagb/post-image",component:s.a}),w({blockName:"uagb/post-taxonomy",component:n.a}),w({blockName:"uagb/post-meta",component:r.a}),w({blockName:"uagb/post-excerpt",component:i.a}),w({blockName:"uagb/post-button",component:l.a});const y=t=>{return{..."object"==typeof m[e=t]&&Object.keys(m[e]).length>0?m[e]:{},...m.any};var e},h=t=>t&&0!==t.length?t.map(t=>[t.name,{...t.attributes,post:void 0,children:t.innerBlocks.length>0?h(t.innerBlocks):[]}]):[]},231:function(t,e,o){"use strict";var a,r=o(14),s=o.n(r),n=o(232),i=0,l={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=n.a.locals||{},p.use=function(){return i++||(a=s()(n.a,l)),p},p.unuse=function(){i>0&&!--i&&(a(),a=null)},e.a=p},232:function(t,e,o){"use strict";var a=o(15),r=o.n(a)()((function(t){return t[1]}));r.push([t.i,'/**\n * Editor styles for the admin\n */\n.editor-styles-wrapper .uagb-post-grid:not(.wp-block-uagb-post-grid) .uagb-post__inner-wrap {\n  background-clip: content-box !important; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode {\n  margin: 20px; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] span,\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode [data-type="uagb/post-meta"] time {\n    margin-right: 10px;\n    font-weight: 500; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode .block-editor-block-list__block {\n    margin-bottom: 25px; }\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode .block-editor-block-list__block .uagb-post__taxonomy {\n      font-size: unset; }\n    .editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap.uagb-post__edit-mode .block-editor-block-list__block .uagb-post__image {\n      width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__inner-wrap .uagb-post__taxonomy {\n  flex-wrap: nowrap; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-block-all-post__actions {\n  margin: 20px; }\n\n.editor-styles-wrapper .uagb-post-grid h2 a {\n  text-decoration: none; }\n\n.editor-styles-wrapper .uagb-post-grid a {\n  cursor: default;\n  pointer-events: none; }\n\n.editor-styles-wrapper .uagb-post-grid .wp-block-uagb-post-grid article {\n  pointer-events: visible; }\n\n.editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap {\n  width: 100%; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap .uagb-post-pagination-button {\n    cursor: pointer;\n    pointer-events: visible; }\n  .editor-styles-wrapper .uagb-post-grid .uagb-post__load-more-wrap a {\n    color: inherit; }\n\n.editor-styles-wrapper .uagb-post-grid .wp-block-uagb-post-grid:last-child .uagb-post-pagination-wrap {\n  grid-column: 1 / -1; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet:not(.wp-block-uagb-post-grid).uagb-post__columns-tablet-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-1 {\n  grid-template-columns: auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-2 {\n  grid-template-columns: auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-3 {\n  grid-template-columns: auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-4 {\n  grid-template-columns: auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-5 {\n  grid-template-columns: auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-6 {\n  grid-template-columns: auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-7 {\n  grid-template-columns: auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-tablet.wp-block-uagb-post-grid.uagb-post__columns-tablet-8 {\n  grid-template-columns: auto auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-1 article {\n  width: 100%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-2 article {\n  width: 50%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-3 article {\n  width: 33.2%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-4 article {\n  width: 25%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-5 article {\n  width: 20%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-6 article {\n  width: 16.66%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-7 article {\n  width: 14.28%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile:not(.wp-block-uagb-post-grid).uagb-post__columns-mobile-8 article {\n  width: 12.5%; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-1 {\n  grid-template-columns: auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-2 {\n  grid-template-columns: auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-3 {\n  grid-template-columns: auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-4 {\n  grid-template-columns: auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-5 {\n  grid-template-columns: auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-6 {\n  grid-template-columns: auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-7 {\n  grid-template-columns: auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid.uagb-editor-preview-mode-mobile.wp-block-uagb-post-grid.uagb-post__columns-mobile-8 {\n  grid-template-columns: auto auto auto auto auto auto auto auto; }\n\n.editor-styles-wrapper .uagb-post-grid:not(.is-grid).uagb-post__items {\n  display: flex;\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.editor-styles-wrapper .uagb-post-grid.is_grid {\n  display: grid; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .slick-dots {\n  padding-left: 0; }\n  .block-editor-page #wpwrap .edit-post-visual-editor .slick-dots button {\n    color: transparent; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-post__image-position-background .uagb-post__image img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: auto;\n  height: auto;\n  max-width: none;\n  min-width: 100%;\n  min-height: 100%;\n  transform: translate(-50%, -50%);\n  -webkit-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%); }\n\n.editor-styles-wrapper .is-root-container.edit-site-block-editor__block-list.wp-site-blocks .is-masonry {\n  height: initial !important; }\n\n.editor-styles-wrapper [data-type="uagb/post-carousel"] {\n  width: 100%; }\n\n.editor-styles-wrapper .block-editor-block-list__layout.is-root-container .uagb-post-grid .uagb-post__inner-wrap p {\n  margin-bottom: 0; }\n',""]),e.a=r},572:function(t,e,o){"use strict";o.r(e);var a=o(224),r=o(0),s=o.n(r),n=o(4),i=o.n(n),l=o(8),p=o(11),u=o(10),b=o(3);function g(){return(g=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t}).apply(this,arguments)}const c=Object(r.lazy)(()=>o.e(1).then(o.t.bind(null,513,7)));function d(t){const e=t.name.replace("uagb/",""),o=Object(r.useRef)(),{attributes:n,className:d,latestPosts:m,block_id:w}=t,_=Object(p.a)(),{isPreview:k,columns:y,tcolumns:h,mcolumns:f,imgPosition:v,postsToShow:E,autoplay:N,pauseOnHover:O,autoplaySpeed:j,transitionSpeed:x,infiniteLoop:S,arrowSize:C,arrowBorderSize:B,arrowBorderRadius:T,arrowColor:L,arrowDots:P,equalHeight:z,layoutConfig:I,rowGap:R}=n,$=Object(b.b)(E,"postsToShow",e),A=Object(b.b)(y,"columns",e),D=Object(b.b)(h,"tcolumns",e),H=Object(b.b)(f,"mcolumns",e),W=Object(b.b)(R,"rowGap",e),q=Object(b.b)(j,"autoplaySpeed",e),F=Object(b.b)(x,"transitionSpeed",e),G=Object(b.b)(C,"arrowSize",e),J=Object(b.b)(B,"arrowBorderSize",e),K=()=>{setTimeout(()=>{if(null!=o&&o.current){var t,e;const a=null==o||null===(t=o.current)||void 0===t?void 0:t.offsetWidth,r=100-W/a*100,s=null==o||null===(e=o.current)||void 0===e?void 0:e.closest(".uagb-post__image-position-background");if(s){const t=null==s?void 0:s.getElementsByClassName("uagb-post__image");for(const e of t)e&&(e.style.width=r+"%",e.style.marginLeft=W/2+"px")}}},100)};Object(r.useEffect)(()=>{K()},[o]),Object(r.useEffect)(()=>{K()},[v]);const M=m.length>$?m.slice(0,$):m;function Q(){return s.a.createElement("button",{type:"button","data-role":"none",className:"slick-next slick-arrow","aria-label":"Next",tabIndex:"0",style:{borderColor:L,borderRadius:T,borderWidth:J}},l.a.carousel_right)}function U(){return s.a.createElement("button",{type:"button","data-role":"none",className:"slick-prev slick-arrow","aria-label":"Previous",tabIndex:"0",style:{borderColor:L,borderRadius:T,borderWidth:J}},l.a.carousel_left)}const V=z?"uagb-post__carousel_equal-height":"",X={slidesToShow:A,slidesToScroll:1,autoplaySpeed:q,autoplay:N,infinite:S,pauseOnHover:O,speed:F,arrows:"arrows"===P||"arrows_dots"===P,dots:"dots"===P||"arrows_dots"===P,rtl:!1,afterChange:()=>{z&&uagb_carousel_height(w)},nextArrow:s.a.createElement(Q,{arrowSize:G}),prevArrow:s.a.createElement(U,{arrowSize:G}),responsive:[{breakpoint:1024,settings:{slidesToShow:D,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:H,slidesToScroll:1}}]},Y=M.map((e,r)=>s.a.createElement("article",{ref:o,key:r,className:"uagb-post__inner-wrap"},Object(a.e)("uagb/post-carousel",e,I,t.attributes,t.categoriesList)));if(A>=M.length)return s.a.createElement("div",{className:i()("is-carousel","uagb-post__columns-"+A,"uagb-post__columns-tablet-"+D,"uagb-post__columns-mobile-"+H,"uagb-post__items",d,"uagb-post-grid","uagb-post__arrow-outside","uagb-post__image-position-"+v,""+V,"uagb-editor-preview-mode-"+_.toLowerCase(),"uagb-block-"+w),"data-blog-id":w},s.a.createElement(a.b,{parentName:"uagb/post-carousel",parentClassName:"uagb-block-grid"},Y));const Z=uagb_blocks_info.uagb_url+"/admin/assets/preview-images/post-carousel.png";return s.a.createElement(r.Suspense,{fallback:Object(u.a)()},k?s.a.createElement("img",{width:"100%",src:Z,alt:""}):s.a.createElement(s.a.Fragment,null,s.a.createElement(c,g({className:i()("is-carousel","uagb-post__columns-"+A,"uagb-post__items",d,"uagb-post-grid","uagb-post__arrow-outside","uagb-slick-carousel","uagb-post__image-position-"+v,""+V,"uagb-editor-preview-mode-"+_.toLowerCase(),"uagb-block-"+w),"data-blog-id":w,style:"dots"===P?{padding:"0 0 35px 0"}:{}},X),Y)))}var m=s.a.memo(d),w=o(1),_=o(6),k=o(7),y=o(5),h=o(231);const f=t=>{Object(r.useLayoutEffect)(()=>(h.a.use(),()=>{h.a.unuse()}),[]);const{state:e,setState:o,togglePreview:n}=t;t=t.parentProps;const{attributes:i,categoriesList:l,latestPosts:p,deviceType:u,name:b}=t,g=s.a.createElement(k.Disabled,null,s.a.createElement(m,{attributes:i,className:t.className,latestPosts:p,block_id:t.clientId.substr(0,8),categoriesList:l,deviceType:u,name:b}));return s.a.createElement(s.a.Fragment,null,e.isEditing?(()=>{const r={template:t.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(a.c)("uagb/post-grid"))};return 0!==t.attributes.layoutConfig.length&&(r.renderAppender=!1),s.a.createElement(k.Placeholder,{label:"Post Carousel Layout"},s.a.createElement("div",{className:"uagb-post-grid uagb-block-all-post-grid-item-template"},s.a.createElement(k.Tip,null,Object(w.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post carousel.")),s.a.createElement(a.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},s.a.createElement("article",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},s.a.createElement("div",{className:"uagb-post__text"},s.a.createElement(y.InnerBlocks,r)))),s.a.createElement("div",{className:"uagb-block-all-post__actions"},s.a.createElement(k.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:()=>{const{block:e,setAttributes:r}=t;r({layoutConfig:Object(a.d)(e)}),o({innerBlocks:e}),n()}},Object(w.__)("Done")),s.a.createElement(k.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:()=>{const{replaceInnerBlocks:o}=t,{innerBlocks:a}=e;o(t.clientId,a),n()}},Object(w.__)("Cancel")),s.a.createElement(k.Button,{className:"uagb-block-all-post__reset-button",onClick:()=>{const{block:e,replaceInnerBlocks:r}=t,s=[];a.a.map(t=>{let[e,o]=t;return s.push(Object(_.createBlock)(e,o)),!0}),r(t.clientId,s),o({innerBlocks:e})}},Object(w.__)("Reset Layout")))))})():g)};e.default=s.a.memo(f)}}]);