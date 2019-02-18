/*
* spa.chat.js
* Chat feature module for SPA
*/

/*jslint        browser: true,  sloppy: true,
devel: true,    maxerr: 50,
white: true
 */
/*global $, spa */

spa.chat = (function () {
    // ----------- Begin Module Scope Variables
    var
        configMap = {
            main_html: String()
                + '<div style="padding: 1em; color: #fff;">'
                + 'Say hello to chat!'
                + '</div>',
            settable_map: {}
        },
        stateMap = {$container: null},
        jqueryMap = {},
        setJqueryMap, configModule, initModule
    ;
    // ----------- End Module Scope Variables

    // ------------------- Begin Utility Methods ---------------

    // ------------------- End Utility Methods ---------------

    // ------------------- Begin DOM Methods ---------------
    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {$container: $container};
    }
    // ------------------- End DOM Methods ---------------

    // ------------------- Begin Event Handlers ---------------

    // ------------------- End Event Handlers ---------------

    // ------------------- Begin Public Methods ---------------
    // Begin public method /configModule/
    // Purpose      : Adjust configuration of allowed keys
    // Arguments    : A map of settable keys and values
    //      * color_name - a color to use
    // Settings     :
    //      * configMap.settable.map declares allowed keys
    // Returns      : true
    // Throws       : none
    //
    configModule = function (input_map) {
        spa.util.setConfigMap({
            input_map: input_map,
            settable_map: configMap.settable_map,
            configMap: configMap
        });
        return true;
    };
    // End public method /configModule/

    // Begin public method /initModule/
    // Purpose      : Initializes module
    // Arguments    :
    //      * $container - the jQuery element used by this feature
    // Returns      : true
    // Throws       : none
    //
    initModule = function ($container) {
        $container.html(configMap.main_html);
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    };
    // End public method /initModule/

    // return public methods
    return {
        configModule: configModule,
        initModule: initModule
    };
    // ------------------- End Public Methods ---------------
}());