import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {

  @Input() activeTab;
  paymentForm: FormGroup;

  ngOnInit() {
    console.log(this.activeTab.name)
  }

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.paymentForm.valueChanges.subscribe(val => {
      console.log(val)
      console.log(this.paymentForm);
    })

    this.paymentForm.controls.cardno.valueChanges.subscribe(cardval => {
      if (cardval) {
        if (cardval.length <= 19) {
          let cardno = cardval.split('-').join('')
          let dashedNo = cardno > 0 ? cardno.match(new RegExp('.{1,4}', 'g')).join('-') : cardno;
          this.paymentForm.get('cardno').patchValue(dashedNo, { emitEvent: false });
        }
        else {
          
          this.paymentForm.get('cardno').patchValue(cardval.substring(0,19) , { emitEvent: false });
        }
      }
    })
  }

  createForm() {
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required, this.restrictInputLength(10)]],
      cardno: ['',[Validators.required, this.restrictInputLength(19)]],
      cvv:  ['',[Validators.required, this.restrictInputLength(3)]],
      date: ['', Validators.required]
    });

  }


  onClickSubmit() {

  }

  restrictInputLength(inputLen): ValidatorFn {
    return (control: AbstractControl): any => {
      let val = control.value ? control.value.toString() : '';
      if (val && val.length > inputLen) {
        return {
          exceededLimit: {
            valid: false
          }
        }
      }
      return null;
    }
  }

}
