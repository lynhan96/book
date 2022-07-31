import { useMutation } from 'react-query';

import axios from './http';

export const loginQuery = () => {
  return useMutation((params: any) =>
    axios.post('/api/v1/auth/sign_in', params)
  );
};

export const profileQuery = () => {
  return useMutation(() => axios.get('/api/v1/profile'));
};

export const patientsQuery = () => {
  return useMutation((params: any) =>
    axios.get('/api/v1/patient_select_options', { params })
  );
};

export const foldersQuery = () => {
  return useMutation((params: any) =>
    axios.get(`/api/v1/dentists/folders`, { params })
  );
};
