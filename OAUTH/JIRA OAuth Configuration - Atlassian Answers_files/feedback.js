jQuery(function($){
    return; // hidden for 2.0 release

    var minned = cookie_get('feedback-minned') === 'true',
        text = ['Got issues?', 'Something funky?', 'Need help?',
                'Tell us what\'s up!'],
        tix = Math.round(Math.random()*(text.length-1)),
        tab = $('<a>', {'class': 'feedback'}).appendTo('body'),
        txt = $('<span>', {'class': 'text', text: text[tix]}).appendTo(tab),
        width = 0, height=0, padding = [parseInt(tab.css('padding-left')), parseInt(tab.css('padding-top'))],
        feedback = $($('#feedback-contents').html()).appendTo('body').hide(),
        mini = $('<div>', {'class': 'minimizer maxxed'}).appendTo(tab),
        tmp = $('<span>').appendTo('body');

    $.each(text, function(){
        tmp.text(String(this));
        width = Math.max(width, tmp.width());
        height = Math.max(height, tmp.height());
    })
    tmp.remove();
    tab.width(width);

    function start_rotation(){
        clearInterval(i)
        return i = setInterval(function(){
            tix = ++tix%text.length;
            var txt2 = $('<span>', {'class': 'text', text: text[tix]})
                .width(width).css({position: 'absolute', left:padding[0], top:padding[1]})
                .appendTo(tab).fadeOut(0);
            txt2.fadeIn(2500, function(){$(this).css({position: 'static'})});
            txt.fadeOut(2500, function(){$(this).remove()});
            txt=txt2;
        }, 30000);
    }
    var i = start_rotation();

    mini.click(function(e){
        if (mini.hasClass('maxxed')){
            tab.animate({width: 0, height: 0})
            mini.removeClass('maxxed').addClass('minned')
            cookie_set('feedback-minned', 'true')
            clearInterval(i);
        }
        else {
            tab.animate({width: width, height: height})
            mini.removeClass('minned').addClass('maxxed')
            cookie_set('feedback-minned', 'false')
            i = start_rotation();
        }
        e.stopPropagation()
    });
    if (minned) mini.click();

    feedback.dialog({
        title: 'Found an Answers bug? Need help from Atlassian? Got a suggestion?',
        autoOpen: false,
        draggable: true,
        hide: 'fade',
        show: 'fade',
        modal: true,
        width: '75%',
        buttons: {
            Cancel: function(){
                feedback.dialog('close')
            },
            OK: function(){
                // submit form
                feedback.dialog('close')
            }
        },
        close: function(){
            feedback[0].reset()
        }
    })

    tab.click(function(){feedback.dialog('open')});
});
