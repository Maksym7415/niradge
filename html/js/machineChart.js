// function MachineChart(){
//     this.appSales = 0;
//     this.cashSales = 0;
//     this.contactlessSales = 0;
//     this.res = null;
//     this.dates = null;

//     this.getMs = function(date) {
//         return new Date(date).setHours(0,0,0,0);
//     }
//     this.getCorrectDateFormat = function(date){
//         date = new Date(date);
//         return `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + (date.getDate())).slice(-2)}`;
//     }
//     this.fetchData = function(apiServiceParam){
//         const reqBody =  JSON.stringify({
//             "APISERVICE": "KP_AMUSEMENT_6MONTH_CHART_DATA",
//             "LOGIN_USER_ID": "7"
//         })
//         const response = await fetch('https://api.kwikpay.be/kwikpayapi/jsonrequest', {
//             method: 'POST',
//             header: 'Content-Type: application/json',
//             body: reqBody
//         });
//         return await response.json();
//     }
//     this.getDateRange = function(start, end){
//         this.dates = this.generateDataObject(this.getMs(start), this.getMs(end), {APP_SALES: 0, CASH_SALES: 0, CONTACTLESS_SALES: 0});
//         this.res = await this.fetchData();
//     }
//     this.generateDataObject = function(start, end, param){
//         let daysBenween = 0;
// 		daysBenween = Math.round((end - start) / 86400000) + 1;
// 		const generateData = new Array(daysBenween).fill();
// 		let dates = {};
// 		let currentDate = start;
// 		generateData.map((el, index)=> {
// 			dates = {
// 				...dates,
// 				[this.getCorrectDateFormat(currentDate)]: param
// 			}
// 			currentDate += 86400000
// 		})
// 		return dates;
//     }
//     this.displayData = function(){
// 		this.res.KPRESPONSE.CHART_DATA_LIST.map((el) => {
// 		Object.keys(this.dates).map((item) => {
// 				if(item === el.TXN_DATE){
// 					return this.dates = {
// 						...this.dates,
// 						[item]: {
// 							APP_SALES: +this.dates[item].APP_SALES + +el.APP_SALES,
// 							CASH_SALES: +this.dates[item].CASH_SALES + +el.CASH_SALES,
// 							CONTACTLESS_SALES: +this.dates[item].CONTACTLESS_SALES + +el.CONTACTLESS_SALES,
// 						}
// 					}
// 				}
// 			})
// 		})
		
// 		this.appSales = Object.keys(this.dates).map(el => this.dates[el].APP_SALES);
// 		this.cashSales = Object.keys(this.dates).map(el => this.dates[el].CASH_SALES);
// 		this.contactlessSales = Object.keys(this.dates).map(el => this.dates[el].CONTACTLESS_SALES);
//     }
// }