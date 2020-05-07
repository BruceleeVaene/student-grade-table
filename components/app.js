class App {
    constructor(gradeTable,pageHeader,gradeForm) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
    }
    handleGetGradesError(error) {
        console.error(error);
    }
    handleGetGradesSuccess(grades) {
        this.gradeTable.updateGrades(grades);
        var gradeSum = 0;
        for (var i = 0; i < grades.length; i++) {
            gradeSum += grades[i].grade;
        }
        var gradeAvg = (gradeSum / grades.length);
        this.pageHeader.updateAverage(gradeAvg);
    }
    getGrades() {
        $.ajax({
            method: "GET",
            url: "https://sgt.lfzprototypes.com/api/grades",
            headers: {"X-Access-Token": "jW44Wi2y"},
            success: this.handleGetGradesSuccess,
            error: this.handleGetGradesError
        });
    }
    start() {
        this.getGrades();
    }
    createGrade(name,course,grade) {
        console.log(name,course,grade);
    }
    handleCreateGradeError(error) {
        console.log(error);
    }
    handleCreateGradeSuccess() {
        this.getGrades();
    }
}