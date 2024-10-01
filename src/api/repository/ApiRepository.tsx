import { ApiConfig } from '../config/ApiConfig';

export const ApiRepository = {
    async get(endpoint: string, params: string = ''): Promise<any> {
        const url = `${ApiConfig.BASE_URL}${endpoint}${params}`;
        try {
            const response = await fetch(url, { headers: ApiConfig.DEFAULT_HEADERS });
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('apiRepository GET Error:', error);
            throw error;
        }
    },

    async post(endpoint: string, body: any): Promise<any> {
        const url = `${ApiConfig.BASE_URL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: ApiConfig.DEFAULT_HEADERS,
                body: JSON.stringify(body),
            });
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('apiRepository POST Error:', error);
            throw error;
        }
    },

    async put(endpoint: string, body: any): Promise<any> {
        const url = `${ApiConfig.BASE_URL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: ApiConfig.DEFAULT_HEADERS,
                body: JSON.stringify(body),
            });
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('apiRepository PUT Error:', error);
            throw error;
        }
    },

    async delete(endpoint: string): Promise<any> {
        const url = `${ApiConfig.BASE_URL}${endpoint}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: ApiConfig.DEFAULT_HEADERS,
            });
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error('apiRepository DELETE Error:', error);
            throw error;
        }
    },
};
