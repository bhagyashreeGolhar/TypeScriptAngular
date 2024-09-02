import { Component } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { FormGroup, Validator, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  title = 'Bhagyashree';

//From Creation Using Normal ngForm
    user:{name:string,email:string}=
    {
      name: '',
      email: '',
    };

    submitForm(form:NgForm)
    {
      if(form.valid)
        {
          console.log(form.value ,this.user)
        }
    }
    emailvalidation():boolean
    {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      return emailRegex.test(this.user.email)
    }




// Form Creation Using Reactive Form
    userForm: FormGroup
    constructor(public formbuilder:FormBuilder)
    {
      this.userForm=this.formbuilder.group({
         name:['',Validators.required],
         email:['',
                [Validators.required,
                 Validators.pattern(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
                ]
              ],
        address:this.formbuilder.group
        ({
          street:['',Validators.required],
          city:['',Validators.required]
        }),
        phoneNumbers: this.formbuilder.array
        ([ this.formbuilder.control('',
              [
                Validators.required,
                Validators.pattern(/^\d{10}$/)
              ]
            )
        ])
              
      })
    }

    getPhoneNumbers()
    {
      return this.userForm.get('phoneNumbers') as FormArray;
    }
    addPhoneNumber()
    {
      this.phoneNumbers.push(
        this.formbuilder.control('',
        [
          Validators.required,
          Validators.pattern(/^\d{10}$/)
        ])
      )
    }
    removePhoneNumber(index:number)  
    {
      this.phoneNumbers.removeAt(index)
    }
    formsubmit()
    {
      if(this.userForm.valid)
        {
          console.log(this.userForm.value)
        }
        else{console.log("Form Validation Failed")}
    }
}
