
var loginPage = require('../../pageobjects/login.page');



describe('Hudl login, update password and logout', function () {

    it('should allow access with correct creds', function () {
        loginPage.open();
        loginPage.login(loginPage.email, loginPage.pwd);
        loginPage.globalUserMenu.waitForVisible();
        
        expect(loginPage.globalUserMenu.isExisting()).to.be.true;
    });

    it('should show user settings page when settings link is clicked', function () {
        loginPage.openUserSettings();

        expect(loginPage.settingsPageHeader.getText()).to.be.equal('Account Settings');
    });

    it('should update user password with valid password', function () {
        loginPage.passwordReset(loginPage.pwd, loginPage.newpwd);
        loginPage.successMessage.waitForVisible();

        expect(loginPage.successMessage.getText()).to.be.equal('Profile successfully updated.');
    });

    it('should logout when logout link is clicked', function () {
        loginPage.logout();

        expect(browser.getUrl()).to.be.equal('https://www.hudl.com/en_gb/');
    });

});
