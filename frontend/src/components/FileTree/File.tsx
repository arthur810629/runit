import { DocumentImage } from './DocumentImage';

type FileProps = {
  type: string;
  name: string;
};

export function File({ type, name }: FileProps) {
  return (
    <div className="d-flex flex-wrap w-100 user-select-none">
      <div className="list-group-item list-group-item-action flex-grow-1">
        <DocumentImage type={type} />
        <span className="ps-2">{name}</span>
      </div>
    </div>
  );
}
