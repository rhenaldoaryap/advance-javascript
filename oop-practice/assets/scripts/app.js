class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishProjectList = new ProjectList("finished");

    activeProjectList.setSwitchHandlerFunction(
      finishProjectList.addProject.bind(finishProjectList)
    );
    finishProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }

  static startAnalytics() {
    const analyticsScript = document.createElement("script");
    analyticsScript.src = "assets/scripts/Utility/analytics.js";
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
