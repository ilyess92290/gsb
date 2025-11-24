import { Routes } from '@angular/router';
import {Medecin} from './types/medecin.interface';
import { Doctor } from './types/doctor.interface';
import {DoctorsPage} from './pages/doctors-page/doctors-page'


export const routes: Routes = [
  { path: '', redirectTo: '/medecins', pathMatch: 'full' },
  { path: 'medecins', component: DoctorsPage},
  { path: '**', redirectTo: '/medecins' },
];
