import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import '../styles/styles.css';

const Editor: React.FC = () => {
  const [code, setCode] = useLocalStorage('code', '');

  return (
    <div className="editor">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Start typing your code..."
      />
    </div>
  );
};

export default Editor;
