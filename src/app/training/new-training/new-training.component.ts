import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css'],
})
export class NewTrainingComponent implements OnInit {
  // exercises$: Observable<Exercise[]>;
  exercises$: Observable<Exercise[]>;
  collection;
  constructor(
    private trainingService: TrainingService,
    private db: Firestore
  ) {}

  ngOnInit(): void {
    // this.collection = collection(this.db, 'availableExercises');
    // this.exercises$ =
    // this.collection
    //   .snapshotChanges()
    //   .pipe(
    //     map((docArray: Array<any>) => {
    //       return docArray.map((doc) => {
    //         return { id: doc.payload.doc.id, ...doc.payload.doc.data() };
    //       });
    //     })
    //   )
    //   .subscribe((result) => {
    //     console.log(result);
    //   });
    // this.collection = collection(this.firestore, 'availableExercises');
    // this.exercises$ = collectionData(this.collection);
    // section not completed properly due to updated npm package
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
