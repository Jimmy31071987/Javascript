using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace WebApp
{
    public partial class RedirectPageToContact : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (Request["Email"] == null)
            {
            return;
            }

            Response.Clear();

            StringBuilder sb = new StringBuilder();
            sb.Append("<html>");
            sb.AppendFormat(@"<body onload='document.forms[""form""].submit()'>");
            sb.AppendFormat("<form name='form' action='{0}' method='post'>", "http://visitor.r20.constantcontact.com/d.jsp");
            sb.AppendFormat("<input type='hidden' name='llr' value='{0}'>", "");
            sb.AppendFormat("<input type='hidden' name='m' value='{0}'>", "");
            sb.AppendFormat("<input type='hidden' name='p' value='{0}'>", "");
            sb.AppendFormat("<input type='hidden' name='ea' value='{0}'>", Request["Email"].ToString());
            // Other params go here
            sb.Append("</form>");
            sb.Append("</body>");
            sb.Append("</html>");
            Response.Write(sb.ToString());

            Response.End();

            Page.RegisterClientScriptBlock("Script1", "window.close();");
        }
    }
}
