        $(function () {
                 var nodes = document.getElementsByTagName("a"), i = nodes.length;
                 var regExp = new RegExp("//" + location.host + "($|/)");
                 while (i--) {
                     var href = nodes[i].href;
                     var isLocal = (href.substring(0, 4) === "http") ? regExp.test(href) : true;
                     var target = isLocal ? "_self" : "_blank";
                     if ($(nodes[i]).attr("target") != null && $.trim($(nodes[i]).attr("target")) == "") {
                         $(nodes[i]).attr("target", target);
                     }
                     else if ($(nodes[i]).attr("target") == null) {
                         $(nodes[i]).attr("target", target);
                    }
                 }
             })
