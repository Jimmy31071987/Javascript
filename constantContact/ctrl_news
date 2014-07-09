<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="ctrl_newsletter_signup.ascx.cs" Inherits="WebApp.WebControls.ctrl_newsletter_signup" %>
<script type="text/javascript">
    $("#ctrl_newsletter").find("input[type=text]").css("padding-left", "10px");

    $(function () {
        $(".BtnSubscribe").on("click", function (e) {
            e.preventDefault();
            var Email = $('.Email').val();
            if (Email == "") {
                alert("Please enter your email");
                return;
            }
            window.open("RedirectPageToContact.aspx?Email=" + Email, "_blank");
        });
    });
</script>
<asp:TextBox ID="Temailaddress" placeholder="Enter your email address here" runat="server" ></asp:TextBox>
<asp:Button ID="BtnSubscribe" runat="server" Text="Subscribe Now >" CssClass="std-button BtnSubscribe" />
