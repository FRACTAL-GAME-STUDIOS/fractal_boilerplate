export interface PlayerData {
	identifier: string;
	job: JobData;
	loadout: LoadoutItem[];
	accounts: AccountData[];
	inventory: InventoryItem[];
	coords: Coords;
}

interface JobData {
	name: string;
	grade: number;
	label: string;
	grade_label: string;
}

interface LoadoutItem {
	name: string;
	ammo: number;
}

interface AccountData {
	name: string;
	money: number;
	label: string;
}

interface InventoryItem {
	name: string;
	count: number;
	label: string;
	weight: number;
	usable: boolean;
	rare: boolean;
	canRemove: boolean;
}

interface Coords {
	x: number;
	y: number;
	z: number;
	heading: number;
}
