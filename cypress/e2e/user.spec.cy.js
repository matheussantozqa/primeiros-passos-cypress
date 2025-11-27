import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js' 

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {        
        
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".oxd-date-input-link.--close",
    submitButton: "[type='submit']",
    nationatilyBox: ".oxd-select-text",
    
  }
 
    
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo() 
    
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('Employe')
    // cy.get(selectorsList.genericField).eq(4).clear().type('IDTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('LicTest')
    // cy.get(selectorsList.genericField).eq(6).clear().type('1990-12-25')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.nationatilyBox).eq(0).click()
    // cy.get('.oxd-select-dropdown').should('be.visible');      
    // cy.contains('.oxd-select-option', 'Brazilian').click(); 
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain.text', 'Successfully Updated')
    
    
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)    
  })
  
})