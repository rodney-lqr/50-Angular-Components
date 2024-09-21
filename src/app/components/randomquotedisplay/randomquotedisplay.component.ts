import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',

  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "Ang pag-abot sa iyong mga pangarap ang pinakamalaking abentura ng buhay",
    "“Ang mga problema ay hindi hadlang sa pag-abot ng mga pangarap, ito ay mga gabay lamang.”",
    "Ako lang ang makakapagpabago sa buhay ko. Walang ibang makakagawa nito sa akin.",
    "Ang tunay na sikreto sa tagumpay ay pagsisikap at patuloy na pagbangon sa bawat pagkakamali."
  ];
  selectedQuote: string | null = null;

  showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.selectedQuote = this.quotes[randomIndex];
  }
}
