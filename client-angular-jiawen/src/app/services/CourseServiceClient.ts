import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001059598/courses')
      .then(response => response.json());

  findCourseById = (courseId) =>
    fetch(`http://wbdv-generic-server.herokuapp.com/api/001059598/courses/${courseId}`)
      .then(response => response.json())

  findModulesForCourse = (courseId) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001059598/courses/${courseId}/modules')
      .then(response => response.json())

  findLessonsForModule = (moduleId) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001059598/modules/${moduleId}/lessons')
      .then(response => response.json())
}
