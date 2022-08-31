import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseRequestService {
  status = { 'success': 'S001' };
  duplicate = { 'duplicate': 'E001' };

  constructor(protected httpClient: HttpClient) {
  }
  public fnpost(request: string, data: any) {
    return this.httpClient.post<any[]>(APIConfig.api.apiConfing.baseURL + request, data);
  }
  fnGetAPI(url: any) {
    return this.httpClient.get(url);
  }
  loadAPIConfig() {
    return this.httpClient.get('assets/json/apiConfig.json')
      .toPromise()
      .then(data => {
        APIConfig.api = data;
      });
  }
  async loadAppConfig() {
    const data_1 = await this.httpClient.get('assets/json/globalConfig.json')
      .toPromise();
    globalConfig.data = data_1;
  }
}
export const APIConfig: any = {
  api: ''
};
export const IPConfig: any = {
  ipData: ''
};
export const globalConfig: any = {
  data: '',
};
