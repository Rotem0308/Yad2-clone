import { FormGroup } from '@angular/forms';

export function removeControlsWithEmptyString(form: FormGroup<any>) {
  if (form == null) return;
  const formValues = { ...form.value };
  for (const key in formValues) {
    if (typeof formValues[key] == 'string' && formValues[key] == '') {
      console.log(key, formValues[key]);
      form.removeControl(key, { emitEvent: false });
    }
  }
}

export function convertStringToNumber(form: FormGroup<any>) {
  if (form == null) return;
  const formValues = { ...form.value };
  for (const key in formValues) {
    if (typeof formValues[key] == 'string' && formValues[key] == 'ללא') {
      form.get(key)?.setValue(0);
    }
  }
}
