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
    this.jsonForm = JSON.stringify({
      title: myForm.title,
      content: myForm.content
    });
    console.log(this.jsonForm);
    this.JournalService.createEntry(this.jsonForm);
  }

}
