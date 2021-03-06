$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("systemHealthCheck.feature");
formatter.feature({
  "line": 2,
  "name": "go to my URL",
  "description": "",
  "id": "go-to-my-url",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@reliable"
    }
  ]
});
formatter.scenario({
  "line": 138,
  "name": "View metadata for text",
  "description": "",
  "id": "go-to-my-url;view-metadata-for-text",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 136,
      "name": "@version_2.4"
    },
    {
      "line": 137,
      "name": "@systemtest12"
    }
  ]
});
formatter.step({
  "line": 139,
  "name": "that I query text for \u0027*\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "I select the first text from the results",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "click on the information icon",
  "keyword": "When "
});
formatter.step({
  "line": 142,
  "name": "select \u0027View all metadata\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "I should see all metadata displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "text",
      "offset": 13
    },
    {
      "val": "*",
      "offset": 23
    }
  ],
  "location": "SystemHealthCheckStepdef.that_I_query_types_for(String,String)"
});
formatter.result({
  "duration": 9244105800,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to convert data to an object\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027COM-ARBAIZA-WIN\u0027, ip: \u0027172.31.46.152\u0027, os.name: \u0027Windows Server 2016\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\aarbaiza\\AppData\\Local\\Temp\\3\\rust_mozprofile.UXHv003vVTEf, rotatable\u003dfalse, moz:geckodriverVersion\u003d0.24.0, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, moz:headless\u003dfalse, platform\u003dXP, moz:accessibilityChecks\u003dfalse, moz:useNonSpecCompliantPointerOrigin\u003dfalse, acceptInsecureCerts\u003dtrue, browserVersion\u003d67.0.1, moz:shutdownTimeout\u003d60000, platformVersion\u003d10.0, moz:processID\u003d4636, browserName\u003dfirefox, moz:buildID\u003d20190529130856, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, moz:webdriverClick\u003dtrue}]\nSession ID: 67d3e225-ec99-4f02-9bfd-61d66cc7c1e1\n*** Element info: {Using\u003did, value\u003dinput-search-box}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:462)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepsPages.SystemHealthCheckPage.clickOnSearch(SystemHealthCheckPage.java:193)\r\n\tat stepdefs.SystemHealthCheckStepdef.that_I_query_types_for(SystemHealthCheckStepdef.java:150)\r\n\tat ✽.Given that I query text for \u0027*\u0027(systemHealthCheck.feature:139)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SystemHealthCheckStepdef.i_select_the_first_text_from_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SystemHealthCheckStepdef.click_on_the_information_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SystemHealthCheckStepdef.select_View_all_metadata()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SystemHealthCheckStepdef.i_should_see_all_metadata_displayed()"
});
formatter.result({
  "status": "skipped"
});
});