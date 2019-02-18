/*
spa.js
Root namespace module
 */

/*jslint        browser: true,  sloppy: true,
devel: true,    maxerr: 50,
white: true
 */
/*global $, spa */

var spa = (function () {
    var initModule = function ( $container ) {
        spa.shell.initModule( $container );
    };

    return { initModule : initModule };
}());