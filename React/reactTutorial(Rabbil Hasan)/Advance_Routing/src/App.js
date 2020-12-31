import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyNavigation from './components/MyNavigation';
import MyRouting from './components/MyRouting';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavigation></MyNavigation>
        <MyRouting></MyRouting>
      </BrowserRouter>


      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
      />
    </div>
  );
}

export default App;
