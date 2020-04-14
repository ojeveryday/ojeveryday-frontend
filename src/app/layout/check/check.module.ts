import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../../shared';
import { ChatComponent, NotificationComponent, TimelineComponent } from './components';
import { CheckRoutingModule } from './check-routing.module';
import { CheckComponent } from './check.component';

@NgModule({
    imports: [CommonModule, NgbCarouselModule, NgbAlertModule, CheckRoutingModule, StatModule],
    declarations: [CheckComponent, TimelineComponent, NotificationComponent, ChatComponent]
})

export class CheckModule {
}
