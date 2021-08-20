describe('User Form App', () => {
  // Refresh after every test
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  // DOM element selectors
  const usernameInput = () => cy.get('input[name=username]');
  const emailInput = () => cy.get('input[name=email]');
  const passwordInput = () => cy.get('input[name=password]');
  const tosInput = () => cy.get('input[name=tos]');
  const submit = () => cy.get('button');

  it('Check tests', () => {
    expect(1+2).to.equal(3);
    expect(2+2).not.to.equal(5);
    expect({}).not.to.equal({});
  });
  it('Form elements are showing', () => {
    usernameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    tosInput().should('exist');
    submit().should('exist');
  });
  it('Filling out the forms', () => {
    submit()
      .should('be.disabled');
    usernameInput()
      .should('have.value','')
      .type('FakeUser')
      .should('have.value', 'FakeUser');
    emailInput()
      .should('have.value','')
      .type('totallyfake@fakest.com')
      .should('have.value','totallyfake@fakest.com');
    passwordInput()
      .should('have.value','')
      .type('totallyasecurepassword')
      .should('have.value','totallyasecurepassword');
    tosInput()
      .should('not.be.checked')
      .check()
      .should('be.checked');
    submit()
      .should('not.be.disabled');
  });
  it('Check if form submits and appears on submit', () => {
    usernameInput()
      .type('FakeUser');
    emailInput()
      .type('totallyfake@fakest.com');
    passwordInput()
      .type('totallyasecurepassword')
    tosInput()
      .check();
    submit()
      .click();
    cy.contains('Welcome FakeUser');
    cy.contains('totallyfake@fakest.com');
  });
  it('Check if forms empty on submit', () => {
    usernameInput()
      .type('FakeUser');
    emailInput()
      .type('totallyfake@fakest.com');
    passwordInput()
      .type('totallyasecurepassword')
    tosInput()
      .check();
    submit()
      .click();
    usernameInput()
      .should('have.value','');
    emailInput()
      .should('have.value','');
    passwordInput()
      .should('have.value','');
    tosInput()
      .should('not.be.checked');
    submit()
      .should('be.disabled');
  });
});