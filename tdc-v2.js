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
	var app = qlik.openApp('TDC-21.qvf', config);

	var app1 = qlik.openApp('TDC-21 (1).qvf', config);

	
	
	
	
	

	
	
	
	
	
		
	
	
	
	
	//create cubes and lists -- inserted here --

	$(document).ready(function () {
		qlik.resize();
		$("a").click(function() {
			qlik.resize();
		});
	});
	if (app) {
			//get objects -- inserted here --
	app.getObject('QV-pg7col1div2','UCPxmXU');
	app.getObject('QV-pg7col1div1','CDmgUjC');
	app.getObject('QV-filter-105-new','f30bcd66-69f5-4916-863a-d75e109258c2');
	app.getObject('QV-filter-104-new','1ae227a5-2133-4231-a194-03b093b12134');
	app.getObject('QV-filter-103-new','ecd56627-3b9e-430e-8391-b2e953d16be7');
	app.getObject('QV-filter-102-new','ea4e7a88-95eb-4672-94a3-2216fe7ad455');
	app.getObject('QV-filter-58','f30bcd66-69f5-4916-863a-d75e109258c2');
	app.getObject('QV-col2-kpi3','b7e18b4f-ff96-4c67-a8ad-47b31e51fc8d');
	app.getObject('QV-col2-kpi6','cb375d99-a21b-4d71-a97d-ced7969e9037');
	app.getObject('QV-col1-kpi6','cb375d99-a21b-4d71-a97d-ced7969e9037');
	app.getObject('QV-col2-kpi4','cbc2b963-62dc-49c0-b0aa-8bff4a7b03ce');
	app.getObject('QV-col2-kpi1','cda4874f-bc0e-4e94-9ad9-2577b685ed17');
	
	
	
	app.getObject('QV-39','FjWuPDK');
	
	
	
	app.getObject('QV-111-a-sub','15005c7b-0a3a-4867-b7e9-1d3fdc7d908d');
	app.getObject('QV-111--newa','15005c7b-0a3a-4867-b7e9-1d3fdc7d908d');
	app.getObject('QV-111-a','15005c7b-0a3a-4867-b7e9-1d3fdc7d908d');
	
	app.getObject('QV-82-a-sub','15005c7b-0a3a-4867-b7e9-1d3fdc7d908d');
	app.getObject('QV-111-a-a','15005c7b-0a3a-4867-b7e9-1d3fdc7d908d');
	
	
	
	
	
	
	
	
	
	
	app.getObject('QV-110-dup','kXYgsz');
	app.getObject('QV-112','db14a7d1-5e67-4d98-b81f-21369a505de9');
	
	
	app.getObject('QV-clear-2','706897d5-045d-4330-bd32-c30ecfd686ba');
	app.getObject('QV-new-1','JJxQpN');
	app.getObject('QV-new-2','uxSQKja');
	
	
	
	
	app.getObject('QV-110','22b1eccd-497f-49b8-9b26-a1de53d14cc0');
	app.getObject('QV-109','c7fb0323-1f24-4640-ad5d-fb79c3a111da');
	app.getObject('QV-111-dup','7e436654-e190-475e-af2b-ad5d7bb24de4');
	app.getObject('QV-111','1264fd02-dffc-430c-81a1-b0aa7ce52b49');
	
	
	app.getObject('QV-filter-105','f30bcd66-69f5-4916-863a-d75e109258c2');
	app.getObject('QV-filter-104','1ae227a5-2133-4231-a194-03b093b12134');
	app.getObject('QV-filter-103','ecd56627-3b9e-430e-8391-b2e953d16be7');
	app.getObject('QV-pg7col2div3','JSfctcp');
	app.getObject('QV-pg7col2div2','FKvEK');
	app.getObject('QV-pg7col2div1','GdDtze');
	
	app.getObject('QV-clear-6','706897d5-045d-4330-bd32-c30ecfd686ba');
	app.getObject('QV-clear-5','706897d5-045d-4330-bd32-c30ecfd686ba');
	app.getObject('QV-clear-4','706897d5-045d-4330-bd32-c30ecfd686ba');
	app.getObject('QV-refresh-4','cea25a1f-ba44-4b2e-b81c-c939439e278e');
	app.getObject('QV-refresh-3','cea25a1f-ba44-4b2e-b81c-c939439e278e');
	app.getObject('QV-filter-1','ea4e7a88-95eb-4672-94a3-2216fe7ad455');
	app.getObject('QV-clear-3','706897d5-045d-4330-bd32-c30ecfd686ba');
	app.getObject('QV-filter-102','ea4e7a88-95eb-4672-94a3-2216fe7ad455');
	app.getObject('QV-41','WtNJc');
	
	
	
	app.getObject('QV-col3Div2-3','a346edef-5b01-450b-83e3-aee27494be79');
	
	
	app.getObject('QV-col1-kpi1','5d40768f-821d-44c9-815d-40b912836f50');
	
	
	
	
	app.getObject('QV-51','GdDtze');
	
	app.getObject('QV-filter-57','4ec9b061-59a1-4141-abbc-029e90f0dfc5');
	app.getObject('QV-filter-56','2b2c6ec1-bc36-4d58-b08c-56caebd851ba');
	app.getObject('QV-filter-55','35f75bd7-4427-4948-84d7-5eb9d15b2b58');
	app.getObject('QV-filter-91--new','TZFhAb');
	app.getObject('QV-filter-91','a7401ad0-aefb-42c5-a0db-b90eea6770ae');
	app.getObject('QV-filter-90','4ec9b061-59a1-4141-abbc-029e90f0dfc5');
	app.getObject('QV-filter-89','2b2c6ec1-bc36-4d58-b08c-56caebd851ba');
	app.getObject('QV-filter-88','35f75bd7-4427-4948-84d7-5eb9d15b2b58');
	app.getObject('QV-filter-30','a7401ad0-aefb-42c5-a0db-b90eea6770ae');
	app.getObject('QV-filter-29','4ec9b061-59a1-4141-abbc-029e90f0dfc5');
	
	app.getObject('QV-filter-28','2b2c6ec1-bc36-4d58-b08c-56caebd851ba');
	app.getObject('QV-filter-27','35f75bd7-4427-4948-84d7-5eb9d15b2b58');
	app.getObject('QV-filter-3','4ec9b061-59a1-4141-abbc-029e90f0dfc5');
	app.getObject('QV-filter-2','2b2c6ec1-bc36-4d58-b08c-56caebd851ba');
	app.getObject('QV-filter-4','uBLjY');
	app.getObject('QV-49','USeT');
	app.getObject('QV-50','xSVe');
	app.getObject('QV-48','zrMJDt');
	app.getObject('QV-47','YuGUDx');
	app.getObject('QV-46','DGccSVB');
	app.getObject('QV-refresh-7','cea25a1f-ba44-4b2e-b81c-c939439e278e');
	app.getObject('QV-refresh-6','cea25a1f-ba44-4b2e-b81c-c939439e278e');
	
	app.getObject('QV-refresh-5','cea25a1f-ba44-4b2e-b81c-c939439e278e');
	
	app.getObject('QV-refresh-2','cea25a1f-ba44-4b2e-b81c-c939439e278e');
	
	
		app.getObject('QV-113','ARdJS');
	
	
	app.getObject('QV-114','PLNdJu');
	
	
	app.getObject('QV-108','qsEVjC');
	
	
	
	app.getObject('QV-109-a','dyuZBYJ');
	app.getObject('QV-107-a','dyuZBYJ');
	
	app.getObject('QV-105','JjCjHm');
	app.getObject('QV-104','yDnmS');
	app.getObject('QV-103','rAfChfF');
	app.getObject('QV-102','GKzdXy');
	app.getObject('QV-107','XeQAxKP');
	app.getObject('QV-106','gWAyWZB');
	app.getObject('QV-114-new','GFpJQ');
	app.getObject('QV-113-new-new','NCBumj');
	app.getObject('QV-112-new','gPCUZJY');
	app.getObject('QV-83','HhnJnDE');
	app.getObject('QV-82-a','GAjewb');
	app.getObject('QV-80-a','GAjewb');
	app.getObject('QV-105-new','AaYzn');
	app.getObject('QV-104-new','eTgLqb');
	app.getObject('QV-103-new','vUcDnsP');
	app.getObject('QV-102-new','YKUrps');
	
	app.getObject('QV-81','TrRfmg');
	app.getObject('QV-79','QKNPGq');
	app.getObject('QV-68','pGMTqJ');
	app.getObject('QV-58--new','zGPgPMc');
	app.getObject('QV-filter-58--new','TZFhAb');
	app.getObject('QV-65','sMbVK');
	app.getObject('QV-66','KXJAJ');
	app.getObject('QV-61','wNuqfu');
	app.getObject('QV-59','LXjujq');
	app.getObject('QV-58','00736d17-8c4b-47d2-a0e6-c68ed0b8ceb4');
	app.getObject('QV-57','2a69f40b-e07c-4d16-94eb-8cceb47bfcea');
	app.getObject('QV-56','3bd29875-09a3-4e9e-992f-50e08b2af256');
	app.getObject('QV-55','ba70455d-ac5e-4e0b-b9ce-6c3c6b7cf8c6');
	app.getObject('QV-67','4616404c-33ae-4e7a-966d-4ac2386d1490');
	app.getObject('QV-63','3b0e0c67-165a-4a92-8b07-ad9a9a6957d0');
	app.getObject('QV-100-sub','KsmFcJ');
	app.getObject('QV-91--new','USczjj');
	app.getObject('QV-100','MvuFV');
	app.getObject('QV-99','JZCkkF');
	app.getObject('QV-98-a','jyZusSe');
	app.getObject('QV-95-a','uUJdQp');
	app.getObject('QV-93-a','uUJdQp');
	app.getObject('QV-98','YbVQGhv');
	app.getObject('QV-96','JEbQC');
	
	app.getObject('QV-95','aPjJzn');
	app.getObject('QV-94','GsSgY');
	app.getObject('QV-93','ppeQFG');
	app.getObject('QV-92','vVJpKc');
	app.getObject('QV-91','PXpaCjm');
	app.getObject('QV-90','MNRPW');
	app.getObject('QV-89','mkBYJQ');
	app.getObject('QV-88','gpJpHcz');
	
	app.getObject('QV-28','ECgr');
	app.getObject('QV-30','JvPqRs');
	app.getObject('QV-29','CKQg');
	
	app.getObject('QV-27','CDXgC');
	app.getObject('QV-37-a','bbwnG');
	app.getObject('QV-35-a','bbwnG');
	app.getObject('QV-31','qgYeqt');
	app.getObject('QV-31-a','bbwnG');
	app.getObject('QV-40','YwqqNq');
	app.getObject('QV-44','dAjDJdJ');
	
	app.getObject('QV37','GPYDFh');
	app.getObject('QV35','jpdcA');
	app.getObject('QV32','kPpmtw');
	
	app.getObject('QV36','SbZwgz');
	
	

	app.getObject('QV-col2Div2-3','mxPeHqG');
	app.getObject('QV-col2Div2-4','dtKMjcN');
	app.getObject('QV-col2Div1-4','JmPum');
	app.getObject('QV-col2Div1-3','41445d1d-bafb-4014-b914-b68125c84034');
	app.getObject('QV-col1Div2-3','NNpXBkJ');
	app.getObject('QV-col1Div2-4','HyYTK');
	app.getObject('QV-col1Div1-4','DWtbkJ');
	app.getObject('QV-col1Div1-3','qADGjZ');
	app.getObject('QV-refresh-1','PEyLX');
	app.getObject('QV-col2Div2-2','GEgmmK');
	app.getObject('QV-col1Div1-1','9a6c1005-2479-4595-b1ae-c7a998c7d1ba');
	app.getObject('QV-col2Div1-1','cJEqum');
	app.getObject('QV-col3Div2-1','AxJKmpP');
	app.getObject('QV-col2Div2-1','fKKxKB');
	app.getObject('QV-col2Div1-2','abRAG');
	app.getObject('col1Div2-2','bdbf7d6f-2d04-41c9-adf4-b44b1bd88362');
	app.getObject('QV-col1Div2-1','85c41d10-78bc-4a96-85c7-fe0ea02b6543');
	app.getObject('QV-col1Div1-2','8d9d22f9-a311-4da1-9d41-9e541bc1e43a');
	
	
	
	
	
	app.getObject('QV-col1-kpi2','47a59dde-a785-42d5-b912-995fd0ffab06');
	app.getObject('QV-col1-kpi5','fdbb3915-7630-4e60-94bf-a83dec7d4c3a');
	app.getObject('QV-col2-kpi5','e8ab4f8c-287c-4620-87bc-30fc8738a8a8');
	app.getObject('QV-col2-kpi2','7bdd2d51-f597-4f0d-9169-41c256ed1743');
	
	
	
	app.getObject('QV-col1-kpi3','b7e18b4f-ff96-4c67-a8ad-47b31e51fc8d');
	app.getObject('QV-col1-kpi4','8a74516d-2c00-4db1-9a5c-4e68805b2f51');
	app.getObject('QV-4','e2af643a-0ddc-42c2-95e6-500c81795d8d');
	app.getObject('QV-3','c4e00693-ce1f-46cf-b0bf-cab6b2c99348');
	app.getObject('QV-2','2530f9ad-da01-4f57-b1ae-05814758e17c');
	app.getObject('QV-1','eee6d2ef-3559-41fa-b65c-89ad79881401');
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
