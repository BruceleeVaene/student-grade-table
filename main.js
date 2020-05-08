var table = document.querySelector('table');
var header = document.querySelector('header');
var form = document.querySelector('form');
var p = document.querySelector('p');

var gradeForm = new GradeForm(form);

var pageHeader = new PageHeader(header);

var gradeTable = new GradeTable(table,p);

var application = new App(gradeTable,pageHeader,gradeForm);
application.start();