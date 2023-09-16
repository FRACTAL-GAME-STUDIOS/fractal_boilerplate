import * as Index from './controllers/index';
import * as Framework from './../core/cl_bridge';
import { debug, RegisterNUICallback } from './helpers/utils';

let active = false;
(async () => {
	const Config: string[] =  JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'shared/config.json')) || '[]';

	await Framework.Init();
    await Index.Init();
})();

RegisterCommand('shownui', async (source: number, args: string[], raw: string) => {
	debug('showing nui frame');
	active = !active;
	toggleNUIFrame(active);
}, false);

RegisterCommand('getDBplayers', function(source: number, args: string[], raw: string) {
	source = PlayerId();
	emitNet('getDBplayers');
}, false);

const toggleNUIFrame = (show: boolean) => {
	debug('toggleNUIFrame called', show);
	SetNuiFocus(show, show);
	SendNUIMessage({
		action: 'setVisible',
		data: show,
	});
}

RegisterNUICallback('hideFrame', (_: any, cb: Function) => {
	toggleNUIFrame(false);
	SetNuiFocus(false, false);
	cb();
});

// RegisterNUICallback("getClientData", (data: any, cb: Function) => {
// 	let curCoords = GetEntityCoords(PlayerPedId(), false);
// 	console.log('curCoords', curCoords);
// 	console.log('GetEntityHeading', GetEntityHeading(PlayerPedId()));
// 	console.log('GetEntityRotation', GetEntityRotation(PlayerPedId(), 0));
// 	console.log('GetEntityCoords', GetEntityCoords(PlayerPedId(), false));
// 	console.log('PlayerPedId', PlayerPedId());
// 	console.log('PlayerId', PlayerId());

// 	let playerData: any = {
// 		coords: curCoords,
// 		heading: GetEntityHeading(PlayerPedId()),
// 		xPlayer: Framework.GetPlayerData(),
// 	};

// 	cb(playerData);
// });

RegisterNUICallback('getClientData', (data, cb) => {
	console.log('GetEntityHeading', GetEntityHeading(PlayerPedId()));
	console.log('GetEntityRotation', GetEntityRotation(PlayerPedId(), 0));
	console.log('GetEntityCoords', GetEntityCoords(PlayerPedId(), false));
	console.log('PlayerPedId', PlayerPedId());
	console.log('PlayerId', PlayerId());

	let playerData: any = {
		coords: GetEntityCoords(PlayerPedId(), false),
		heading: GetEntityHeading(PlayerPedId()),
		xPlayer: Framework.GetPlayerData(),
	};

	cb(playerData);
});