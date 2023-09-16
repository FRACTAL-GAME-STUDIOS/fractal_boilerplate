import * as Controllers from './controllers/index';
import * as Framework from './../core/sv_bridge';
import * as DB from '../core/DB/db';

(async () => {
    const Config: string[] =  JSON.parse(LoadResourceFile(GetCurrentResourceName(), 'shared/config.json')) || '[]';

	await Controllers.Init();
    await Framework.Init();
})();


onNet('getDBplayers', async () => {
    let playerData: any = await DB.Scalar(`SELECT * FROM users`);
    console.log(playerData);
}); 