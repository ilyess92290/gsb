import { Component } from '@angular/core';
import {Doctor} from './../../../types/doctor.interface';

@Component({
  selector: 'app-doctor-card',
  imports: [],
  templateUrl: './doctor-card.html',
  styleUrl: './doctor-card.css',
})
export class DoctorCard {
  doctor: Doctor;
  constructor(doctor: Doctor) {
        this.doctor = doctor;
    }
}
