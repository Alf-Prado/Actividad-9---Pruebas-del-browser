describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Calculator results', () => {
        it('Should show the 24 rows', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')

            cy.get('#dispDate')
            .clear()
            .type('05/05/2020')

            cy.contains('Fecha de disposición').click()

            cy.get('#creditAmount')
            .clear()
            .type(20000)

            cy.get('#paymentMethod')
            .select('1')

            cy.get('#period')
            .select('2')

            cy.get('#rate')
            .clear()
            .type(15)

            cy.contains('Calcular').click()

            cy.contains('Ahora no').click()

            cy.get('#resultadosSimulador')
            .find('tbody')
            .find('tr')
            .its('length')
            .should('eq', 24)
        })
    })
})