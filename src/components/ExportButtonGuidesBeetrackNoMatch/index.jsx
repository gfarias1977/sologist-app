import React from 'react';
import { CSVLink } from 'react-csv';
import moment from 'moment';


const ExportButtonGuidesBeetrackNoMatch = ({ data }) => {
  const headers = [
    { label: 'id', key: 'id' },
    { label: 'Guia', key: 'guide' },
    { label: 'Usuario', key: 'usuario' },
    { label: 'Fecha Scaneo', key: 'creationDate' },
  ];

  return (
    <CSVLink
      data={data}
      headers={headers}
      className="btn btn-primary"
      separator={';'}
      filename={`guides_nomatch_report_${moment(new Date(new Date())).format('DD/MM/YYYY hh:mm')}.csv`}>
      <i className="fa fa-file-download" />
      <span> Exportar</span>
    </CSVLink>
  );
};

export default ExportButtonGuidesBeetrackNoMatch;
