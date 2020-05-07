var table = document.querySelector('table');
var header =document.querySelector('header');

var pageHeader = new PageHeader(header);

var gradeTable = new GradeTable(table);

var application = new App(gradeTable,pageHeader);
application.start();