declare var MarvinJSUtil: any; 

import { Component } from '@angular/core';
// import * as MarvinJS from "../assets/js/marvinjslauncher";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    MarvinJS:any;
    constructor() {
console.log("MarvinUtil " + JSON.stringify(MarvinJSUtil));
console.log(' MarvinJSUtil.getEditor("#sketch") ' +  MarvinJSUtil.getEditor("#sketch"));
this.MarvinJS =  MarvinJSUtil.getEditor("#sketch").then(function(krishna) {
    console.log("krishna" + krishna);
})

}

    
}