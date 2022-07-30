export type MutateParams = {
  params?: any;
  onSuccess?: Function;
  onError?: Function;
};

export const handleMutate = (mutate: Function, field: MutateParams) => {
  const { onSuccess, params, onError } = field;

  mutate(params, {
    onSuccess: (data: any) => {
      if (onSuccess) onSuccess(data);
    },
    onError: (error: any) => {
      if (onError) onError(error);
    },
  });
};
