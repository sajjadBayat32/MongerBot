import { Component, OnInit } from '@angular/core';
import {StrategyService} from "../../_services/strategy.service";

@Component({
  selector: 'app-strategy-list',
  templateUrl: './strategy-list.component.html',
  styleUrls: ['./strategy-list.component.css']
})
export class StrategyListComponent implements OnInit {
  // strategies = [
  //   {
  //     "id": 1,
  //     "name": "strategy test",
  //     "description": "desc strategy test",
  //     "minimumBuySignals": 1,
  //     "minimumSellSignals": 1
  //   },
  //   {
  //     "id": 1,
  //     "name": "strategy test",
  //     "description": "desc strategy test",
  //     "minimumBuySignals": 1,
  //     "minimumSellSignals": 1
  //   }
  // ];

  strategies = [];

  constructor(public service: StrategyService) { }

  ngOnInit() {
    // this.getStrategies();
  }

  getStrategies() {
    this.service.getStrategies().subscribe(
      data => {
        this.strategies = data;
      },
      error => {

      }
    )
  }

}
