describe("Salary input check", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays two input fields enter salary", () => {
    cy.get('[data-testid="minimum_salary"]').should("exist");
    cy.get('[data-testid="maximum_salary"]').should("exist");
    cy.get('[data-testid="minimum_salary"]').type("8000{enter}");
    cy.get('[data-testid="maximum_salary"]').type("9000{enter}");
    // cy.get('[data-testid="minimum_salary"]').should("have.value", "8000");
  });

  it("Check table row has element", () => {
    cy.get(
      '*[class^="ant-table-row ant-table-row-level-0 emp-test-row"]',
    ).should("exist");
    cy.get('*[class^="ant-table-row ant-table-row-level-0 emp-test-row"]')
      .its("length")
      .should("be.gte", 4);
  });

  it("Check edit employee details", () => {
    const name = "Thusitha Jayalath";
    const login = "thuyiya";
    const salary = "9500"

    cy.get(
      '*[class^="ant-table-row ant-table-row-level-0 emp-test-row"]',
    ).should("exist");
    cy.contains("63774ab4572d9599980009e0")
      .parents("tr")
      .find('[data-testid="edit"]')
      .click();

    cy.get('[data-testid="name"]').should("exist");
    cy.get('[data-testid="name"]').focus().clear();
    cy.get('[data-testid="login"]').focus().clear();
    cy.get('[data-testid="salary"]').focus().clear();
    cy.get('[data-testid="name"]').type(name);
    cy.get('[data-testid="login"]').type(login);
    cy.get('[data-testid="salary"]').type(salary);
    cy.get('[data-testid="submit-edit-emp"]').click()
  });

  it("Check edit data added to the table", () => {
    const name = "Thusitha Jayalath";
    const login = "thuyiya";
    const salary = "9500"

    cy.get(
      '*[class^="ant-table-row ant-table-row-level-0 emp-test-row"]',
    ).should("exist");
    cy.contains(name).should("exist");
    cy.contains(login).should("exist");
    cy.contains(salary).should("exist");
  });
});
