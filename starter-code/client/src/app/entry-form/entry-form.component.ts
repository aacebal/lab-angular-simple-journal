import { Component, OnInit } from '@angular/core';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [JournalService]
})
export class EntryFormComponent implements OnInit {
  jsonForm: Object;

  constructor( private JournalService: JournalService) { }

  ngOnInit() {
  }

  onSubmit(myForm) {
    const newEntry = {
      title: myForm.title,
      content: myForm.content
    }
    this.JournalService.createEntry(newEntry).subscribe();
  }

}
