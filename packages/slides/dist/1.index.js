(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{4:function(e,t){!function(){"use strict";(()=>{if(!window.customElements)return;const e=window.HTMLElement,t=window.customElements.define,n=window.customElements.get,o=new Map,c=new Map;let l=!1,s=!1;window.HTMLElement=function(){if(!l){const e=o.get(this.constructor),t=n.call(window.customElements,e);return s=!0,new t}l=!1},window.HTMLElement.prototype=e.prototype,Object.defineProperty(window,"customElements",{value:window.customElements,configurable:!0,writable:!0}),Object.defineProperty(window.customElements,"define",{value:(n,i)=>{const a=i.prototype,w=class extends e{constructor(){super(),Object.setPrototypeOf(this,a),s||(l=!0,i.call(this)),s=!1}},d=w.prototype;w.observedAttributes=i.observedAttributes,d.connectedCallback=a.connectedCallback,d.disconnectedCallback=a.disconnectedCallback,d.attributeChangedCallback=a.attributeChangedCallback,d.adoptedCallback=a.adoptedCallback,o.set(i,n),c.set(n,i),t.call(window.customElements,n,w)},configurable:!0,writable:!0}),Object.defineProperty(window.customElements,"get",{value:e=>c.get(e),configurable:!0,writable:!0})})()}()}}]);