/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
});

require(["js/qlik"], function (qlik) {
	window.qlik = qlik;
	
	qlik.setOnError( function (error) {
		console.log(error);
	});
		qlik.theme.apply('Tourism-theme').then(function(result) {

          if(result)

              console.log('theme applied!');

          else

              console.warn('could not apply theme!');

     });

	

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('Tourism.qvf', config);

	var app1 = qlik.openApp('test app.qvf', config);

	var app2 = qlik.openApp('Overview-2.qvf', config);

	var app3 = qlik.openApp('Overview-3.qvf', config);

	var app4 = qlik.openApp('Initiatives.qvf', config);

	var app5 = qlik.openApp('TDC.qvf', config);

	var app6 = qlik.openApp('Initiatives (1).qvf', config);

	var app7 = qlik.openApp('Initiatives (1).qvf', config);

	var app8 = qlik.openApp('Initiatives (1).qvf', config);

	var app9 = qlik.openApp('Initiatives (1).qvf', config);

	var app10 = qlik.openApp('Initiatives (1).qvf', config);

	var app11 = qlik.openApp('Initiatives (1).qvf', config);

	var app12 = qlik.openApp('Initiatives (1).qvf', config);

	var app13 = qlik.openApp('Initiatives (1).qvf', config);

	var app14 = qlik.openApp('Overview-5.qvf', config);

	var app15 = qlik.openApp('Visitor_Hubs_Updated.qvf', config);

	var app16 = qlik.openApp('Entering and Leaving.qvf', config);

	var app17 = qlik.openApp('Initiatives (1).qvf', config);

	var app18 = qlik.openApp('Mobility.qvf', config);

	var app19 = qlik.openApp('Initiatives (1).qvf', config);

	var app20 = qlik.openApp('Initiatives (1).qvf', config);

	var app21 = qlik.openApp('Initiatives (1).qvf', config);

	var app22 = qlik.openApp('Initiatives (1).qvf', config);

	var app23 = qlik.openApp('Initiatives (1).qvf', config);

	var app24 = qlik.openApp('Initiatives (1).qvf', config);

	var app25 = qlik.openApp('Initiatives (1).qvf', config);

	var app26 = qlik.openApp('Initiatives (1).qvf', config);

	var app27 = qlik.openApp('Initiatives (1).qvf', config);

	var app28 = qlik.openApp('Initiatives (1).qvf', config);

	var app29 = qlik.openApp('TDC-13.qvf', config);

	var app30 = qlik.openApp('TDC-21.qvf', config);

	var app31 = qlik.openApp('TDC-21_Initiatives.qvf', config);


	//get objects -- inserted here --
	
	app30.getObject('QV-29','pJJjTL');
	app30.getObject('QV-filter-30','uBLjY');
	app30.getObject('QV-filter-29','ksTJx');
	app30.getObject('QV-filter-28','HHvVbSA');
	app30.getObject('QV-filter-27','PdBgPpF');
	app30.getObject('QV-filter-91','uBLjY');
	app30.getObject('QV-filter-90','ksTJx');
	app30.getObject('QV-filter-89','HHvVbSA');
	app30.getObject('QV-filter-88','PdBgPpF');
	app30.getObject('QV-filter-105-new','uBLjY');
	app30.getObject('QV-filter-104-new','ksTJx');
	app30.getObject('QV-filter-102-new','ea4e7a88-95eb-4672-94a3-2216fe7ad455');
	app30.getObject('QV-filter-103-new','HHvVbSA');
	app30.getObject('QV-filter-102','PdBgPpF');
	app30.getObject('QV-filter-103','ecd56627-3b9e-430e-8391-b2e953d16be7');
	app30.getObject('QV-filter-104','1ae227a5-2133-4231-a194-03b093b12134');
	app30.getObject('QV-filter-105','f30bcd66-69f5-4916-863a-d75e109258c2');
	app30.getObject('QV-filter-58--new','TZFhAb');
	app30.getObject('QV-filter-91--new','TZFhAb');
	app30.getObject('QV-filter-56','ecd56627-3b9e-430e-8391-b2e953d16be7');
	app30.getObject('QV-filter-55','ea4e7a88-95eb-4672-94a3-2216fe7ad455');
	app30.getObject('QV-filter-57','1ae227a5-2133-4231-a194-03b093b12134');
	app30.getObject('QV-filter-58','f30bcd66-69f5-4916-863a-d75e109258c2');
	app30.getObject('QV-82-a','GAjewb');
	app30.getObject('QV-80-a','GAjewb');
	app30.getObject('QV-113-new-new','NCBumj');
	app30.getObject('QV-83','HhnJnDE');
	app30.getObject('QV-105-new','AaYzn');
	app30.getObject('QV-104-new','eTgLqb');
	app30.getObject('QV-103-new','vUcDnsP');
	app30.getObject('QV-102-new','YKUrps');
	app30.getObject('QV-81','TrRfmg');
	
	app30.getObject('QV-79','QKNPGq');
	app30.getObject('QV-113','ARdJS');
	app30.getObject('QV-112','SXEHTj');
	app30.getObject('QV-111-dup','JpFqp');
	app30.getObject('QV-111','SvVcv');
	app30.getObject('QV-109','eVWXrz');
	app30.getObject('QV-114','PLNdJu');
	app30.getObject('QV-110-dup','kXYgsz');
	app30.getObject('QV-110','frZWhn');
	app30.getObject('QV-108','qsEVjC');
	
	
	app30.getObject('QV-109-a','dyuZBYJ');
	app30.getObject('QV-107-a','dyuZBYJ');
	app30.getObject('QV-105','JjCjHm');
	app30.getObject('QV-104','yDnmS');
	app30.getObject('QV-103','rAfChfF');
	app30.getObject('QV-102','GKzdXy');
	app30.getObject('QV-107','XeQAxKP');
	app30.getObject('QV-106','gWAyWZB');
	app30.getObject('QV-68','vftWj');
	app30.getObject('QV-58--new','zGPgPMc');
	app30.getObject('QV-66','KXJAJ');
	app30.getObject('QV-65','sMbVK');
	app30.getObject('QV-61','wNuqfu');
	app30.getObject('QV-59','wNuqfu');
	
	app30.getObject('QV-58','00736d17-8c4b-47d2-a0e6-c68ed0b8ceb4');
	app30.getObject('QV-57','2a69f40b-e07c-4d16-94eb-8cceb47bfcea');
	app30.getObject('QV-56','3bd29875-09a3-4e9e-992f-50e08b2af256');
	app30.getObject('QV-55','ba70455d-ac5e-4e0b-b9ce-6c3c6b7cf8c6');
	app30.getObject('QV-67','4616404c-33ae-4e7a-966d-4ac2386d1490');
	app30.getObject('QV-63','3b0e0c67-165a-4a92-8b07-ad9a9a6957d0');
	app30.getObject('QV-98-a','jyZusSe');
	app30.getObject('QV-91--new','USczjj');
	app30.getObject('QV-100-sub','wmWPR');
	app30.getObject('QV-99','JZCkkF');
	app30.getObject('QV-100','MvuFV');
	
	app30.getObject('QV-98','YbVQGhv');
	app30.getObject('QV-95-a','uUJdQp');
	app30.getObject('QV-93-a','uUJdQp');
	app30.getObject('QV-93','ppeQFG');
	app30.getObject('QV-96','JEbQC');
	app30.getObject('QV-95','aPjJzn');
	app30.getObject('QV-94','GsSgY');
	app30.getObject('QV-88','gpJpHcz');
	app30.getObject('QV-31','qgYeqt');
	app30.getObject('QV-filter-4','f30bcd66-69f5-4916-863a-d75e109258c2');
	app30.getObject('QV-filter-3','1ae227a5-2133-4231-a194-03b093b12134');
	app30.getObject('QV-filter-2','ecd56627-3b9e-430e-8391-b2e953d16be7');
	app30.getObject('QV-filter-1','ea4e7a88-95eb-4672-94a3-2216fe7ad455');
	app30.getObject('QV-col2-kpi6','cb375d99-a21b-4d71-a97d-ced7969e9037');
	app30.getObject('QV-col1-kpi6','cb375d99-a21b-4d71-a97d-ced7969e9037');
	app30.getObject('QV-col2-kpi3','b7e18b4f-ff96-4c67-a8ad-47b31e51fc8d');
	app30.getObject('QV-col1-kpi3','b7e18b4f-ff96-4c67-a8ad-47b31e51fc8d');
	app30.getObject('QV-col2-kpi5','e8ab4f8c-287c-4620-87bc-30fc8738a8a8');
	app30.getObject('QV-col2-kpi2','7bdd2d51-f597-4f0d-9169-41c256ed1743');
	
	app30.getObject('QV-92','vVJpKc');
	app30.getObject('QV-91','MNRPW');
	app30.getObject('QV-90','MNRPW');
	app30.getObject('QV-89','mkBYJQ');
	
	
	app30.getObject('QV-114-new','GFpJQ');
	app30.getObject('QV-112-new','gPCUZJY');
	
	
	app30.getObject('QV-37-a','bbwnG');
	app30.getObject('QV-35-a','bbwnG');
	app30.getObject('QV-33-a','bbwnG');
	app30.getObject('QV-31-a','bbwnG');
	app30.getObject('QV-40','YwqqNq');
	app30.getObject('QV-44','WZnv');
	
	app30.getObject('QV33','XYrJKL');
	app30.getObject('QV-30','JvPqRs');
	
	app30.getObject('QV-28','ECgr');
	app30.getObject('QV-27','CDXgC');
	app30.getObject('QV-41','NuBnV');
	app30.getObject('QV-39','jLYwjN');
	app30.getObject('QV37','GPYDFh');
	app30.getObject('QV35','jpdcA');
	app30.getObject('QV32','kPpmtw');
	app30.getObject('QV36','SbZwgz');
	app30.getObject('QV34','TZXRPpn');
	app30.getObject('QV-col3Div2-3','a346edef-5b01-450b-83e3-aee27494be79');
	app30.getObject('QV-col3Div2-1','AxJKmpP');
	app30.getObject('QV-col2Div1-1','cJEqum');
	app30.getObject('QV-col2Div2-2','GEgmmK');
	app30.getObject('QV-col2Div2-1','fKKxKB');
	app30.getObject('QV-col1-kpi5','fdbb3915-7630-4e60-94bf-a83dec7d4c3a');
	app30.getObject('QV-col1-kpi2','47a59dde-a785-42d5-b912-995fd0ffab06');
	app30.getObject('QV-col2-kpi4','cbc2b963-62dc-49c0-b0aa-8bff4a7b03ce');
	app30.getObject('QV-col2-kpi1','cda4874f-bc0e-4e94-9ad9-2577b685ed17');
	app30.getObject('QV-col1-kpi4','5666a8af-ed79-462d-adec-692cec86dd1e');
	app30.getObject('QV-col1-kpi1','5d40768f-821d-44c9-815d-40b912836f50');
	app30.getObject('QV-4','e2af643a-0ddc-42c2-95e6-500c81795d8d');
	app30.getObject('QV-3','c4e00693-ce1f-46cf-b0bf-cab6b2c99348');
	app30.getObject('QV-1','eee6d2ef-3559-41fa-b65c-89ad79881401');
	app31.getObject('QV-51','RJXnPe');
	app30.getObject('QV-2','2530f9ad-da01-4f57-b1ae-05814758e17c');
	
	app30.getObject('QV-col1Div1-4','DWtbkJ');
	app30.getObject('QV-col1Div1-3','qADGjZ');
	app30.getObject('QV-col1Div2-3','NNpXBkJ');
	app30.getObject('QV-col1Div2-4','HyYTK');
	app30.getObject('QV-col1Div1-2','8d9d22f9-a311-4da1-9d41-9e541bc1e43a');
	app30.getObject('QV-col1Div1-1','9a6c1005-2479-4595-b1ae-c7a998c7d1ba');
	app30.getObject('col1Div2-2','bdbf7d6f-2d04-41c9-adf4-b44b1bd88362');
	app30.getObject('QV-col1Div2-1','85c41d10-78bc-4a96-85c7-fe0ea02b6543');
	
	app29.getObject('QV-48','VqPgqy');
	app29.getObject('QV-47','PbpzVQ');
	app29.getObject('QV-46','psmppj');
	
	
	
	
	

	
	app18.getObject('QV-84','dKJfVK');
	app18.getObject('QV-80','GQPvuL');
	app18.getObject('QV-77','eTgLqb');
	app18.getObject('QV-76','vUcDnsP');
	app18.getObject('QV-75','YKUrps');
	app18.getObject('QV-87','GdRYkB');
	app18.getObject('QV-86','FLSbVJ');
	app18.getObject('QV-85','mtcmr');
	
	
	
	app17.getObject('QV-50','FJxFc');
	
	
	app16.getObject('QV-69','cc4c20da-4b06-4f2d-b7ee-52eb4c0126bb');
	
	
	
	
	
	
	app14.getObject('QV-14','edJGeg');
	
	
	app14.getObject('QV-12','edJGeg');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app5.getObject('QV-43','9e5fa270-8101-463b-adc4-19c0875ec578');
	app5.getObject('QV-42','1693f7d4-86bd-496c-9ff0-fdaf911729e8');
	
	
	
	
	app7.getObject('QV-49','fnPbLf');
	
	
	
	
		
	
	
	
	
	//create cubes and lists -- inserted here --

	$(document).ready(function () {
		qlik.resize();
		$("a").click(function() {
			qlik.resize();
		});
	});
	if (app) {
		app.getObject('CurrentSelections','CurrentSelections');
		$(".filter-drawer-toggle, paper-menu paper-item").click(function() {
			qlik.resize();
		});
		$(".btn-round").click(function() {
			qlik.resize();
		});
		$(".PaperTitleItem").click(function() {
			qlik.resize();
		});
	} else {
		$(".current-selections-placeholder span").css("display", "inline-block");
	}
});
