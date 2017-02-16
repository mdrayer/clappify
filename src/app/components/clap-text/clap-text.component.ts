import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-clap-text',
  templateUrl: 'clap-text.component.html',
})
export class ClapTextComponent {

  clapEmoji: string;
  clapText: string;

  private _inputText: string;

  @Input()
  set inputText(text: string) {
    this._inputText = text;
    this.clappify();
  }

  get inputText(): string {
    return this._inputText;
  }

  private _uppercase: boolean;

  @Input()
  set uppercase(bool: boolean) {
    this._uppercase = bool;
    this.clappify();
  }

  get uppercase(): boolean {
    return this._uppercase;
  }

  constructor() {
    this.clapEmoji = '👏';
    this.clapText = '';
  }

  protected clappify(): void {
    // send back empty string for empty text
    if (this.inputText.length === 0) {
      this.clapText = '';
      return;
    }

    let clapText = this.inputText;

    if (this.uppercase) {
      clapText = clapText.toUpperCase();
    }

    // remove all commas and periods
    clapText = clapText.replace(/[,.]/g, '');

    // insert space before question marks and exclamation marks
    clapText = clapText.replace(/\?/g, ' ?');
    clapText = clapText.replace(/\!/g, ' !');

    // replace white space with clap emoji
    clapText = this.clapEmoji + clapText.replace(/\s/g, this.clapEmoji) + this.clapEmoji;

    this.clapText = clapText;
  }
}
