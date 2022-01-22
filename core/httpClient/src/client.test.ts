import { HttpClient } from './index';

type RandomApp = {
  id: number;
  uid: string;
  app_name: string;
  app_version: string;
  app_author: string;
  app_semantic_version: string;
  app_major_version: string;
  app_minor_version: string;
  app_patch_version: string;
};

describe('Test HttpClient class', () => {
  it('should have correct default configuration', async () => {
    const baseURL = 'https://random-data-api.com/';
    const service = new HttpClient({ baseURL });

    expect(service.instance.defaults.baseURL).toBe(baseURL);
    expect(service.instance.defaults.withCredentials).toBeTruthy();
  });

  it('should make request successfully', async () => {
    const baseURL = 'https://random-data-api.com/';
    const service = new HttpClient({ baseURL, withCredentials: false });
    const response = await service.instance.get<RandomApp, RandomApp>('/api/app/random_app');

    expect(service.instance.defaults.baseURL).toBe(baseURL);
    expect(service.instance.defaults.withCredentials).toBeFalsy();
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
    expect(response.app_name).toBeDefined();
    expect((response as any).nonExisting).toBeUndefined();
  });

  it('should not use the extract data interceptor', async () => {
    const baseURL = 'https://random-data-api.com/';
    const service = new HttpClient({ baseURL, withCredentials: false }, { disableExtractDataInterceptor: true });
    const response = await service.instance.get<RandomApp>('/api/app/random_app');

    expect(service.instance.defaults.baseURL).toBe(baseURL);
    expect(service.instance.defaults.withCredentials).toBeFalsy();
    expect(response.data).toBeDefined();
    expect(response.data.id).toBeDefined();
    expect(response.data.app_name).toBeDefined();
    expect((response as any).data.nonExisting).toBeUndefined();
  });
});
