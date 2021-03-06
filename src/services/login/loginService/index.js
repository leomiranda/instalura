import { setCookie, destroyCookie } from 'nookies';
import { isStagingEnv } from '../../../infra/env/isStagingEnv';

async function HttpClient(url, { headers, body, ...options }) {
  return fetch(url, {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...options,
  }).then((respostaDoServer) => {
    if (respostaDoServer.ok) {
      return respostaDoServer.json();
    }

    throw new Error('Falha em pegar os dados do servidor :(');
  });
}

const BASE_URL = isStagingEnv
  ? // Back-end Dev
    'https://instalura-api-git-master-omariosouto.vercel.app'
  : // Back-end Prod
    'https://instalura-api-git-master-omariosouto.vercel.app';

export const loginService = {
  async login({ username, password }) {
    return HttpClient(`${BASE_URL}/api/login`, {
      method: 'POST',
      body: {
        username, // 'omariosouto'
        password, // 'senhasegura'
      },
    }).then((respostaConvertida) => {
      const { token } = respostaConvertida.data;
      const DAY_IN_SECONDS = 86400;
      setCookie(null, 'APP_TOKEN', token, {
        path: '/',
        maxAge: DAY_IN_SECONDS * 7,
      });

      return { token };
    });
  },
  logout() {
    destroyCookie(null, 'APP_TOKEN');
  },
};
