import { Component } from "@angular/core";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";
@Component({
    selector: "main",
    template: `<form [formGroup]="profileForm">
    Profile Form
                <div>
                <label for="first-name-input"> First Name: </label>
                <input type="text" id="first-name-input" formControlName="firstNameInput">
                Value: {{profileForm.controls['firstNameInput'].value}}
                </div>
                <div>
                <label for="last-name-input"> Last Name: </label>
                <input type="text" id="last-name-input" formControlName="lastNameInput">
                Value: {{profileForm.controls['lastNameInput'].value}}
                </div>
            <div formArrayName="addressGroups">
                <div *ngFor="let addressGroup of profileForm.controls['addressGroups'].controls"
                [formGroup]="addressGroup">
                 Address
                    <div>
                    <label for="street-name-input"> Street: </label>
                    <input type="text" id="street-name-input" formControlName="streetInput">
                    </div>
                    <div>
                    <label for="city-name-input"> city: </label>
                    <input type="text" id="city-name-input" formControlName="cityInput">
                    </div>
                     <div>
                    <label for="state-name-input"> state: </label>
                    <input type="text" id="state-name-input" formControlName="stateInput">
                    </div>
                    <div>
                    <label for="zipcode-name-input"> Zipcode: </label>
                    <input type="text" id="zipcode-name-input" formControlName="zipCodeInput">
                    </div>
                </div>
                </div>
                <button type="button" (click)="addAddressGroup()"> Add Address </button>
                <button type="button" (click)="saveProfileForm()"> Save Profile </button>
                 </form>`,
})
export class AppComponent {
    // tslint:disable-next-line:no-trailing-whitespace

    public profileForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.profileForm = this.fb.group({
            firstNameInput: [""],
            lastNameInput: [""],
            addressGroups: this.fb.array([
                this.fb.group({
                    streetInput: [""],
                    cityInput: [""],
                    stateInput: [""],
                    zipCodeInput: [""],
                })]),

        });
    }

    public addAddressGroup() {
        const fa = this.profileForm.controls["addressGroups"] as FormArray;
        fa.push(this.newAddressGroup());
    }
    public saveProfileForm() {
        console.log(this.profileForm.value);
    }

    private newAddressGroup() {
        return new FormGroup({
            streetInput: new FormControl(""),
            cityInput: new FormControl(""),
            stateInput: new FormControl(""),
            zipCodeInput: new FormControl(""),
        });
    }

}
