import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inside-test-module-component',
  template: `
  <div class="form-group">
  <button type="submit" class="form-control btn btn-primary rounded submit px-3"
    [disabled]=!value.valid>Sign In</button>
  </div>`,
  styleUrls: ['./inside-test-module-component.component.css']
})
export class InsideTestModuleComponentComponent {
  @Input() value: any;

}
