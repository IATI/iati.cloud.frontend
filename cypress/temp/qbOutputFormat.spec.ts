// @ts-nocheck
/// <reference types="cypress" />

const outputFormatLabels = [
  "Column elements to include: activities",
  "Column elements to include: transactions",
];

describe("Query Builder - output format", function () {
  it("should load the page", function () {
    cy.visit("/querybuilder/output-format");
  });

  it("should show the correct text", function () {
    outputFormatLabels.forEach((text) => {
      cy.get(`[label= "${text}"]`).should("exist");
    });
    cy.get(".fieldsSelect").should("have.text", "Select data fields");
    cy.get(".fieldsSelect2").should("have.text", "Select data fields");
  });

  it("should show navigations", function () {
    cy.findByTestId("AppBar").should("exist");
    cy.get('[href="/querybuilder/core-filters"]');
    cy.get('[href="/querybuilder/additional-filters"]').should("exist");
    cy.get(".active").should("exist");
    cy.get('[href="/querybuilder/results"]').should("exist");
  });

  it("should be able to select 1 field at a time", function () {
    cy.get(":nth-child(2) > .MuiButtonBase-root").click();
    testSelect(".fieldsSelect2", 3, 0);
  });

  it("should be able to navigate to the next page", function () {
    cy.get(":nth-child(2) > a > .MuiButtonBase-root").click();
  });

  function testSelect(
    selector: string,
    selectNumber: number,
    optionNumber: number
  ) {
    cy.get(selector).click();
    cy.get(`#react-select-${selectNumber}-option-0-${optionNumber}`).then(
      ($span) => {
        const selectText: string = $span.text();
        cy.get(
          `#react-select-${selectNumber}-option-0-${optionNumber}`
        ).click();
        cy.get(`[class*=multiValue]`).last().should("have.text", selectText);
      }
    );
  }
});