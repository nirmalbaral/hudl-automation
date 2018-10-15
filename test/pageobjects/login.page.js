var pageElement = require("../helpers/pageElement"),
    Page = require("./page");

var loginPage = Object.create(Page, {
    username:               pageElement.pageElement("#email"),
    password:               pageElement.pageElement("#password"),
    globalUserMenu:         pageElement.pageElement(".hui-globalusermenu"),
    loginButton:            pageElement.pageElement("#logIn"),
    logoutButton:           pageElement.pageElement("a[data-qa-id=webnav-usermenu-logout]"),
    settingsButton:         pageElement.pageElement("a[data-qa-id=webnav-usermenu-accountsettings]"),
    settingsPageHeader:     pageElement.pageElement(".hui-secondarynav__title > span"),
    confirmPassword:        pageElement.pageElement("#confirm_password"),
    currentPassword:        pageElement.pageElement("#current_password"),
    submitButton:           pageElement.pageElement("#save_basic"),
    successMessage:         pageElement.pageElement("#SuccessToast > .uni-toast__content > h4"),

    open: {
        value: function() {
            Page.open.call(this, "/login");
        }
    },

    login: {
        value: function(username, password) {
            this.username.setValue(username);
            this.password.setValue(password);
            this.loginButton.click();
        }
    },

    logout: {
        value: function() {
            this.globalUserMenu.click();
            this.logoutButton.click();
        }
    },

    passwordReset: {
        value: function(password, newPassword) {
            this.currentPassword.setValue(password);
            this.password.setValue(newPassword);
            this.confirmPassword.setValue(newPassword);
            this.submitButton.click();
        }
    },

    openUserSettings: {
        value: function() {
            this.globalUserMenu.click();
            this.settingsButton.click();
        }
    }

}); 

module.exports = loginPage;