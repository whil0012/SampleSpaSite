/*
spa.shell.js
Shell module for SPA
 */

spa.shell = (function () {
    var
        configMap = {
            main_html: String()
                + '<div class="spa-shell-head">'
                + ' <div class="spa-shell-head-logo"></div>'
                + ' <div class="spa-shell-head-acct"></div>'
                + ' <div class="spa-shell-head-search"></div>'
                + '</div>'
                + '<div class="spa-shell-main">'
                + ' <div class="spa-shell-main-nav"></div>'
                + ' <div class="spa-shell-main-content"></div>'
                + '</div>'
                + '<div class="spa-shell-foot"></div>'
                + '<div class="spa-shell-chat"></div>'
                + '<div class="spa-shell-modal"></div>',
            chat_extend_time: 1000,
            chat_retract_time: 300,
            chat_extend_height: 450,
            chat_retract_height: 15,
            chat_extended_title : 'Click to retract',
            chat_retracted_title: 'Click to extend'
        },
        stateMap = {
            $container: null,
            is_chat_retracted : true
        },
        jqueryMap = { },
        setJqueryMap, toggleChat, animateChatSlider, onClickChat, initModule;

    setJqueryMap = function () {
        var $container = stateMap.$container;
        jqueryMap = {
            $container : $container,
            $chat: $container.find( '.spa-shell-chat' )
        };
    };

    animateChatSlider = function( height, time, callback, title, is_retracted ) {
        jqueryMap.$chat.animate(
            { height: height },
            time,
            function () {
                jqueryMap.$chat.attr( 'title', title );
                stateMap.is_chat_retracted = is_retracted;
                if ( callback ) { callback(jqueryMap.$chat ); }
            }
        );
    };

    toggleChat = function ( do_extend, callback ) {
        var
            px_chat_ht = jqueryMap.$chat.height(),
            is_open = px_chat_ht === configMap.chat_extend_height,
            is_closed = px_chat_ht === configMap.chat_retract_height,
            is_sliding = ! is_open && ! is_closed;

        // avoid race condition
        if ( is_sliding ) {
            return false;
        }

        // Begin extend chat slider
        if ( do_extend ) {
            animateChatSlider(
                configMap.chat_extend_height,
                configMap.chat_extend_time,
                callback,
                configMap.chat_extended_title,
                false);
            return true;
        };

        // Begin retract chat slider
        animateChatSlider(
            configMap.chat_retract_height,
            configMap.chat_retract_time,
            callback,
            configMap.chat_retracted_title,
            true);
        return true;
    };

    onClickChat = function ( event ) {
        toggleChat( stateMap.is_chat_retracted );
        return false;
    };

    initModule = function ( $container ) {
        stateMap.$container = $container;
        $container.html(configMap.main_html);
        setJqueryMap();

        stateMap.is_chat_retracted = true;
        jqueryMap.$chat
            .attr( 'title', configMap.chat_retracted_title )
            .click( onClickChat );
    };

    return { initModule : initModule };
}());