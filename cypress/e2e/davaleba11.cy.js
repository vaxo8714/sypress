// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
describe("Login User with correct email and password", () => {
    it("Login User with correct email and password", () => {cy.visit("http://automationexercise.com");

// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
// 5. Verify 'Login to your account' is visible
cy.get('.login-form > h2').should("be.visible");
// 6. Enter correct email address and password
cy.get('[data-qa="login-email"]').type("v.natriashvili@crystalbet.com");
cy.get('[data-qa="login-password"]').type("123456");
// 7. Click 'login' button
cy.get('[data-qa="login-button"]').click();
// 8. Verify that 'Logged in as username' is visible
cy.get(':nth-child(10) > a').should("be.visible");
// 9. Click 'Delete Account' button
//cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
// 10. Verify that 'ACCOUNT DELETED!' is visible
//cy.get('[data-qa="account-deleted"]').should("be.visible")
    })})

    describe("Login User with incorrect email and password", () => {
        it("Login User with incorrect email and password", () => {cy.visit("http://automationexercise.com");
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        // 4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        // 5. Verify 'Login to your account' is visible
        cy.get('.login-form > h2').should("be.visible");
        // 6. Enter incorrect email address and password
        cy.get('[data-qa="login-email"]').type("v.natfriashvili@crystalbet.com");
        cy.get('[data-qa="login-password"]').type("12f3456");
        // 7. Click 'login' button
        cy.get('[data-qa="login-button"]').click();

        // 8. Verify error 'Your email or password is incorrect!' is visible
        cy.get('.login-form > form > p').should("be.visible")

    })}) 

    describe("Register User with existing email", () => {
        it("Register User with existing email", () => {cy.visit("http://automationexercise.com");
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        // 3. Verify that home page is visible successfully
        // 4. Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        // 5. Verify 'New User Signup!' is visible
        cy.get('.signup-form > h2').should("be.visible");
        // 6. Enter name and already registered email address
        cy.get('[data-qa="signup-name"]').type("vaxo");
        cy.get('[data-qa="signup-email"]').type("v.natriashvili@crystalbet.com");
        // 7. Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click();
        // 8. Verify error 'Email Address already exist!' is visible
        cy.get('.signup-form > form > p').should("be.visible")
    })})