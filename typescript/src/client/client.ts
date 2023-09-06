import * as Index from './controllers/index';
import * as ESX from './../core/esx/cl_bridge';
//import * as QB from './../core/qb/cl_bridge';

(async () => {
	const Config: string[] =  JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'shared/config.json')) || '[]';
    if (GetResourceState('es_extended') == 'started') await ESX.Init();
    //if (GetResourceState('qb-core') == 'started') await QB.Init();

	
    
    await Index.Init();
})();