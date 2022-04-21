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

        change from const -> this
        const modalElement -> this.modalElement
        const backdropElement -> this.backdropElement
        the reason is to make the variable is available to be use to another method.
      */
      this.modalElement = modalElements.querySelector(".modal");
      this.backdropElement = modalElements.querySelector(".backdrop");

      /*
        actual content we want to display
      */
      const contentElement = document.importNode(
        this.contentTemplateElement.content,
        true
      );

      /*
        added to the page
        change with using this keyword to be avaibale on entire class
      */
      this.modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement("afterbegin", this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      document.body.removeChild(this.modalElement);
      document.body.removeChild(this.backdropElement);
      /*
        clearing from the DOM
      */
      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}
