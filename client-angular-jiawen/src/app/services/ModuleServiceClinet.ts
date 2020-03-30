import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClinet {
  findModulesForCourse = (courseId) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001059598/courses/${courseId}/modules')
      .then(response => response.json())
}
