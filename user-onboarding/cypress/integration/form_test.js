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
});