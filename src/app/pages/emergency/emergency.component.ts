import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {
  showConfirmationModal: boolean = false;
  code: number;

  constructor() { }

  ngOnInit(): void {
  }

  public onButtonClicked() {
    if(!this.showConfirmationModal) {
      this.code = Math.floor(Math.random() * (4 - 1) + 1);
      this.showConfirmationModal = true;
      console.log('ELEMENT CLICK', this.showConfirmationModal);
    }
  }

  public checkCode(selectedCode: number) {
    if(this.code === selectedCode) {
      console.log(this.code);
      this.closeConfirmationModal();
    }
  }

  public closeConfirmationModal() {
    this.showConfirmationModal = false;
  }

}
