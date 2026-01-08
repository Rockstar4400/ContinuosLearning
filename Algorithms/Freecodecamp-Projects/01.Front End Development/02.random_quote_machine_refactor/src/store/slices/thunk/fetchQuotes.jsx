import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotesData = createAsyncThunk (
    'quotes/fetch',
async () => {
    const response = await fetch(
    "https://gist.githubusercontent.com/Rockstar4400/7678c57" + 
    "b0cebc5f740973ecb7a2691d0/raw/281b63ab43589d538a75cae2d9f9ab"+
    "35e632e789/quotes.json");
    const quotes = await response.json();
    return quotes;
}
)