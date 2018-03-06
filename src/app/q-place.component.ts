import { Component } from '@angular/core';

@Component({
  selector: 'q-place',
  template: `<div class="panel-heading"> 
                {{name}}
             </div>`,
})
export class QplaceComponent  { name = 'Appointments list of the day'; }
