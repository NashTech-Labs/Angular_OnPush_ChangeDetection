import { Component } from '@angular/core';

@Component({
  selector: 'app-card-default-change-detect',
  templateUrl: './card-default-change-detect.component.html',
  styleUrls: ['./card-default-change-detect.component.scss']
})
export class CardDefaultChangeDetectComponent {

  title="OnPush Card";
  descriptopn = "Value On click button and check console";

  changeText(){
    this.title = "Hii";
  }


  getText(){
    console.log(" Default detect changes")
    return "Default Change Detection"
  }

}
