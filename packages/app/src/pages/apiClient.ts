import { APIClient } from '@nocobase/client';

const apiClient = new APIClient({
  baseURL: `http://localhost:3000/api/`,
});

// mock(apiClient);

export default apiClient;
