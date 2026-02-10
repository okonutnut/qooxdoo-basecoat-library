/* ************************************************************************

   Copyright: 2026 

   License: MIT license

   Authors: 

************************************************************************ */

/**
 * This is the main application class of "basecoat-qooxdoo-library"
 *
 * @asset(basecoat/*)
 */
qx.Class.define("basecoat.Application", {
  extend: qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members: {
    /**
     * This method contains the initial application code and gets called
     * during startup of the application
     *
     * @lint ignoreDeprecated(alert)
     */
    main() {
      // Call super class
      super.main();

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug")) {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      const label = new qx.ui.basic.Label("Hello World");

      const textField = new qx.ui.form.TextField();
      textField.setPlaceholder("Type something...");

      const btn = new qx.ui.form.Button("Click me");

      // Document is the application root
      const doc = this.getRoot();
      const vbox = new qx.ui.container.Composite(
        new qx.ui.layout.VBox(10).set({
          alignX: "center",
        }),
      );

      // Add button to document at fixed coordinates
      vbox.add(label);
      vbox.add(textField);
      vbox.add(btn);
      doc.add(vbox, { left: 100, top: 50 });

      // Add an event listener
      btn.addListener("execute", function () {
        /* eslint no-alert: "off" */
        alert("Hello World!");
      });
    },
  },
});
