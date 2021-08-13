import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  currentTab: string = 'user';

  userMenuNodes = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        {id: 2, name: 'Cursor'},
        {id: 3, name: 'Fine'},
        {id: 4, name: 'Font'},
        {id: 5, name: 'Formatting'},
        {id: 6, name: 'Diff Editor'},
        {id: 7, name: 'Minimap'},
        {id: 8, name: 'Suggestions'},
        {id: 9, name: 'Files'},
      ],
    },
    {
      id: 10,
      name: 'Workbench',
      children: [
        {id: 11, name: 'Appearance'},
        {id: 12, name: 'Breadcrumbs'},
        {id: 13, name: 'Editor Management'},
        {id: 14, name: 'Setting Editor'},
        {id: 15, name: 'Zen Mode'},
        {id: 16, name: 'Screencast Mode'},
      ],
    },
    {
      id: 17,
      name: 'Window',
      children: [
        {id: 18, name: 'W1'},
        {id: 19, name: 'W2'},
        {id: 20, name: 'W3'},
        {id: 21, name: 'W4'},
        {id: 22, name: 'W5'},
      ]
    },
    {
      id: 23,
      name: 'Feature',
      children: [
        {id: 24, name: 'Explorer'},
        {id: 25, name: 'Search'},
        {id: 26, name: 'Extension Viewlet'},
        {id: 27, name: 'Terminal'},
        {id: 28, name: 'Problems'},
      ]
    },
    {
      id: 29,
      name: 'Application',
      children: [
        {id: 30, name: 'Extensions1'},
        {id: 31, name: 'Application2'},
        {id: 32, name: 'Application3'},
        {id: 33, name: 'Application4'},
        {id: 34, name: 'Application5'},
      ]
    },
    {
      id: 35,
      name: 'Extensions',
      children: [
        {id: 36, name: 'Extensions1'},
        {id: 37, name: 'Extensions2'},
        {id: 38, name: 'Extensions3'},
        {id: 39, name: 'Extensions4'},
        {id: 40, name: 'Extensions5'},
      ]
    },
    {
      id: 41,
      name: 'Security',
      children: [
        {id: 42, name: 'Security1'},
        {id: 43, name: 'Security2'},
        {id: 44, name: 'Security3'},
        {id: 45, name: 'Security4'},
        {id: 46, name: 'Security5'},
      ]
    },
  ];

  workspaceMenuNodes = [
    {
      id: 1,
      name: 'Text Editor',
      children: [
        {id: 2, name: 'Cursor'},
        {id: 3, name: 'Fine'},
        {id: 4, name: 'Font'},
        {id: 5, name: 'Formatting'},
        {id: 6, name: 'Diff Editor'},
        {id: 7, name: 'Minimap'},
        {id: 8, name: 'Suggestions'},
        {id: 9, name: 'Files'},
      ],
    },
    {
      id: 10,
      name: 'Workbench',
      children: [
        {id: 11, name: 'Appearance'},
        {id: 12, name: 'Breadcrumbs'},
        {id: 13, name: 'Editor Management'},
        {id: 14, name: 'Setting Editor'},
        {id: 15, name: 'Zen Mode'},
        {id: 16, name: 'Screencast Mode'},
      ],
    },
    {
      id: 17,
      name: 'Window',
      children: [
        {id: 18, name: 'W1'},
        {id: 19, name: 'W2'},
        {id: 20, name: 'W3'},
        {id: 21, name: 'W4'},
        {id: 22, name: 'W5'},
      ]
    },
    {
      id: 23,
      name: 'Feature',
      children: [
        {id: 24, name: 'Explorer'},
        {id: 25, name: 'Search'},
        {id: 26, name: 'Extension Viewlet'},
        {id: 27, name: 'Terminal'},
        {id: 28, name: 'Problems'},
      ]
    },
    {
      id: 29,
      name: 'Application',
      children: [
        {id: 30, name: 'Extensions1'},
        {id: 31, name: 'Application2'},
        {id: 32, name: 'Application3'},
        {id: 33, name: 'Application4'},
        {id: 34, name: 'Application5'},
      ]
    },
    {
      id: 35,
      name: 'Extensions',
      children: [
        {id: 36, name: 'Extensions1'},
        {id: 37, name: 'Extensions2'},
        {id: 38, name: 'Extensions3'},
        {id: 39, name: 'Extensions4'},
        {id: 40, name: 'Extensions5'},
      ]
    },
    {
      id: 41,
      name: 'Security',
      children: [
        {id: 42, name: 'Security1'},
        {id: 43, name: 'Security2'},
        {id: 44, name: 'Security3'},
        {id: 45, name: 'Security4'},
        {id: 46, name: 'Security5'},
      ]
    },
  ];

  options = {};

  // tslint:disable-next-line:typedef
  selectTab(tab: string){
    this.currentTab = tab;
  }
}
