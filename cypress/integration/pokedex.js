describe('Pokedex', function() {
  it('Front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('Pokemon page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('charizard').click()
    cy.contains('solar power')
  })
})