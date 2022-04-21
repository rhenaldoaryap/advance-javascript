export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateElement = document.getElementById(contentId);
    this.modalTemplateElement = document.getElementById("modal-template");
  }

  show() {
    if ("content" in document.createElement("template")) {
      /*
        import node is trick how to use the content of a template (or the target)
        and create a copy of node based on the target (which si the element we pick it up.

        code below in the end will give us an access to the two (2) div inside of
        modal-template id
        and do deep clone with set it to true.
      */
      const modalElements = document.importNode(
        this.modalTemplateElement.content,
        true
      );

      /*
        modal
      */
      const modalElement = modalElements.querySelector(".modal");
      const backdropElement = modalElements.querySelector(".backdrop");

      /*
        actual content we want to display
      */
      const contentElement = document.importNode(
        this.contentTemplateElement.content,
        true
      );

      /*
        added to the page
      */
      modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", modalElement);
      document.body.insertAdjacentElement("afterbegin", backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }

  hide() {}
}
