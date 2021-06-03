import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendvalue',
  templateUrl: './sendvalue.component.html',
  styleUrls: ['./sendvalue.component.css']
})
export class SendvalueComponent implements OnInit {

  constructor() { }
  public username = 'Shaik Ameed';

  ngOnInit(): void {
  }

}
