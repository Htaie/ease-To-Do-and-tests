describe("App", () => {
  it("should have a form", () => {
    cy.visit("/");
    const texts = [
      "Buy milk",
      "Do homework",
      "Go for a walk",
      "Read a book",
      "Finish work",
      "Learn something new",
      "Exercise",
      "Cook dinner",
      "Call a friend",
      "Write a blog post",
      "Plan a trip",
      "Practice coding",
      "Watch a movie",
      "Clean the house",
      "Play a musical instrument",
      "Volunteer",
      "Visit a museum",
      "Take a nap",
      "Explore a new hobby",
      "Listen to music",
    ];

    cy.get('button[type="button"]').should("have.text", "Add");

    for (const text of texts) {
      cy.get('input[type="text"]').type(text);
      cy.get('button[type="button"]').click({force:true});
      cy.get("p").contains(text).should('be.visible');
      cy.get('input[type="text"]').clear({force: true});
    }


    cy.get('input[type="checkbox"]').eq(0).check();
    cy.get("li.completed").eq(0).should("have.text", texts[0]);
    cy.get('li.completed').should("have.length", 1);
    cy.get('button[type="submit"]').eq(2).click();
    cy.get("li.completed > p").should("not.exist");
  });
});
