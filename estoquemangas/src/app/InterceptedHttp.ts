import { Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend } from "@angular/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs/Rx"

// operators
import "rxjs/add/operator/catch"
import "rxjs/add/observable/throw"
import "rxjs/add/operator/map"
import { StateService } from "@uirouter/core";

@Injectable()
export class HttpInterceptor extends Http {

    private error_404 = 404;
    private erro_500 = 500;

    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        private state: StateService,
        public http: Http,
    ) {
        super(backend, options)
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options)
            .catch(this.handleError)
    }

    public handleError = (error: Response) => {


        if (error.status == this.error_404) {
            this.state.go("erro404");
        } else if(error.status == this.erro_500 ) {
            return this.state.go("erro500")
        }


        return Observable.throw(error)
    }
}
