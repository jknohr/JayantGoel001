import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface QuoteData {
    quote: string;
    author: string;
}

declare var data: {
    Quote: QuoteData[];
};

@Component({
    selector: 'app-quote',
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule]
})
export class QuoteComponent implements OnInit {
    public quoteData: QuoteData = this.getRandomValue(data['Quote']);

    constructor(private changeDetectorRef: ChangeDetectorRef) {
        changeDetectorRef.detach();
    }

    private getRandomValue(quotes: QuoteData[]): QuoteData {
        return Array.isArray(quotes) ? quotes[Math.floor(Math.random() * quotes.length)] : quotes;
    }

    ngOnInit(): void {
        this.changeDetectorRef.detectChanges();
    }
}