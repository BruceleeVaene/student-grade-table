var table = document.querySelector('table');
var gradeTable = new GradeTable(table);

var application = new App(gradeTable);
application.start();