class MyinfoPage {

    selectorsList() {
        const selector = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".oxd-date-input-link.--close",
            submitButton: "[type='submit']",
            nationatilyBox: ".oxd-select-text",
        }
        return selector
    }

    fillPersonalDetails(firstName, LastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(LastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicense, driversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicense)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain.text', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }

    fillStatus() {
        cy.get(this.selectorsList().nationatilyBox).eq(0).click()
        cy.get('.oxd-select-dropdown').should('be.visible');      
        cy.contains('.oxd-select-option', 'Brazilian').click();
    }
}

export default MyinfoPage