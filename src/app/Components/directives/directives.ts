import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [FormsModule,
    CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {
  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  employees1 = [
  { id: 1, name: 'Rathan Tata', role: 'Manager', salary: 85000, status: 'Active', img: 'Rathan Tata.jpeg' },
  { id: 2, name: 'Sathya Nadella', role: 'Developer', salary: 45000, status: 'Active', img: 'SathyaNadella.jpeg' },
  { id: 3, name: 'subroto bagchi', role: 'Tester', salary: 30000, status: 'Inactive', img: 'subroto bagchi.jpg' },
  { id: 4, name: 'Azim Premji', role: 'HR', salary: 40000, status: 'Active', img: 'AzimPremji.jpg' }
];

// images = ['staffing (2).png', 'staffing (2).png', 'staffing (2).png', 'staffing (2).png'];
}
