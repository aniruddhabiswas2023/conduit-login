describe('conduit login', () => {
  it('conduit ', () => {
    cy.visit('http://angularjs.realworld.io/#/');
  });

  it('login', () => {

    //cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click();
    cy.get("a[ui-sref='app.login']").click();
    cy.wait(1000);
    cy.get("input[placeholder='Email']").type('anitourist2017@gmail.com');
    cy.get("input[placeholder='Password']").type('London@123');
    cy.get("button[type='submit']").click();
    cy.wait(3000);

    cy.contains('Global Feed');


   });

  it('settings', () => {

   cy.get("a[ui-sref='app.settings']").click(); //There is a bug in the application, it doesn't makes the settings button non-clickable intermittently
   //cy.contains('Settings').click();
   cy.get("textarea[placeholder='Short bio about you']").type('test');
   cy.get("'button[type='submit']'").click();

   });


});
