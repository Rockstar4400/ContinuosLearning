import * as sections from './sections.reducer';
import * as news from './news.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};
/**
 * App State Interface
 */
export interface AppState {
    sections: sections.SectionsState,
    news: news.NewsState
}

/**
 * Initial Application State
 */
export const initialState: AppState = {
    sections: sections.initialState,
    news: news.initialState
}

/**
 * App Reducer
 */
export const reducers: ActionReducerMap<AppState, any> = {
    sections: sections.reducer,
    news: news.reducer
}



