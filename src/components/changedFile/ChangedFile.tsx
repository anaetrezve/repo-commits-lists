import { FC } from 'react';
import { ChangedFile } from '../../interfaces';
import './ChangedFile.css';

const ChangedFileComponent: FC<ChangedFile> = ({
  name,
  additions,
  deletions,
  status,
}) => (
  <div className="file">
    <p>
      <strong>File: </strong>
      {name}
    </p>
    <div className="file-stats">
      <span>
        <strong>Additions: </strong> {additions}
      </span>
      <span>
        <strong>Deletions: </strong> {deletions}
      </span>
      <span>
        <strong>Status: </strong> {status}
      </span>
    </div>
  </div>
);

export default ChangedFileComponent;
