import { Component } from '@angular/core';

@Component({
    selector: 'main',
    template: '<h1>I feel like: {{ sigh }} </h1>'
})
export class AppComponent {
    sigh = 'Meh..'
}