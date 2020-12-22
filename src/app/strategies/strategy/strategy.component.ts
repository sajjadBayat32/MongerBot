import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  @Input() strategy: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
