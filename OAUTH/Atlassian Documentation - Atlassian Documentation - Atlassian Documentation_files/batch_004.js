try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-core', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro-core.js' */
(function(){
    /**
     * Constructor for the MobileMacroHelper
     * 
     * @param jz the jQuery or Zepto type object to be used in the toggle function.
     */
    var MobileMacroHelper = function(jz) {
        this.$ = jz;

        /**
         * @param eventMatcher an optional function taking a single event argument which is used to decide whether the
         * toggle function should operate or not.
         * @return the function that will be executed when the macro is toggled on the displayed page
         */        
        this.createToggleFunction = function(eventMatcher) {
            var $ = this.$;
            
            return function expand(e) {
                if (typeof eventMatcher != "undefined" && !eventMatcher(e)) {
                    return;                    
                }

                var $expander = $(this),
                    $expanderIcon = $(".expand-control-icon", $expander),
                    $expanderContent = $(".expand-content", $expander.closest(".expand-container")).first(); // avoid any nested expand-content

                if ($expanderContent.hasClass("expand-hidden")) {
                    $expanderContent.css("display","block");                
                    $expanderContent.animate({opacity:1});
                } else {
                    $expanderContent.animate({opacity:0}, {
                        complete : function() {
                            $expanderContent.hide();
                        }
                    });
                }
                
                $expanderContent.toggleClass("expand-hidden");
                $expanderIcon.toggleClass("expanded");
            };
        };

        /**
         * @param context the node to search within.
         * @return a $ wrapped collection of elements that are expand controls scoped
         * to the supplied DOM element
         */        
        this.getExpandElements = function(context) {
            return this.$(".expand-control", context);
        };        
    };
    
    Confluence = Confluence || {};
    Confluence.Plugins = Confluence.Plugins || {};

    Confluence.Plugins.ExpandMacro = {

        /**
         * Connect the elements in the page to the event handler for expanding and collapsing.
         * 
         * @param jz the jQuery or Zepto type object to be used in the toggle function.
         * @param context the node to search within.
         * @param eventNames a space separated String of event names to bind
         * @param eventMatcher an optional function taking a single event argument which is used to decide whether the
         * toggle function should operate or not.
         */
        bind: function(jz, context, eventNames, eventMatcher) {
            var helper = new MobileMacroHelper(jz);
            var $elements = helper.getExpandElements(context);
            
            $elements.length && $elements.bind(eventNames, helper.createToggleFunction(eventMatcher));
        }
    };    
})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-desktop-resources', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro.js' */
AJS.toInit(function ($) {
    Confluence.Plugins.ExpandMacro.bind($, $("body"), "click keyup", function(e) {
        return !(e.type == "keyup" && e.keyCode != 13);
    });
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


