export const ExecuteSQL = (sql: string) => {
	let IsBusy = true;
	let result = null;

	let Config = LoadResourceFile(GetCurrentResourceName(), "shared/config.json") || "{}";

	if (Config["MySQL"] == "oxmysql") {
		exports.oxmysql.execute(sql, [], (data: any) => {
			result = data;
			IsBusy = false;
		});
	} else if (Config["MySQL"] == "mysql-async") {
		// @ts-ignore
		MySQL.Async.fetchAll(sql, [], (data: any) => {
			result = data;
			IsBusy = false;
		});
	} else if (Config["MySQL"] == "ghmattimysql") {
		exports.ghmattimysql.execute(sql, (data: any) => {
			result = data;
			IsBusy = false;
		});
	}
	while (IsBusy) {
		setTimeout(() => {}, 1);
	}
	return result;
}
	

