const { marge } = require("mochawesome-merge");
const { create } = require("mochawesome-report-generator");

module.exports = (on, config) => {
  on("after:run", (results) => {
    const options = {
      reportDir: "cypress/reports/html",
      jsonDir: "cypress/reports/html/.jsons",
      reportTitle: "Custom Report",
      html: true,
    };

    return marge
      .merge(options)
      .then((report) => create(report, options))
      .then((htmlReport) => {
        console.log("HTML Report created at: ", htmlReport);
      });
  });
};
