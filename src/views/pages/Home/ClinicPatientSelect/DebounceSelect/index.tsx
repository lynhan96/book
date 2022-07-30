import React, { useState, useEffect } from 'react';
import { Select, Spin, Typography } from 'antd';
import debounce from 'lodash/debounce';

const DebounceSelect = ({
  fetchOptions,
  onChange,
  disabled = false,
  defaultValue,
  showHint,
  defaultOptions,
  fieldName,
  labelName,
  callback,
  debounceTimeout = 800,
  ...props
}: any) => {
  const [value, setValue] = useState(defaultValue);
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState(defaultOptions || []);

  const debounceFetcher = React.useMemo(() => {
    const loadOptions = (value) => {
      setOptions([]);
      setFetching(true);
      fetchOptions(value, (newOptions) => {
        if (callback) callback(newOptions);

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  useEffect(() => {
    if (!fetching && defaultOptions.length > 0) {
      setOptions(defaultOptions);
    }
  }, [defaultOptions]);

  useEffect(() => {
    setValue(defaultValue ? parseInt(defaultValue, 10) : null);
  }, [defaultValue]);

  return (
    <>
      {showHint && (
        <Typography.Text
          style={{ fontSize: 12, marginBottom: 5, marginTop: 5, color: 'red' }}
        >
          (*) Nhập từ khóa để tìm kiếm
        </Typography.Text>
      )}
      <Select
        style={{
          width: '100%',
          marginBottom: 20,
        }}
        autoComplete='off'
        value={value}
        onChange={(selectValue) => {
          setValue(selectValue);
          onChange(selectValue, options);

          return selectValue;
        }}
        allowClear
        disabled={disabled}
        showSearch
        filterOption={false}
        onSearch={debounceFetcher}
        notFoundContent={fetching ? <Spin size='small' /> : null}
        {...props}
      >
        {options.map((option) => (
          <Select.Option
            value={parseInt(option[fieldName], 10)}
            key={option.value}
          >
            {labelName(option)}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default DebounceSelect;
