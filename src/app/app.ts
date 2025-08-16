import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Categories } from './Components/categories/categories';
import { Footer } from './Components/footer/footer';
import { Body } from './Components/body/body';
import { Carousel } from './Components/carousel/carousel';
import { Navbar } from './Components/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    Navbar,
    Categories,
    Footer,
    Body,
    Carousel
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})     
export class App {
  protected readonly title = signal('project1');
}
