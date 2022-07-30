import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DebounceSelect from '@components/DebounceSelect';

import { Tag } from 'antd';
import { onGetSelectOptions } from '@saga/pages/clinic/patientSearch.saga';

const View = ({
  onChange,
  fieldName,
  label,
  showHint = true,
  onClear,
  canEdit = true,
}: any) => {
  const [values, setValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState([]);
  const dispatch = useDispatch();

  const fetchData = (keyword, callback) => {
    dispatch(
      onGetSelectOptions(
        {
          keyword: keyword || '',
          per_page: 100,
          page: 1,
          show_medical_record: false,
        },
        callback
      )
    );
  };

  const onChangeSelect = (value, options) => {
    if (onChange) {
      const item = options.filter(
        (a) => a[fieldName] === parseInt(value, 10)
      )[0];

      if (item) {
        setSelectedValue((state) => state.concat([item]));
        onChange(selectedValue.concat([item]));
      }
    }

    return value;
  };

  const clearSelect = () => {
    if (onClear) onClear();
  };

  const onRemoveItem = (item) => {
    const filteredValue = selectedValue.filter((a) => a.id !== item.id);
    setSelectedValue(filteredValue);
    onChange(filteredValue);
  };

  useEffect(() => {
    fetchData('', (items) => {
      setValue(items);
    });
  }, []);

  return (
    <>
      <DebounceSelect
        disabled={!canEdit}
        showHint={showHint}
        defaultOptions={values}
        fieldName={fieldName}
        labelName={label || ((item) => `${item.code} - ${item.name}`)}
        placeholder='Nhập tên bệnh nhân để tìm kiếm'
        fetchOptions={fetchData}
        onChange={onChangeSelect}
        onClear={clearSelect}
      />
      {selectedValue.length > 0 && (
        <div style={{ display: 'flex', flexFlow: 'wrap row', marginTop: 10 }}>
          {selectedValue.map((tag, index) => (
            <Tag
              style={{ marginTop: 7 }}
              key={index}
              closable
              onClose={(e) => {
                e.preventDefault();
                onRemoveItem(tag);
              }}
            >
              {label ? label(tag) : `${tag.code} - ${tag.name}`}
            </Tag>
          ))}
        </div>
      )}
    </>
  );
};

export default View;
