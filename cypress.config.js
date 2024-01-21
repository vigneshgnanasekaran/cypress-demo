const merge = require('mochawesome-merge');

module.exports = (on, config) => {
  on('after:run', (results) => {
    const reportFilesPattern = './path/to/report/files/*.json';

    // Get report files matching the pattern
    const reportFiles = Cypress.$.glob(reportFilesPattern);

    // Check if there are any report files
    if (reportFiles.length === 0) {
      console.log('No report files found.');
      return null; // or handle the case as needed
    }

    // Merge the report files
    return merge({
      files: reportFiles,
    }).then((report) => {
      // Generate the HTML report or save it to a file
      console.log('Merged report:', report);
      // ...

      return null; // The return value is required for Cypress to wait for the completion of the task
    });
  });
};
