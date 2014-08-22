try {
/* module-key = 'com.k15t.scroll.scroll-platform:settings-webresources', location = '/com/k15t/scroll/platform/ui/settings/settings.js' */
(function(d,c,b,a){c.module("sv-settings",["auiNg","ngResource"]).controller("SettingsController",["$scope","$http","GlobalSettings",function(e,g,f){e.globalSettings=f.get();e.canManageContent=false;e.getCanManageContent=function(){g.get(contextPath+"\/rest\/scroll-versions\/1.0"+"/context/canManageContent").success(function(h){e.canManageContent=h})};e.getCanManageContent();e.saveSettings=function(){var i=function(){e.auiDialog.gotoPage(1);window.setTimeout(function(){window.location.reload()},1000)};var h=function(j){e.errorMessage=j.data.message};f.save(e.globalSettings,i,h)};e.cancelSettings=function(){e.auiDialog.close(false)}}]).factory("GlobalSettings",["$resource",function(e){return e(contextPath+"\/rest\/scroll-versions\/1.0"+"/settings/:id/",{id:"@id"},{save:{method:"PUT"}})}])})(AJS.$,angular,auiNg,Scroll.Versions._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.k15t.scroll.scroll-platform:settings-webresources', location = '/com/k15t/scroll/platform/ui/settings/init.js' */
(function(c,b,a){AJS.toInit(function(){d()});var d=function(){c("#sv-globalsettings").attr("href","#");c("#sv-globalsettings").die("click").live("click",function(){var e=b.getPartial("com.k15t.scroll.scroll-platform","settings-webresources","settings-dialog");b.createDialogApp("sv-settings",e,{height:440,width:720,className:"sv-dialog"},function(){window.location.reload()})})}})(AJS.$,auiNg,Scroll.Versions._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.k15t.scroll.scroll-platform:settings-webresources', location = '/com/k15t/scroll/platform/ui/settings/settings-dialog.html' */
(function(window, undefined){ 
window.auiNg = window.auiNg || {};
auiNg._templates = auiNg._templates || {};
 var pluginTemplates = auiNg._templates['com.k15t.scroll.scroll-platform'] =  auiNg._templates['com.k15t.scroll.scroll-platform'] || {};
var moduleTemplates = pluginTemplates['settings-webresources'] = pluginTemplates['settings-webresources'] || {};
moduleTemplates['settings-dialog.js'] = '<div ng-controller="SettingsController">    <div aui-dialog-page header="Scroll Versions Global Settings">        <div aui-dialog-panel>            <form id="sv-settings-form" class="aui">                <div class="aui-message closeable" ng-show="errorMessage" ng-class="errorMessage && \'error\'" style="margin: 0 0 10px 0;">                    <p class="title" style="padding: 0;">                        <span class="aui-icon icon-error"></span> <strong>{{errorMessage}}</strong>                    </p>                </div>                <p class="first-para" style="margin-bottom: 10px;">Please define your global settings.</p>                <fieldset class="group">                    <div class="checkbox">                        <label for="showTopLevelPages">Show Top-level Pages</label>                        <input type="checkbox" name="showTopLevelPages" class="checkbox" id="showTopLevelPages" ng-model="globalSettings.showTopLevelPages"/>                        <div class="description">Tick if you want to see top level pages in the page tree.</div>                    </div>                </fieldset>                <fieldset class="group">                    <div class="checkbox">                        <label for="highlightIncludes">Highlight Includes</label>                        <input type="checkbox" name="highlightIncludes" class="checkbox" id="highlightIncludes" ng-model="globalSettings.highlightIncludes"/>                        <div class="description">Tick if included content of a page should be highlighted.</div>                    </div>                </fieldset>                <fieldset class="group">                    <div class="checkbox">                        <label for="highlightConditionalContent">Highlight Conditional Content</label>                        <input type="checkbox" name="highlightConditionalContent" class="checkbox" id="highlightConditionalContent" ng-model="globalSettings.highlightConditionalContent"/>                        <div class="description">Tick if conditional content of a page should be highlighted.</div>                    </div>                </fieldset>                <fieldset class="group" ng-show="canManageContent">                    <div class="checkbox">                        <label for="showArchivedVersions">Show Archived Versions</label>                        <input type="checkbox" name="showArchivedVersions" class="checkbox" id="showArchivedVersions" ng-model="globalSettings.showArchivedVersions"/>                        <div class="description">Tick if archived versions should be shown.</div>                    </div>                </fieldset>            </form>        </div>        <a aui-dialog-button ng-click="saveSettings()">Save</a>        <a aui-dialog-link ng-click="cancelSettings()">Cancel</a>    </div>    <div aui-dialog-page header="Scroll Versions Global Settings">        <div aui-dialog-panel>            <div class="aui-message shadowed success">                <p class="title">                    <span class="aui-icon icon-success"></span>                    <strong>Success</strong>                </p>                <p>                    Settings saved                </p>            </div>        </div>        <a aui-dialog-button ng-click="close()">Close</a>    </div></div>';
})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


