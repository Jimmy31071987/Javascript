<script type="text/javascript">
    var patterns = {
        link: /(\b(https?|ftp|file|http?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
        user: /(^|\s)@(\w+)/g,
        hash: /(^|\s)#(\w+)/g
    };
    $("#footertweets").find(".tweet:first").find("ul >li").each(function () {
        if (($(this).html()).replace(/\s+/g, '') == "") {
            $(this).remove();
        }
        else {
            $(this).html($(this).html().replace(patterns.link, '<a href="$1" target="_blank">$1</a>').replace(patterns.user, '$1@<a href="http://www.twitter.com/$2" target="_blank">$2</a>').replace(patterns.hash, '$1#<a href="http://search.twitter.com/search?q=%23$2" target="_blank">$2</a>'));
        }
    });
  
</script>


  <div id="footertweets">
        <div class="title">Latest Tweets</div>
   
        <div class="tweet" id="twitter" runat="server">
              
        </div>
    </div>
