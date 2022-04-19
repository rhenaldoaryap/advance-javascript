class ProjectList {
  // initial empty array for container
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    prjItems.forEach((prjItem) => {
      /* ProjectItem will look parameter expected inside
        of constructor, and here we pass the concrete argument */
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    });
    console.log(this.projects);
    this.connectDroppable();
  }

  // drop zone for droppable and draggable items
  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener("dragenter", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        list.parentElement.classList.add("droppable");
        event.preventDefault();
      }
    });

    list.addEventListener("dragover", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
      }
    });

    list.addEventListener("dragleave", (event) => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      const prjId = event.dataTransfer.getData("text/plain");
      if (this.projects.find((p) => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector("button:last-of-type")
        .click();
      list.parentElement.classList.remove("droppable");
    });
  }

  /* adding method for instance to be calling when switching
    from active to finished and vice versa, see at App Class */
  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  /* adding two method to be event listener and handler to switch
    between active or finished */
  addProject(project) {
    console.log(project);
    // move from Array instance in A (active) to B (finished)
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    /* const projectIndex = this.projects.findIndex(p => p.id === projectId)
      this.projects.splice(projectIndex, 1) */
    // shorter way
    this.projects = this.projects.filter((p) => p.id !== projectId);
    /* keep all values true, but if the ID of the projects is true/equal
      remove that project from active/finished, vice versa
      that is why we use filter */
  }
}
