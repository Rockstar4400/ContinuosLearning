import { Injectable } from '@angular/core';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { mergeMap, map, catchError } from '../../../../node_modules/rxjs/operators';

import { NewsService } from '../../services/news.service';

import { NewsInfo } from '../../models/news';

// ngrx store
import { LoadNewsSection } from '../actions';
import * as fromActions from '../actions';


@Injectable()
export class NewsEffects {

    constructor(
        private actions$: Actions,
        private newsService: NewsService,
    ) { }

    loadNews$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.NewsActionTypes.LOAD_SECTION_NEWS), // watch action
        mergeMap((action: LoadNewsSection) =>
            // service call to get the section news
            this.newsService.getSectionNews(action.payload).pipe(
                map((news: NewsInfo) => (new fromActions.LoadNewsSectionSuccess(news.results))),
                catchError(error => of(new fromActions.LoadNewsSectionFailure(error)))
                )
            )
        )
    )
}