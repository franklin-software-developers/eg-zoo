AFRAME.registerComponent("character-controller", {
    events: {
      "navigation-start": function () {
        if (this.el.hasAttribute("simple-navmesh-constraint")) {
          this.el.setAttribute("simple-navmesh-constraint", "enabled", false);
        }
      },
      "navigation-end": function () {
        if (this.el.hasAttribute("simple-navmesh-constraint")) {
          this.el.setAttribute("simple-navmesh-constraint", "enabled", true);
        }
      },
    },
  });