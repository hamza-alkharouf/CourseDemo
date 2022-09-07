import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//Component directive
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CourseDemo';


  sayhi():String{
    return 'hiiiiiii'
  }
}
