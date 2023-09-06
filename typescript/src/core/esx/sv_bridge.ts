import { ESXServer } from "fivem-esx-js/server/esx_server";
export let ESX: ESXServer;
emit('esx:getSharedObject', (obj) => {
    ESX = obj;
});

export const Init = async () => {
	try {
		await Promise.all([InitBridge()]);
	} catch (error) {
		console.error("Ocurrió un error durante la inicialización:", error);
	}
};

function InitBridge(): any {
	console.log('Se ha detectado como Framework activo: ESX, cargando funciones de ESX.')
	let Framework = 'esx';

	function GetPlayer(source: number) {
		return ESX.GetPlayerFromId(source);
	}

	function KickPlayer(source: number, reason: string) {
		let player = GetPlayer(source);
		return player.kick(reason);
	}

	function HasGroup(source: number, filter: any): [string, number] | undefined {
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
	}

	function GetIdentifier(source: number) {
		let player = ESX.GetPlayerFromId(source);
		return player.getIdentifier();
	}

	function GetName(source: number) {
		let player = ESX.GetPlayerFromId(source);
		return player.getName();
	}

	function RegisterUsableItem(item: string, cb: Function) {
		ESX.RegisterUsableItem(item, cb);
	}

	function HasItem(source: number, search: string) {
		let player = GetPlayer(source);
		let item = player.getInventoryItem(search);
		if (item) {
			return item.count;
		} else {
			return 0;
		}
	}

	function AddItem(source: number, item: string, count: number, slot: any, metadata: any) {
		let player = GetPlayer(source);
		// @ts-ignore
		player.addInventoryItem(item, count, metadata, slot);
	}

	function RemoveItem(source: number, item: string, count: number, slot: any, metadata: any) {
		let player = GetPlayer(source);
		// @ts-ignore
		player.removeInventoryItem(item, count, metadata, slot);
	}

	function AddMoney(source: number, type: string, amount: number) {
		if (type == 'cash') type = 'money';
		let player = GetPlayer(source);
		player.addAccountMoney(type, amount);
	}

	function RemoveMoney(source: number, type: string, amount: number) {
		if (type == 'cash') type = 'money';
		let player = GetPlayer(source);
		player.removeAccountMoney(type, amount);
	}

	function GetMoney(source: number, type: string) {
		if (type == 'cash') type = 'money';
		let player = GetPlayer(source);
		return player.getAccount(type);
	}

	function RegisterServerCallback(name: string, cb: Function) {
		ESX.RegisterServerCallback(name, cb);
	}
}
