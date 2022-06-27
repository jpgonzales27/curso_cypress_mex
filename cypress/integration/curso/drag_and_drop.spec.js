/// <reference types='Cypress'/>

describe("description", { viewportWidth: 1500, viewportHeight: 1000 }, () => {
  it("Drag n Drop - HTML Native Drag APIS - Drag Events", () => {
    // const dataTransfer = new DataTransfer();
    cy.visit(
      "https://qaboxletstestcypresspracticesite.netlify.app/dragndrop.html"
    );
    // cy.get(".fill").drag("div.empty:nth-of-type(2)");

    const dataTransfer = new DataTransfer();
    cy.get(".fill").trigger("dragstart", { dataTransfer });
    cy.get("div.empty:nth-of-type(2)").trigger("drop", { dataTransfer });
    cy.get(".fill").trigger("dragend");
    // dndNative(".fill", "div.empty:nth-of-type(2)", true);
  });

  it("External Website seleniumeasy - Drag n Drop", () => {
    const dataTransfer = new DataTransfer();
    cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html");
    //! usando el pluging se queda el elemento por eso usamo el trigger
    // cy.get("#todrag>span:nth-child(2)").drag("#mydropzone");
    cy.get("#todrag>span:nth-child(2)").trigger("dragstart", { dataTransfer });
    cy.get("#mydropzone").trigger("drop", { dataTransfer });
    cy.get("#todrag>span:nth-child(2)").trigger("dragend");
    // dndNative("#todrag>span:nth-child(2)", "#mydropzone", true);
    cy.get("#droppedlist span").contains("Draggable 1").should("be.visible");
  });

  it("Drag n Drop - HTML Mouse Events", () => {
    cy.visit(
      "https://qaboxletstestcypresspracticesite.netlify.app/dragndropmouseevents"
    );
    cy.on("window:alert", (text) => {
      expect(text).to.eql("Smaller circle is dropped inside bigger circle");
    });
    // cy.get("#divTwo").drag("#divOne");
    cy.get("#divOne").then(($el) => {
      const x1 = $el[0].getBoundingClientRect().left;
      const x2 = $el[0].getBoundingClientRect().width;
      const xc = x1 + x2 / 2;
      const y1 = $el[0].getBoundingClientRect().top;
      const y2 = $el[0].getBoundingClientRect().height;
      const yc = y1 + y2 / 2;
      cy.get("#divTwo")
        .trigger("mousedown")
        .trigger("mousemove", { clientX: xc, clientY: yc })
        .trigger("mouseup");
    });
    // dndMouse("#divTwo", "#divOne");
  });

  it.only("Mouse - Drag n Drop - Sort", () => {
    cy.visit(
      "https://qaboxletstestcypresspracticesite.netlify.app/dragndrop.html"
    );
    //*ESTE ES EL BUENO CON EL PLUGIN
    //cy.get("#divTwo").drag("#divFour");

    // Center approach won't generate desired result
    const dataTransfer = new DataTransfer();
    cy.get("#divTwo").trigger("dragstart", { dataTransfer });
    cy.get("#divFive").trigger("dragover");
    cy.get("#divFive").trigger("drop", { dataTransfer });
    cy.get("#divTwo").trigger("dragend");
    // dndNative("#divTwo", "#divFive", true);
  
    console.log()
  });


});
