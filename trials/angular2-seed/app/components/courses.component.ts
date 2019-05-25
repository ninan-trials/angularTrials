import {Component} from 'angular2/core'
import {CourseService} from '../service/course.service'
import {AutoGrowDirective} from '../directives/auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
      <h1>Course</h1>
      {{ title }}
      <input type="text" autoGrow />
      <ul>
        <li *ngFor = "#course of courses">{{ course }}</li>
      </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})

export class CoursesComponent {
    title: string = "Courses";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
