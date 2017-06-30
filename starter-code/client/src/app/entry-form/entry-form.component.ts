import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [JournalService]
})
export class EntryFormComponent implements OnInit {

  constructor( private JournalService: JournalService) { }

  ngOnInit() {
  }

  submitForm(myForm) {

    this.JournalService.createEntry();
  }

}
