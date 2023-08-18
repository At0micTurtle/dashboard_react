/* eslint-disable no-unused-vars */
import React from 'react';
import { EditorData } from '../data/dummy';
import { Header } from '../components';
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar
} from '@syncfusion/ej2-react-richtexteditor';
import { Edit } from '@syncfusion/ej2-react-grids';

export default function Editor() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Editor' category='App' />
      <RichTextEditorComponent>
        {/* <EditorData /> */}
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  )
};
