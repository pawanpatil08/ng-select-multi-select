import {Component, NgModule, ViewChild} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'my-app',
    template: `
       
        <label>Multiselect with custom bindings</label>
        <ng-select [items]="cities2"
                   bindLabel="name"
                   bindValue="name"
                   [multiple]="true"
                   placeholder="Select cities"
                   [(ngModel)]="selectedCityIds">
        </ng-select>
        <p>
            Selected cities: {{selectedCityIds}}
        </p>
        <hr />
        
  <ng-select 
  [items]="sensorTypes"
  bindLabel="label"    
  [multiple]="true"
  placeholder="Select"
  [(ngModel)]="selectedAttributes" (change)="Test()">
</ng-select>
     
`
})
export class AppComponent {

    Test(){
      console.log("Tes")
    }

    cities2 = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pavilnys', disabled: true},
        {id: 4, name: 'Pabradė'},
        {id: 5, name: 'Klaipėda'}
    ];

  sensorTypes = [
  { label : "Power", id : "P"},
  { label : "Current", id : "C"},
  { label : "Voltage", id : "V"}
]
selectedAttributes = [
  {label : "Power", id : "C"},
  {label : "Voltage", id : "V"}
];


    selectedAccount = 'Adam'
    

    selectedCity: any;
    selectedCityIds='Pabradė';
    selectedCityName = 'Pabradė';
    selectedCityId: number;
    selectedUserIds: number[];
    
    constructor() {
      //  this.create10kCities();
    }
    
  
    
    
}
