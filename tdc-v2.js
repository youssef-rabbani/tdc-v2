/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr(
  0,
  window.location.pathname.toLowerCase().lastIndexOf("/extensions") + 1
);

var config = {
  host: window.location.hostname,
  prefix: prefix,
  port: window.location.port,
  isSecure: window.location.protocol === "https:",
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config({
  baseUrl:
    (config.isSecure ? "https://" : "http://") +
    config.host +
    (config.port ? ":" + config.port : "") +
    config.prefix +
    "resources",
});

require(["js/qlik"], function (qlik) {
  window.qlik = qlik;

  qlik.setOnError(function (error) {
    console.log(error);
  });
  qlik.theme.apply("Tourism-theme").then(function (result) {
    if (result) console.log("theme applied!");
    else console.warn("could not apply theme!");
  });

  //callbacks -- inserted here --
  //open apps -- inserted here --
  var app = qlik.openApp("TDC-21.qvf", config);

  var app1 = qlik.openApp("TDC-21 (1).qvf", config);

  //create cubes and lists -- inserted here --

  $(document).ready(function () {
    qlik.resize();
    $("a").click(function () {
      qlik.resize();
    });
  });
  function mouseClick(){
	window.getSelection().removeAllRanges();
  }
  $("[data-qcmd]").on("click", function () {
    var $element = $(this);
    switch ($element.data("qcmd")) {
      case "pg1":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();
        }, 1000);
        page1();
        break;
      case "pg2":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();

        }, 1000);
        page2();

        break;
      case "pg3":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();

        }, 1000);
        page3();

        break;
      case "pg4":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();

        }, 1000);
        page4();

        break;
      case "pg5":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();

        }, 1000);
        page5();

        break;
      case "pg6":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();

        }, 1000);
        page6();

        break;
      case "pg7":
        setTimeout(function () {
          qlik.resize();
		  mouseClick();

        }, 1000);
        page7();
		mouseClick();

        break;
    }
  });
  page1();
  var models = [];
  function cleanup() {
    $.each(models, function (i, e) {
      e.close();
    });
    models = [];
  }
  function page1() {
    cleanup();
    app.getObject("QV-col1Div1-4", "DWtbkJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col1Div2-3", "NNpXBkJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col1Div1-3", "qADGjZ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col1Div2-4", "HyYTK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div2-3", "mxPeHqG").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div2-4", "dtKMjcN").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div1-4", "JmPum").then((model) => {
      models.push(model);
    });
    app
      .getObject("QV-col2Div1-3", "41445d1d-bafb-4014-b914-b68125c84034")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col3Div2-3", "a346edef-5b01-450b-83e3-aee27494be79")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-4", "f30bcd66-69f5-4916-863a-d75e109258c2")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-3", "1ae227a5-2133-4231-a194-03b093b12134")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-2", "ecd56627-3b9e-430e-8391-b2e953d16be7")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-1", "ea4e7a88-95eb-4672-94a3-2216fe7ad455")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-clear-1", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-2", "2530f9ad-da01-4f57-b1ae-05814758e17c")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-1", "eee6d2ef-3559-41fa-b65c-89ad79881401")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-refresh-1", "YfCVVF").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col3Div2-1", "AxJKmpP").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div1-1", "cJEqum").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div2-2", "GEgmmK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div2-1", "fKKxKB").then((model) => {
      models.push(model);
    });
    app.getObject("QV-col2Div1-2", "abRAG").then((model) => {
      models.push(model);
    });
    app
      .getObject("QV-col1Div1-1", "9a6c1005-2479-4595-b1ae-c7a998c7d1ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("col1Div2-2", "bdbf7d6f-2d04-41c9-adf4-b44b1bd88362")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1Div2-1", "85c41d10-78bc-4a96-85c7-fe0ea02b6543")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1Div1-2", "8d9d22f9-a311-4da1-9d41-9e541bc1e43a")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1-kpi5", "fdbb3915-7630-4e60-94bf-a83dec7d4c3a")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1-kpi2", "47a59dde-a785-42d5-b912-995fd0ffab06")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col2-kpi5", "e8ab4f8c-287c-4620-87bc-30fc8738a8a8")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col2-kpi2", "7bdd2d51-f597-4f0d-9169-41c256ed1743")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col2-kpi6", "cb375d99-a21b-4d71-a97d-ced7969e9037")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1-kpi6", "cb375d99-a21b-4d71-a97d-ced7969e9037")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col2-kpi3", "b7e18b4f-ff96-4c67-a8ad-47b31e51fc8d")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1-kpi3", "b7e18b4f-ff96-4c67-a8ad-47b31e51fc8d")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col2-kpi4", "cbc2b963-62dc-49c0-b0aa-8bff4a7b03ce")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col2-kpi1", "cda4874f-bc0e-4e94-9ad9-2577b685ed17")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1-kpi4", "8a74516d-2c00-4db1-9a5c-4e68805b2f51")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-col1-kpi1", "5d40768f-821d-44c9-815d-40b912836f50")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-4", "e2af643a-0ddc-42c2-95e6-500c81795d8d")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-3", "c4e00693-ce1f-46cf-b0bf-cab6b2c99348")
      .then((model) => {
        models.push(model);
      });
  }
  function page2() {
    cleanup();
    app
      .getObject("QV-clear-2", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-refresh-2", "cea25a1f-ba44-4b2e-b81c-c939439e278e")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-27", "35f75bd7-4427-4948-84d7-5eb9d15b2b58")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-30", "a7401ad0-aefb-42c5-a0db-b90eea6770ae")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-29", "4ec9b061-59a1-4141-abbc-029e90f0dfc5")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-28", "2b2c6ec1-bc36-4d58-b08c-56caebd851ba")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-40", "YwqqNq").then((model) => {
      models.push(model);
    });
    app.getObject("QV-39", "FjWuPDK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-new-1", "JJxQpN").then((model) => {
      models.push(model);
    });
    app.getObject("QV-41", "WtNJc").then((model) => {
      models.push(model);
    });
    app.getObject("QV-new-2", "uxSQKja").then((model) => {
      models.push(model);
    });
    app.getObject("QV-Pg2EfaDiv1", "dAjDJdJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-37-a", "bbwnG").then((model) => {
      models.push(model);
    });
    app.getObject("QV-31-a", "bbwnG").then((model) => {
      models.push(model);
    });
    app.getObject("QV-31", "qgYeqt").then((model) => {
      models.push(model);
    });
    app.getObject("QV-30", "JvPqRs").then((model) => {
      models.push(model);
    });
    app.getObject("QV-29", "CKQg").then((model) => {
      models.push(model);
    });
    app.getObject("QV-28", "ECgr").then((model) => {
      models.push(model);
    });
    app.getObject("QV-27", "CDXgC").then((model) => {
      models.push(model);
    });
    app.getObject("QV32", "kPpmtw").then((model) => {
      models.push(model);
    });
    app.getObject("QV36", "SbZwgz").then((model) => {
      models.push(model);
    });
    app.getObject("QV37", "GPYDFh").then((model) => {
      models.push(model);
    });
    app.getObject("QV35", "jpdcA").then((model) => {
      models.push(model);
    });
  }
  function page3() {
    cleanup();
    app
      .getObject("QV-clear-3", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-refresh-3", "cea25a1f-ba44-4b2e-b81c-c939439e278e")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-91--new", "USczjj").then((model) => {
      models.push(model);
    });
    app
      .getObject("QV-filter-88", "ea4e7a88-95eb-4672-94a3-2216fe7ad455")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-filter-91--new", "TZFhAb").then((model) => {
      models.push(model);
    });
    app
      .getObject("QV-filter-91", "a7401ad0-aefb-42c5-a0db-b90eea6770ae")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-90", "4ec9b061-59a1-4141-abbc-029e90f0dfc5")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-89", "2b2c6ec1-bc36-4d58-b08c-56caebd851ba")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-96", "jUbWmK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-95-a", "tJxAZK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-Pg3EfaDiv2", "KsmFcJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-Pg3EfaDiv1", "BTLrqrn").then((model) => {
      models.push(model);
    });
    app.getObject("QV-100", "MvuFV").then((model) => {
      models.push(model);
    });
    app.getObject("QV-99", "JZCkkF").then((model) => {
      models.push(model);
    });
    app.getObject("QV-98-a", "jyZusSe").then((model) => {
      models.push(model);
    });

    app.getObject("QV-93-a", "uUJdQp").then((model) => {
      models.push(model);
    });
    app.getObject("QV-98", "YbVQGhv").then((model) => {
      models.push(model);
    });
    app.getObject("QV-95", "aPjJzn").then((model) => {
      models.push(model);
    });
    app.getObject("QV-94", "GsSgY").then((model) => {
      models.push(model);
    });
    app.getObject("QV-93", "ppeQFG").then((model) => {
      models.push(model);
    });
    app.getObject("QV-92", "vVJpKc").then((model) => {
      models.push(model);
    });
    app.getObject("QV-91", "PXpaCjm").then((model) => {
      models.push(model);
    });
    app.getObject("QV-90", "MNRPW").then((model) => {
      models.push(model);
    });
    app.getObject("QV-89", "mkBYJQ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-88", "gpJpHcz").then((model) => {
      models.push(model);
    });
  }
  function page4() {
    cleanup();
    app
      .getObject("QV-refresh-4", "cea25a1f-ba44-4b2e-b81c-c939439e278e")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-filter-58--new", "TZFhAb").then((model) => {
      models.push(model);
    });
    app.getObject("QV-filter-58", "uBLjY").then((model) => {
      models.push(model);
    });
    app.getObject("QV-filter-57", "ksTJx").then((model) => {
      models.push(model);
    });
    app
      .getObject("QV-filter-55", "ea4e7a88-95eb-4672-94a3-2216fe7ad455")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-56", "ecd56627-3b9e-430e-8391-b2e953d16be7")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-pg-4-kpi3", "15005c7b-0a3a-4867-b7e9-1d3fdc7d908d")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-pg4-kpi1", "15005c7b-0a3a-4867-b7e9-1d3fdc7d908d")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-pg4-kpi2", "a8de6dc3-f6cf-4750-a98f-551ec964fc02")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-clear-4", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-63", "3b0e0c67-165a-4a92-8b07-ad9a9a6957d0")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-67", "4616404c-33ae-4e7a-966d-4ac2386d1490")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-62", "dfrpCH").then((model) => {
      models.push(model);
    });
    app.getObject("QV-Pg4EfaDiv1", "BWmHcjw").then((model) => {
      models.push(model);
    });
    app.getObject("QV-Pg4EfaDiv2", "pGMTqJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-58--new", "zGPgPMc").then((model) => {
      models.push(model);
    });
    app.getObject("QV-66", "KXJAJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-65", "sMbVK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-61", "wNuqfu").then((model) => {
      models.push(model);
    });
    app.getObject("QV-59", "LXjujq").then((model) => {
      models.push(model);
    });
    app
      .getObject("QV-58", "00736d17-8c4b-47d2-a0e6-c68ed0b8ceb4")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-57", "2a69f40b-e07c-4d16-94eb-8cceb47bfcea")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-56", "3bd29875-09a3-4e9e-992f-50e08b2af256")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-55", "ba70455d-ac5e-4e0b-b9ce-6c3c6b7cf8c6")
      .then((model) => {
        models.push(model);
      });
  }
  function page5() {
    cleanup();
    app
      .getObject("QV-clear-5", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-refresh-5", "cea25a1f-ba44-4b2e-b81c-c939439e278e")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-103-new", "ecd56627-3b9e-430e-8391-b2e953d16be7")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-102-new", "ea4e7a88-95eb-4672-94a3-2216fe7ad455")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-104-new", "1ae227a5-2133-4231-a194-03b093b12134")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-105-new", "f30bcd66-69f5-4916-863a-d75e109258c2")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-82-a", "15005c7b-0a3a-4867-b7e9-1d3fdc7d908d")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-82-a-sub", "tJxAZK").then((model) => {
      models.push(model);
    });

    app.getObject("QV-80", "dKJfVK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-83", "HhnJnDE").then((model) => {
      models.push(model);
    });
    app.getObject("QV-113-new-new", "NCBumj").then((model) => {
      models.push(model);
    });

    app.getObject("QV-Pg5EfaDiv1", "GFpJQ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-112-new", "gPCUZJY").then((model) => {
      models.push(model);
    });
    app.getObject("QV-80-a", "GAjewb").then((model) => {
      models.push(model);
    });

    app.getObject("QV-105-new", "AaYzn").then((model) => {
      models.push(model);
    });
    app.getObject("QV-104-new", "eTgLqb").then((model) => {
      models.push(model);
    });
    app.getObject("QV-103-new", "vUcDnsP").then((model) => {
      models.push(model);
    });
    app.getObject("QV-102-new", "YKUrps").then((model) => {
      models.push(model);
    });

    app.getObject("QV-81", "TrRfmg").then((model) => {
      models.push(model);
    });
    app.getObject("QV-79", "QKNPGq").then((model) => {
      models.push(model);
    });
  }
  function page6() {
    cleanup();
    app
      .getObject("QV-clear-6", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-refresh-6", "cea25a1f-ba44-4b2e-b81c-c939439e278e")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-102", "ea4e7a88-95eb-4672-94a3-2216fe7ad455")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-105", "a7401ad0-aefb-42c5-a0db-b90eea6770ae")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-104", "4ec9b061-59a1-4141-abbc-029e90f0dfc5")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-filter-103", "2b2c6ec1-bc36-4d58-b08c-56caebd851ba")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-112", "SXEHTj").then((model) => {
      models.push(model);
    });
    app.getObject("QV-111-dup", "JpFqp").then((model) => {
      models.push(model);
    });
    app.getObject("QV-111", "SvVcv").then((model) => {
      models.push(model);
    });
    app.getObject("QV-109", "eVWXrz").then((model) => {
      models.push(model);
    });
    app.getObject("QV-Pg6EfaDiv1", "PLNdJu").then((model) => {
      models.push(model);
    });
    app.getObject("QV-110-dup", "kXYgsz").then((model) => {
      models.push(model);
    });
    app.getObject("QV-110", "frZWhn").then((model) => {
      models.push(model);
    });
    app.getObject("QV-108", "qsEVjC").then((model) => {
      models.push(model);
    });
    app.getObject("QV-111-a-sub", "dyuZBYJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-111-a", "dyuZBYJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-109-a", "dyuZBYJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-107-a", "dyuZBYJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-113", "VyCMJ").then((model) => {
      models.push(model);
    });
    app.getObject("QV-105", "JjCjHm").then((model) => {
      models.push(model);
    });
    app.getObject("QV-104", "yDnmS").then((model) => {
      models.push(model);
    });
    app.getObject("QV-103", "rAfChfF").then((model) => {
      models.push(model);
    });
    app.getObject("QV-102", "GKzdXy").then((model) => {
      models.push(model);
    });
    app.getObject("QV-107", "XeQAxKP").then((model) => {
      models.push(model);
    });
    app.getObject("QV-106", "gWAyWZB").then((model) => {
      models.push(model);
    });
  }
  function page7() {
    cleanup();
    app
      .getObject("QV-clear-7", "706897d5-045d-4330-bd32-c30ecfd686ba")
      .then((model) => {
        models.push(model);
      });
    app
      .getObject("QV-refresh-7", "cea25a1f-ba44-4b2e-b81c-c939439e278e")
      .then((model) => {
        models.push(model);
      });
    app.getObject("QV-pg7col1div2", "UCPxmXU").then((model) => {
      models.push(model);
    });
    app.getObject("QV-pg7col1div1", "CDmgUjC").then((model) => {
      models.push(model);
    });
    app.getObject("QV-pg7col2div2", "FKvEK").then((model) => {
      models.push(model);
    });
    app.getObject("QV-pg7col2div1", "GdDtze").then((model) => {
      models.push(model);
    });
    app.getObject("QV-48", "zrMJDt").then((model) => {
      models.push(model);
    });
    app.getObject("QV-47", "YuGUDx").then((model) => {
      models.push(model);
    });
    app.getObject("QV-46", "DGccSVB").then((model) => {
      models.push(model);
    });
    app.getObject("QV-49", "USeT").then((model) => {
      models.push(model);
    });
  }


  if (app) {
    //get objects -- inserted here --

    $(".btn-round").click(function () {
      qlik.resize();
    });

  } else {
    $(".current-selections-placeholder span").css("display", "inline-block");
  }
});
