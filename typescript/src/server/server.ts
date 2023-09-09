import * as Controllers from './controllers/index';
import * as Framework from './../core/sv_bridge';
import * as DB from '../core/DB/db';

(async () => {
    const Config: string[] =  JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'shared/config.json')) || '[]';

	await Controllers.Init();
})();