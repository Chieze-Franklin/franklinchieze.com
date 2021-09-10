import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';

import { Resume } from './Resume';

export const ResumePdf: React.FC = () => (
    <PDFViewer>
      <Resume />
    </PDFViewer>
  );
