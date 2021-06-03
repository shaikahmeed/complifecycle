import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-displayvalue',
  templateUrl: './displayvalue.component.html',
  styleUrls: ['./displayvalue.component.css']
})
export class DisplayvalueComponent implements OnInit,OnChanges {

  @Input() public username;
  public prevValue;
  public currValue;
  public msg;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges()');
    for(var property in changes){
      let change = changes[property];
      this.currValue = change.currentValue;
      this.prevValue = change.previousValue;
      if(this.currValue == this.prevValue){
        this.msg = 'No Change Detected..!';
      }
      else{
        this.msg = 'Change Detected..!'
      }

    }
  }
  

  ngOnInit(): void {
    console.log('ngOnInit()');
  }

}
