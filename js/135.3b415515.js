"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[135],{2417:(a,e,t)=>{t.d(e,{BE:()=>m,Bk:()=>o,DL:()=>d,H1:()=>b,KU:()=>i,Np:()=>l,O0:()=>w,Pi:()=>v,R7:()=>p,RR:()=>g,SJ:()=>c,UP:()=>r,WV:()=>u,fW:()=>s,nn:()=>n,wX:()=>h});const l=!0,i="BGB",s="Freiburg",n="Wer reserviert Plätze (<HH>:<MM>): <WHO_RESERVES_PLACES> die Fahne und die Socken";let c="https://script.google.com/macros/s/AKfycbzekarajVCLH-xMBkO7_M0D-MHV1e-2bvXfN-N8BJMaHsc_RhnZNTw4Ctt_4OOVwMLkBA/exec",o="https://script.google.com/macros/s/AKfycby5QLG3Ri_vpENUrwSNtyBR3L8j_AR9_ly4eRKwTHSLaCdgFfPmnEuvPEKX085oJEAwlg/exec",r="https://script.google.com/macros/s/AKfycbwDcHzzr6JqZoENUjRAe1OXY3YCOLsqYMwVbDfdOlYFIjqNJ6lTWuVcYWh_wc99gsv_8A/exec",m="https://script.google.com/macros/s/AKfycbwi7JYV_w0u7KoYw-CUio5HWGrLPvIxRqHybNn4DdgQfOLeGfm3Ufb3IlunmgQq-zFV/exec",u="https://script.google.com/macros/s/AKfycbyj3smDP7m9csheRg0c6n00u0Rb2CczULz8C8lAibkv_gBjiqfkfOZdOP9etSVMDMtL/exec";const d="https://script.google.com/macros/s/AKfycbz0cWknDb0ACTYRUCqUE9cIOkU2GV460W8Mhz6VyDKELQc9cLbjnwGrP3wRwlRHJnYBEA/exec?sh=BGB";c+="?sh="+i,o+="?sh="+i,r+="?sh="+i,m+="?sh="+i,u+="?sh="+i;const p=function(){return"statics/images/"+i+"/Logo.png"},h=function(a,e){return""===a?"statics/avatars/collection/Placeholder.png":e?"statics/avatars/"+i+"/"+a+".png":"statics/avatars/collection/"+a+".png"},g=function(a){let e=this.teamOptions.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},v=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},b=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.png"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.png"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.png"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.png"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],w=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},8135:(a,e,t)=>{t.r(e),t.d(e,{default:()=>Ua});var l=t(9835),i=t(6970);const s={class:"q-pa-md",style:{"max-width":"500px"}},n={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},c=["src"],o=["src"],r=["src"],m={class:"q-pa-md",style:{"max-width":"500px"}},u={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},d=["src"],p=["src"],h=["src"],g={class:"q-pa-md q-gutter-sm"},v=(0,l._)("div",{class:"text-h6"},"Spiel/Veranstaltung erfassen",-1),b=["src"],w=["src"],_={class:"q-pt-md",style:{"max-width":"300px"}},f={class:"row items-center justify-end"},M={class:"row items-center justify-end"},y={class:"q-pt-md",style:{"max-width":"300px"}},x=(0,l._)("div",{class:"text-h6"},"Spiel/Veranstaltung ändern",-1),k=["src"],W=["src"],T={class:"q-pt-md",style:{"max-width":"350px"}},H={class:"row items-center justify-end"},V={class:"row items-center justify-end"},A={class:"q-pt-md",style:{"max-width":"350px"}},S={class:"text-h6"},I={class:"q-pt-md"},N={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},U=["src"],P={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},q=["src"],j={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},D=["src"],O=(0,l._)("span",{class:"q-ml-sm"},"Spiel archivieren?",-1);function C(a,e,t,C,R,$){const B=(0,l.up)("q-toolbar-title"),E=(0,l.up)("q-btn"),z=(0,l.up)("q-toolbar"),L=(0,l.up)("q-avatar"),K=(0,l.up)("q-label"),F=(0,l.up)("q-item-label"),Q=(0,l.up)("q-item-section"),Y=(0,l.up)("q-item"),Z=(0,l.up)("q-list"),J=(0,l.up)("q-badge"),G=(0,l.up)("q-card-section"),X=(0,l.up)("q-toggle"),aa=(0,l.up)("q-select"),ea=(0,l.up)("q-input"),ta=(0,l.up)("q-date"),la=(0,l.up)("q-popup-proxy"),ia=(0,l.up)("q-icon"),sa=(0,l.up)("q-time"),na=(0,l.up)("q-separator"),ca=(0,l.up)("q-card-actions"),oa=(0,l.up)("q-card"),ra=(0,l.up)("q-dialog"),ma=(0,l.up)("q-img"),ua=(0,l.up)("q-page"),da=(0,l.Q2)("ripple"),pa=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(ua,null,{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(z,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Aktuelle Spiele")])),_:1}),R.IsAdministrator?((0,l.wg)(),(0,l.j4)(E,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=a=>C.addMatch=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.activeMatchObject,((a,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(Z,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(Y,{clickable:"",onClick:e=>$.onMatchClick(a.row,a.matchId,a.homeTeam,a.awayTeam,a.matchName,a.published,a.date+" "+a.time,a.annotations)},{default:(0,l.w5)((()=>[""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(L,{key:0,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:R.getTeamImage(a.homeTeam)},null,8,c)])),_:2},1024)):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(K,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)("  ")])),_:1})):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(L,{key:2,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:R.getTeamImage(a.awayTeam)},null,8,o)])),_:2},1024)):(0,l.kq)("",!0),""===a.homeTeam&&""===a.awayTeam?((0,l.wg)(),(0,l.j4)(L,{key:3,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:R.getEventImage(a.matchName)},null,8,r)])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Uk)("      ")])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Spiel: "+(0,i.zw)(a.matchName),1)])),_:2},1024),(0,l.Wm)(F,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Wann: "+(0,i.zw)(a.date)+" - "+(0,i.zw)(a.time),1)])),_:2},1024),"TRUE"===a.published?((0,l.wg)(),(0,l.j4)(F,{key:0,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Publiziert: Ja")])),_:1})):(0,l.kq)("",!0),"FALSE"===a.published?((0,l.wg)(),(0,l.j4)(F,{key:1,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Publiziert: Nein")])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(F,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Kommentar: "+(0,i.zw)(a.annotations),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[da]])])),_:2},1024)),[[da]]))),128))]),(0,l._)("div",m,[(0,l.Wm)(z,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(B,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Vergangene Spiele ("+(0,i.zw)(R.inactiveMatchObject.length)+")",1)])),_:1})])),_:1})]),(0,l._)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.inactiveMatchObject,((a,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(Z,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(Y,{clickable:"",onClick:e=>$.onInactiveMatchClick(a.matchId,a.matchName,a.date+" "+a.time,a.numberOfParticipants)},{default:(0,l.w5)((()=>[""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(L,{key:0,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:R.getTeamImage(a.homeTeam)},null,8,d)])),_:2},1024)):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(K,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)("  ")])),_:1})):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(L,{key:2,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:R.getTeamImage(a.awayTeam)},null,8,p)])),_:2},1024)):(0,l.kq)("",!0),""===a.homeTeam&&""===a.awayTeam?((0,l.wg)(),(0,l.j4)(L,{key:3,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:R.getEventImage(a.matchName)},null,8,h)])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(K,null,{default:(0,l.w5)((()=>[(0,l.Uk)("      ")])),_:1}),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Spiel: "+(0,i.zw)(a.matchName),1)])),_:2},1024),(0,l.Wm)(F,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.date)+" - "+(0,i.zw)(a.time),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(J,{floating:"",color:"teal"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.numberOfParticipants),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[da]])])),_:2},1024)),[[da]]))),128))]),(0,l._)("div",g,[(0,l.Wm)(ra,{modelValue:C.addMatch,"onUpdate:modelValue":e[12]||(e[12]=a=>C.addMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(oa,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(G,null,{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(G,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{modelValue:C.tglIsEventNew,"onUpdate:modelValue":e[1]||(e[1]=a=>C.tglIsEventNew=a),color:"red",label:"Veranstaltung","left-label":""},null,8,["modelValue"]),C.tglIsEventNew?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(aa,{key:0,filled:"",modelValue:C.txtHomeTeamNew,"onUpdate:modelValue":e[2]||(e[2]=a=>C.txtHomeTeamNew=a),options:R.teamOptions,autofocus:"",label:"Heim","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(Y,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{homeTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,b)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])),C.tglIsEventNew?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(aa,{key:1,filled:"",modelValue:C.txtAwayTeamNew,"onUpdate:modelValue":e[3]||(e[3]=a=>C.txtAwayTeamNew=a),options:R.teamOptions,label:"Gast","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(Y,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{awayTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,w)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])),C.tglIsEventNew?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(ea,{key:2,dense:"",modelValue:C.txtMatchNameNew,"onUpdate:modelValue":e[4]||(e[4]=a=>C.txtMatchNameNew=a),label:"Spielname"},null,8,["modelValue"])),C.tglIsEventNew?((0,l.wg)(),(0,l.j4)(ea,{key:3,dense:"",modelValue:C.txtMatchNameNew,"onUpdate:modelValue":e[5]||(e[5]=a=>C.txtMatchNameNew=a),label:"Veranstaltungsname"},null,8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(X,{modelValue:C.tglPublishedNew,"onUpdate:modelValue":e[6]||(e[6]=a=>C.tglPublishedNew=a),color:"red",label:"Publizieren","left-label":""},null,8,["modelValue"]),(0,l._)("div",_,[(0,l.Wm)(ea,{filled:"",modelValue:C.txtDatetimeNew,"onUpdate:modelValue":e[9]||(e[9]=a=>C.txtDatetimeNew=a)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(ia,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(la,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(ta,{modelValue:C.txtDatetimeNew,"onUpdate:modelValue":e[7]||(e[7]=a=>C.txtDatetimeNew=a),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",f,[(0,l.wy)((0,l.Wm)(E,{label:"Close",color:"primary",flat:""},null,512),[[pa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(ia,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(la,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(sa,{modelValue:C.txtDatetimeNew,"onUpdate:modelValue":e[8]||(e[8]=a=>C.txtDatetimeNew=a),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",M,[(0,l.wy)((0,l.Wm)(E,{label:"Close",color:"primary",flat:""},null,512),[[pa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",y,[(0,l.Wm)(ea,{modelValue:C.txtAnnotationsNew,"onUpdate:modelValue":e[10]||(e[10]=a=>C.txtAnnotationsNew=a),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(na),(0,l.Wm)(ca,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Abbrechen"},null,512),[[pa]]),(0,l.wy)((0,l.Wm)(E,{icon:"save",label:"Speichern",onClick:e[11]||(e[11]=a=>$.addMatchSave(C.txtHomeTeamNew.value,C.txtAwayTeamNew.value,C.txtMatchNameNew,C.tglPublishedNew,C.txtDatetimeNew,C.txtAnnotationsNew)),disable:""===C.txtMatchNameNew},null,8,["disable"]),[[pa]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(ra,{modelValue:C.editMatch,"onUpdate:modelValue":e[25]||(e[25]=a=>C.editMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(oa,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(G,null,{default:(0,l.w5)((()=>[x])),_:1}),(0,l.Wm)(G,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{modelValue:C.tglIsEvent,"onUpdate:modelValue":e[13]||(e[13]=a=>C.tglIsEvent=a),color:"red",label:"Veranstaltung","left-label":""},null,8,["modelValue"]),C.tglIsEvent?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(aa,{key:0,filled:"",modelValue:C.txtHomeTeam,"onUpdate:modelValue":e[14]||(e[14]=a=>C.txtHomeTeam=a),options:R.teamOptions,autofocus:"",label:"Heim","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(Y,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{homeTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,k)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])),C.tglIsEvent?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(aa,{key:1,filled:"",modelValue:C.txtAwayTeam,"onUpdate:modelValue":e[15]||(e[15]=a=>C.txtAwayTeam=a),options:R.teamOptions,label:"Gast","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(Y,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{awayTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,W)])),_:2},1024)])),_:2},1024),(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(F,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])),C.tglIsEvent?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(ea,{key:2,dense:"",modelValue:C.txtMatchName,"onUpdate:modelValue":e[16]||(e[16]=a=>C.txtMatchName=a),label:"Spielname"},null,8,["modelValue"])),C.tglIsEvent?((0,l.wg)(),(0,l.j4)(ea,{key:3,dense:"",modelValue:C.txtMatchName,"onUpdate:modelValue":e[17]||(e[17]=a=>C.txtMatchName=a),label:"Veranstaltungsname"},null,8,["modelValue"])):(0,l.kq)("",!0),(0,l.Wm)(X,{modelValue:C.tglPublished,"onUpdate:modelValue":e[18]||(e[18]=a=>C.tglPublished=a),color:"red",label:"Publizieren","left-label":""},null,8,["modelValue"]),(0,l._)("div",T,[(0,l.Wm)(ea,{filled:"",modelValue:C.txtDatetime,"onUpdate:modelValue":e[21]||(e[21]=a=>C.txtDatetime=a)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(ia,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(la,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(ta,{modelValue:C.txtDatetime,"onUpdate:modelValue":e[19]||(e[19]=a=>C.txtDatetime=a),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",H,[(0,l.wy)((0,l.Wm)(E,{label:"Close",color:"primary",flat:""},null,512),[[pa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(ia,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(la,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(sa,{modelValue:C.txtDatetime,"onUpdate:modelValue":e[20]||(e[20]=a=>C.txtDatetime=a),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",V,[(0,l.wy)((0,l.Wm)(E,{label:"Close",color:"primary",flat:""},null,512),[[pa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",A,[(0,l.Wm)(ea,{modelValue:C.txtAnnotations,"onUpdate:modelValue":e[22]||(e[22]=a=>C.txtAnnotations=a),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(na),(0,l.Wm)(ca,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[R.IsAdministrator?((0,l.wg)(),(0,l.j4)(E,{key:0,icon:"archive",color:"primary",onClick:e[23]||(e[23]=a=>C.arcMatch=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Abbrechen"},null,512),[[pa]]),(0,l.wy)((0,l.Wm)(E,{icon:"save",label:"Speichern",onClick:e[24]||(e[24]=a=>$.editMatchSave(C.intMatchRow,C.txtMatchId,C.txtHomeTeam.value,C.txtAwayTeam.value,C.txtMatchName,C.txtMatchNameOld,C.tglPublished,C.txtDatetime,C.txtAnnotations)),disable:""===C.txtMatchName},null,8,["disable"]),[[pa]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(ra,{modelValue:C.showInactiveMatch,"onUpdate:modelValue":e[28]||(e[28]=a=>C.showInactiveMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(oa,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(G,null,{default:(0,l.w5)((()=>[(0,l._)("div",S,"Anzahl Teilnehmer: "+(0,i.zw)(C.intInactiveNumberOfParticipants),1)])),_:1}),(0,l.Wm)(G,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(ea,{filled:"",modelValue:C.txtInactiveMatch,"onUpdate:modelValue":e[26]||(e[26]=a=>C.txtInactiveMatch=a),label:"Spiel",readonly:!0},null,8,["modelValue"]),(0,l._)("div",I,[(0,l.Wm)(ea,{filled:"",modelValue:C.txtInactiveDatetime,"onUpdate:modelValue":e[27]||(e[27]=a=>C.txtInactiveDatetime=a),label:"Wann",readonly:!0},null,8,["modelValue"])])])),_:1}),(0,l._)("div",N,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.participantInactiveMatchObject,((a,e)=>((0,l.wg)(),(0,l.j4)(L,{key:e,size:"40px",class:"overlapping",style:(0,i.j5)(`left: ${32*e}px`)},{default:(0,l.w5)((()=>[e<=9?((0,l.wg)(),(0,l.iD)("img",{key:0,src:R.getAvatar(a.participantAvatar,"TRUE"===a.participantAvatarIsCustomized)},null,8,U)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l._)("div",P,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.participantInactiveMatchObject,((a,e)=>((0,l.wg)(),(0,l.j4)(L,{key:e,size:"40px",class:"overlapping",style:(0,i.j5)(`left: ${32*(e-10)}px`)},{default:(0,l.w5)((()=>[e>9&&e<=19?((0,l.wg)(),(0,l.iD)("img",{key:0,src:R.getAvatar(a.participantAvatar,"TRUE"===a.participantAvatarIsCustomized)},null,8,q)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l._)("div",j,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(R.participantInactiveMatchObject,((a,e)=>((0,l.wg)(),(0,l.j4)(L,{key:e,size:"40px",class:"overlapping",style:(0,i.j5)(`left: ${32*(e-20)}px`)},{default:(0,l.w5)((()=>[e>19?((0,l.wg)(),(0,l.iD)("img",{key:0,src:R.getAvatar(a.participantAvatar,"TRUE"===a.participantAvatarIsCustomized)},null,8,D)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l.Wm)(na),(0,l.Wm)(ca,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Abbrechen"},null,512),[[pa]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(ra,{modelValue:C.arcMatch,"onUpdate:modelValue":e[30]||(e[30]=a=>C.arcMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(oa,null,{default:(0,l.w5)((()=>[(0,l.Wm)(G,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{icon:"archive",color:"primary","text-color":"white"}),O])),_:1}),(0,l.Wm)(ca,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Nein",color:"primary"},null,512),[[pa]]),(0,l.wy)((0,l.Wm)(E,{flat:"",label:"Ja",color:"primary",onClick:e[29]||(e[29]=a=>$.archiveMatch(C.intMatchRow,C.txtMatchId,C.txtDatetime))},null,512),[[pa]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(ma,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(9665),t(6727);var R=t(9302),$=t(2417),B=t(499);const E=(0,B.iH)(0),z=(0,B.iH)(""),L=(0,B.iH)(!1),K=(0,B.iH)($.fW),F=(0,B.iH)(""),Q=(0,B.iH)(""),Y=(0,B.iH)(""),Z=(0,B.iH)(""),J=(0,B.iH)(!1),G=(0,B.iH)(""),X=(0,B.iH)(""),aa=(0,B.iH)(""),ea=(0,B.iH)(""),ta=(0,B.iH)(""),la={name:"ListMatch",setup(){const a=(0,R.Z)();return{intMatchRow:(0,B.iH)(E),txtMatchId:(0,B.iH)(z),tglIsEvent:(0,B.iH)(L),txtHomeTeam:(0,B.iH)(F),txtAwayTeam:(0,B.iH)(Q),txtMatchName:(0,B.iH)(Y),txtMatchNameOld:(0,B.iH)(Z),tglPublished:(0,B.iH)(J),txtDatetime:(0,B.iH)(G),txtAnnotations:(0,B.iH)(X),txtInactiveMatch:(0,B.iH)(aa),txtInactiveDatetime:(0,B.iH)(ea),intInactiveNumberOfParticipants:(0,B.iH)(ta),tglIsEventNew:(0,B.iH)(!1),txtHomeTeamNew:(0,B.iH)(K),txtAwayTeamNew:(0,B.iH)(""),txtMatchNameNew:(0,B.iH)(""),tglPublishedNew:(0,B.iH)(!1),txtDatetimeNew:(0,B.iH)(""),txtAnnotationsNew:(0,B.iH)("<STANDARDTEXT>"),onMatchAlreadyExists(){a.notify({type:"negative",message:"Dieses Spiel besteht bereits!"})},addMatch:(0,B.iH)(!1),editMatch:(0,B.iH)(!1),arcMatch:(0,B.iH)(!1),showInactiveMatch:(0,B.iH)(!1)}},data(){return{IsAdministrator:$.Np,HomeTeam:$.fW,URLMatch:$.SJ,URLParticipant:$.Bk,URLParticipantArchive:$.UP,URLMember:$.WV,getAvatar:$.wX,teamOptions:$.H1,getTeamImage:$.RR,getEventImage:$.Pi,activeMatchObject:[{row:"",matchId:"",homeTeam:"",awayTeam:"",matchName:"",published:"",time:"",annotations:"",date:""}],inactiveMatchObject:[{matchId:"",homeTeam:"",awayTeam:"",matchName:"",time:"",date:"",numberOfParticipants:""}],participantInactiveMatchObject:[{participant:"",participantAvatar:"",participantAvatarIsCustomized:""}],memberObject:[{member:"",avatar:"",customized:""}]}},computed:{},mounted(){this.getTableMember(),this.getTableActiveMatch(),this.getTableInactiveMatch()},methods:{getTableActiveMatch(){this.activeMatchObject=[];const a=this.IsAdministrator?"":"TRUE";this.$axios(`${this.URLMatch}&func=ReadActive&published=${a}`).then((a=>{this.tableMatch=a.data.split("\n");for(let e=0;e<this.tableMatch.length-1;e++){const a=this.tableMatch[e].split(",");this.setActiveMatchObject(a[0],a[1],a[3].trim(),a[4].trim(),a[5].trim(),a[6],a[7].substring(0,5),a[8].trim().replace(/<br>/g,"\n"),a[9])}})).catch((a=>{console.log(a)}))},setActiveMatchObject(a,e,t,l,i,s,n,c,o){this.activeMatchObject.push({row:parseInt(a),matchId:e,homeTeam:t,awayTeam:l,matchName:i,published:s,time:n,annotations:c,date:o}),this.activeMatchObject.sort((function(a,e){let t=a.date;t=t.substring(6,10)+t.substring(3,5)+t.substring(0,2);let l=e.date;return l=l.substring(6,10)+l.substring(3,5)+l.substring(0,2),t>l?1:t<l?-1:0}))},onInactiveMatchClick(a,e,t,l){aa.value=e,ea.value=t,ta.value=l,this.participantInactiveMatchObject=[],this.$axios(`${this.URLParticipantArchive}&func=ReadMatch&matchId=${a}`).then((a=>{this.tableParticipantArchive=a.data.split("\n");for(let e=0;e<this.tableParticipantArchive.length-1;e++){const a=this.tableParticipantArchive[e].split(",");let t=this.memberObject.find((e=>e.member===a[4].trim()))?.avatar;"undefined"===typeof t&&(t="");let l=this.memberObject.find((e=>e.member===a[4].trim()))?.customized;"undefined"===typeof l&&(l="FALSE"),this.setParticipantInactiveMatchObject(a[4].trim(),t,l)}})).catch((a=>{console.log(a)})),this.showInactiveMatch=!0},setParticipantInactiveMatchObject(a,e,t){this.participantInactiveMatchObject.push({participant:a,participantAvatar:e,participantAvatarIsCustomized:t})},getTableMember(){this.memberObject=[],this.$axios(`${this.URLMember}&func=Read`).then((a=>{this.tableMember=a.data.split("\n");for(let e=0;e<this.tableMember.length-1;e++){const a=this.tableMember[e].split(",");this.setMemberObject(a[3].trim(),a[4].trim(),a[5])}})).catch((a=>{console.log(a)}))},setMemberObject(a,e,t){this.memberObject.push({member:a,avatar:e,customized:t})},onMatchClick(a,e,t,l,i,s,n,c){E.value=a,z.value=e,L.value=""===t&&""===l,F.value=t,Q.value=l,Y.value=i,Z.value=i,J.value="TRUE"===s,G.value=n,X.value=c,this.IsAdministrator&&(this.editMatch=!0)},addMatchSave(a,e,t,l,i,s){"undefined"===typeof a&&(a=K.value);const n=this.activeMatchObject.map((a=>a.matchName)),c=n.includes(t);if(c)this.onMatchAlreadyExists();else{const n=i.substring(0,10),c=i.substring(11,16);this.$axios(`${this.URLMatch}&func=Add&homeTeam=${a}&awayTeam=${e}&matchName=${encodeURI(t.replace(","," "))}&published=${l}&time=${c}&annotations=${encodeURI(s.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&date=${n}`).then((a=>{"Success, requested action completed"===a.data&&this.getTableActiveMatch()})).catch((a=>{console.log(a)}))}},editMatchSave(a,e,t,l,i,s,n,c,o){"undefined"===typeof t&&(t=F.value),"undefined"===typeof l&&(l=Q.value);const r=this.activeMatchObject.map((a=>a.matchName)),m=r.includes(i)&&i!==s;if(m)this.onMatchAlreadyExists();else{const s=c.substring(0,10),r=c.substring(11,16),m=i.trim()+" "+s.substring(0,6)+s.substring(8,10)+" - "+r;this.$axios(`${this.URLMatch}&func=Update&row=${a}&matchId=${e}&homeTeam=${t}&awayTeam=${l}&matchName=${encodeURI(i.replace(","," "))}&published=${n}&time=${r}&annotations=${encodeURI(o.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&date=${s}`).then((a=>{"Success, requested action completed"===a.data&&this.$axios(`${this.URLParticipant}&func=UpdateMatch&matchId=${e}&newMatchName=${m}`).then((a=>{"Success, requested action completed"===a.data&&this.getTableActiveMatch()})).catch((a=>{console.log(a)}))})).catch((a=>{console.log(a)}))}},async archiveMatch(a,e,t){const l=t.substring(0,10),i=a=>new Promise((e=>setTimeout(e,a)));this.$axios(`${this.URLParticipant}&func=Read&matchId=${e}`).then((async a=>{this.tableParticipant=a.data.split("\n");for(let e=0;e<this.tableParticipant.length-1;e++){const a=this.tableParticipant[e].split(",");await i(1e3),this.$axios(`${this.URLParticipantArchive}&func=Add&timestamp=${a[3]}&matchId=${a[2]}&matchName=${a[4]}&participant=${a[5]}&arrival=${a[6]}&annotations=${a[7]}&action=${a[8]}&reaction=${a[9]}&date=${l}`).catch((a=>{console.log(a)}))}})).catch((a=>{console.log(a)})),this.inactivateMatch(a,e)},inactivateMatch(a,e){this.$axios(`${this.URLParticipant}&func=DeleteMatch&matchId=${e}`).then((t=>{"Success, requested action completed"===t.data&&this.$axios(`${this.URLMatch}&func=Inactivate&row=${a}&matchId=${e}`).then((a=>{"Success, requested action completed"===a.data&&(this.getTableActiveMatch(),this.editMatch=!1)})).catch((a=>{console.log(a)}))})).catch((a=>{console.log(a)}))},getTableInactiveMatch(){this.inactiveMatchObject=[],this.$axios(`${this.URLMatch}&func=ReadInactive`).then((a=>{this.tableInactiveMatch=a.data.split("\n");for(let e=0;e<this.tableInactiveMatch.length-1;e++){const a=this.tableInactiveMatch[e].split(",");let t=0;this.$axios(`${this.URLParticipantArchive}&func=ReadMatch&matchId=${a[1]}`).then((e=>{this.tableParticipantArchive=e.data.split("\n"),t=this.tableParticipantArchive.length-1,this.setInactiveMatchObject(a[1],a[3].trim(),a[4].trim(),a[5].trim(),a[7].substring(0,5),a[9],t)})).catch((a=>{console.log(a)}))}})).catch((a=>{console.log(a)}))},setInactiveMatchObject(a,e,t,l,i,s,n){this.inactiveMatchObject.push({matchId:a,matchName:l,time:i,date:s,numberOfParticipants:n,homeTeam:e,awayTeam:t}),this.inactiveMatchObject.sort((function(a,e){let t=a.date;t=t.substring(6,10)+t.substring(3,5)+t.substring(0,2);let l=e.date;return l=l.substring(6,10)+l.substring(3,5)+l.substring(0,2),t<l?1:t>l?-1:0}))}}};var ia=t(1639),sa=t(9885),na=t(1663),ca=t(1973),oa=t(8879),ra=t(3246),ma=t(490),ua=t(1357),da=t(1233),pa=t(3115),ha=t(990),ga=t(2074),va=t(4458),ba=t(3190),wa=t(592),_a=t(4363),fa=t(6611),Ma=t(2857),ya=t(2765),xa=t(2952),ka=t(6770),Wa=t(926),Ta=t(1821),Ha=t(335),Va=t(1136),Aa=t(2146),Sa=t(9984),Ia=t.n(Sa);const Na=(0,ia.Z)(la,[["render",C]]),Ua=Na;Ia()(la,"components",{QPage:sa.Z,QToolbar:na.Z,QToolbarTitle:ca.Z,QBtn:oa.Z,QList:ra.Z,QItem:ma.Z,QAvatar:ua.Z,QItemSection:da.Z,QItemLabel:pa.Z,QBadge:ha.Z,QDialog:ga.Z,QCard:va.Z,QCardSection:ba.Z,QToggle:wa.Z,QSelect:_a.Z,QInput:fa.Z,QIcon:Ma.Z,QPopupProxy:ya.Z,QDate:xa.Z,QTime:ka.Z,QSeparator:Wa.Z,QCardActions:Ta.Z,QImg:Ha.Z}),Ia()(la,"directives",{Ripple:Va.Z,ClosePopup:Aa.Z})}}]);