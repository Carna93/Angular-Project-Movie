import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.css']
})
export class SortingComponent implements OnInit {
  @Output() changeSorti = new EventEmitter();
  sort: string = 'rating';
  sortDirection: string = 'desc';

  constructor() { }

  ngOnInit(): void {
  }

  changeSort() {
    this.changeSorti.emit({ "sort": this.sort });
  }

  changeDirection() {
    this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    this.changeSorti.emit({ "sortDirection": this.sortDirection });
  }

}
