import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterpretationResult} from "./interpretation-result";

@Injectable()
export class InterpreterService {

  endpoint = environment.interpreterServiceEndpoint

  constructor(private http: HttpClient) {
  }

  interpretBindings(bindings: any[]): Observable<InterpretationResult> {
    return this.http.post<InterpretationResult>(this.endpoint, { bindings: bindings })
  }
}
