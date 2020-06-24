(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(487)),i={id:"screen-tracking",title:"Screen tracking for analytics",sidebar_label:"Screen tracking for analytics"},c={id:"version-5.x/screen-tracking",title:"Screen tracking for analytics",description:"To track the currently active screen, we need to:",source:"@site/versioned_docs/version-5.x/screen-tracking.md",permalink:"/docs/screen-tracking",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/screen-tracking.md",version:"5.x",sidebar_label:"Screen tracking for analytics",sidebar:"version-5.x/docs",previous:{title:"Server rendering",permalink:"/docs/server-rendering"},next:{title:"Themes",permalink:"/docs/themes"}},s=[{value:"Example",id:"example",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To track the currently active screen, we need to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add a callback to get notified of state changes"),Object(o.b)("li",{parentName:"ol"},"Get the root navigator state and find the active route name")),Object(o.b)("p",null,"To get notified of state changes, we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"onStateChange")," prop on ",Object(o.b)("inlineCode",{parentName:"p"},"NavigationContainer"),". To get the root navigator state, we can use the ",Object(o.b)("inlineCode",{parentName:"p"},"getRootState")," method on the container's ref. Please note that ",Object(o.b)("inlineCode",{parentName:"p"},"onStateChange")," is not called on initial render so you have to set your initial screen separately."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"This example shows how to do screen tracking and send to Firebase Analytics using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.expo.io/versions/latest/sdk/firebase-analytics/"}),"expo-firebase-analytics"),". The approach can be adapted to any other analytics SDK."),Object(o.b)("samp",{id:"screen-tracking-for-analytics"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import * as React from 'react';\nimport * as Analytics from 'expo-firebase-analytics';\nimport { NavigationContainer } from '@react-navigation/native';\n\nexport default function App() {\n  const routeNameRef = React.useRef();\n  const navigationRef = React.useRef();\n\n  return (\n    <NavigationContainer\n      ref={navigationRef}\n      onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name}\n      onStateChange={() => {\n        const previousRouteName = routeNameRef.current;\n        const currentRouteName = navigationRef.current.getCurrentRoute().name\n\n        if (previousRouteName !== currentRouteName) {\n          // The line below uses the expo-firebase-analytics tracker\n          // https://docs.expo.io/versions/latest/sdk/firebase-analytics/\n          // Change this line to use another Mobile analytics SDK\n          Analytics.setCurrentScreen(currentRouteName);\n        }\n\n        // Save the current route name for later comparision\n        routeNameRef.current = currentRouteName;\n      }}\n    >\n      {/* ... */}\n    </NavigationContainer>\n  );\n}\n")))}u.isMDXComponent=!0},487:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(i,".").concat(b)]||p[b]||f[b]||o;return n?a.a.createElement(d,c({ref:t},l,{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);