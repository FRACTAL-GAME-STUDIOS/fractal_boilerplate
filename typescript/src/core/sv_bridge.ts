import * as cfxServer from 'cfx-server';
import { ESXServer } from "fivem-esx-js/server/esx_server";
import { ESXPlayer } from "fivem-esx-js/server/esx_xplayer";

let selectedFramework: string;
export let ESX: ESXServer;
emit('esx:getSharedObject', (obj: ESXServer) => {
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
}

function InitQB(): any {
	console.log('Se ha detectado como Framework activo: QB, cargando funciones de QB.')
	selectedFramework = 'QB';
}

export function GetPlayer(source: number) {
	switch (selectedFramework) {
		case 'ESX':
			return ESX.GetPlayerFromId(source);
		case 'QB':
			break;
		default:
			break;
	}
}

export function KickPlayer(source: number, reason: string) {
	switch (selectedFramework) {
		case 'ESX':
			let player = GetPlayer(source);
			if (player) {
				player.kick(reason);
			}
		case 'QB':
			break;
		default:
			break;
	}
}

export function HasGroup(source: number, filter: any): [string, number] | undefined {
	switch (selectedFramework) {
		case 'ESX':
			const player = ESX.GetPlayerFromId(source);
			const typeOfFilter = typeof filter;

			if (typeOfFilter === 'string') {
				if (player.job.name === filter) {
					return [player.job.name, player.job.grade];
				}
			} else {
				const tableType = Array.isArray(filter) ? 'array' : 'hash';

				if (tableType === 'hash') {
					const grade = filter[player.job.name];

					if (grade !== undefined && grade <= player.job.grade) {
						return [player.job.name, player.job.grade];
					}
				} else if (tableType === 'array') {
					for (let i = 0; i < filter.length; i++) {
						if (player.job.name === filter[i]) {
							return [player.job.name, player.job.grade];
						}
					}
				}
			}
			return undefined;
		case 'QB':
			break;
		default:
			break;
	}
}

export function GetIdentifier(source: number) {
	switch (selectedFramework) {
		case 'ESX':
			let player = ESX.GetPlayerFromId(source);
			return player.getIdentifier();	
		case 'QB':
			break;
		default:
			break;
	}
}

export function GetName(source: number) {
	switch (selectedFramework) {
		case 'ESX':
			let player = ESX.GetPlayerFromId(source);
			return player.getName();
		case 'QB':
			break;
		default:
			break;
	}
}

export function RegisterUsableItem(item: string, cb: Function) {
	switch (selectedFramework) {
		case 'ESX':
			ESX.RegisterUsableItem(item, cb);
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function HasItem(source: number, search: string) {
	switch (selectedFramework) {
		case 'ESX':
			let player = GetPlayer(source);
			if (player) {
				let item = player.getInventoryItem(search);
				if (item) {
					return item.count;
				} else {
					return 0;
				}
			}
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function AddItem(source: number, item: string, count: number, slot: any, metadata: any) {
	switch (selectedFramework) {
		case 'ESX':
			let player = GetPlayer(source);
			if (player) {
				// @ts-ignore
				player.addInventoryItem(item, count, metadata, slot);
			}
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function RemoveItem(source: number, item: string, count: number, slot: any, metadata: any) {
	switch (selectedFramework) {
		case 'ESX':
			let player = GetPlayer(source);
			if (player) {
				// @ts-ignore
				player.removeInventoryItem(item, count, metadata, slot);
			}
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function AddMoney(source: number, type: string, amount: number) {
	switch (selectedFramework) {
		case 'ESX':
			if (type == 'cash') type = 'money';
			let player = GetPlayer(source);
			if (player) {
				player.addAccountMoney(type, amount);
			}
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function RemoveMoney(source: number, type: string, amount: number) {
	switch (selectedFramework) {
		case 'ESX':
			if (type == 'cash') type = 'money';
			let player = GetPlayer(source);

			if (player) {
				player.removeAccountMoney(type, amount);
			}
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function GetMoney(source: number, type: string) {
	switch (selectedFramework) {
		case 'ESX':
			if (type == 'cash') type = 'money';
			let player = GetPlayer(source);
			if (player) {
				return player.getAccount(type);
			} else {
				return 0;
			}
			break;
		case 'QB':
			break;
		default:
			break;
	}
}

export function RegisterServerCallback(name: string, cb: Function) {
	switch (selectedFramework) {
		case 'ESX':
			ESX.RegisterServerCallback(name, cb);
			break;
		case 'QB':
			break;
		default:
			break;
	}
}