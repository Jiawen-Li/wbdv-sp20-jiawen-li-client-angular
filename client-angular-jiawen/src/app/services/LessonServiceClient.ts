import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule = (moduleId) =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/001059598/modules/${moduleId}/lessons')
      .then(response => response.json())
}
