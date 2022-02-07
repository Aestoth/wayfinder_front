import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { iLayout } from 'src/app/interfaces/layout';
import { iPois } from 'src/app/interfaces/pois';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public ionicForm!: FormGroup;
  public isSubmitted: boolean = false;
  public from!: string
  public to!: string
  public layout: iLayout[] = []

  constructor(public formbuilder: FormBuilder, private _apiService: ApiService) {}

  ngOnInit(): void {
    this.ionicForm = this.formbuilder.group({
      from: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      to: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    });

    this._apiService.getPois().subscribe((response) => {
      this.layout = response
      console.log(this.layout);
      
    })
  }

  submitForm() {
    let formData = new FormData();
    formData.append('from', this.ionicForm.get('from')!.value);
    formData.append('to', this.ionicForm.get('to')!.value);
    this._apiService.showPath()
  }

}
