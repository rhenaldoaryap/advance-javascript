class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);

    destinationElement.append(element);
  }
}

class ToolTip {}

class ProjectItem {
  constructor(id, updateProjectListFunction, type) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  connectMoreInfoButton() {}

  /* connectSwithButton for switching from active
  and finish and vice versa */
  connectSwitchButton(type) {
    // get to the node element by it's id, see the constructor
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "Finish" : "Activate";
    switchBtn.addEventListener(
      "click",
      this.updateProjectListHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFunction, type) {
    this.updateProjectListHandler = updateProjectListsFunction;
    this.connectSwitchButton(type);
  }
}

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

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finsihProjectList = new ProjectList("finished");

    activeProjectList.setSwitchHandlerFunction(
      finsihProjectList.addProject.bind(finsihProjectList)
    );
    finsihProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
