import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  trainings$: Observable<Exercise[]>;
  collection;
  constructor(
    private trainingService: TrainingService,
    private firestore: Firestore
  ) {
    this.collection = collection(this.firestore, 'availableExercises');
    this.trainings$ = collectionData(this.collection);
  }

  ngOnInit(): void {}

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
