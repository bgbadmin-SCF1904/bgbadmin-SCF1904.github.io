"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[176],{4176:(t,e,a)=>{a.r(e),a.d(e,{default:()=>nt});var l=a(9835),i=a(6970);const s={class:"q-pa-md",style:{"max-width":"500px"}},c={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},n={class:"q-pa-md q-gutter-sm"},o=(0,l._)("div",{class:"text-h6"},"Spiel erfassen",-1),d={class:"q-pt-md"},m={class:"q-gutter-sm"},u={class:"q-pt-md",style:{"max-width":"300px"}},h={class:"row items-center justify-end"},r={class:"row items-center justify-end"},p={class:"q-pt-md",style:{"max-width":"300px"}},w=(0,l._)("span",{class:"q-ml-sm"},"Dieses Spiel besteht bereits!",-1),b=(0,l._)("div",{class:"text-h6"},"Spiel ändern",-1),x={class:"q-pt-md"},f={class:"q-gutter-sm"},M={class:"q-pt-md",style:{"max-width":"300px"}},_={class:"row items-center justify-end"},g={class:"row items-center justify-end"},W={class:"q-pt-md",style:{"max-width":"300px"}},y=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function v(t,e,a,v,q,V){const U=(0,l.up)("q-toolbar-title"),$=(0,l.up)("q-btn"),k=(0,l.up)("q-toolbar"),D=(0,l.up)("q-item-label"),H=(0,l.up)("q-item-section"),P=(0,l.up)("q-item"),A=(0,l.up)("q-list"),I=(0,l.up)("q-card-section"),N=(0,l.up)("q-input"),R=(0,l.up)("q-checkbox"),S=(0,l.up)("q-date"),Z=(0,l.up)("q-popup-proxy"),Q=(0,l.up)("q-icon"),j=(0,l.up)("q-time"),C=(0,l.up)("q-separator"),L=(0,l.up)("q-card-actions"),T=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),E=(0,l.up)("q-avatar"),O=(0,l.up)("q-img"),z=(0,l.up)("q-page"),K=(0,l.Q2)("ripple"),B=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(z,null,{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(k,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Spiele")])),_:1}),v.IsAdministrator?((0,l.wg)(),(0,l.j4)($,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=t=>v.addMatch=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",c,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(q.matchObject,((t,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(A,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(P,{clickable:"",onClick:e=>V.onMatchClick(t.matchId,t.match,t.published,t.date+" "+t.time,t.annotations)},{default:(0,l.w5)((()=>[(0,l.Wm)(H,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Spiel: "+(0,i.zw)(t.match),1)])),_:2},1024),(0,l.Wm)(D,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Wann: "+(0,i.zw)(t.date)+" - "+(0,i.zw)(t.time),1)])),_:2},1024),"TRUE"===t.published?((0,l.wg)(),(0,l.j4)(D,{key:0,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Publiziert: Ja")])),_:1})):(0,l.kq)("",!0),"FALSE"===t.published?((0,l.wg)(),(0,l.j4)(D,{key:1,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Publiziert: Nein")])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(D,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Kommentar: "+(0,i.zw)(t.annotations),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[K]])])),_:2},1024)),[[K]]))),128))]),(0,l._)("div",n,[(0,l.Wm)(Y,{modelValue:v.addMatch,"onUpdate:modelValue":e[8]||(e[8]=t=>v.addMatch=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[o])),_:1}),(0,l.Wm)(I,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:v.txtMatchNew,"onUpdate:modelValue":e[1]||(e[1]=t=>v.txtMatchNew=t),autofocus:"",label:"Spiel"},null,8,["modelValue"]),(0,l._)("div",d,[(0,l._)("div",m,[(0,l._)("div",null,[(0,l.Wm)(R,{"left-label":"",modelValue:v.chbPublishedNew,"onUpdate:modelValue":e[2]||(e[2]=t=>v.chbPublishedNew=t),label:"Publizieren"},null,8,["modelValue"])])])]),(0,l._)("div",u,[(0,l.Wm)(N,{filled:"",modelValue:v.txtDatetimeNew,"onUpdate:modelValue":e[5]||(e[5]=t=>v.txtDatetimeNew=t)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(Q,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{modelValue:v.txtDatetimeNew,"onUpdate:modelValue":e[3]||(e[3]=t=>v.txtDatetimeNew=t),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",h,[(0,l.wy)((0,l.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[B]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(Q,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(j,{modelValue:v.txtDatetimeNew,"onUpdate:modelValue":e[4]||(e[4]=t=>v.txtDatetimeNew=t),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.wy)((0,l.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[B]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",p,[(0,l.Wm)(N,{modelValue:v.txtAnnotationsNew,"onUpdate:modelValue":e[6]||(e[6]=t=>v.txtAnnotationsNew=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(C),(0,l.Wm)(L,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)($,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,l.wy)((0,l.Wm)($,{icon:"save",label:"Speichern",onClick:e[7]||(e[7]=t=>V.addMatchSave(v.txtMatchNew,v.chbPublishedNew,v.txtDatetimeNew,v.txtAnnotationsNew)),disable:""===v.txtMatchNew},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:v.showMatchExists,"onUpdate:modelValue":e[9]||(e[9]=t=>v.showMatchExists=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{icon:"pan_tool",color:"primary","text-color":"white"}),w])),_:1}),(0,l.Wm)(L,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)($,{flat:"",label:"Schliessen",color:"primary"},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:v.editMatch,"onUpdate:modelValue":e[18]||(e[18]=t=>v.editMatch=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(I,null,{default:(0,l.w5)((()=>[b])),_:1}),(0,l.Wm)(I,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(N,{dense:"",modelValue:v.txtMatch,"onUpdate:modelValue":e[10]||(e[10]=t=>v.txtMatch=t),autofocus:"",label:"Spiel"},null,8,["modelValue"]),(0,l._)("div",x,[(0,l._)("div",f,[(0,l._)("div",null,[(0,l.Wm)(R,{"left-label":"",modelValue:v.chbPublished,"onUpdate:modelValue":e[11]||(e[11]=t=>v.chbPublished=t),label:"Publizieren"},null,8,["modelValue"])])])]),(0,l._)("div",M,[(0,l.Wm)(N,{filled:"",modelValue:v.txtDatetime,"onUpdate:modelValue":e[14]||(e[14]=t=>v.txtDatetime=t)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(Q,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{modelValue:v.txtDatetime,"onUpdate:modelValue":e[12]||(e[12]=t=>v.txtDatetime=t),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",_,[(0,l.wy)((0,l.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[B]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(Q,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(j,{modelValue:v.txtDatetime,"onUpdate:modelValue":e[13]||(e[13]=t=>v.txtDatetime=t),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l.wy)((0,l.Wm)($,{label:"Close",color:"primary",flat:""},null,512),[[B]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",W,[(0,l.Wm)(N,{modelValue:v.txtAnnotations,"onUpdate:modelValue":e[15]||(e[15]=t=>v.txtAnnotations=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(C),(0,l.Wm)(L,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[v.IsAdministrator?((0,l.wg)(),(0,l.j4)($,{key:0,icon:"delete",color:"primary",onClick:e[16]||(e[16]=t=>v.delMatch=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)($,{flat:"",label:"Abbrechen"},null,512),[[B]]),(0,l.wy)((0,l.Wm)($,{icon:"save",label:"Speichern",onClick:e[17]||(e[17]=t=>V.editMatchSave(v.txtMatchId,v.txtMatch,v.txtMatchOld,v.chbPublished,v.txtDatetime,v.txtAnnotations)),disable:""===v.txtMatch},null,8,["disable"]),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:v.delMatch,"onUpdate:modelValue":e[20]||(e[20]=t=>v.delMatch=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(E,{icon:"delete",color:"primary","text-color":"white"}),y])),_:1}),(0,l.Wm)(L,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)($,{flat:"",label:"Nein",color:"primary"},null,512),[[B]]),(0,l.wy)((0,l.Wm)($,{flat:"",label:"Ja",color:"primary",onClick:e[19]||(e[19]=t=>V.archiveMatch(v.txtMatchId,v.txtDatetime))},null,512),[[B]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(O,{src:"statics/BGB.jpg",class:"header-image absolute-top"})])),_:1})}a(9665),a(6727);var q=a(4136),V=a(499);const U=(0,V.iH)(""),$=(0,V.iH)(""),k=(0,V.iH)(""),D=(0,V.iH)(!1),H=(0,V.iH)(""),P=(0,V.iH)(""),A={name:"ListMatch",setup(){return{IsAdministrator:(0,V.iH)(!0),txtMatchId:(0,V.iH)(U),txtMatch:(0,V.iH)($),txtMatchOld:(0,V.iH)(k),chbPublished:(0,V.iH)(D),txtDatetime:(0,V.iH)(H),txtAnnotations:(0,V.iH)(P),txtMatchNew:(0,V.iH)(""),chbPublishedNew:(0,V.iH)(!1),txtDatetimeNew:(0,V.iH)(""),txtAnnotationsNew:(0,V.iH)("<STANDARDTEXT>"),addMatch:(0,V.iH)(!1),showMatchExists:(0,V.iH)(!1),editMatch:(0,V.iH)(!1),delMatch:(0,V.iH)(!1)}},data(){return{URLMatch:q.URLMatch,URLParticipant:q.URLParticipant,URLParticipantArchive:q.URLParticipantArchive,matchObject:[{match:"",published:"",time:"",annotations:"",date:"",matchId:""}]}},computed:{},mounted(){this.getTableMatch()},methods:{getTableMatch(){this.matchObject=[];const t=this.IsAdministrator?"":"TRUE";this.$axios(`${this.URLMatch}&func=Read&published=${t}`).then((t=>{this.tableMatch=t.data.split("\n");for(let e=0;e<this.tableMatch.length-1;e++){const t=this.tableMatch[e].split(",");this.setMatchObject(t[2],t[3],t[4].substring(0,5),t[5].replace(/<br>/g,"\n"),t[6],t[7])}})).catch((t=>{console.log(t)}))},setMatchObject(t,e,a,l,i,s){this.matchObject.push({match:t,published:e,time:a,annotations:l,date:i,matchId:s})},onMatchClick(t,e,a,l,i){U.value=t,$.value=e,k.value=e,D.value="TRUE"===a,H.value=l,P.value=i,this.IsAdministrator&&(this.editMatch=!0)},addMatchSave(t,e,a,l){const i=this.matchObject.map((t=>t.match)),s=i.includes(t);if(s)this.showMatchExists=!0;else{const i=a.substring(0,10),s=a.substring(11,5);this.$axios(`${this.URLMatch}&func=Add&match=${encodeURI(t.replace(","," "))}&published=${e}&time=${s}&annotations=${encodeURI(l.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&date=${i}`).then((t=>{"Success, requested action completed"===t.data&&this.getTableMatch()})).catch((t=>{console.log(t)}))}},editMatchSave(t,e,a,l,i,s){const c=this.matchObject.map((t=>t.match)),n=c.includes(e)&&e!==a;if(n)this.showMatchExists=!0;else{const a=i.substring(0,10),c=i.substring(11,5),n=e.trim()+" "+a.substring(0,6)+a.substring(8,2)+" - "+c.substring(0,5);this.$axios(`${this.URLMatch}&func=Update&matchId=${t}&match=${encodeURI(e.replace(","," "))}&published=${l}&time=${c}&annotations=${encodeURI(s.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&date=${a}`).then((e=>{"Success, requested action completed"===e.data&&this.$axios(`${this.URLParticipant}&func=UpdateMatch&matchId=${t}&newMatch=${n}`).then((t=>{"Success, requested action completed"===t.data&&this.getTableMatch()})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}},async archiveMatch(t,e){const a=e.substring(0,10),l=t=>new Promise((e=>setTimeout(e,t)));this.$axios(`${this.URLParticipant}&func=ReadAll&matchId=${t}`).then((async t=>{this.tableParticipant=t.data.split("\n");for(let e=0;e<this.tableParticipant.length-1;e++){const t=this.tableParticipant[e].split(",");await l(1e3),this.$axios(`${this.URLParticipantArchive}&func=Add&timestamp=${t[1]}&match=${t[2]}&participant=${t[3]}&arrival=${t[4]}&annotations=${t[5]}&action=${t[6]}&reaction=${t[7]}&date=${a}`).catch((t=>{console.log(t)}))}})).catch((t=>{console.log(t)})),this.deleteMatch(t)},deleteMatch(t){this.$axios(`${this.URLParticipant}&func=DeleteMatch&matchId=${t}`).then((e=>{"Success, requested action completed"===e.data&&this.$axios(`${this.URLMatch}&func=Delete&matchId=${t}`).then((t=>{"Success, requested action completed"===t.data&&(this.getTableMatch(),this.editMatch=!1)})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}}};var I=a(1639),N=a(9885),R=a(1663),S=a(1973),Z=a(8879),Q=a(3246),j=a(490),C=a(1233),L=a(3115),T=a(2074),Y=a(4458),E=a(3190),O=a(6611),z=a(1006),K=a(2857),B=a(2765),J=a(2952),F=a(6770),G=a(926),X=a(1821),tt=a(1357),et=a(335),at=a(1136),lt=a(2146),it=a(9984),st=a.n(it);const ct=(0,I.Z)(A,[["render",v]]),nt=ct;st()(A,"components",{QPage:N.Z,QToolbar:R.Z,QToolbarTitle:S.Z,QBtn:Z.Z,QList:Q.Z,QItem:j.Z,QItemSection:C.Z,QItemLabel:L.Z,QDialog:T.Z,QCard:Y.Z,QCardSection:E.Z,QInput:O.Z,QCheckbox:z.Z,QIcon:K.Z,QPopupProxy:B.Z,QDate:J.Z,QTime:F.Z,QSeparator:G.Z,QCardActions:X.Z,QAvatar:tt.Z,QImg:et.Z}),st()(A,"directives",{Ripple:at.Z,ClosePopup:lt.Z})}}]);