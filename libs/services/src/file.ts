import { File as FileObj } from 'types/fileTypes';
import rest from './rest';

const isFile = (value: File) => typeof value === 'object' && value.type;

const upload = (file: File, url = '/api/files'): Promise<FileObj> => {
  if (!isFile(file)) throw Error('No file selected to upload');
  const formData = new FormData();
  formData.append('file', file);
  const options = {
    skipHeaders: true,
  };
  return rest.post(url, formData, options);
};

const uploadAdmin = (file: File) => upload(file, '/api/admin/files');

const read = (fileId: string) => rest.get(`/api/files/${fileId}`);
const readAdmin = (fileId: string) => rest.get(`/api/admin/files/${fileId}`);

export default {
  read,
  readAdmin,
  upload,
  uploadAdmin,
};
