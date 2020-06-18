import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() totalItems:number;
  @Input() pageSize:number;
  @Output() onPageSelected:EventEmitter<number>;
  activePage:number=1;


  getPages(){
    return Math.ceil(this.totalItems/this.pageSize);
  }

  constructor() { 
    this.onPageSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  pageSelected(newpage:number){
    if(newpage >=1 || newpage <= this.getPages()){
      this.activePage = newpage;
      this.onPageSelected.emit(this.activePage);
    }
  }

}
