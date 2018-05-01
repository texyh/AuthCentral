import { Component, Input, EventEmitter  } from '@angular/core';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent {
    visibleStatus: boolean;

    @Input()
    title = '[Title Goes Here]';

    show(): void {
        this.visibleStatus = true;
    }

    close(): void {
        this.visibleStatus = false;
    }
}