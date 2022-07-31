import SSRCookie from 'cookie';
import Cookie from 'js-cookie';

const AUTH_AB_CRYPT = 'BOOK_AUTH_AB_CRYPT';

export function parseSSRCookie(context: any) {
  return SSRCookie.parse(context.req.headers.cookie ?? '');
}

export function getAuthCredentials(context?: any): any {
  let authCred;
  if (context) {
    authCred = parseSSRCookie(context)[AUTH_AB_CRYPT];
  } else {
    authCred = Cookie.get(AUTH_AB_CRYPT);
  }
  if (authCred) {
    return JSON.parse(authCred);
  }
  return {
    accessToken: '',
    client: '',
    expiry: '',
    uid: '',
    role: '',
    currentClinicId: '',
  };
}
export function setAuthCredentials(data: object) {
  Cookie.set(AUTH_AB_CRYPT, JSON.stringify(data));
}
