/*  This is the code for the top nav menu. It give it a different background
    color depeneding on where you are in the site.
 */

var href=$(location).attr('href').split('/');
href=href[href.length-1];
if(href.length<=0)
{
    href="index.html";
}
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    $(document).on("scroll", onScroll1);
});
function addActive()
{    
    $(document).find('a[href="/' + href + '"]').parent().addClass('active');
}
function onScroll(event)
{
    var scrollPos = $(document).scrollTop();
    if(href=="index.html" || href=="index.html#about")
    {
        refElement='#about';
        refElement=$(refElement); 
        if(refElement.length>0)
        {
            if (refElement.position().top-200 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) 
            {
                chref="index.html#about";
                ohref="index.html";
                $(document).find('a[href="/' + chref + '"]').parent().addClass('active');
                $(document).find('a[href="/' + ohref + '"]').parent().removeClass('active');
            }
            else
            {
                chref="index.html";
                ohref="index.html#about";
                $(document).find('a[href="/' + chref + '"]').parent().addClass('active');
                $(document).find('a[href="/' + ohref + '"]').parent().removeClass('active');
            }
        }
    }
}
//For BLOGS
function onScroll1(event)
{	
    var scrollPos = $(document).scrollTop();
	$('.nav-link-blog').each(function () {
	    var currLink = $(this);
        var refElement = $(currLink).attr("href");
	    refElement=$($.trim(refElement.substring(refElement.indexOf("#"),refElement.length)));
	    if(refElement.length>0)
	    {
	        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) 
		    {
                currLink.addClass("active-inner");
            }
	        else
	        {
                currLink.removeClass("active-inner");
		    }
	    }
    });				
}