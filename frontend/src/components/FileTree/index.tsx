import { File } from './File';
import { Directory } from './Directory';

type FileNode = {
  type: 'file' | 'directory';
  name: string;
  children?: FileNode[];
};

type DocumentsProps = {
  fileTreeData: FileNode | FileNode[];
};

const Documents = ({ fileTreeData }: DocumentsProps) => {
  const normalizedData = Array.isArray(fileTreeData)
    ? fileTreeData
    : [fileTreeData];

  return normalizedData.map((file) => {
    if (file.type === 'file') {
      return <File key={file.name} name={file.name} type={file.type} />;
    }

    return (
      <Directory
        key={file.name}
        documentChildren={file.children ?? []}
        name={file.name}
        renderDocumentChildren={(child: FileNode) => (
          <Documents key={child.name} fileTreeData={child} />
        )}
        type={file.type}
      />
    );
  });
};

export function FileTree({ fileTreeData }: DocumentsProps) {
  return (
    <div className="list-group w-100 px-2">
      <Documents fileTreeData={fileTreeData} />
    </div>
  );
}
