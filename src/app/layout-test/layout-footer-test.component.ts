import { Component } from '@angular/core';

@Component({
  selector: 'nga-layout-footer-test',
  template: `
    <nga-layout>
      <nga-layout-footer fixed>
        &copy; Akveo 2017
      </nga-layout-footer>
    </nga-layout>
`,
})
export class NgaLayoutFooterTestComponent {
}