import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted-data',
  templateUrl: './submitted-data.component.html',
  styleUrls: ['./submitted-data.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmittedDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
