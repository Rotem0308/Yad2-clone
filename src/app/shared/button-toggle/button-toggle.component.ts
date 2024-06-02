import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
  providers: [
    {
      //            Read This To Understand ControlValueAccessor !             //

      // When we attach FormControlName directive to any element,it try to access
      // this NG_VALUE_ACCESSOR,and once it find this accessor ,it goes and checks
      // what class to use as a representation of this NG_VALUE_ACCESSOR.
      // in our case , we are saying :  useExisting -> ButtonToggleComponent
      // because this Component has implemented all the neccessery methods that the
      // ControlValueAccessor interface has which is all angular need for a certain
      // component to work as form control.
      // And In Addition,we mention the multi field which says that we can have
      // multiple instances of this component as a FormControl.

      provide: NG_VALUE_ACCESSOR,
      useExisting: ButtonToggleComponent, //using an existing instance of the ButtonToggleComponent class
      multi: true, // can be multiple instances of this component
    },
  ],
})
export class ButtonToggleComponent implements ControlValueAccessor {
  values: string[] = [];
  onChange: any = (value: string) => {};
  indexToFocus: number = 0;
  //ControlValueAccessor

  writeValue(values: string[]): void {
    if (values == null) return;
    this.values = values;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  setValue(value: string, index: number) {
    this.onChange(value);
    this.indexToFocus = index;
  }
}
