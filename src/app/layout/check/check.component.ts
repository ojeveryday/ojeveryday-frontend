import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../participant.service';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-check',
    templateUrl: './check.component.html',
    styleUrls: ['./check.component.scss'],
    animations: [routerTransition()]
})
export class CheckComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    public participants: Array<any> = [];
    constructor(private participantService: ParticipantService) {
        // this.sliders.push(
        //     {
        //         imagePath: 'assets/images/slider1.jpg',
        //         label: 'First slide label',
        //         text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider2.jpg',
        //         label: 'Second slide label',
        //         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        //     },
        //     {
        //         imagePath: 'assets/images/slider3.jpg',
        //         label: 'Third slide label',
        //         text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        //     }
        // );
        // this.alerts.push(
        //     {
        //         id: 1,
        //         type: 'success',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     },
        //     {
        //         id: 2,
        //         type: 'warning',
        //         message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        //         Voluptates est animi quibusdam praesentium quam, et perspiciatis,
        //         consectetur velit culpa molestias dignissimos
        //         voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        //     }
        // );
    }

    ngOnInit() {
        this.participantService.getParticipantsByDate().subscribe((data: any[]) => {
            console.log(data);
            this.participants = data;
        })
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }

    lastUpdateTime  = "2020-04-14 10:35:32";

    problemInfos = [{
        "problemID": 40,
        "indexNum": "445",
        "name": "两数相加 II",
        "questionTitleSlug": "add-two-numbers-ii",
        "date": "2020-04-14",
        "cnUrl": "https://leetcode-cn.com/problems/add-two-numbers-ii",
        "enUrl": "https://leetcode.com/problems/add-two-numbers-ii"
    }];
    summaryInfo = {
        "date": "2020-04-14",
        "checkedCount": 49,
        "totalUserCount": 450,
        "checkRatio": "10.9%",
        "updateTime": "2020-04-14 09:44:47"
    };

}
