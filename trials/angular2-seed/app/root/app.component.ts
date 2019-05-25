import {Component} from 'angular2/core';
import {CoursesComponent} from '../components/courses.component'
import {AuthorComponent} from '../components/authors.component'

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorComponent]
})
export class AppComponent { }
