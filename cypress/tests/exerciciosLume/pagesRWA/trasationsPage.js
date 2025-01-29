class trasations {
  transList() {
    const transList = {
      myneButton: '[data-test="nav-personal-tab"]',
      notifications:'.css-1idn90j-MuiGrid-root',
      notrasnationscard: '[data-test="empty-list-header"] > .MuiTypography-root',
    };
    return transList;
  }
  accessNotifications() {
    cy.get(this.transList().myneButton).click();
    cy.get(this.transList().notifications);
  }
  accessNotificationsFail() {
    cy.get(this.transList().notrasnationscard);
  }
}
export default trasations;
