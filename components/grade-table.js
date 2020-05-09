class GradeTable {
    constructor(tableElement,noGradesElement) {
        this.tableElement = tableElement;
        this.noGradesElement = noGradesElement;
    }
    updateGrades(grades) {
        var tableBody = this.tableElement.querySelector('tbody');
        var pElement = this.tableElement.querySelector('p');
        for (var i = 0; i < grades.length; i++) {
            tableBody.append(this.renderGradeRow(grades[i], this.deleteGrade));
        }
        if (grades.length === 0) {
            pElement.classList.remove('d-none');
        }
    }
    onDeleteClick(deleteGrade) {
        this.deleteGrade = deleteGrade;
    }
    renderGradeRow(data,deleteGrade) {
        var row = document.createElement('tr');
        var name = document.createElement('td');
        var course = document.createElement('td');
        var grade = document.createElement('td');
        var deleteButton = document.createElement('td');
        var button = document.createElement('button');

        name.textContent = data.name;
        course.textContent = data.course;
        grade.textContent = data.grade;
        button.textContent = 'Delete!';

        row.append(name,course,grade);
        deleteButton.append(button);
        row.append(deleteButton);

        deleteButton.addEventListener('click', function(event) {
            deleteGrade(data.id);
        });
        
        return row;
    }
}