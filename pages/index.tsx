import type { NextPage } from 'next';
import type { Options, Value } from '@react-page/editor';
import Editor from '@react-page/editor';
import { cellPlugins } from '../plugins/cellPlugins';
import { useState } from 'react';
import { demo } from '../demo/demo';

const LANGUAGES = [
  {
    lang: 'en',
    label: 'English',
  },
  {
    lang: 'de',
    label: 'Deutsch',
  },
];

const Home: NextPage = () => {
  const [value, setValue] = useState<Value>(demo);
  return (
    <Editor
      cellPlugins={cellPlugins}
      value={value}
      lang={LANGUAGES[0].lang}
      onChange={setValue}
      languages={LANGUAGES}
    />
  );
};

export default Home;
