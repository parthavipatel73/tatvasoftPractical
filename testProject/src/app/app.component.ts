import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';
  projectDetails ={"organization":"",
"activity":"",
"category":"",
"age":"",
"maxage":"",
"title":"",
"discription":""};
  isFlag = false

  organization = [{ "name": "test" }, { "name": "test" }, { "name": "test" }]

  onSubmit(formDetail: any) {
    this.isFlag = true
    console.log(formDetail.value)
this.projectDetails = formDetail.value

  }
}
