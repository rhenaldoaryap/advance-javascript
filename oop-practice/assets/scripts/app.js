class ToolTip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    console.log(prjItems);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finsihProjectList = new ProjectList("finished");
  }
}

App.init();
