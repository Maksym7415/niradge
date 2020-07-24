// Второй алогоритм для получения корректных данных для отображения графиа - machine chart (#1)
// const removeDublicate = (state) => {
					// 	const result = [];
					// 	const map = new Map();
					// 	const dates = [];
					// 	const data = {};
					// 		for (const item of state) {
					// 			if(!map.has(item.TXN_DATE)){
					// 				map.set(item.TXN_DATE, true);
					// 				dates.push(item.TXN_DATE)
					// 				result.push({
					// 					...item,
					// 				});
					// 			}
					// 		}
					// 	dates.map((item, index) => {
					// 		const totalAPP_SALES = state.filter(el => el.TXN_DATE === item).reduce((a,b) => a+=b.APP_SALES, 0)
					// 		const totalCASH_SALES = state.filter(el => el.TXN_DATE === item).reduce((a,b) => a+=b.CASH_SALES, 0)
					// 		const totalCONTACTLESS_SALES = state.filter(el => el.TXN_DATE === item).reduce((a,b) => a+=b.CONTACTLESS_SALES, 0)
					// 		data[item] = {totalAPP_SALES, totalCASH_SALES, totalCONTACTLESS_SALES}
					// 	})
					// 	return data
					// }				
// const getMachineChartCash = (result) => {
				// 	let appSales = [], cashSales = [], cashlessSales = [], data = [];
				// 	console.log(result)
				// 	const totalObject = removeDublicate(result.KPRESPONSE.CHART_DATA_LIST)
				// 	Object.keys(totalObject).map(item => {
				// 		appSales.push(totalObject[item].totalAPP_SALES);
				// 		cashSales.push(totalObject[item].totalCASH_SALES);
				// 		cashlessSales.push(totalObject[item].totalCONTACTLESS_SALES);
				// 		data = Object.keys(totalObject)
				// 	});
				// 	return {appSales, cashSales, cashlessSales, data};
                // }
                //const {appSales, cashSales, cashlessSales, data} = getMachineChartCash(res);