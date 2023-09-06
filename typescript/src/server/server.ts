import * as Controllers from './controllers/index';
import * as ESX from './../core/esx/sv_bridge';
//import * as QB from './../core/qb/sv_bridge';
import * as DB from '../core/DB/db';

(async () => {
    const Config: string[] =  JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'shared/config.json')) || '[]';
	if (GetResourceState('es_extended') == 'started') await ESX.Init();
    //if (GetResourceState('qb-core') == 'started') await QB.Init();

	await Controllers.Init();
})();