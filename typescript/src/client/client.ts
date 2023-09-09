import * as Index from './controllers/index';
import * as Framework from './../core/cl_bridge';


(async () => {
	const Config: string[] =  JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'shared/config.json')) || '[]';

	
    
    await Index.Init();
})();