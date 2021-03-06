import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DragdropService {
  constructor(private http: HttpClient) {}

  addFiles(files: File) {
    var arr = [];
    var formData = new FormData();
    arr.push(files);

    arr[0].forEach((item, i) => {
      formData.append("files", arr[0][i]);
    });

    return this.http
      .post("https://vshare-backend.herokuapp.com/api/create-user", formData, {
        reportProgress: true,
        observe: "events"
      })
      .pipe(catchError(this.errorMgmt));
  }

  getUserFiles(): Observable<any> {
    return this.http.get("https://vshare-backend.herokuapp.com/api/");
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
