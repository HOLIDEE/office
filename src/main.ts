/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.room.area.onEnter('welcomeZone').subscribe(() => {
        currentPopup = WA.ui.openPopup("welcomePopup", "Bienvenue au HOLIDEE & NXLVL Center !", [{
		label: "Option1",
		className: "normal",
		callback: (popup) => {
			popup.close();
		}},{
		label: "Option2",
		className: "normal",
		callback: (popup) => {
			popup.close();
		}},{
		label: "Close",
		className: "primary",
		callback: (popup) => {
			popup.close();
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
