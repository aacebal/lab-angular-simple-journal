import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalService]
})

export class SingleEntryComponent implements OnInit {
  entry: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private JournalService: JournalService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntry(params['id']);
  });
}


  getEntry(id) {
    this.JournalService.getEntry(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
}

}
