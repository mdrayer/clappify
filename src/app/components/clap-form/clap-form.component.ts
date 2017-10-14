import { Component } from '@angular/core';

import { escapeHtml } from '../../util/escapeHtml';

@Component({
  moduleId: module.id,
  selector: 'app-clap-form',
  templateUrl: 'clap-form.component.html',
  styleUrls: ['clap-form.component.css'],
})
export class ClapformComponent {
  inputText: string;
  uppercase: boolean;

  constructor() {
    this.inputText = 'Hello, how are you doing today?';
    this.uppercase = false;
  }

  copyText(event: Event, text: string): void {
    event.preventDefault();

    this.htmlToClipboard(text);
  }

  protected htmlToClipboard(html: string, el?: HTMLDivElement): void {
    window.getSelection().removeAllRanges();
    // escape the string for safety concerns
    html = escapeHtml(html);

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
