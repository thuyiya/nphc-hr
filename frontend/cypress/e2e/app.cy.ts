import EndpointService from "../../src/services/endpoint";

describe("Salary input check", () => {
  const editId = "637a396d572d959998000a3c";
  const name = "Thusitha Jayalath";
  const login = "thuyiya";
  const salary = "9500";

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
    cy.get(
      '*[class^="ant-table-row ant-table-row-level-0 emp-test-row"]',
    ).should("exist");
    cy.contains(editId).parents("tr").find('[data-testid="edit"]').click();

    cy.get('[data-testid="name"]').should("exist");
    cy.get('[data-testid="name"]').focus().clear();
    cy.get('[data-testid="login"]').focus().clear();
    cy.get('[data-testid="salary"]').focus().clear();
    cy.get('[data-testid="name"]').type(name);
    cy.get('[data-testid="login"]').type(login);
    cy.get('[data-testid="salary"]').type(salary);
    cy.get('[data-testid="submit-edit-emp"]').click();
  });

  it("Check edit data added to the table", () => {
    cy.get(
      '*[class^="ant-table-row ant-table-row-level-0 emp-test-row"]',
    ).should("exist");
    cy.contains(name).should("exist");
    cy.contains(login).should("exist");
    cy.contains(salary).should("exist");
  });

  it("Check employees endpoint have record more than 0", () => {
    const endpoint = new EndpointService();
    cy.request(endpoint.getEmployees).as("employees");
    cy.get("@employees").should((response: any) => {
      expect(response.body.data).to.be.length.greaterThan(0);
      expect(response).to.have.property("headers");
      expect(response).to.have.property("duration");
    });
  });
});
