import { useMutation } from 'react-query';

import axios from 'axios';

export const loginQuery = () => {
  return useMutation((params: any) => axios.post('/user/sign_in', params));
};

export const profileQuery = () => {
  return useMutation(() => axios.get('/current_user/info'));
};

export const patientsQuery = () => {
  return useMutation((params: any) =>
    axios.get('/clinic_patients/select_options', { params })
  );
};

export const foldersQuery = () => {
  return useMutation((params: any) =>
    axios.get(`/clinic_patients/${params.id}/folders`)
  );
};
