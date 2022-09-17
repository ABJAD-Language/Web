import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {LexicalTokenModel} from "./lexical-token.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class LexicalAnalyzerService {

  lexerServiceEndpoint = environment.lexerServiceEndpoint;

  constructor(private http: HttpClient) {
  }

  analyzeCode(code: string) : Observable<LexicalTokenModel[]> {
    return this.http.post<LexicalTokenModel[]>(this.lexerServiceEndpoint, {code: code});
  }
}
