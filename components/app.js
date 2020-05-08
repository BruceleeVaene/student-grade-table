class App {
    constructor(gradeTable,pageHeader,gradeForm) {
        this.handleGetGradesError = this.handleGetGradesError.bind(this);
        this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
        this.createGrade = this.createGrade.bind(this);
        this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
        this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
        this.gradeTable = gradeTable;
        this.pageHeader = pageHeader;
        this.gradeForm = gradeForm;
        this.deleteGrade = this.deleteGrade.bind(this);
        this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
        this.handleDeleteGradeSuccess = this.handleCreateGradeSuccess.bind(this);
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
        this.gradeForm.onSubmit(this.createGrade);
        this.gradeTable.onDeleteClick(this.deleteGrade);
    }
    createGrade(name,course,grade) {
        $.ajax ({
            method: "POST",
            url: "https://sgt.lfzprototypes.com/api/grades",
            data: {
                "name": name,
                "course": course,
                "grade": grade
            },
            headers: { "X-Access-Token": "jW44Wi2y"},
            success: this.handleCreateGradeSuccess,
            error: this.handleCreateGradeError
        })
    }
    handleCreateGradeError(error) {
        console.log(error);
    }
    handleCreateGradeSuccess() {
        this.getGrades();
    }
    deleteGrade(id) {
        console.log(id);
    }
    handleDeleteGradeError(error) {
        console.error(error)
    }
    handleDeleteGradeSuccess() {
        this.getGrades();
    }
}