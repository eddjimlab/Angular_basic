import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, delay, tap} from 'rxjs/operators';

export interface Todo {
  completed: boolean
  title: string
  id?: number
}

@Injectable({providedIn: 'root'})
export class TodosService {
  constructor(private http: HttpClient) {
  }

  addTodo(todo: Todo): Observable<Todo> {
    // const headers = new HttpHeaders({
    //   'MyCustomHeaders': Math.random().toString()
    // });

    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo, {
      headers: new HttpHeaders({
        'MyCustomHeaders': Math.random().toString()
      })
    });
  }

  fetchTodos(): Observable<Todo[]> {
    let params = new HttpParams();
    params = params.append('_limit', '2');
    params = params.append('custom', 'anything');
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
      // params: new HttpParams().set('_limit', '4')
      params
    })
      .pipe(
        delay(500),
        catchError(err => {
          console.log('Error', err.message);
          return throwError(err);
        }));
  }

  removeTodo(id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      observe: 'events'
    }).pipe(
      tap(event => {
        if (event.type === HttpEventType.Sent) {
          console.log('Sent', event);
        }
        if (event.type === HttpEventType.Response) {
          console.log('Response', event);
        }
      })
    );

  }

  completeTodo(id: number): Observable<Todo> {
    return this.http.put<Todo>(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      completed: true
    });
  }
}
