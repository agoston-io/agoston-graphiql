import{C as a}from"./codemirror.es-Bh644rv_.js";import{o,l as s,L as i,P as l}from"./index-CRAp5g8E.js";import{i as n}from"./mode-indent.es-Dvf_-b54.js";import"./codemirror.es2-CXusOVRv.js";const p=e=>{const r=o({eatWhitespace:t=>t.eatWhile(s),lexRules:i,parseRules:l,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:r.startState,token:r.token,indent:n,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}};a.defineMode("graphql",p);
