"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[302],{2417:(a,e,t)=>{t.d(e,{BE:()=>v,Bk:()=>h,DL:()=>_,KU:()=>i,Np:()=>l,Pi:()=>x,R7:()=>f,RR:()=>y,SJ:()=>d,UP:()=>g,WV:()=>b,aF:()=>p,bl:()=>W,fW:()=>s,hc:()=>T,nn:()=>n,vw:()=>k,wX:()=>M});let l=!0,i="BGB",s="Freiburg",n="Wer reserviert Plätze (<HH>:<MM>): <WHO_RESERVES_PLACES> die Fahne und die Socken",c="",o="",m="",r="",u="",d="https://script.google.com/macros/s/AKfycbzekarajVCLH-xMBkO7_M0D-MHV1e-2bvXfN-N8BJMaHsc_RhnZNTw4Ctt_4OOVwMLkBA/exec",p="https://script.google.com/macros/s/AKfycbzo1RuM5zOC_1kkUBRJB4tbMKZNgVZ65KTGdm76wyBTB9F_FQLFs8vt3Nh16xwDwChOuA/exec",h="https://script.google.com/macros/s/AKfycby5QLG3Ri_vpENUrwSNtyBR3L8j_AR9_ly4eRKwTHSLaCdgFfPmnEuvPEKX085oJEAwlg/exec",g="https://script.google.com/macros/s/AKfycbwDcHzzr6JqZoENUjRAe1OXY3YCOLsqYMwVbDfdOlYFIjqNJ6lTWuVcYWh_wc99gsv_8A/exec",v="https://script.google.com/macros/s/AKfycbwi7JYV_w0u7KoYw-CUio5HWGrLPvIxRqHybNn4DdgQfOLeGfm3Ufb3IlunmgQq-zFV/exec",b="https://script.google.com/macros/s/AKfycbyj3smDP7m9csheRg0c6n00u0Rb2CczULz8C8lAibkv_gBjiqfkfOZdOP9etSVMDMtL/exec",w="https://script.google.com/macros/s/AKfycbyG0TbbSD0eRYIZeXUUFI8DEMV6-Hn670Hq_9AhC9RevynXtRVYNNw4gKczGu07cPlc/exec";const _="https://script.google.com/macros/s/AKfycbz0cWknDb0ACTYRUCqUE9cIOkU2GV460W8Mhz6VyDKELQc9cLbjnwGrP3wRwlRHJnYBEA/exec?sh=BGB";d+="?sh="+i,p+="?sh="+s,h+="?sh="+i,g+="?sh="+i,v+="?sh="+i,b+="?sh="+i,w+="?sh=Properties";const f=function(){return"statics/images/"+i+"/Logo.png"},M=function(a,e){return""===a?"statics/avatars/collection/Placeholder.png":e?"statics/avatars/"+i+"/"+a+".png":"statics/avatars/collection/"+a+".png"},y=function(a){let e=this.teamImages.find((e=>e.value===a))?.image;return"undefined"===typeof e&&(e="statics/teams/QuestionMark.png"),e},x=function(a){return a.toLowerCase().indexOf("test")>=0?"statics/teams/Test.png":"statics/teams/Event.png"},k=function(a){this.$axios(`${this.URLProperties}&func=ReadAdminCode&adminCode=${a}`).then((e=>{this.tableProperties=e.data.split("\n");for(let t=0;t<this.tableProperties.length-1;t++){const e=this.tableProperties[t].split(","),d=e[2].split("_");l=e[1]===a,(!0===l||e[1].substring(1,4)+e[1].substring(6,4)===d[1]&&parseInt(d[2])>330)&&(i=a,s=e[3],n=e[4],c=e[5],o=e[6],m=e[7],r=e[8],u=e[9])}})).catch((a=>{console.log(a)}))},T=[{label:"Arminia",value:"Arminia_Bielefeld",image:"statics/teams/Arminia_Bielefeld.png"},{label:"Augsburg",value:"Augsburg",image:"statics/teams/Augsburg.png"},{label:"Bayern",value:"Bayern_München",image:"statics/teams/Bayern_München.png"},{label:"Bochum",value:"Bochum",image:"statics/teams/Bochum.png"},{label:"Braunschweig",value:"Eintracht_Braunschweig",image:"statics/teams/Eintracht_Braunschweig.png"},{label:"Darmstadt",value:"Darmstadt",image:"statics/teams/Darmstadt.png"},{label:"DFB Pokal",value:"DFB_Pokal",image:"statics/teams/DFB_Pokal.png"},{label:"Dortmund",value:"Borussia_Dortmund",image:"statics/teams/Borussia_Dortmund.png"},{label:"Frankfurt",value:"Eintracht_Frankfurt",image:"statics/teams/Eintracht_Frankfurt.png"},{label:"Fortuna Düsseldorf",value:"Fortuna_Düsseldorf",image:"statics/teams/Fortuna_Düsseldorf.png"},{label:"Freiburg",value:"Freiburg",image:"statics/teams/Freiburg.png"},{label:"Greuther Fürth",value:"Greuther_Fürth",image:"statics/teams/Greuther_Fürth.png"},{label:"Hamburger SV",value:"Hamburger_SV",image:"statics/teams/Hamburger_SV.png"},{label:"Hannover",value:"Hannover",image:"statics/teams/Hannover.png"},{label:"Hansa Rostock",value:"Hansa_Rostock",image:"statics/teams/Hansa_Rostock.png"},{label:"Heidenheim",value:"Heidenheim",image:"statics/teams/Heidenheim.png"},{label:"Hertha",value:"Hertha",image:"statics/teams/Hertha.png"},{label:"Hoffenheim",value:"Hoffenheim",image:"statics/teams/Hoffenheim.png"},{label:"Holstein",value:"Holstein",image:"statics/teams/Holstein.png"},{label:"Jahn Regensburg",value:"Jahn_Regensburg",image:"statics/teams/Jahn_Regensburg.png"},{label:"Juventus Turin",value:"Juventus_Turin",image:"statics/teams/Juventus_Turin.png"},{label:"Kaiserslautern",value:"Kaiserslautern",image:"statics/teams/Kaiserslautern.png"},{label:"Karlsruher",value:"Karlsruher",image:"statics/teams/Karlsruher.png"},{label:"Köln",value:"Köln",image:"statics/teams/Köln.png"},{label:"Leipzig",value:"Leipzig",image:"statics/teams/Leipzig.png"},{label:"Leverkusen",value:"Bayer_Leverkusen",image:"statics/teams/Bayer_Leverkusen.png"},{label:"Magdeburg",value:"Magdeburg",image:"statics/teams/Magdeburg.png"},{label:"Mainz",value:"Mainz",image:"statics/teams/Mainz.png"},{label:"Mönchengladbach",value:"Borussia_Mönchengladbach",image:"statics/teams/Borussia_Mönchengladbach.png"},{label:"Nürnberg",value:"Nürnberg",image:"statics/teams/Nürnberg.png"},{label:"Oberachern",value:"Oberachern",image:"statics/teams/Oberachern.png"},{label:"Olympiakos Piräus",value:"Olympiakos_Piräus",image:"statics/teams/Olympiakos_Piräus.png"},{label:"Paderborn",value:"Paderborn",image:"statics/teams/Paderborn.png"},{label:"Sandhausen",value:"Sandhausen",image:"statics/teams/Sandhausen.png"},{label:"Schalke",value:"Schalke",image:"statics/teams/Schalke.png"},{label:"St. Pauli",value:"St._Pauli",image:"statics/teams/St._Pauli.png"},{label:"Stuttgart",value:"Stuttgart",image:"statics/teams/Stuttgart.png"},{label:"Union Berlin",value:"Union_Berlin",image:"statics/teams/Union_Berlin.png"},{label:"Werder Bremen",value:"Werder_Bremen",image:"statics/teams/Werder_Bremen.png"},{label:"Wolfsburg",value:"Wolfsburg",image:"statics/teams/Wolfsburg.png"}],W=[{label:"Abraham Simpson",value:"Abraham_Simpson",avatar:"statics/avatars/collection/Abraham_Simpson.png"},{label:"Alien",value:"Alien",avatar:"statics/avatars/collection/Alien.png"},{label:"Ariel",value:"Ariel",avatar:"statics/avatars/collection/Ariel.png"},{label:"Barney Gumble",value:"Barney_Gumble",avatar:"statics/avatars/collection/Barney_Gumble.png"},{label:"Bart Simpson",value:"Bart_Simpson",avatar:"statics/avatars/collection/Bart_Simpson.png"},{label:"Charlie Brown",value:"Charlie_Brown",avatar:"statics/avatars/collection/Charlie_Brown.png"},{label:"Charlie Chaplin",value:"Charlie_Chaplin",avatar:"statics/avatars/collection/Charlie_Chaplin.png"},{label:"Clancy Wiggum",value:"Clancy_Wiggum",avatar:"statics/avatars/collection/Clancy_Wiggum.png"},{label:"Cupid",value:"Cupid",avatar:"statics/avatars/collection/Cupid.png"},{label:"Doctor Strange",value:"Doctor_Strange",avatar:"statics/avatars/collection/Doctor_Strange.png"},{label:"Ed Sheeran",value:"Ed_Sheeran",avatar:"statics/avatars/collection/Ed_Sheeran.png"},{label:"Eeyore",value:"Eeyore",avatar:"statics/avatars/collection/Eeyore.png"},{label:"Elon Musk",value:"Elon_Musk",avatar:"statics/avatars/collection/Elon_Musk.png"},{label:"Fat Cat",value:"Fat_Cat",avatar:"statics/avatars/collection/Fat_Cat.png"},{label:"Hello Kitty",value:"Hello_Kitty",avatar:"statics/avatars/collection/Hello_Kitty.png"},{label:"Homer Simpson",value:"Homer_Simpson",avatar:"statics/avatars/collection/Homer_Simpson.png"},{label:"Ironman",value:"Ironman",avatar:"statics/avatars/collection/Ironman.png"},{label:"Jerry",value:"Jerry",avatar:"statics/avatars/collection/Jerry.png"},{label:"John Lennon",value:"John_Lennon",avatar:"statics/avatars/collection/John_Lennon.png"},{label:"Joker",value:"Joker",avatar:"statics/avatars/collection/Joker.png"},{label:"Krusty The Clown",value:"Krusty_The_Clown",avatar:"statics/avatars/collection/Krusty_The_Clown.png"},{label:"Linus",value:"Linus",avatar:"statics/avatars/collection/Linus.png"},{label:"Lisa Simpson",value:"Lisa_Simpson",avatar:"statics/avatars/collection/Lisa_Simpson.png"},{label:"Lucy",value:"Lucy",avatar:"statics/avatars/collection/Lucy.png"},{label:"Maggie Simpson",value:"Maggie_Simpson",avatar:"statics/avatars/collection/Maggie_Simpson.png"},{label:"Marcie",value:"Marcie",avatar:"statics/avatars/collection/Marcie.png"},{label:"Marge Simpson",value:"Marge_Simpson",avatar:"statics/avatars/collection/Marge_Simpson.png"},{label:"Marie",value:"Marie",avatar:"statics/avatars/collection/Marie.png"},{label:"Marilyn Monroe",value:"Marilyn_Monroe",avatar:"statics/avatars/collection/Marilyn_Monroe.png"},{label:"Messi",value:"Messi",avatar:"statics/avatars/collection/Messi.png"},{label:"Michael Jackson",value:"Michael_Jackson",avatar:"statics/avatars/collection/Michael_Jackson.png"},{label:"Mondtor01",value:"Mondtor01",avatar:"statics/avatars/collection/Mondtor01.png"},{label:"Mondtor02",value:"Mondtor02",avatar:"statics/avatars/collection/Mondtor02.png"},{label:"Mr Beans Teddy",value:"Mr_Beans_Teddy",avatar:"statics/avatars/collection/Mr_Beans_Teddy.png"},{label:"Mr Burns",value:"Mr_Burns",avatar:"statics/avatars/collection/Mr_Burns.png"},{label:"Ms Wicket",value:"Ms_Wicket",avatar:"statics/avatars/collection/Ms_Wicket.png"},{label:"Pelé",value:"Pelé",avatar:"statics/avatars/collection/Pelé.png"},{label:"Peppermint Patty",value:"Peppermint_Patty",avatar:"statics/avatars/collection/Peppermint_Patty.png"},{label:"Pile Of Poo",value:"Pile_Of_Poo",avatar:"statics/avatars/collection/Pile_Of_Poo.png"},{label:"Sally",value:"Sally",avatar:"statics/avatars/collection/Sally.png"},{label:"Santa",value:"Santa",avatar:"statics/avatars/collection/Santa.png"},{label:"Sea Calf",value:"Sea_Calf",avatar:"statics/avatars/collection/Sea_Calf.png"},{label:"Snoop Dogg",value:"Snoop_Dogg",avatar:"statics/avatars/collection/Snoop_Dogg.png"},{label:"Stan Marsh",value:"Stan_Marsh",avatar:"statics/avatars/collection/Stan_Marsh.png"},{label:"Sumo",value:"Sumo",avatar:"statics/avatars/collection/Sumo.png"},{label:"Super Mario",value:"Super_Mario",avatar:"statics/avatars/collection/Super_Mario.png"},{label:"Tom",value:"Tom",avatar:"statics/avatars/collection/Tom.png"},{label:"Tom Kid",value:"Tom_Kid",avatar:"statics/avatars/collection/Tom_Kid.png"},{label:"Woodstock",value:"Woodstock",avatar:"statics/avatars/collection/Woodstock.png"}]},8302:(a,e,t)=>{t.r(e),t.d(e,{default:()=>La});var l=t(9835),i=t(6970);const s={class:"q-pa-md",style:{"max-width":"500px"}},n={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},c=["src"],o=["src"],m=["src"],r={class:"q-pa-md",style:{"max-width":"500px"}},u={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},d=["src"],p=["src"],h=["src"],g={class:"q-pa-md q-gutter-sm"},v=(0,l._)("div",{class:"text-h6"},"Spiel/Veranstaltung erfassen",-1),b={class:"q-pt-md",style:{"max-width":"300px"}},w={class:"q-pt-md",style:{"max-width":"300px"}},_=["src"],f=["src"],M={class:"q-pt-md",style:{"max-width":"300px"}},y={class:"q-pt-md",style:{"max-width":"300px"}},x={class:"q-pt-md",style:{"max-width":"300px"}},k={class:"row items-center justify-end"},T={class:"row items-center justify-end"},W={class:"q-pt-md",style:{"max-width":"300px"}},H=(0,l._)("div",{class:"text-h6"},"Spiel/Veranstaltung ändern",-1),I={class:"q-pt-md",style:{"max-width":"300px"}},A={class:"q-pt-md",style:{"max-width":"300px"}},N=["src"],V=["src"],S={class:"q-pt-md",style:{"max-width":"300px"}},U={class:"q-pt-md",style:{"max-width":"300px"}},P={class:"q-pt-md",style:{"max-width":"300px"}},q={class:"row items-center justify-end"},O={class:"row items-center justify-end"},j={class:"q-pt-md",style:{"max-width":"300px"}},D={class:"text-h6"},R={class:"q-pt-md"},C={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},$=["src"],B={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},L=["src"],z={class:"q-pa-md q-gutter-sm",style:{height:"80px"}},E=["src"],K=(0,l._)("span",{class:"q-ml-sm"},"Spiel archivieren?",-1);function F(a,e,t,F,Z,Y){const Q=(0,l.up)("q-toolbar-title"),J=(0,l.up)("q-btn"),G=(0,l.up)("q-toolbar"),X=(0,l.up)("q-avatar"),aa=(0,l.up)("q-item-label"),ea=(0,l.up)("q-item-section"),ta=(0,l.up)("q-item"),la=(0,l.up)("q-list"),ia=(0,l.up)("q-badge"),sa=(0,l.up)("q-card-section"),na=(0,l.up)("q-toggle"),ca=(0,l.up)("q-select"),oa=(0,l.up)("q-input"),ma=(0,l.up)("q-date"),ra=(0,l.up)("q-popup-proxy"),ua=(0,l.up)("q-icon"),da=(0,l.up)("q-time"),pa=(0,l.up)("q-separator"),ha=(0,l.up)("q-card-actions"),ga=(0,l.up)("q-card"),va=(0,l.up)("q-dialog"),ba=(0,l.up)("q-img"),wa=(0,l.up)("q-page"),_a=(0,l.Q2)("ripple"),fa=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(wa,null,{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(G,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Aktuelle Spiele")])),_:1}),Z.IsAdministrator?((0,l.wg)(),(0,l.j4)(J,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=a=>F.addMatch=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Z.activeMatchObject,((a,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(la,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(ta,{clickable:"",onClick:e=>Y.onMatchClick(a.row,a.matchId,a.homeTeam,a.awayTeam,a.matchName,a.published,a.date+" "+a.time,a.annotations)},{default:(0,l.w5)((()=>[""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(X,{key:0,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.getTeamImage(a.homeTeam)},null,8,c)])),_:2},1024)):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(aa,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)("  ")])),_:1})):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(X,{key:2,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.getTeamImage(a.awayTeam)},null,8,o)])),_:2},1024)):(0,l.kq)("",!0),""===a.homeTeam&&""===a.awayTeam?((0,l.wg)(),(0,l.j4)(X,{key:3,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.getEventImage(a.matchName)},null,8,m)])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(aa,null,{default:(0,l.w5)((()=>[(0,l.Uk)("      ")])),_:1}),(0,l.Wm)(ea,null,{default:(0,l.w5)((()=>[(0,l.Wm)(aa,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Spiel: "+(0,i.zw)(a.matchName),1)])),_:2},1024),(0,l.Wm)(aa,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Wann: "+(0,i.zw)(a.date)+" - "+(0,i.zw)(a.time),1)])),_:2},1024),"TRUE"===a.published?((0,l.wg)(),(0,l.j4)(aa,{key:0,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Publiziert: Ja")])),_:1})):(0,l.kq)("",!0),"FALSE"===a.published?((0,l.wg)(),(0,l.j4)(aa,{key:1,caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Publiziert: Nein")])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(aa,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Kommentar: "+(0,i.zw)(a.annotations),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[_a]])])),_:2},1024)),[[_a]]))),128))]),(0,l._)("div",r,[(0,l.Wm)(G,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Vergangene Spiele ("+(0,i.zw)(Z.inactiveMatchObject.length)+")",1)])),_:1})])),_:1})]),(0,l._)("div",u,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Z.inactiveMatchObject,((a,e)=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(la,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(ta,{clickable:"",onClick:e=>Y.onInactiveMatchClick(a.matchId,a.matchName,a.date+" "+a.time,a.numberOfParticipants)},{default:(0,l.w5)((()=>[""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(X,{key:0,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.getTeamImage(a.homeTeam)},null,8,d)])),_:2},1024)):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(aa,{key:1},{default:(0,l.w5)((()=>[(0,l.Uk)("  ")])),_:1})):(0,l.kq)("",!0),""!==a.homeTeam&&""!==a.awayTeam?((0,l.wg)(),(0,l.j4)(X,{key:2,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.getTeamImage(a.awayTeam)},null,8,p)])),_:2},1024)):(0,l.kq)("",!0),""===a.homeTeam&&""===a.awayTeam?((0,l.wg)(),(0,l.j4)(X,{key:3,size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:Z.getEventImage(a.matchName)},null,8,h)])),_:2},1024)):(0,l.kq)("",!0),(0,l.Wm)(aa,null,{default:(0,l.w5)((()=>[(0,l.Uk)("      ")])),_:1}),(0,l.Wm)(ea,null,{default:(0,l.w5)((()=>[(0,l.Wm)(aa,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Spiel: "+(0,i.zw)(a.matchName),1)])),_:2},1024),(0,l.Wm)(aa,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.date)+" - "+(0,i.zw)(a.time),1)])),_:2},1024)])),_:2},1024),(0,l.Wm)(ia,{floating:"",color:"teal"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.numberOfParticipants),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[_a]])])),_:2},1024)),[[_a]]))),128))]),(0,l._)("div",g,[(0,l.Wm)(va,{modelValue:F.addMatch,"onUpdate:modelValue":e[13]||(e[13]=a=>F.addMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(ga,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(sa,null,{default:(0,l.w5)((()=>[v])),_:1}),(0,l.Wm)(sa,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("div",b,[(0,l.Wm)(na,{modelValue:F.tglIsEventNew,"onUpdate:modelValue":e[1]||(e[1]=a=>F.tglIsEventNew=a),color:"red",label:"Veranstaltung","left-label":""},null,8,["modelValue"])]),(0,l._)("div",w,[F.tglIsEventNew?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(ca,{key:0,filled:"",modelValue:F.txtHomeTeamNew,"onUpdate:modelValue":e[2]||(e[2]=a=>F.txtHomeTeamNew=a),options:Z.teamOptions,label:"Heim","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(ta,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(ea,{homeTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,_)])),_:2},1024)])),_:2},1024),(0,l.Wm)(ea,null,{default:(0,l.w5)((()=>[(0,l.Wm)(aa,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])),F.tglIsEventNew?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(ca,{key:1,filled:"",modelValue:F.txtAwayTeamNew,"onUpdate:modelValue":e[3]||(e[3]=a=>F.txtAwayTeamNew=a),options:Z.teamOptions,autofocus:"",label:"Gast","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(ta,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(ea,{awayTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,f)])),_:2},1024)])),_:2},1024),(0,l.Wm)(ea,null,{default:(0,l.w5)((()=>[(0,l.Wm)(aa,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"]))]),(0,l._)("div",M,[F.tglIsEventNew?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(oa,{key:0,dense:"",modelValue:F.txtMatchNameNew,"onUpdate:modelValue":e[4]||(e[4]=a=>F.txtMatchNameNew=a),onFocus:e[5]||(e[5]=a=>Y.setFieldsForMatchNew(F.txtHomeTeamNew.value,F.txtAwayTeamNew.value)),label:"Spielname"},null,8,["modelValue"])),F.tglIsEventNew?((0,l.wg)(),(0,l.j4)(oa,{key:1,dense:"",modelValue:F.txtMatchNameNew,"onUpdate:modelValue":e[6]||(e[6]=a=>F.txtMatchNameNew=a),label:"Veranstaltungsname"},null,8,["modelValue"])):(0,l.kq)("",!0)]),(0,l._)("div",y,[(0,l.Wm)(na,{modelValue:F.tglPublishedNew,"onUpdate:modelValue":e[7]||(e[7]=a=>F.tglPublishedNew=a),color:"red",label:"Publizieren","left-label":""},null,8,["modelValue"])]),(0,l._)("div",x,[(0,l.Wm)(oa,{filled:"",modelValue:F.txtDatetimeNew,"onUpdate:modelValue":e[10]||(e[10]=a=>F.txtDatetimeNew=a)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(ua,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(ra,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(ma,{modelValue:F.txtDatetimeNew,"onUpdate:modelValue":e[8]||(e[8]=a=>F.txtDatetimeNew=a),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",k,[(0,l.wy)((0,l.Wm)(J,{label:"Close",color:"primary",flat:""},null,512),[[fa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(ua,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(ra,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(da,{modelValue:F.txtDatetimeNew,"onUpdate:modelValue":e[9]||(e[9]=a=>F.txtDatetimeNew=a),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",T,[(0,l.wy)((0,l.Wm)(J,{label:"Close",color:"primary",flat:""},null,512),[[fa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",W,[(0,l.Wm)(oa,{modelValue:F.txtAnnotationsNew,"onUpdate:modelValue":e[11]||(e[11]=a=>F.txtAnnotationsNew=a),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(pa),(0,l.Wm)(ha,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(J,{flat:"",label:"Abbrechen"},null,512),[[fa]]),(0,l.wy)((0,l.Wm)(J,{icon:"save",label:"Speichern",onClick:e[12]||(e[12]=a=>Y.addMatchSave(F.txtHomeTeamNew.value,F.txtAwayTeamNew.value,F.txtMatchNameNew,F.tglPublishedNew,F.txtDatetimeNew,F.txtAnnotationsNew)),disable:""===F.txtMatchNameNew},null,8,["disable"]),[[fa]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(va,{modelValue:F.editMatch,"onUpdate:modelValue":e[26]||(e[26]=a=>F.editMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(ga,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(sa,null,{default:(0,l.w5)((()=>[H])),_:1}),(0,l.Wm)(sa,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l._)("div",I,[(0,l.Wm)(na,{modelValue:F.tglIsEvent,"onUpdate:modelValue":e[14]||(e[14]=a=>F.tglIsEvent=a),color:"red",label:"Veranstaltung","left-label":""},null,8,["modelValue"])]),(0,l._)("div",A,[F.tglIsEvent?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(ca,{key:0,filled:"",modelValue:F.txtHomeTeam,"onUpdate:modelValue":e[15]||(e[15]=a=>F.txtHomeTeam=a),options:Z.teamOptions,autofocus:"",label:"Heim","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(ta,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(ea,{homeTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,N)])),_:2},1024)])),_:2},1024),(0,l.Wm)(ea,null,{default:(0,l.w5)((()=>[(0,l.Wm)(aa,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"])),F.tglIsEvent?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(ca,{key:1,filled:"",modelValue:F.txtAwayTeam,"onUpdate:modelValue":e[16]||(e[16]=a=>F.txtAwayTeam=a),options:Z.teamOptions,label:"Gast","options-selected-class":"text-deep-orange"},{option:(0,l.w5)((a=>[(0,l.Wm)(ta,(0,i.vs)((0,l.F4)(a.itemProps)),{default:(0,l.w5)((()=>[(0,l.Wm)(ea,{awayTeam:""},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{size:"50px"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:a.opt.image},null,8,V)])),_:2},1024)])),_:2},1024),(0,l.Wm)(ea,null,{default:(0,l.w5)((()=>[(0,l.Wm)(aa,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(a.opt.label),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),_:1},8,["modelValue","options"]))]),(0,l._)("div",S,[F.tglIsEvent?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(oa,{key:0,dense:"",modelValue:F.txtMatchName,"onUpdate:modelValue":e[17]||(e[17]=a=>F.txtMatchName=a),label:"Spielname"},null,8,["modelValue"])),F.tglIsEvent?((0,l.wg)(),(0,l.j4)(oa,{key:1,dense:"",modelValue:F.txtMatchName,"onUpdate:modelValue":e[18]||(e[18]=a=>F.txtMatchName=a),label:"Veranstaltungsname"},null,8,["modelValue"])):(0,l.kq)("",!0)]),(0,l._)("div",U,[(0,l.Wm)(na,{modelValue:F.tglPublished,"onUpdate:modelValue":e[19]||(e[19]=a=>F.tglPublished=a),color:"red",label:"Publizieren","left-label":""},null,8,["modelValue"])]),(0,l._)("div",P,[(0,l.Wm)(oa,{filled:"",modelValue:F.txtDatetime,"onUpdate:modelValue":e[22]||(e[22]=a=>F.txtDatetime=a)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(ua,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(ra,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(ma,{modelValue:F.txtDatetime,"onUpdate:modelValue":e[20]||(e[20]=a=>F.txtDatetime=a),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",q,[(0,l.wy)((0,l.Wm)(J,{label:"Close",color:"primary",flat:""},null,512),[[fa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(ua,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(ra,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(da,{modelValue:F.txtDatetime,"onUpdate:modelValue":e[21]||(e[21]=a=>F.txtDatetime=a),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",O,[(0,l.wy)((0,l.Wm)(J,{label:"Close",color:"primary",flat:""},null,512),[[fa]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",j,[(0,l.Wm)(oa,{modelValue:F.txtAnnotations,"onUpdate:modelValue":e[23]||(e[23]=a=>F.txtAnnotations=a),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(pa),(0,l.Wm)(ha,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[Z.IsAdministrator?((0,l.wg)(),(0,l.j4)(J,{key:0,icon:"archive",color:"primary",onClick:e[24]||(e[24]=a=>F.arcMatch=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(J,{flat:"",label:"Abbrechen"},null,512),[[fa]]),(0,l.wy)((0,l.Wm)(J,{icon:"save",label:"Speichern",onClick:e[25]||(e[25]=a=>Y.editMatchSave(F.intMatchRow,F.txtMatchId,F.txtHomeTeam.value,F.txtAwayTeam.value,F.txtMatchName,F.txtMatchNameOld,F.tglPublished,F.txtDatetime,F.txtAnnotations)),disable:""===F.txtMatchName},null,8,["disable"]),[[fa]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(va,{modelValue:F.showInactiveMatch,"onUpdate:modelValue":e[29]||(e[29]=a=>F.showInactiveMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(ga,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(sa,null,{default:(0,l.w5)((()=>[(0,l._)("div",D,"Anzahl Teilnehmer: "+(0,i.zw)(F.intInactiveNumberOfParticipants),1)])),_:1}),(0,l.Wm)(sa,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(oa,{filled:"",modelValue:F.txtInactiveMatch,"onUpdate:modelValue":e[27]||(e[27]=a=>F.txtInactiveMatch=a),label:"Spiel",readonly:!0},null,8,["modelValue"]),(0,l._)("div",R,[(0,l.Wm)(oa,{filled:"",modelValue:F.txtInactiveDatetime,"onUpdate:modelValue":e[28]||(e[28]=a=>F.txtInactiveDatetime=a),label:"Wann",readonly:!0},null,8,["modelValue"])])])),_:1}),(0,l._)("div",C,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Z.participantInactiveMatchObject,((a,e)=>((0,l.wg)(),(0,l.j4)(X,{key:e,size:"40px",class:"overlapping",style:(0,i.j5)(`left: ${32*e}px`)},{default:(0,l.w5)((()=>[e<=9?((0,l.wg)(),(0,l.iD)("img",{key:0,src:Z.getAvatar(a.participantAvatar,"TRUE"===a.participantAvatarIsCustomized)},null,8,$)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l._)("div",B,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Z.participantInactiveMatchObject,((a,e)=>((0,l.wg)(),(0,l.j4)(X,{key:e,size:"40px",class:"overlapping",style:(0,i.j5)(`left: ${32*(e-10)}px`)},{default:(0,l.w5)((()=>[e>9&&e<=19?((0,l.wg)(),(0,l.iD)("img",{key:0,src:Z.getAvatar(a.participantAvatar,"TRUE"===a.participantAvatarIsCustomized)},null,8,L)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l._)("div",z,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(Z.participantInactiveMatchObject,((a,e)=>((0,l.wg)(),(0,l.j4)(X,{key:e,size:"40px",class:"overlapping",style:(0,i.j5)(`left: ${32*(e-20)}px`)},{default:(0,l.w5)((()=>[e>19?((0,l.wg)(),(0,l.iD)("img",{key:0,src:Z.getAvatar(a.participantAvatar,"TRUE"===a.participantAvatarIsCustomized)},null,8,E)):(0,l.kq)("",!0)])),_:2},1032,["style"])))),128))]),(0,l.Wm)(pa),(0,l.Wm)(ha,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(J,{flat:"",label:"Abbrechen"},null,512),[[fa]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(va,{modelValue:F.arcMatch,"onUpdate:modelValue":e[31]||(e[31]=a=>F.arcMatch=a),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(ga,null,{default:(0,l.w5)((()=>[(0,l.Wm)(sa,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(X,{icon:"archive",color:"primary","text-color":"white"}),K])),_:1}),(0,l.Wm)(ha,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(J,{flat:"",label:"Nein",color:"primary"},null,512),[[fa]]),(0,l.wy)((0,l.Wm)(J,{flat:"",label:"Ja",color:"primary",onClick:e[30]||(e[30]=a=>Y.archiveMatch(F.intMatchRow,F.txtMatchId,F.txtDatetime))},null,512),[[fa]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(ba,{src:"statics/images/AufGehtsSCF.png",class:"header-image absolute-top"})])),_:1})}t(9665),t(6727);var Z=t(9302),Y=t(2417),Q=t(499);const J=(0,Q.iH)(0),G=(0,Q.iH)(""),X=(0,Q.iH)(!1),aa=(0,Q.iH)(Y.fW),ea=(0,Q.iH)(""),ta=(0,Q.iH)(""),la=(0,Q.iH)(""),ia=(0,Q.iH)(""),sa=(0,Q.iH)(!1),na=(0,Q.iH)(""),ca=(0,Q.iH)(""),oa=(0,Q.iH)(""),ma=(0,Q.iH)(""),ra=(0,Q.iH)(""),ua=(0,Q.iH)(""),da=(0,Q.iH)(""),pa={name:"ListMatch",setup(){const a=(0,Z.Z)();return{intMatchRow:(0,Q.iH)(J),txtMatchId:(0,Q.iH)(G),tglIsEvent:(0,Q.iH)(X),txtHomeTeam:(0,Q.iH)(ea),txtAwayTeam:(0,Q.iH)(ta),txtMatchName:(0,Q.iH)(la),txtMatchNameOld:(0,Q.iH)(ia),tglPublished:(0,Q.iH)(sa),txtDatetime:(0,Q.iH)(na),txtAnnotations:(0,Q.iH)(ca),txtInactiveMatch:(0,Q.iH)(oa),txtInactiveDatetime:(0,Q.iH)(ma),intInactiveNumberOfParticipants:(0,Q.iH)(ra),tglIsEventNew:(0,Q.iH)(!1),txtHomeTeamNew:(0,Q.iH)(aa),txtAwayTeamNew:(0,Q.iH)(""),txtMatchNameNew:(0,Q.iH)(ua),tglPublishedNew:(0,Q.iH)(!1),txtDatetimeNew:(0,Q.iH)(da),txtAnnotationsNew:(0,Q.iH)("<STANDARDTEXT>"),onMatchAlreadyExists(){a.notify({type:"negative",message:"Dieses Spiel besteht bereits!"})},addMatch:(0,Q.iH)(!1),editMatch:(0,Q.iH)(!1),arcMatch:(0,Q.iH)(!1),showInactiveMatch:(0,Q.iH)(!1)}},data(){return{IsAdministrator:Y.Np,HomeTeam:Y.fW,URLMatch:Y.SJ,URLNextMatch:Y.aF,URLParticipant:Y.Bk,URLParticipantArchive:Y.UP,URLMember:Y.WV,getAvatar:Y.wX,getTeamImage:Y.RR,getEventImage:Y.Pi,teamImages:Y.hc,activeMatchObject:[{row:"",matchId:"",homeTeam:"",awayTeam:"",matchName:"",published:"",time:"",annotations:"",date:""}],inactiveMatchObject:[{matchId:"",homeTeam:"",awayTeam:"",matchName:"",time:"",date:"",numberOfParticipants:""}],participantInactiveMatchObject:[{participant:"",participantAvatar:"",participantAvatarIsCustomized:""}],memberObject:[{member:"",avatar:"",customized:""}],teamOptions:[{label:"",value:"",image:"",date:"",time:""}]}},computed:{},mounted(){this.getTableMember(),this.getTableActiveMatch(),this.getTableInactiveMatch(),this.getTableNextMatch()},methods:{getTableActiveMatch(){this.activeMatchObject=[];const a=this.IsAdministrator?"":"TRUE";this.$axios(`${this.URLMatch}&func=ReadActive&published=${a}`).then((a=>{this.tableMatch=a.data.split("\n");for(let e=0;e<this.tableMatch.length-1;e++){const a=this.tableMatch[e].split(",");this.setActiveMatchObject(a[0],a[1],a[3].trim(),a[4].trim(),a[5].trim(),a[6],a[7].substring(0,5),a[8].trim().replace(/<br>/g,"\n"),a[9])}})).catch((a=>{console.log(a)}))},setActiveMatchObject(a,e,t,l,i,s,n,c,o){this.activeMatchObject.push({row:parseInt(a),matchId:e,homeTeam:t,awayTeam:l,matchName:i,published:s,time:n,annotations:c,date:o}),this.activeMatchObject.sort((function(a,e){let t=a.date;t=t.substring(6,10)+t.substring(3,5)+t.substring(0,2);let l=e.date;return l=l.substring(6,10)+l.substring(3,5)+l.substring(0,2),t>l?1:t<l?-1:0}))},onInactiveMatchClick(a,e,t,l){oa.value=e,ma.value=t,ra.value=l,this.participantInactiveMatchObject=[],this.$axios(`${this.URLParticipantArchive}&func=ReadMatch&matchId=${a}`).then((a=>{this.tableParticipantArchive=a.data.split("\n");for(let e=0;e<this.tableParticipantArchive.length-1;e++){const a=this.tableParticipantArchive[e].split(",");let t=this.memberObject.find((e=>e.member===a[4].trim()))?.avatar;"undefined"===typeof t&&(t="");let l=this.memberObject.find((e=>e.member===a[4].trim()))?.customized;"undefined"===typeof l&&(l="FALSE"),this.setParticipantInactiveMatchObject(a[4].trim(),t,l)}})).catch((a=>{console.log(a)})),this.showInactiveMatch=!0},setParticipantInactiveMatchObject(a,e,t){this.participantInactiveMatchObject.push({participant:a,participantAvatar:e,participantAvatarIsCustomized:t})},getTableMember(){this.memberObject=[],this.$axios(`${this.URLMember}&func=Read`).then((a=>{this.tableMember=a.data.split("\n");for(let e=0;e<this.tableMember.length-1;e++){const a=this.tableMember[e].split(",");this.setMemberObject(a[3].trim(),a[4].trim(),a[5])}})).catch((a=>{console.log(a)}))},setMemberObject(a,e,t){this.memberObject.push({member:a,avatar:e,customized:t})},onMatchClick(a,e,t,l,i,s,n,c){J.value=a,G.value=e,X.value=""===t&&""===l,ea.value=t,ta.value=l,la.value=i,ia.value=i,sa.value="TRUE"===s,na.value=n,ca.value=c,this.IsAdministrator&&(this.editMatch=!0)},setFieldsForMatchNew(a,e){if("undefined"===typeof a&&(a=aa.value),"undefined"!==typeof a&&"undefined"!==typeof e){const t=this.teamOptions.find((e=>e.value===a))?.label,l=this.teamOptions.find((a=>a.value===e))?.label;ua.value=t+" vs. "+l;let i=this.teamOptions.find((a=>a.value===e))?.date,s=this.teamOptions.find((a=>a.value===e))?.time;"undefined"===typeof i&&"undefined"===typeof s&&(i=this.teamOptions.find((e=>e.value===a))?.date,s=this.teamOptions.find((e=>e.value===a))?.time),da.value=i+" "+s}},addMatchSave(a,e,t,l,i,s){"undefined"===typeof a&&(a=aa.value);const n=this.activeMatchObject.map((a=>a.matchName)),c=n.includes(t);if(c)this.onMatchAlreadyExists();else{const n=i.substring(0,10),c=i.substring(11,16);this.$axios(`${this.URLMatch}&func=Add&homeTeam=${a}&awayTeam=${e}&matchName=${encodeURI(t.replace(","," "))}&published=${l}&time=${c}&annotations=${encodeURI(s.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&date=${n}`).then((a=>{"Success, requested action completed"===a.data&&this.getTableActiveMatch()})).catch((a=>{console.log(a)}))}},editMatchSave(a,e,t,l,i,s,n,c,o){"undefined"===typeof t&&(t=ea.value),"undefined"===typeof l&&(l=ta.value);const m=this.activeMatchObject.map((a=>a.matchName)),r=m.includes(i)&&i!==s;if(r)this.onMatchAlreadyExists();else{const s=c.substring(0,10),m=c.substring(11,16),r=i.trim()+" "+s.substring(0,6)+s.substring(8,10)+" - "+m;this.$axios(`${this.URLMatch}&func=Update&row=${a}&matchId=${e}&homeTeam=${t}&awayTeam=${l}&matchName=${encodeURI(i.replace(","," "))}&published=${n}&time=${m}&annotations=${encodeURI(o.replace(",",";").replace(/(?:\r\n|\r|\n)/g,"<br>"))}&date=${s}`).then((a=>{"Success, requested action completed"===a.data&&this.$axios(`${this.URLParticipant}&func=UpdateMatch&matchId=${e}&newMatchName=${r}`).then((a=>{"Success, requested action completed"===a.data&&this.getTableActiveMatch()})).catch((a=>{console.log(a)}))})).catch((a=>{console.log(a)}))}},async archiveMatch(a,e,t){const l=t.substring(0,10),i=a=>new Promise((e=>setTimeout(e,a)));this.$axios(`${this.URLParticipant}&func=Read&matchId=${e}`).then((async a=>{this.tableParticipant=a.data.split("\n");for(let e=0;e<this.tableParticipant.length-1;e++){const a=this.tableParticipant[e].split(",");await i(1e3),this.$axios(`${this.URLParticipantArchive}&func=Add&timestamp=${a[3]}&matchId=${a[2]}&matchName=${a[4]}&participant=${a[5]}&arrival=${a[6]}&annotations=${a[7]}&action=${a[8]}&reaction=${a[9]}&date=${l}`).catch((a=>{console.log(a)}))}})).catch((a=>{console.log(a)})),this.inactivateMatch(a,e)},inactivateMatch(a,e){this.$axios(`${this.URLParticipant}&func=DeleteMatch&matchId=${e}`).then((t=>{"Success, requested action completed"===t.data&&this.$axios(`${this.URLMatch}&func=Inactivate&row=${a}&matchId=${e}`).then((a=>{"Success, requested action completed"===a.data&&(this.getTableActiveMatch(),this.editMatch=!1)})).catch((a=>{console.log(a)}))})).catch((a=>{console.log(a)}))},getTableInactiveMatch(){this.inactiveMatchObject=[],this.$axios(`${this.URLMatch}&func=ReadInactive`).then((a=>{this.tableInactiveMatch=a.data.split("\n");for(let e=0;e<this.tableInactiveMatch.length-1;e++){const a=this.tableInactiveMatch[e].split(",");let t=0;this.$axios(`${this.URLParticipantArchive}&func=ReadMatch&matchId=${a[1]}`).then((e=>{this.tableParticipantArchive=e.data.split("\n"),t=this.tableParticipantArchive.length-1,this.setInactiveMatchObject(a[1],a[3].trim(),a[4].trim(),a[5].trim(),a[7].substring(0,5),a[9],t)})).catch((a=>{console.log(a)}))}})).catch((a=>{console.log(a)}))},setInactiveMatchObject(a,e,t,l,i,s,n){this.inactiveMatchObject.push({matchId:a,homeTeam:e,awayTeam:t,matchName:l,time:i,date:s,numberOfParticipants:n}),this.inactiveMatchObject.sort((function(a,e){let t=a.date;t=t.substring(6,10)+t.substring(3,5)+t.substring(0,2);let l=e.date;return l=l.substring(6,10)+l.substring(3,5)+l.substring(0,2),t<l?1:t>l?-1:0}))},getTableNextMatch(){this.teamOptions=[];let a=this.teamImages.find((a=>a.value===this.HomeTeam))?.label,e=this.teamImages.find((a=>a.value===this.HomeTeam))?.image;this.setTeamOptionsObject(a,this.HomeTeam,e),this.$axios(`${this.URLNextMatch}&func=Read`).then((t=>{this.tableNextMatch=t.data.split("\n");for(let l=0;l<this.tableNextMatch.length-1;l++){const t=this.tableNextMatch[l].split(",");a=this.teamImages.find((a=>a.value===t[1].trim()))?.label,e=this.teamImages.find((a=>a.value===t[1].trim()))?.image,this.setTeamOptionsObject(a,t[1].trim(),e,t[2],t[3])}})).catch((a=>{console.log(a)}))},setTeamOptionsObject(a,e,t,l,i){this.teamOptions.push({label:a,value:e,image:t,date:l,time:i})}}};var ha=t(1639),ga=t(9885),va=t(1663),ba=t(1973),wa=t(8879),_a=t(3246),fa=t(490),Ma=t(1357),ya=t(3115),xa=t(1233),ka=t(990),Ta=t(2074),Wa=t(4458),Ha=t(3190),Ia=t(592),Aa=t(4363),Na=t(6611),Va=t(2857),Sa=t(2765),Ua=t(2952),Pa=t(6770),qa=t(926),Oa=t(1821),ja=t(335),Da=t(1136),Ra=t(2146),Ca=t(9984),$a=t.n(Ca);const Ba=(0,ha.Z)(pa,[["render",F]]),La=Ba;$a()(pa,"components",{QPage:ga.Z,QToolbar:va.Z,QToolbarTitle:ba.Z,QBtn:wa.Z,QList:_a.Z,QItem:fa.Z,QAvatar:Ma.Z,QItemLabel:ya.Z,QItemSection:xa.Z,QBadge:ka.Z,QDialog:Ta.Z,QCard:Wa.Z,QCardSection:Ha.Z,QToggle:Ia.Z,QSelect:Aa.Z,QInput:Na.Z,QIcon:Va.Z,QPopupProxy:Sa.Z,QDate:Ua.Z,QTime:Pa.Z,QSeparator:qa.Z,QCardActions:Oa.Z,QImg:ja.Z}),$a()(pa,"directives",{Ripple:Da.Z,ClosePopup:Ra.Z})}}]);