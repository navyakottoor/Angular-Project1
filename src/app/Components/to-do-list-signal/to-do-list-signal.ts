import { Component, computed, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list-signal',
  imports: [FormsModule],
  templateUrl: './to-do-list-signal.html',
  styleUrl: './to-do-list-signal.css'
})
export class ToDoListSignal {
    // todo = signal<{id: number, title: String, done: boolean}[]>([]);
    
    // isCompletedFlag : boolean = false;

    // completedToDo: Signal<boolean> = computed(() => this.isCompletedFlag);
    // remainingToDo: Signal<boolean> = computed(() => this.isCompletedFlag);

    // Signal array for todos
  todos = signal<{ id: number; title: string; done: boolean }[]>([
    { id: 1, title: 'Learn Signals', done: true },
    { id: 2, title: 'Build Todo App', done: true }
  ]);

  newItem = {
    id: '',
    title: '',
    done: ''
  };

  len1: number = 0;
  len2: number = 0;

  // ✅ make the flag itself a signal
  isCompletedFlag = signal(false);

  // Derived (computed) signals
  completedToDo: Signal<number> = computed(() =>
    this.todos().filter( (todo) => {
      return todo.done === true
    }).length
  );

  remainingToDo: Signal<number> = computed(() =>
    this.todos().filter( (todo) => {
      return todo.done === false
    }).length
  );

  // ✅ toggle the flag
  toggleCompletedFlag() {
    this.len1 = this.todos().filter( (todo) => {
      return todo.done === true
    }).length; 
    
    this.len2 = this.todos().filter( (todo) => {
      todo.done
    }).length;
    if(this.len1 === this.len2) {
    this.isCompletedFlag.update(flag => !flag);
    }
    
  }

  addToDoItem(id: any, title: any, done: any) {
    this.todos.update(list => [
      ...list,
      {
        id: Number(id),              
        title: String(title),        
        done: done === true || done === 'true' 
      }
    ]);
  }
  
}
