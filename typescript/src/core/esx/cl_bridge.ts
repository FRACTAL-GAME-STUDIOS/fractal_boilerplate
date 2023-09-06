import { PlayerData } from './../esx/interfaces/ESX.interface';
import { ESXClient } from "fivem-esx-js/client/esx_client";

export let ESX: ESXClient;
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

	function HasGroup(filter: any): [string, number] | undefined {
		const typeOfFilter = typeof filter;

		if (typeOfFilter === 'string') {
			// @ts-ignore
			if (PlayerData.job.name === filter) {
				// @ts-ignore
				return [PlayerData.job.name, PlayerData.job.grade];
			}
		} else {
			const tableType = Array.isArray(filter) ? 'array' : 'hash';

			if (tableType === 'hash') {
				// @ts-ignore
				const grade = filter[PlayerData.job.name];

				// @ts-ignore
				if (grade !== undefined && grade <= PlayerData.job.grade) {
					// @ts-ignore
					return [PlayerData.job.name, PlayerData.job.grade];
				}
			} else if (tableType === 'array') {
				for (let i = 0; i < filter.length; i++) {
					// @ts-ignore
					if (PlayerData.job.name === filter[i]) {
						// @ts-ignore
						return [PlayerData.job.name, PlayerData.job.grade];
					}
				}
			}
		}
		return undefined;
	}
}