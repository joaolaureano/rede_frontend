import { client as Http } from './http';

export const login = (data) => Http.post('/login', data);
export const cadastrarUsuario = (data) => Http.post('/users', data);
export const profile = (headers) => Http.get('/users', headers);