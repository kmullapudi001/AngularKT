import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter();

  increment() {
    this.count++;
    this.countChange.emit(this.count);
  }
  decrement()
  {
    this.count--;
    this.countChange.emit(this.count);
  }
}