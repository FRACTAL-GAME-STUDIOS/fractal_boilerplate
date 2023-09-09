import { PlayerData } from './interfaces/ESX.interface';
import { ESXClient } from "fivem-esx-js/client/esx_client";

let selectedFramework: string;
export let ESX: ESXClient;
emit('esx:getSharedObject', (obj) => {
    ESX = obj;
});


export const Init = async () => {
	try {
		if (GetResourceState('es_extended') == 'started') await InitESX();
		//if (GetResourceState('qb-core') == 'started') await InitQB();
	} catch (error) {
		console.error("Ocurrió un error durante la inicialización:", error);
	}
};

function InitESX(): any {
	console.log('Se ha detectado como Framework activo: ESX, cargando funciones de ESX.')

	selectedFramework = 'ESX';
	let PlayerLoaded: boolean;
	let PlayerData: PlayerData = {
		identifier: '',
		job: undefined,
		loadout: [],
		accounts: [],
		inventory: [],
		coords: undefined
	};

	on('esx:playerLoaded', (data: any) => {
		PlayerData = data;
		PlayerLoaded = true;
	});

	on('esx:onPlayerSpawn', (data: any) => {

	});

	on('esx:onPlayerDeath', (data: any) => {

	});

	on('esx:onPlayerLogout', (data: any) => {

	});

	on('esx:setJob', (data: any) => {

	});

	const TriggerServerCallback = (name: string, cb: Function, ...args: any[]) => {
		return ESX.TriggerServerCallback(name, cb, ...args);
	}
}

function InitQB(): any {
	console.log('Se ha detectado como Framework activo: ESX, cargando funciones de ESX.')
	selectedFramework = 'QB';
}

export function TriggerServerCallback(arg0: string, arg1: (skills: any) => void) {
	switch (selectedFramework) {
		case 'ESX':
			break;
		case 'QB':
			break;
		default:
			console.error('No se han inicializado los frameworks o posible uso en STANDALONE');
			break;
	}
}

