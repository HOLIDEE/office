import{b as l}from"./init-22028896.js";console.log("Script started successfully");let o;WA.onInit().then(()=>{console.log("Scripting API ready"),console.log("Player tags: ",WA.player.tags),WA.room.area.onEnter("welcomeZone").subscribe(()=>{o=WA.ui.openPopup("welcomePopup","Bienvenue au HOLIDEE & NXLVL Center ! \r Je me rends directement à la salle :",[{label:"HOLIDEE Meeting",className:"normal",callback:()=>{WA.player.moveTo(755,2100,16)}},{label:"CONFERENCE",className:"normal",callback:()=>{WA.player.moveTo(1840,1872,16).then(e=>{e.cancelled||WA.player.moveTo(1840,1219,16)})}},{label:"NXLVL Meeting",className:"primary",callback:()=>{WA.player.moveTo(2944,1312,16)}}]),WA.room.area.onLeave("welcomeZone").subscribe(a)}),l().then(()=>{console.log("Scripting API Extra ready")}).catch(e=>console.error(e))}).catch(e=>console.error(e));function a(){o!==void 0&&(o.close(),o=void 0)}
