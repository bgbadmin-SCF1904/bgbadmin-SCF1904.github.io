"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[66],{1066:(t,e,a)=>{a.r(e),a.d(e,{default:()=>Rt});var i=a(9835),n=a(6970);const s=t=>((0,i.dD)("data-v-49607ec2"),t=t(),(0,i.Cn)(),t),c={class:"q-pa-md"},l=s((()=>(0,i._)("div",{class:"absolute-center text-h6 text-center text-black"}," VS.  ",-1))),r={key:0,class:"q-pa-md",style:{"max-width":"500px"}},o={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},d={class:"q-gutter-y-md column",style:{"max-width":"470px"}},p={class:"q-pa-md",style:{"max-width":"470px"}},m=["src"],h={class:"q-pa-md",style:{"max-width":"470px"}},u={class:"q-pa-md q-gutter-sm"},x=s((()=>(0,i._)("div",{class:"text-h6"},"Übersicht teilen",-1))),g={class:"q-pt-md",style:{"max-width":"350px"}},k=s((()=>(0,i._)("div",{class:"text-h6"},"Teilnahme erfassen",-1))),w={class:"q-pt-md",style:{"max-width":"350px"}},b=s((()=>(0,i._)("span",{class:"q-ml-sm"},"Diese Teilnahme besteht bereits!",-1))),f=s((()=>(0,i._)("div",{class:"text-h6"},"Teilnahme ändern",-1))),A={class:"q-pt-md",style:{"max-width":"350px"}},v=s((()=>(0,i._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1))),T=s((()=>(0,i._)("div",{class:"text-h6"},"Karte zuweisen",-1))),P=s((()=>(0,i._)("div",{class:"text-h6"},"Freigabe oder Bedarf ändern",-1))),y={class:"q-pt-md",style:{"max-width":"350px"}},O=s((()=>(0,i._)("div",{class:"text-h6"},"Kartenzuweisung",-1))),_=s((()=>(0,i._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1))),I=s((()=>(0,i._)("span",{class:"q-ml-sm"},"Kartenzuweisung aufheben?",-1)));function W(t,e,a,s,W,M){const C=(0,i.up)("q-item-label"),q=(0,i.up)("q-item-section"),R=(0,i.up)("q-item"),V=(0,i.up)("q-list"),N=(0,i.up)("q-btn-dropdown"),H=(0,i.up)("q-img"),L=(0,i.up)("q-card-section"),U=(0,i.up)("q-separator"),j=(0,i.up)("q-btn"),$=(0,i.up)("q-card-actions"),S=(0,i.up)("q-card"),G=(0,i.up)("q-input"),z=(0,i.up)("q-toolbar-title"),K=(0,i.up)("q-toolbar"),D=(0,i.up)("q-badge"),Z=(0,i.up)("q-avatar"),Q=(0,i.up)("q-dialog"),E=(0,i.up)("q-select"),B=(0,i.up)("q-page"),F=(0,i.Q2)("close-popup"),J=(0,i.Q2)("ripple");return(0,i.wg)(),(0,i.j4)(B,null,{default:(0,i.w5)((()=>[(0,i._)("div",c,[(0,i.Wm)(N,{split:"",color:"primary",push:"",glossy:"","no-caps":"",icon:"star",label:"Spiel auswählen"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(W.matchObject,((t,e)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(V,{key:e},{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(R,{clickable:"",onClick:e=>M.onMatchClick(t.match,t.matchId,t.time,t.annotations,t.date)},{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(C,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.match),1)])),_:2},1024),(0,i.Wm)(C,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.date)+" - "+(0,n.zw)(t.time),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[F]])])),_:2},1024)),[[J]]))),128))])),_:1})]),(0,i.Wm)(S,{class:"my-card",style:{"max-width":"500px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,{horizontal:""},{default:(0,i.w5)((()=>[(0,i.Wm)(H,{class:"col-5",src:M.getImageHomeTeam()},null,8,["src"]),M.getImageHomeTeam()!==M.getImageAwayTeam()?((0,i.wg)(),(0,i.j4)(L,{key:0},{default:(0,i.w5)((()=>[l])),_:1})):(0,i.kq)("",!0),(0,i.Wm)(H,{src:M.getImageAwayTeam()},null,8,["src"])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{align:"center"},{default:(0,i.w5)((()=>[(0,i.Wm)(j,{flat:"",class:"text-h5 text-center text-black"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(s.txtMatchName),1)])),_:1})])),_:1})])),_:1}),s.IsAdministrator?((0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(j,{class:"bg-white text-primary",icon:"share",label:"Übersicht teilen",onClick:e[0]||(e[0]=t=>M.setTextShare(s.txtMatchName))})])):(0,i.kq)("",!0),(0,i._)("div",o,[(0,i._)("div",d,[(0,i.Wm)(G,{dark:"",outlined:"",modelValue:s.txtAnnotationsMatch,"onUpdate:modelValue":e[1]||(e[1]=t=>s.txtAnnotationsMatch=t),"input-class":"text-overline",type:"textarea",readonly:!0},null,8,["modelValue"])]),(0,i._)("div",p,[(0,i.Wm)(K,{class:"bg-primary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"text-overline"},{default:(0,i.w5)((()=>[(0,i.Uk)("Anwesend ("+(0,n.zw)(s.txtNumberOfParticipants)+" Personen)",1)])),_:1}),(0,i.Wm)(j,{class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[2]||(e[2]=t=>s.addParticipant=!0)})])),_:1})]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(W.participantObject,((t,e)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(V,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(R,{clickable:"",onClick:e=>M.onParticipantClick(t.participantId,t.participant,t.arrival,t.annotations,t.action,t.reaction)},{default:(0,i.w5)((()=>[(0,i.Wm)(q,{avatar:""},{default:(0,i.w5)((()=>[M.hasAvatar(t.participant)?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(Z,{key:0,size:"70px",color:"deep-orange-10","text-color":"white"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.participant.substring(0,1))+" ",1),M.isReservation(t.arrival,s.txtTime)?((0,i.wg)(),(0,i.j4)(D,{key:0,floating:"",color:"teal"},{default:(0,i.w5)((()=>[(0,i.Uk)("reserviert")])),_:1})):(0,i.kq)("",!0)])),_:2},1024)),M.hasAvatar(t.participant)?((0,i.wg)(),(0,i.j4)(Z,{key:1,size:"70px"},{default:(0,i.w5)((()=>[(0,i._)("img",{src:M.getAvatar()},null,8,m),M.isReservation(t.arrival,s.txtTime)?((0,i.wg)(),(0,i.j4)(D,{key:0,floating:"",color:"teal"},{default:(0,i.w5)((()=>[(0,i.Uk)("reserviert")])),_:1})):(0,i.kq)("",!0)])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1024),(0,i.Wm)(q,null,{default:(0,i.w5)((()=>[(0,i.Wm)(C,{overline:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.participant),1)])),_:2},1024),(0,i.Wm)(C,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.arrival),1)])),_:2},1024),(0,i.Wm)(C,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.annotations),1)])),_:2},1024),""!==t.reaction?((0,i.wg)(),(0,i.j4)(C,{key:0,caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.reaction),1)])),_:2},1024)):(0,i.kq)("",!0)])),_:2},1024)])),_:2},1032,["onClick"])),[[J]])])),_:2},1024)),[[J]]))),128)),(0,i._)("div",h,[(0,i.Wm)(K,{class:"bg-primary text-white"},{default:(0,i.w5)((()=>[(0,i.Wm)(z,{class:"text-overline"},{default:(0,i.w5)((()=>[(0,i.Uk)("Karte weitergegeben oder bedarf")])),_:1}),s.IsAdministrator?((0,i.wg)(),(0,i.j4)(j,{key:0,class:"bg-white text-primary",icon:"credit_card",label:"Zuweisung",onClick:e[3]||(e[3]=t=>s.addTicketAssignment=!0)})):(0,i.kq)("",!0)])),_:1})]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(W.ticketObject,((t,e)=>(0,i.wy)(((0,i.wg)(),(0,i.j4)(V,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,i.w5)((()=>[(0,i.wy)(((0,i.wg)(),(0,i.j4)(R,{clickable:"",onClick:e=>M.onTicketAssignmentClick(t.ticketParticipantId,t.ticketParticipant,t.ticketArrival,t.ticketAnnotations,t.ticketAction,t.ticketReaction)},{default:(0,i.w5)((()=>[(0,i.Wm)(q,null,{default:(0,i.w5)((()=>["brauche Karte"===t.ticketAction?((0,i.wg)(),(0,i.j4)(C,{key:0,overline:""},{default:(0,i.w5)((()=>[(0,i.Uk)("??? an "+(0,n.zw)(t.ticketParticipant),1)])),_:2},1024)):(0,i.kq)("",!0),"meine Karte ist frei"===t.ticketAction&&""===t.ticketReaction?((0,i.wg)(),(0,i.j4)(C,{key:1,overline:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.ticketParticipant)+" an ???",1)])),_:2},1024)):(0,i.kq)("",!0),"meine Karte ist frei"===t.ticketAction&&""!==t.ticketReaction?((0,i.wg)(),(0,i.j4)(C,{key:2,overline:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.ticketParticipant)+" an "+(0,n.zw)(t.ticketReaction),1)])),_:2},1024)):(0,i.kq)("",!0),(0,i.Wm)(C,{caption:""},{default:(0,i.w5)((()=>[(0,i.Uk)((0,n.zw)(t.ticketAnnotations),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[J]])])),_:2},1024)),[[J]]))),128))]),(0,i._)("div",u,[(0,i.Wm)(Q,{modelValue:s.share,"onUpdate:modelValue":e[5]||(e[5]=t=>s.share=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[x])),_:1}),(0,i.Wm)(L,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i._)("div",g,[(0,i.Wm)(G,{modelValue:s.txtShare,"onUpdate:modelValue":e[4]||(e[4]=t=>s.txtShare=t),filled:"",type:"textarea",rows:"35"},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{class:"text-primary",align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Abbrechen"},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.addParticipant,"onUpdate:modelValue":e[11]||(e[11]=t=>s.addParticipant=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(L,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(G,{dense:"",modelValue:s.txtParticipantNew,"onUpdate:modelValue":e[6]||(e[6]=t=>s.txtParticipantNew=t),autofocus:"",label:"Name"},null,8,["modelValue"]),(0,i.Wm)(E,{modelValue:s.txtActionNew,"onUpdate:modelValue":e[7]||(e[7]=t=>s.txtActionNew=t),options:s.cbxActionOptions,label:"Aktion"},null,8,["modelValue","options"]),"bin dabei"===s.txtActionNew?((0,i.wg)(),(0,i.j4)(E,{key:0,modelValue:s.txtArrivalNew,"onUpdate:modelValue":e[8]||(e[8]=t=>s.txtArrivalNew=t),options:s.cbxArrivalOptions,label:"Ankunft"},null,8,["modelValue","options"])):(0,i.kq)("",!0),(0,i._)("div",w,[(0,i.Wm)(G,{modelValue:s.txtAnnotationsParticipantNew,"onUpdate:modelValue":e[9]||(e[9]=t=>s.txtAnnotationsParticipantNew=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{class:"text-primary",align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Abbrechen"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{icon:"save",label:"Speichern",onClick:e[10]||(e[10]=t=>M.addParticipantSave(s.txtParticipantNew,s.txtArrivalNew,s.txtAnnotationsParticipantNew,s.txtActionNew,s.txtMatchName,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtParticipantNew},null,8,["disable"]),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.showParticipantExists,"onUpdate:modelValue":e[12]||(e[12]=t=>s.showParticipantExists=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Wm)(L,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{icon:"pan_tool",color:"primary","text-color":"white"}),b])),_:1}),(0,i.Wm)($,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Schliessen",color:"primary"},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.editParticipant,"onUpdate:modelValue":e[22]||(e[22]=t=>s.editParticipant=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(L,{class:"q-pt-none"},{default:(0,i.w5)((()=>[""===s.txtParticipantReaction?((0,i.wg)(),(0,i.j4)(G,{key:0,dense:"",modelValue:s.txtParticipantParticipant,"onUpdate:modelValue":e[13]||(e[13]=t=>s.txtParticipantParticipant=t),autofocus:"",label:"Name",readonly:!1},null,8,["modelValue"])):(0,i.kq)("",!0),""!==s.txtParticipantReaction?((0,i.wg)(),(0,i.j4)(G,{key:1,dense:"",modelValue:s.txtParticipantParticipant,"onUpdate:modelValue":e[14]||(e[14]=t=>s.txtParticipantParticipant=t),autofocus:"",label:"Name",readonly:!0},null,8,["modelValue"])):(0,i.kq)("",!0),""===s.txtParticipantReaction?((0,i.wg)(),(0,i.j4)(E,{key:2,modelValue:s.txtParticipantAction,"onUpdate:modelValue":e[15]||(e[15]=t=>s.txtParticipantAction=t),options:s.cbxActionOptions,label:"Aktion",readonly:!1},null,8,["modelValue","options"])):(0,i.kq)("",!0),""!==s.txtParticipantReaction?((0,i.wg)(),(0,i.j4)(E,{key:3,modelValue:s.txtParticipantAction,"onUpdate:modelValue":e[16]||(e[16]=t=>s.txtParticipantAction=t),options:s.cbxActionOptions,label:"Aktion",readonly:!0},null,8,["modelValue","options"])):(0,i.kq)("",!0),"bin dabei"===s.txtParticipantAction?((0,i.wg)(),(0,i.j4)(E,{key:4,modelValue:s.txtParticipantArrival,"onUpdate:modelValue":e[17]||(e[17]=t=>s.txtParticipantArrival=t),options:s.cbxArrivalOptions,label:"Ankunft"},null,8,["modelValue","options"])):(0,i.kq)("",!0),""!==s.txtParticipantReaction?((0,i.wg)(),(0,i.j4)(G,{key:5,class:"text-italic",dense:"",modelValue:s.txtParticipantReaction,"onUpdate:modelValue":e[18]||(e[18]=t=>s.txtParticipantReaction=t),readonly:!0},null,8,["modelValue"])):(0,i.kq)("",!0),(0,i._)("div",A,[(0,i.Wm)(G,{modelValue:s.txtParticipantAnnotations,"onUpdate:modelValue":e[19]||(e[19]=t=>s.txtParticipantAnnotations=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{class:"text-primary",align:"right"},{default:(0,i.w5)((()=>[s.IsAdministrator&&""===s.txtParticipantReaction?((0,i.wg)(),(0,i.j4)(j,{key:0,icon:"delete",color:"primary",onClick:e[20]||(e[20]=t=>s.delParticipant=!0)})):(0,i.kq)("",!0),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Abbrechen"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{icon:"save",label:"Speichern",onClick:e[21]||(e[21]=t=>M.editParticipantSave(s.txtParticipantId,s.txtParticipantParticipant,s.txtParticipantParticipantOld,s.txtParticipantArrival,s.txtParticipantAnnotations,s.txtParticipantAction,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtParticipantParticipant},null,8,["disable"]),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.delParticipant,"onUpdate:modelValue":e[24]||(e[24]=t=>s.delParticipant=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Wm)(L,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{icon:"delete",color:"primary","text-color":"white"}),v])),_:1}),(0,i.Wm)($,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Nein",color:"primary"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Ja",color:"primary",onClick:e[23]||(e[23]=t=>M.deleteParticipant(s.txtParticipantId,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal))},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.addTicketAssignment,"onUpdate:modelValue":e[28]||(e[28]=t=>s.addTicketAssignment=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[T])),_:1}),(0,i.Wm)(L,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(E,{modelValue:s.txtTicketAssignmentGiven,"onUpdate:modelValue":e[25]||(e[25]=t=>s.txtTicketAssignmentGiven=t),options:s.cbxTicketAssignmentGivenOptions,label:"Karte von"},null,8,["modelValue","options"]),(0,i.Wm)(E,{modelValue:s.txtTicketAssignmentRequired,"onUpdate:modelValue":e[26]||(e[26]=t=>s.txtTicketAssignmentRequired=t),options:s.cbxTicketAssignmentRequiredOptions,label:"Karte an"},null,8,["modelValue","options"])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{class:"text-primary",align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Abbrechen"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{icon:"save",label:"Speichern",onClick:e[27]||(e[27]=t=>M.addTicketAssignmentSave(s.txtTicketAssignmentGiven,s.txtTicketAssignmentRequired,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtTicketAssignmentGiven||""===s.txtTicketAssignmentRequired},null,8,["disable"]),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.editTicketAssignment,"onUpdate:modelValue":e[34]||(e[34]=t=>s.editTicketAssignment=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[P])),_:1}),(0,i.Wm)(L,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(G,{dense:"",modelValue:s.txtTicketParticipant,"onUpdate:modelValue":e[29]||(e[29]=t=>s.txtTicketParticipant=t),autofocus:"",label:"Name"},null,8,["modelValue"]),(0,i.Wm)(E,{modelValue:s.txtTicketAction,"onUpdate:modelValue":e[30]||(e[30]=t=>s.txtTicketAction=t),options:s.cbxActionOptions,label:"Aktion"},null,8,["modelValue","options"]),(0,i._)("div",y,[(0,i.Wm)(G,{modelValue:s.txtTicketAnnotations,"onUpdate:modelValue":e[31]||(e[31]=t=>s.txtTicketAnnotations=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{class:"text-primary",align:"right"},{default:(0,i.w5)((()=>[s.IsAdministrator?((0,i.wg)(),(0,i.j4)(j,{key:0,icon:"delete",color:"primary",onClick:e[32]||(e[32]=t=>s.delTicketAssignment=!0)})):(0,i.kq)("",!0),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Abbrechen"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{icon:"save",label:"Speichern",onClick:e[33]||(e[33]=t=>M.editTicketAssignmentSave(s.txtTicketParticipantId,s.txtTicketParticipant,s.txtTicketParticipantOld,s.txtTicketArrival,s.txtTicketAnnotations,s.txtTicketAction,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal)),disable:""===s.txtTicketParticipant},null,8,["disable"]),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.editTicketAssigned,"onUpdate:modelValue":e[38]||(e[38]=t=>s.editTicketAssigned=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,{style:{"min-width":"350px"}},{default:(0,i.w5)((()=>[(0,i.Wm)(L,null,{default:(0,i.w5)((()=>[O])),_:1}),(0,i.Wm)(L,{class:"q-pt-none"},{default:(0,i.w5)((()=>[(0,i.Wm)(G,{modelValue:s.txtTicketAssignmentGiven,"onUpdate:modelValue":e[35]||(e[35]=t=>s.txtTicketAssignmentGiven=t),label:"Karte von",readonly:!0},null,8,["modelValue"]),(0,i.Wm)(G,{modelValue:s.txtTicketAssignmentRequired,"onUpdate:modelValue":e[36]||(e[36]=t=>s.txtTicketAssignmentRequired=t),label:"Karte an",readonly:!0},null,8,["modelValue"])])),_:1}),(0,i.Wm)(U),(0,i.Wm)($,{class:"text-primary",align:"right"},{default:(0,i.w5)((()=>[s.IsAdministrator?((0,i.wg)(),(0,i.j4)(j,{key:0,icon:"swipe_left",label:"Aufheben",color:"primary",onClick:e[37]||(e[37]=t=>s.delTicketAssigned=!0)})):(0,i.kq)("",!0),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Abbrechen"},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.delTicketAssignment,"onUpdate:modelValue":e[40]||(e[40]=t=>s.delTicketAssignment=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Wm)(L,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{icon:"delete",color:"primary","text-color":"white"}),_])),_:1}),(0,i.Wm)($,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Nein",color:"primary"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Ja",color:"primary",onClick:e[39]||(e[39]=t=>M.deleteTicketAssignment(s.txtTicketParticipantId,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal))},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i.Wm)(Q,{modelValue:s.delTicketAssigned,"onUpdate:modelValue":e[42]||(e[42]=t=>s.delTicketAssigned=t),persistent:""},{default:(0,i.w5)((()=>[(0,i.Wm)(S,null,{default:(0,i.w5)((()=>[(0,i.Wm)(L,{class:"row items-center"},{default:(0,i.w5)((()=>[(0,i.Wm)(Z,{icon:"swipe_left",color:"primary","text-color":"white"}),I])),_:1}),(0,i.Wm)($,{align:"right"},{default:(0,i.w5)((()=>[(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Nein",color:"primary"},null,512),[[F]]),(0,i.wy)((0,i.Wm)(j,{flat:"",label:"Ja",color:"primary",onClick:e[41]||(e[41]=t=>M.deleteTicketAssigned(s.txtTicketAssignedGiven,s.txtTicketAssignedRequired,s.txtMatchId,s.txtTime,s.txtAnnotationsMatchOriginal))},null,512),[[F]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,i.Wm)(H,{src:"statics/BGB.jpg",class:"header-image absolute-top"})])),_:1})}a(9665),a(6727);var M=a(4136),C=a(499);const q=(0,C.iH)(""),R=(0,C.iH)(""),V=(0,C.iH)(""),N=(0,C.iH)(""),H=(0,C.iH)(""),L=(0,C.iH)(""),U=(0,C.iH)(""),j=[],$=(0,C.iH)(""),S=(0,C.iH)(""),G=(0,C.iH)(""),z=(0,C.iH)(""),K=(0,C.iH)(""),D=(0,C.iH)(""),Z=(0,C.iH)(""),Q=(0,C.iH)(""),E=(0,C.iH)(""),B=(0,C.iH)(""),F=(0,C.iH)(""),J=(0,C.iH)(""),Y=(0,C.iH)(""),X=(0,C.iH)(""),tt=[],et=[],at=(0,C.iH)(""),it=(0,C.iH)(""),nt=(0,C.iH)(""),st=(0,C.iH)(""),ct=(0,C.iH)(""),lt={name:"ListParticipant",setup(){return{IsAdministrator:(0,C.iH)(!0),txtMatchName:(0,C.iH)(L),txtMatchId:(0,C.iH)(U),txtTime:(0,C.iH)(R),txtAnnotationsMatchOriginal:(0,C.iH)(V),txtAnnotationsMatch:(0,C.iH)(N),cbxArrivalOptions:(0,C.iH)(j),txtNumberOfParticipants:(0,C.iH)($),addParticipant:(0,C.iH)(!1),showParticipantExists:(0,C.iH)(!1),editParticipant:(0,C.iH)(!1),delParticipant:(0,C.iH)(!1),share:(0,C.iH)(!1),addTicketAssignment:(0,C.iH)(!1),editTicketAssignment:(0,C.iH)(!1),editTicketAssigned:(0,C.iH)(!1),delTicketAssignment:(0,C.iH)(!1),delTicketAssigned:(0,C.iH)(!1),txtParticipantId:(0,C.iH)(S),txtParticipantParticipant:(0,C.iH)(G),txtParticipantParticipantOld:(0,C.iH)(z),txtParticipantArrival:(0,C.iH)(K),txtParticipantAnnotations:(0,C.iH)(D),txtParticipantAction:(0,C.iH)(Z),txtParticipantReaction:(0,C.iH)(Q),cbxActionOptions:["bin dabei","brauche Karte","meine Karte ist frei"],txtTicketParticipantId:(0,C.iH)(E),txtTicketParticipant:(0,C.iH)(B),txtTicketParticipantOld:(0,C.iH)(F),txtTicketArrival:(0,C.iH)(J),txtTicketAnnotations:(0,C.iH)(Y),txtTicketAction:(0,C.iH)(X),txtParticipantNew:(0,C.iH)(""),txtArrivalNew:(0,C.iH)(""),txtAnnotationsParticipantNew:(0,C.iH)(""),txtActionNew:(0,C.iH)("bin dabei"),cbxTicketAssignmentGivenOptions:(0,C.iH)(tt),cbxTicketAssignmentRequiredOptions:(0,C.iH)(et),txtTicketAssignmentGiven:(0,C.iH)(at),txtTicketAssignedGiven:(0,C.iH)(at),txtTicketAssignmentRequired:(0,C.iH)(it),txtTicketAssignedRequired:(0,C.iH)(it),txtShare:(0,C.iH)(ct)}},data(){return{URLMatch:M.URLMatch,URLParticipant:M.URLParticipant,URLWhereIsMyCard:M.URLWhereIsMyCard,matchObject:[{match:"",time:"",annotations:"",date:"",matchId:""}],participantObject:[{match:"",participant:"",arrival:"",annotations:"",action:"",reaction:"",participantId:""}],reservation:"",ticketObject:[{ticketParticipant:"",ticketArrival:"",ticketAnnotations:"",ticketAction:"",ticketReaction:"",ticketParticipantId:""}],ticketGivenObject:[{ticketGivenParticipant:"",ticketGivenParticipantId:""}],ticketRequiredObject:[{ticketRequiredParticipant:"",ticketRequiredParticipantId:""}],ticketAssignedObject:[{ticketAssignedParticipant:"",ticketAssignedParticipantId:""}],whereIsMyCardObject:[{cardHolder:"",discounted:"",whoHasTheCard:""}]}},computed:{},mounted(){this.getTableMatch()},methods:{getImageHomeTeam(){return this.txtMatchName.toLowerCase().indexOf("fest")>=0||this.txtMatchName.toLowerCase().indexOf("party")>=0||this.txtMatchName.toLowerCase().indexOf("anlass")>=0||this.txtMatchName.toLowerCase().indexOf("geburtstag")>=0||this.txtMatchName.toLowerCase().indexOf("event")>=0?"statics/Event.png":this.txtMatchName.toLowerCase().indexOf("test")>=0?"statics/Test.png":"statics/Freiburg.png"},getImageAwayTeam(){return this.txtMatchName.toLowerCase().indexOf("arminia")>=0?"statics/Arminia.png":this.txtMatchName.toLowerCase().indexOf("augsburg")>=0?"statics/Augsburg.png":this.txtMatchName.toLowerCase().indexOf("leverkusen")>=0?"statics/Bayer_Leverkusen.png":this.txtMatchName.toLowerCase().indexOf("bayern")>=0||this.txtMatchName.toLowerCase().indexOf("münchen")>=0?"statics/Bayern_München.png":this.txtMatchName.toLowerCase().indexOf("bochum")>=0?"statics/Bochum.png":this.txtMatchName.toLowerCase().indexOf("dortmund")>=0?"statics/Borussia_Dortmund.png":this.txtMatchName.toLowerCase().indexOf("gladbach")>=0?"statics/Borussia_Mönchengladbach.png":this.txtMatchName.toLowerCase().indexOf("darmstadt")>=0?"statics/Darmstadt.png":this.txtMatchName.toLowerCase().indexOf("braunschweig")>=0?"statics/Eintracht_Braunschweig.png":this.txtMatchName.toLowerCase().indexOf("frankfurt")>=0?"statics/Eintracht_Frankfurt.png":this.txtMatchName.toLowerCase().indexOf("fortuna")>=0||this.txtMatchName.toLowerCase().indexOf("düsseldorf")>=0?"statics/Fortuna_Düsseldorf.png":this.txtMatchName.toLowerCase().indexOf("greuther")>=0||this.txtMatchName.toLowerCase().indexOf("fürth")>=0?"statics/Greuther_Fürth.png":this.txtMatchName.toLowerCase().indexOf("hamburg")>=0||this.txtMatchName.toLowerCase().indexOf("hsv")>=0?"statics/Hamburger_SV.png":this.txtMatchName.toLowerCase().indexOf("hannover")>=0?"statics/Hannover.png":this.txtMatchName.toLowerCase().indexOf("hansa")>=0||this.txtMatchName.toLowerCase().indexOf("rostock")>=0?"statics/Hansa_Rostock.png":this.txtMatchName.toLowerCase().indexOf("heidenheim")>=0?"statics/Heidenheim.png":this.txtMatchName.toLowerCase().indexOf("hertha")>=0?"statics/Hertha.png":this.txtMatchName.toLowerCase().indexOf("hoffenheim")>=0?"statics/Hoffenheim.png":this.txtMatchName.toLowerCase().indexOf("holstein")>=0?"statics/Holstein.png":this.txtMatchName.toLowerCase().indexOf("jahn")>=0||this.txtMatchName.toLowerCase().indexOf("regensburg")>=0?"statics/Jahn_Regensburg.png":this.txtMatchName.toLowerCase().indexOf("fck")>=0||this.txtMatchName.toLowerCase().indexOf("kaiserslautern")>=0?"statics/Kaiserslautern.png":this.txtMatchName.toLowerCase().indexOf("ksc")>=0||this.txtMatchName.toLowerCase().indexOf("karlsruher")>=0?"statics/Karlsruher.png":this.txtMatchName.toLowerCase().indexOf("köln")>=0?"statics/Köln.png":this.txtMatchName.toLowerCase().indexOf("leipzig")>=0?"statics/Leipzig.png":this.txtMatchName.toLowerCase().indexOf("magdeburg")>=0?"statics/Magdeburg.png":this.txtMatchName.toLowerCase().indexOf("mainz")>=0?"statics/Mainz.png":this.txtMatchName.toLowerCase().indexOf("nürnberg")>=0?"statics/Nürnberg.png":this.txtMatchName.toLowerCase().indexOf("paderborn")>=0?"statics/Paderborn.png":this.txtMatchName.toLowerCase().indexOf("sandhausen")>=0?"statics/Sandhausen.png":this.txtMatchName.toLowerCase().indexOf("schalke")>=0?"statics/Schalke.png":this.txtMatchName.toLowerCase().indexOf("pauli")>=0?"statics/St._Pauli.png":this.txtMatchName.toLowerCase().indexOf("vfb")>=0||this.txtMatchName.toLowerCase().indexOf("stuttgart")>=0?"statics/Stuttgart.png":this.txtMatchName.toLowerCase().indexOf("union")>=0?"statics/Union_Berlin.png":this.txtMatchName.toLowerCase().indexOf("werder")>=0||this.txtMatchName.toLowerCase().indexOf("bremen")>=0?"statics/Werder_Bremen.png":this.txtMatchName.toLowerCase().indexOf("wolfsburg")>=0?"statics/Wolfsburg.png":this.txtMatchName.toLowerCase().indexOf("fest")>=0||this.txtMatchName.toLowerCase().indexOf("party")>=0||this.txtMatchName.toLowerCase().indexOf("anlass")>=0||this.txtMatchName.toLowerCase().indexOf("geburtstag")>=0||this.txtMatchName.toLowerCase().indexOf("event")>=0?"statics/Event.png":this.txtMatchName.toLowerCase().indexOf("test")>=0?"statics/Test.png":"statics/QuestionMark.png"},hasAvatar(t){return"Maddeis"===t},getAvatar(){return"statics/Freiburg.png"},isReservation(t,e){return""!==t&&(parseInt(t.substring(0,2))===parseInt(e.substring(0,2)-2)&&t.substring(3,2)===e.substring(3,2))},getTableMatch(){this.matchObject=[];let t="",e="",a="",i="",n="";this.$axios(`${this.URLMatch}&func=Read&published=TRUE`).then((s=>{this.tableMatch=s.data.split("\n");for(let c=0;c<this.tableMatch.length-1;c++){const s=this.tableMatch[c].split(",");this.setMatchObject(s[2],s[4].substring(0,5),s[5].replace(/<br>/g,"\n"),s[6],s[7]),0===c&&(t=s[2],a=s[4].substring(0,5),i=s[5].replace(/<br>/g,"\n"),n=s[6],e=s[7])}this.onMatchClick(t,e,a,i,n)})).catch((t=>{console.log(t)}))},setMatchObject(t,e,a,i,n){this.matchObject.push({match:t,time:e,annotations:a,date:i,matchId:n})},onMatchClick(t,e,a,i,n){q.value=t,R.value=a,H.value=n,L.value=t.trim()+" "+n.substring(0,6)+n.substring(8,2)+" - "+a.substring(0,5),U.value=e,this.loadReloadData(e,a,i)},async loadReloadData(t,e,a){this.setArrivalElements(e),this.getTableWhereIsMyCard();const i=t=>new Promise((e=>setTimeout(e,t)));await i(500),this.getTableParticipant(t,e,a),this.getTableTicket(t),this.getTableTicketGiven(t),this.getTableTicketRequired(t),this.getTableTicketAssigned(t)},setTextShare(t){ct.value=t+"\n\nAnwesend ("+$.value+" Personen):\n"+nt.value,ct.value+="\nKarte weitergeben oder bedarf:\n"+st.value,ct.value+="\n"+N.value,this.share=!0},onParticipantClick(t,e,a,i,n,s){S.value=t,G.value=e,z.value=e,K.value=a,D.value=i,Z.value=n,Q.value=""!==s?s:"",this.editParticipant=!0},addParticipantSave(t,e,a,i,n,s,c,l){"bin dabei"!==i&&(e="");const r=this.participantObject.map((t=>t.participant)),o=r.includes(t);o?this.showParticipantExists=!0:this.$axios(`${this.URLParticipant}&func=Add&match=${n}&participant=${encodeURI(t.replace(","," "))}&arrival=${e}&annotations=${encodeURI(a.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&action=${i}&reaction=&matchId=${s}`).then((t=>{"Success, requested action completed"===t.data&&this.loadReloadData(s,c,l)})).catch((t=>{console.log(t)}))},editParticipantSave(t,e,a,i,n,s,c,l,r){"bin dabei"!==s&&(i="");const o=this.participantObject.map((t=>t.participant)),d=o.includes(e)&&e!==a;d?this.showParticipantExists=!0:this.$axios(`${this.URLParticipant}&func=Update&participantId=${t}&participant=${encodeURI(e.replace(","," "))}&arrival=${i}&annotations=${encodeURI(n.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&action=${s}`).then((t=>{"Success, requested action completed"===t.data&&this.loadReloadData(c,l,r)})).catch((t=>{console.log(t)}))},deleteParticipant(t,e,a,i){this.$axios(`${this.URLParticipant}&func=Delete&participantId=${t}`).then((t=>{"Success, requested action completed"===t.data&&(this.editParticipant=!1,this.loadReloadData(e,a,i))})).catch((t=>{console.log(t)}))},onTicketAssignmentClick(t,e,a,i,n,s){E.value=t,B.value=e,F.value=e,J.value=a,Y.value=i,X.value=n,""!==s?(at.value=e,it.value=s,this.editTicketAssignment=!1,this.editTicketAssigned=!0):(it.value="",at.value="",this.editTicketAssignment=!0,this.editTicketAssigned=!1)},addTicketAssignmentSave(t,e,a,i,n){const s=this.ticketGivenObject.find((e=>e.ticketGivenParticipant===t))?.ticketGivenParticipantId;if("undefined"!==typeof s){this.$axios(`${this.URLParticipant}&func=UpdateTicketGiven&participantId=${s}&reaction=${e}`).catch((t=>{console.log(t)}));const c=this.ticketRequiredObject.find((t=>t.ticketRequiredParticipant===e))?.ticketRequiredParticipantId;"undefined"!==typeof c&&this.$axios(`${this.URLParticipant}&func=UpdateTicketRequired&participantId=${c}&action=bin dabei&reaction=${t}`).then((t=>{"Success, requested action completed"===t.data&&this.loadReloadData(a,i,n)})).catch((t=>{console.log(t)}))}},deleteTicketAssigned(t,e,a,i,n){const s=this.ticketAssignedObject.find((e=>e.ticketAssignedParticipant===t))?.ticketAssignedParticipantId;if("undefined"!==typeof s){this.$axios(`${this.URLParticipant}&func=UpdateTicketGiven&participantId=${s}&reaction=`).catch((t=>{console.log(t)}));const t=this.ticketAssignedObject.find((t=>t.ticketAssignedParticipant===e))?.ticketAssignedParticipantId;"undefined"!==typeof t&&this.$axios(`${this.URLParticipant}&func=UpdateTicketRequired&participantId=${t}&action=brauche Karte&reaction=`).then((t=>{"Success, requested action completed"===t.data&&(this.editTicketAssigned=!1,this.loadReloadData(a,i,n))})).catch((t=>{console.log(t)}))}},editTicketAssignmentSave(t,e,a,i,n,s,c,l,r){"bin dabei"!==s&&(i="");const o=this.ticketObject.map((t=>t.ticketParticipant)),d=o.includes(e)&&e!==a;d?this.showParticipantExists=!0:this.$axios(`${this.URLParticipant}&func=Update&participantId=${t}&participant=${encodeURI(e.replace(","," "))}&arrival=${i}&annotations=${encodeURI(n.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&action=${s}`).then((t=>{"Success, requested action completed"===t.data&&(this.editTicketAssignment=!1,this.loadReloadData(c,l,r))})).catch((t=>{console.log(t)}))},deleteTicketAssignment(t,e,a,i){this.$axios(`${this.URLParticipant}&func=Delete&participantId=${t}`).then((t=>{"Success, requested action completed"===t.data&&(this.editTicketAssignment=!1,this.loadReloadData(e,a,i))})).catch((t=>{console.log(t)}))},getTableParticipant(t,e,a){this.participantObject=[],this.reservation="";let i="Read";this.IsAdministrator&&(i="ReadAdmin"),this.$axios(`${this.URLParticipant}&func=${i}&matchId=${t}`).then((t=>{this.tableParticipant=t.data.split("\n"),$.value=this.tableParticipant.length-1;for(let e=0;e<$.value;e++){const t=this.tableParticipant[e].split(",");this.setParticipantObject(t[2],t[3],t[4].substring(0,5),t[5].replace(/<br>/g,"\n"),t[6],t[7],t[8])}nt.value="",this.participantObject.forEach((t=>{if(nt.value+=t.participant.trim(),nt.value+=" ("+t.arrival+")",this.isReservation(t.arrival,e)&&(""!==this.reservation&&(this.reservation+=", "),this.reservation+=t.participant.trim()),""!==t.annotations&&(nt.value+=" ("+t.annotations.trim().replace(/\n/g," / ")+")"),""!==t.reaction){const e=this.whereIsMyCardObject.find((e=>e.cardHolder===t.reaction))?.whoHasTheCard;"undefined"!==typeof e&&(t.reaction=t.reaction.trim()+" (Karte bei "+e+")"),t.reaction="habe Karte von "+t.reaction.trim(),nt.value+=", "+t.reaction.trim()}nt.value+="\n"})),""!==this.reservation&&(this.reservation+=","),V.value=a,N.value=a.replace(/<br>/g,"\n").replace("<STANDARDTEXT>","Wer reserviert Plätze ("+parseInt(e.substring(0,2)-2)+":"+e.substring(3,2)+"): "+this.reservation+" die Fahne und die Socken")})).catch((t=>{console.log(t)}))},setParticipantObject(t,e,a,i,n,s,c){this.participantObject.push({match:t,participant:e,arrival:a,annotations:i,action:n,reaction:s,participantId:c})},getTableTicket(t){this.ticketObject=[],this.$axios(`${this.URLParticipant}&func=ReadTickets&matchId=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let e=0;e<this.tableTicket.length-1;e++){const t=this.tableTicket[e].split(",");this.setTicketObject(t[3],t[4].substring(0,5),t[5].replace(/<br>/g,"\n"),t[6],t[7],t[8])}st.value="",this.ticketObject.forEach((t=>{"brauche Karte"===t.ticketAction&&(st.value+="??? an "+t.ticketParticipant.trim()),"meine Karte ist frei"===t.ticketAction&&(st.value+=t.ticketParticipant.trim(),""===t.ticketReaction?st.value+=" an ???":st.value+=" an "+t.ticketReaction.trim()),""!==t.ticketAnnotations&&(st.value+=" ("+t.ticketAnnotations.trim()+")"),st.value+="\n"}))})).catch((t=>{console.log(t)}))},setTicketObject(t,e,a,i,n,s){this.ticketObject.push({ticketParticipant:t,ticketArrival:e,ticketAnnotations:a,ticketAction:i,ticketReaction:n,ticketParticipantId:s})},getTableTicketGiven(t){this.ticketGivenObject=[],this.$axios(`${this.URLParticipant}&func=ReadTicketsGiven&matchId=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let a=0;a<this.tableTicket.length-1;a++){const t=this.tableTicket[a].split(",");this.setTicketGivenObject(t[3],t[8])}tt.length=0;let e=0;this.ticketGivenObject.forEach((t=>{tt[e]=t.ticketGivenParticipant,e++}))})).catch((t=>{console.log(t)}))},setTicketGivenObject(t,e){this.ticketGivenObject.push({ticketGivenParticipant:t,ticketGivenParticipantId:e})},getTableTicketRequired(t){this.ticketRequiredObject=[],this.$axios(`${this.URLParticipant}&func=ReadTicketsRequired&matchId=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let a=0;a<this.tableTicket.length-1;a++){const t=this.tableTicket[a].split(",");this.setTicketRequiredObject(t[3],t[8])}et.length=0;let e=0;this.ticketRequiredObject.forEach((t=>{et[e]=t.ticketRequiredParticipant,e++}))})).catch((t=>{console.log(t)}))},setTicketRequiredObject(t,e){this.ticketRequiredObject.push({ticketRequiredParticipant:t,ticketRequiredParticipantId:e})},getTableTicketAssigned(t){this.ticketAssignedObject=[],this.$axios(`${this.URLParticipant}&func=ReadTicketsAssigned&matchId=${t}`).then((t=>{this.tableTicket=t.data.split("\n");for(let e=0;e<this.tableTicket.length-1;e++){const t=this.tableTicket[e].split(",");this.setTicketAssignedObject(t[3],t[8])}})).catch((t=>{console.log(t)}))},setTicketAssignedObject(t,e){this.ticketAssignedObject.push({ticketAssignedParticipant:t,ticketAssignedParticipantId:e})},getTableWhereIsMyCard(){this.whereIsMyCardObject=[],this.$axios(`${this.URLWhereIsMyCard}&func=Read&cardholder=`).then((t=>{this.tableWhereIsMyCard=t.data.split("\n");for(let e=0;e<this.tableWhereIsMyCard.length-1;e++){const t=this.tableWhereIsMyCard[e].split(",");this.setWhereIsMyCardObject(t[2],t[3],t[4])}})).catch((t=>{console.log(t)}))},setWhereIsMyCardObject(t,e,a){this.whereIsMyCardObject.push({cardHolder:t,discounted:e,whoHasTheCard:a})},setArrivalElements(t){const e=t.substring(0,2),a=t.substring(3,2),i=15;j[1]="";for(let n=0;n<=8;n++){const t=parseInt(i*n);switch(a){case"00":0===t&&(j[n+2]=parseInt(e)-2+":00"),15===t&&(j[n+2]=parseInt(e)-2+":15"),30===t&&(j[n+2]=parseInt(e)-2+":30"),45===t&&(j[n+2]=parseInt(e)-2+":45"),60===t&&(j[n+2]=parseInt(e)-1+":00"),75===t&&(j[n+2]=parseInt(e)-1+":15"),90===t&&(j[n+2]=parseInt(e)-1+":30"),105===t&&(j[n+2]=parseInt(e)-1+":45"),120===t&&(j[n+2]=parseInt(e)-0+":00");break;case"15":0===t&&(j[n+2]=parseInt(e)-2+":15"),15===t&&(j[n+2]=parseInt(e)-2+":30"),30===t&&(j[n+2]=parseInt(e)-2+":45"),45===t&&(j[n+2]=parseInt(e)-1+":00"),60===t&&(j[n+2]=parseInt(e)-1+":15"),75===t&&(j[n+2]=parseInt(e)-1+":30"),90===t&&(j[n+2]=parseInt(e)-1+":45"),105===t&&(j[n+2]=parseInt(e)-0+":00"),120===t&&(j[n+2]=parseInt(e)-0+":15");break;case"30":0===t&&(j[n+2]=parseInt(e)-2+":30"),15===t&&(j[n+2]=parseInt(e)-2+":45"),30===t&&(j[n+2]=parseInt(e)-1+":00"),45===t&&(j[n+2]=parseInt(e)-1+":15"),60===t&&(j[n+2]=parseInt(e)-1+":30"),75===t&&(j[n+2]=parseInt(e)-1+":45"),90===t&&(j[n+2]=parseInt(e)-0+":00"),105===t&&(j[n+2]=parseInt(e)-0+":15"),120===t&&(j[n+2]=parseInt(e)-0+":30");break;case"45":0===t&&(j[n+2]=parseInt(e)-2+":45"),15===t&&(j[n+2]=parseInt(e)-1+":00"),30===t&&(j[n+2]=parseInt(e)-1+":15"),45===t&&(j[n+2]=parseInt(e)-1+":30"),60===t&&(j[n+2]=parseInt(e)-1+":45"),75===t&&(j[n+2]=parseInt(e)-0+":00"),90===t&&(j[n+2]=parseInt(e)-0+":15"),105===t&&(j[n+2]=parseInt(e)-0+":30"),120===t&&(j[n+2]=parseInt(e)-0+":45");break;default:break}}}}};var rt=a(1639),ot=a(9885),dt=a(8479),pt=a(3246),mt=a(490),ht=a(1233),ut=a(3115),xt=a(4458),gt=a(3190),kt=a(335),wt=a(926),bt=a(1821),ft=a(8879),At=a(6611),vt=a(1663),Tt=a(1973),Pt=a(1357),yt=a(990),Ot=a(2074),_t=a(4363),It=a(1136),Wt=a(2146),Mt=a(9984),Ct=a.n(Mt);const qt=(0,rt.Z)(lt,[["render",W],["__scopeId","data-v-49607ec2"]]),Rt=qt;Ct()(lt,"components",{QPage:ot.Z,QBtnDropdown:dt.Z,QList:pt.Z,QItem:mt.Z,QItemSection:ht.Z,QItemLabel:ut.Z,QCard:xt.Z,QCardSection:gt.Z,QImg:kt.Z,QSeparator:wt.Z,QCardActions:bt.Z,QBtn:ft.Z,QInput:At.Z,QToolbar:vt.Z,QToolbarTitle:Tt.Z,QAvatar:Pt.Z,QBadge:yt.Z,QDialog:Ot.Z,QSelect:_t.Z}),Ct()(lt,"directives",{Ripple:It.Z,ClosePopup:Wt.Z})}}]);