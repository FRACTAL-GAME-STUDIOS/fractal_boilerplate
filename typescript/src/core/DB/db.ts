import { oxmysql as MySQL } from "@overextended/oxmysql";

export const Scalar = async (sql: string, params?: any[]): Promise<any> => {
  	let response: any;
  	try {
    	if (params) {
      		response = await MySQL.scalar(sql, params);
    	} else {
      		response = await MySQL.scalar(sql);
    	}
  	} catch (error) {
    	console.error(error);
    	response = [];
  	}
  	return JSON.stringify(response);
};
