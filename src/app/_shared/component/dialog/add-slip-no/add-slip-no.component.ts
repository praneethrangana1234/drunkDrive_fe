import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-slip-no',
  templateUrl: './add-slip-no.component.html',
  styleUrls: ['./add-slip-no.component.scss']
})
export class AddSlipNoComponent implements OnInit {

  public confirmMessage: string;

  constructor(public dialogRef: MatDialogRef<AddSlipNoComponent>) { }

  ngOnInit(): void {
  }

}
