describe('todos', () => {
  it('todos all available actions', () => {
    cy.visit('http://localhost:5173/')

    // add
    cy.getByDataId('input').type('todo1')
    cy.getByDataId('add').click()
    cy.getByDataId('item').should('contain.text', 'todo1')
    // add

    // check
    cy.getByDataId('item').first().click()
    // check

    // all
    cy.getByDataId('All').click()
    cy.getByDataId('item').should('contain.text', 'Finish the project')
    cy.getByDataId('item').should('contain.text', 'Call mom')
    // all

    // done
    cy.getByDataId('Done').click()
    cy.getByDataId('item').should('not.contain.text', 'Finish the project')
    cy.getByDataId('item').should('contain.text', 'Call mom')
    cy.getByDataId('item').should('contain.text', 'Buy groceries')
    // done

    // to do
    cy.getByDataId('Todo').click()
    cy.getByDataId('item').should('contain.text', 'Finish the project')
    cy.getByDataId('item').should('not.contain.text', 'Call mom')
    // to do

    // remove finished
    cy.getByDataId('remove').click()
    cy.getByDataId('item').should('not.contain.text', 'Clean the house')
    cy.getByDataId('item').should('not.contain.text', 'Call mom')
    // remove finished
  })
})
