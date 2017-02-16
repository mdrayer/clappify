import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-clap-form',
  templateUrl: 'clap-form.component.html',
  styleUrls: ['clap-form.component.css'],
})
export class ClapformComponent {
  inputText: string;
  clapText: string;
  clapEmoji: string;
  uppercase: boolean;

  constructor() {
    this.inputText = 'Hello, how are you doing today?';
    this.clapEmoji = '👏';
    this.uppercase = false;
    this.clappify();
  }

  onKey(): void {
    this.clappify();
  }

  protected clappify(): void {
    // send back empty string for empty text
    if (this.inputText.length === 0) { this.clapText = ''; }

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

    this.clapText =  clapText;
  }

  protected copyText(event: Event): void {
    event.preventDefault();

    this.htmlToClipboard(this.clapText);
  }

  protected htmlToClipboard(html: string, el?: HTMLDivElement): void {
    window.getSelection().removeAllRanges();
    let tmpEl: HTMLDivElement;
    if (typeof el !== 'undefined') {
      tmpEl = el;
    } else {
      tmpEl = document.createElement('div');

      tmpEl.style.opacity = '0';
      tmpEl.style.position = 'absolute';
      tmpEl.style.pointerEvents = 'none';
      tmpEl.style.zIndex = '-1';
    }

    tmpEl.innerHTML = html;

    document.body.appendChild(tmpEl);

    const range = document.createRange();
    range.selectNode(tmpEl);
    window.getSelection().addRange(range);

    document.execCommand('copy');

    document.body.removeChild(tmpEl);
  }

  protected uppercaseToggled(): void {
    this.clappify();
  }
}
