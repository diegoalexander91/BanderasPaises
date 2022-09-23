import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  termino: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  ngOnInit() {

    this.debouncer
      .pipe(debounceTime(500))
      .subscribe((valor) => {
        this.onDebounce.emit(valor)
      });
  }

  busqueda() {
    this.onEnter.emit(this.termino);
  }
  teclapresionada() {
    this.debouncer.next(this.termino);
  }
}
