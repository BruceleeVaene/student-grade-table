//$.ajax({
  //  method: "POST",
    //url: "https://sgt.lfzprototypes.com/api/users",
    //data: {
        //"firstName": "Brucelee",
        //"lastName": "Vaene",
        //"cohort": "c04.20"
   // }
//});

var table = document.querySelector('table');
var gradeTable = new GradeTable(table);

var application = new App(gradeTable);
application.start();