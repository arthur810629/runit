import { useState } from 'react';

import { DocumentImage } from './DocumentImage';

type FileNode = {
  type: 'file' | 'directory';
  name: string;
  children?: FileNode[];
};

type DirectoryProps = {
  type: string;
  name: string;
  documentChildren: FileNode[];
  renderDocumentChildren: (child: FileNode) => JSX.Element;
};

export function Directory({
  type,
  name,
  documentChildren,
  renderDocumentChildren,
}: DirectoryProps) {
  const [isShow, setIsShow] = useState(false);

  const showDocumentHandler = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className="d-flex flex-wrap w-100 user-select-none">
      <button
        className="list-group-item list-group-item-action flex-grow-1 text-start"
        onClick={showDocumentHandler}
        type="button"
      >
        <DocumentImage isShow={isShow} type={type} />
        <span className="ps-2">{name}</span>
      </button>
      <div className="d-flex flex-grow-1">
        <div className="d-inline-block px-2" />
        <div className="w-100">
          {isShow &&
            documentChildren.map((child) => renderDocumentChildren(child))}
        </div>
      </div>
    </div>
  );
}
