import i18n from "../../src/i18n";
import { fieldRequiredMessage } from "../../src/utils/validation-schemas/create-account";
import { Fields, Gender } from "../../src/utils/validation-schemas/fields";
import { visitHome } from "../support/commands";

const typeFieldsExceptFirstName = () => {
  cy.get(
    `#${Gender.M} > .MuiButtonBase-root > .PrivateSwitchBase-input`
  ).check();
  cy.get(`[data-test="${Fields.LAST_NAME}"]`).type("Venera");
  cy.get(`[data-test="${Fields.EMAIL}"]`).type("a@gmail.com");
  cy.get(`[data-test="${Fields.PASSWORD}"]`).type("password");
  cy.get(`[data-test="${Fields.CONFIRM_PASSWORD}"]`).type("password");
  cy.get(`#${Fields.TERMS}`).check();
};

describe("create Account Form", () => {
  const { t } = i18n;
  const FIRST_NAME = "Daniel";

  beforeEach(visitHome);

  it("submits the form", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get(`[data-test="${Fields.FIRST_NAME}"]`).type(FIRST_NAME);
    typeFieldsExceptFirstName();
    cy.get('[data-test="button"]')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith(
          t("form.alert.thanks", { firstname: FIRST_NAME })
        );
      });
  });

  it("does not submit the form", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    typeFieldsExceptFirstName();

    cy.get('[data-test="button"]')
      .click()
      .then(() => {
        expect(stub).not.been.called;
      });
  });

  it("displays errors", () => {
    cy.get('[data-test="button"]').click();
    cy.get(`[data-test="${Fields.GENDER}-error"]`).contains(
      fieldRequiredMessage(Fields.GENDER)
    );
    cy.get(`[data-test="${Fields.FIRST_NAME}-error"]`).contains(
      fieldRequiredMessage(Fields.FIRST_NAME)
    );
    cy.get(`[data-test="${Fields.LAST_NAME}-error"]`).contains(
      fieldRequiredMessage(Fields.LAST_NAME)
    );
    cy.get(`[data-test="${Fields.EMAIL}-error"]`).contains(
      fieldRequiredMessage(Fields.EMAIL)
    );
    cy.get(`[data-test="${Fields.PASSWORD}-error"]`).contains(
      t("form.errorMessages.passwordLength")
    );

    cy.get(`[data-test="${Fields.CONFIRM_PASSWORD}-error"]`).contains(
      fieldRequiredMessage(Fields.CONFIRM_PASSWORD)
    );
  });
});
