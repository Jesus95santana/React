import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ResumePDF from './resume.pdf';

export class App extends React.Component {
  render() {
    return(
      <>
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.min.js">
        <div
          style={
            {
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '100vh',
            }
          }>
            <Viewer fileUrl={ResumePDF} />
          </div>

        </Worker>

      </>
    );
  }
}
