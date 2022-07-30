import { uniqBy } from 'lodash';
import React, { useState, useEffect, useRef } from 'react';
import { handleMutate } from 'src/data';
import { patientsQuery } from 'src/data/request';

import DebounceSelect from './DebounceSelect';

const View = ({
  defaultValue,
  onChange,
  fieldName,
  showMedicalRecord,
  callbackAfterFetch,
  hasDefaultValue,
  label,
  showHint = true,
  onClear,
  canEdit = true,
}: any) => {
  const [values, setValue] = useState([]);
  const { mutate } = patientsQuery();
  const valueRef = useRef([]);

  const fetchData = (keyword, callback) => {
    handleMutate(mutate, {
      params: {
        keyword: keyword || '',
        default_value: defaultValue || '',
        per_page: 100,
        page: 1,
        show_medical_record: showMedicalRecord || false,
      },
      onSuccess: (data) => {
        callback(
          uniqBy([...(data.defaultItem || [])].concat(data.data.items), 'id')
        );
      },
    });
  };

  const onChangeSelect = (value, options) => {
    if (onChange) {
      const item = options.filter(
        (a) => a[fieldName] === parseInt(value, 10)
      )[0];

      onChange(item);
    }

    return value;
  };

  const clearSelect = () => {
    if (onClear) onClear();
  };

  useEffect(() => {
    if (hasDefaultValue) {
      fetchData('', (items) => {
        setValue(items);
        callbackAfterFetch && callbackAfterFetch(items);
      });
    }
  }, [defaultValue]);

  return (
    <DebounceSelect
      valueRef={valueRef}
      disabled={!canEdit}
      showHint={showHint}
      defaultOptions={values}
      defaultValue={defaultValue}
      fieldName={fieldName}
      labelName={label || ((item) => `${item.code} - ${item.name}`)}
      placeholder='Nhập tên bệnh nhân để tìm kiếm'
      fetchOptions={fetchData}
      onChange={onChangeSelect}
      onClear={clearSelect}
    />
  );
};

export default View;
