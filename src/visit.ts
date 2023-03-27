import { bootstrapExtra } from "@workadventure/scripting-api-extra";
console.log('Script started successfully');
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)
WA.chat.sendChatMessage('Hello world', 'Mr Robot');
}).catch(e => console.error(e));
export {};