class MenuPage {
    selectorsList() {
        const selector = {
            myInfoButtom: '[href="/web/index.php/pim/viewMyDetails"]',
        }
        return selector
    }

    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButtom).click()
    }
}
export default MenuPage