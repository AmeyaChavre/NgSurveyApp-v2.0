import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {

  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/educationSurvey.json', name: 'Education Survey' },
      { id: 'data/demographicSurvey.json', name: 'Demographic Survey' },
      { id: 'data/productSurvey.json', name: 'Product Survey' },
    ];
  }

}
