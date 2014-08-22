function wrap_lines(el){
    // Fetch
    var $sh = $(el),
        $gutter = $sh.find('td.gutter'),
        $code = $sh.find('td.code'),
        max_width = $sh.innerWidth() - $gutter.outerWidth()
    // Cycle through lines
    $gutter.find('.line').each(function(i) {
        // Fetch
        var $gutterLine = $(this),
            $codeLine = $code.find('.line:nth(' + i + ')'),
            width = 0,
            init_height = $codeLine.height()

        $codeLine.css({display: 'inline'})
        width = $codeLine.innerWidth()
        $codeLine.css({display: 'block'})
        if (width <= max_width)
            return true

        // Fetch height
        try{
          $codeLine.css({'white-space': 'pre-wrap', 'word-wrap': 'break-word'})
        }catch(e){
          // rant rant rant IE7 rant css support rant rant error rant.
          return false
        }
        var t = setInterval(function(){
            if ($codeLine.height() == init_height)
                return
            clearInterval(t)
            var height = $codeLine.height() || 0;
            height = height ? height + 'px' : 'auto'
            // Copy height over
            $gutterLine.height(height)
        }, 100)
    })
}

/**
 * A script to auto-load and run all the SyntaxHighlighter requirements
 */
$(function(){

// Mark the <script> that loads this js with class="answers-syntax".
// We pull the base url for the SyntaxHighlighter scripts/styles
var script = $('.answers-syntax')
if (script.length == 0 || !script.attr('src')){
    console.log("Alert the admins: I don't know the base path!  Is there a .answers-syntax?");
    return;
}
var shl_path = script.attr('src').split('/').slice(0, -1).join('/')

$('head')
    .append("<script type='text/javascript' src='"+shl_path+"/scripts/XRegExp.js'></script>")
    .append("<script type='text/javascript' src='"+shl_path+"/scripts/shCore.js'></script>")
    .append("<script type='text/javascript' src='"+shl_path+"/scripts/shAutoloader.js'></script>")
    .append("<link type='text/css' rel='stylesheet' href='"+shl_path+"/styles/shCoreEclipse.css' />")
    .append("<link type='text/css' rel='stylesheet' href='"+shl_path+"/styles/shThemeEclipse.css' />");

function path(){
  var args = arguments,
      result = [];

  for(var i = 0; i < args.length; i++)
      result.push(args[i].replace('@', shl_path+'/scripts/'));

  return result;
};

$.extend(SyntaxHighlighter.defaults, {
    'auto-links': false // disable auto-linking links in user content
});

// Remove '?' help link in toolbar
var tbi = SyntaxHighlighter.toolbar.items.list,
    hix = tbi.indexOf('help');
// JS version of "tbi.pop(hix)"
tbi.push.apply(tbi, tbi.splice(hix, tbi.length).slice(1));

SyntaxHighlighter.load_brushes = function load_brushes(){
    // Autoloaded brushes: matches values used by syntaxhl tinyMCE plugin
    SyntaxHighlighter.autoloader.apply(null, path(
        'bash       @shBrushBash.js',
        'csharp     @shBrushCSharp.js',
        'cpp        @shBrushCpp.js',
        'css        @shBrushCss.js',
        'delphi     @shBrushDelphi.js',
        'diff       @shBrushDiff.js',
        'groovy     @shBrushGroovy.js',
        'jscript    @shBrushJScript.js',
        'javascript @shBrushJScript.js',
        'java       @shBrushJava.js',
        'perl       @shBrushPerl.js',
        'php        @shBrushPhp.js',
        'plain      @shBrushPlain.js',
        'python     @shBrushPython.js',
        'ruby       @shBrushRuby.js',
        'scala      @shBrushScala.js',
        'sql        @shBrushSql.js',
        'vb         @shBrushVb.js',
        'xml        @shBrushXml.js'
    ));
}
SyntaxHighlighter.load_brushes();
SyntaxHighlighter.all();
var t = setInterval(function(){
    if (SyntaxHighlighter.findElements().length){
        return;
    }

    clearInterval(t);
    $('.syntaxhighlighter.wrap').each(function(){
        wrap_lines(this)
    })
}, 100)

});
