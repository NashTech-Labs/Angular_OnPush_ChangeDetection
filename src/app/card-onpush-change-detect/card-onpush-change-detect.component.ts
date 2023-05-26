import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-onpush-change-detect',
  templateUrl: './card-onpush-change-detect.component.html',
  styleUrls: ['./card-onpush-change-detect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardOnpushChangeDetectComponent  {

  count =0
  title="OnPush Card";
  descriptopn = "Title value change check console";



  changeText(){
    this.title = "Hii";
  }


  getText(){
    console.log(" On Push detect changes")
    return "On Push Change Detection "
  }

}
