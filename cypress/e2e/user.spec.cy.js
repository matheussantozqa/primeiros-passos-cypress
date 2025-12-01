import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js' 
import MyinfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')

const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()


describe('Orange HRM Tests', () => {
    
  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboardPage()    
    menuPage.accessMyInfo() 
    myinfoPage.fillPersonalDetails(chance.first(), chance.last())
    myinfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'ID1234', '2025-01-01')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()
   
        
  }) 
})