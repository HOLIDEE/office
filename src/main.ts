/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('welcomeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au HOLIDEE & NXLVL Center ! \r Je me rends directement à la salle :", [{
		label: "HOLIDEE Meeting",
		className: "normal",
		callback: (popup) => {
			WA.player.moveTo(755, 2100, 10);
		}},{
		label: "CONFERENCE",
		className: "normal",
		callback: (popup) => {
			WA.player.moveTo(1840, 1872, 10).then((result) => {
   			 if (!result.cancelled) {
        			WA.player.moveTo(1840, 1219, 10);
		}})}},{
		label: "NXLVL Meeting",
		className: "primary",
		callback: (popup) => {
			WA.player.moveTo(2944, 1312, 10);
		}
}]);

    WA.room.area.onLeave('welcomeZone').subscribe(closePopup)
    })
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
