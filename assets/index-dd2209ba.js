import{d as x,v as B,H as $,g as C,o as S,c as f,l as u,k as i,i as a,y as s,b as g,j as E,t as j,n as w,a as d,C as F,I as R,u as A,h as I,f as U}from"./index-eb84d8c7.js";import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-d4d8cf13.js";import{_ as t}from"./index.vue_vue_type_script_setup_true_lang-59ecaf11.js";const G={key:0},H={key:1,class:"label-input"},L=["for"],M={key:0,class:"label-rice"},O={class:"two-drop-box"},P=["onClick"],T=x({__name:"Step1",setup(v){const{schema:m,handleValidate:r}=B(),{doUserField:y,originUserField:b,getRegistrationFormInfo:c,dropdownAll:l}=$(),e=C({field:{}}),p=()=>{let o=!0;e.field=b(o),c(),console.log("fromData.field?",e.field)},k=()=>{},V=()=>{console.log("fromData",e.field);let o=Object.values(e.field);for(let n in o)console.log("label-inARY:",o[n].field),r(o[n]).then(_=>{const{isSuccess:h,data:D}=_;e.field[o[n].field].err=h?"":D,console.log("fromData-doing",e.field)});console.log("ary:",o)};return S(()=>{p()}),(o,n)=>{const _=w("el-input");return e.field?(d(),f("form",G,[e.field.phoneNumber?(d(),u(_,{key:0,modelValue:e.field.phoneNumber.value,"onUpdate:modelValue":n[0]||(n[0]=h=>e.field.phoneNumber.value=h),placeholder:"Please input",clearable:""},null,8,["modelValue"])):i("",!0),a(t,{label:e.field.phoneNumber},null,8,["label"]),a(t,{label:e.field.validateCode},null,8,["label"]),a(t,{label:e.field.email},null,8,["label"]),a(t,{label:e.field.chLastName},null,8,["label"]),a(t,{label:e.field.chName},null,8,["label"]),a(t,{label:e.field.enLastName},null,8,["label"]),a(t,{label:e.field.enName},null,8,["label"]),a(t,{label:e.field.sex,items:s(l).data.sexs},null,8,["label","items"]),a(t,{label:e.field.ageGroups,items:s(l).data.ageGroup},null,8,["label","items"]),a(t,{label:e.field.dob},null,8,["label"]),e.field.addressId?(d(),f("div",H,[g("label",{for:e.field.addressId.field},[e.field.addressId.edit?(d(),f("div",M,"*")):i("",!0),E(" "+j(e.field.addressId.label),1)],8,L),g("div",O,[s(l).data.areas&&s(l).data.areas.length>0?(d(),u(N,{key:0,css:"address-drop",inputId:e.field.addressId.field,items:s(l).data.areas,readonly:!e.field.addressId.edit,type:"search",onChange:k},null,8,["inputId","items","readonly"])):i("",!0),s(l).data.districts&&s(l).data.districts.length>0?(d(),u(N,{key:1,css:"address-drop",inputId:e.field.districtsid.field,items:s(l).data.districts,readonly:!e.field.districtsid.edit,type:"search",onChange:k},null,8,["inputId","items","readonly"])):i("",!0)])])):i("",!0),a(t,{label:e.field.housingEstatesId,items:s(l).data.housingEstatesId},null,8,["label","items"]),a(t,{label:e.field.textForHousingEstate},null,8,["label"]),a(t,{label:e.field.unit},null,8,["label"]),a(t,{label:e.field.jobId,items:s(l).data.jobs},null,8,["label","items"]),a(t,{label:e.field.incomesId,items:s(l).data.incomesgroups},null,8,["label","items"]),g("button",{onClick:F(V,["prevent"])},"test click",8,P)])):i("",!0)}}}),Y={};function q(v,m){return null}const z=R(Y,[["render",q]]),W=x({__name:"index",setup(v){const m=A(),r=I(1);C({arr:[]}),I("");const y=U(()=>[{icon:"fa-user-plus",routerName:"Registration",text:"會員登記"}]),b=()=>{m.setBreadcrumbs(y.value)},c=l=>{r.value=l};return S(()=>{b()}),(l,e)=>(d(),f("div",null,[r.value==1?(d(),u(T,{key:0,onDone:e[0]||(e[0]=p=>c(1))})):i("",!0),r.value==2?(d(),u(z,{key:1,onBack:e[1]||(e[1]=p=>c(2))})):i("",!0)]))}});export{W as default};
