import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LexicalTokenModel} from "../lexical-analysis/lexical-token.model";
import {Observable} from "rxjs";

@Injectable()
export class ParserService {
  parserServiceEndpoint = environment.parserServiceEndpoint;

  constructor(private http: HttpClient) {
  }

  parseTokens(tokens: LexicalTokenModel[]): Observable<any[]> {
    return this.http.post<any[]>(this.parserServiceEndpoint, {tokens: tokens});
  }
}
