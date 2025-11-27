class DashboardPage {

    selectorsList() {
        const selector = {
            dashboardGrid: ".orangehrm-dashboard-grid",
        }
        return selector
    }
    
    checkDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
}

export default DashboardPage