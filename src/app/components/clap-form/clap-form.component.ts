import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-clap-form',
  templateUrl: 'clap-form.component.html',
  styleUrls: ['clap-form.component.css'],
})
export class ClapformComponent {
  initialText: string;
  clapText: string;
  clapEmoji: string;

  constructor() {
    this.initialText = 'Hello, how are you doing today?';
    this.clapEmoji = '👏';
    this.clapText = this.clappify(this.initialText);
  }

  onKey(text: string): void {
    this.clapText = this.clappify(text);
  }

  protected clappify(text: string): string {
    // send back empty string for empty text
    if (text.length === 0) { return ''; }

    // remove all commas and periods
    let clapText = text.replace(/[,.]/g, '');

    // insert space before question marks and exclamation marks
    clapText = clapText.replace(/\?/g, ' ?');
    clapText = clapText.replace(/\!/g, ' !');

    // replace white space with clap emoji
    clapText = this.clapEmoji + clapText.replace(/\s/g, this.clapEmoji) + this.clapEmoji;

    return clapText;
  }

  protected copyText(event: Event): void {
    event.preventDefault();

    this.htmlToClipboard(this.clapText);
  }

  protected htmlToClipboard(html: string, el?: HTMLDivElement): void {
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
}
