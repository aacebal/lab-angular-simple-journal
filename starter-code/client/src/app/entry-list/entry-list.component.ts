import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalService]
})
export class EntryListComponent implements OnInit {
  entries;

  constructor( private entry: JournalService ) { }

  ngOnInit() {
    this.entry.getEntries()
      .subscribe((entries) => {
        this.entries = entries;
      })
  }

}
