var flashDescription;var requiredVersion=6;var useRedirect=false;var flashPage="movie.html";var noFlashPage="noflash.html";var upgradePage="upgrade.html";var flash2Installed=false;var flash3Installed=false;var flash4Installed=false;var flash5Installed=false;var flash6Installed=false;var flash7Installed=false;var maxVersion=7;var actualVersion=0;var hasRightVersion=false;var jsVersion=1;var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.indexOf("Windows")!=-1)?true:false;jsVersion=1.1;if(isIE&&isWin){document.write("<SCRIPT LANGUAGE=VBScript> \n");document.write("on error resume next \n");document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');document.write("</SCRIPT> \n")}function detectFlash(){if(navigator.plugins){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var isVersion2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";flashDescription=navigator.plugins["Shockwave Flash"+isVersion2].description;var a=flashDescription.split(".")[0].split(" ");var flashVersion=parseInt(a[a.length-1]);flash2Installed=flashVersion==2;flash3Installed=flashVersion==3;flash4Installed=flashVersion==4;flash5Installed=flashVersion==5;flash6Installed=flashVersion==6;flash7Installed=flashVersion>=7}}for(var i=2;i<=maxVersion;i++){if(eval("flash"+i+"Installed")==true){actualVersion=i}}if(navigator.userAgent.indexOf("WebTV")!=-1){actualVersion=3}if(actualVersion>=requiredVersion){if(useRedirect){if(jsVersion>1){window.location.replace(flashPage)}else{window.location=flashPage}}hasRightVersion=true}else{if(useRedirect){if(jsVersion>1){window.location.replace((actualVersion>=2)?upgradePage:noFlashPage)}else{window.location=(actualVersion>=2)?upgradePage:noFlashPage}}}}detectFlash();