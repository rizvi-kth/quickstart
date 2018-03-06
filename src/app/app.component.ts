import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
            <div class="panel panel-primary">
              
                <q-place></q-place>
              
            </div>`,
})
export class AppComponent  { name = 'StandInQ'; }
