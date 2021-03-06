import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  getStorageProperty(name): Object {
    if (localStorage.getItem(name) != null) {
      const value = localStorage.getItem(name);

      if (value[0] === '{' || value[0] === '[') {
          return JSON.parse(value);
      }

      return value;
    }
    return null;
  }

  setStorageProperty(name, value): void {
    if (value === null) {
        localStorage.removeItem(name);
    } else {
        localStorage.setItem(name, typeof (value) === 'string' ? value : JSON.stringify(value));
    }
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}
