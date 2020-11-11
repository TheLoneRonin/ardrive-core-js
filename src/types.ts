import { JWKInterface } from 'arweave/node/lib/wallet';

export interface Wallet {
  walletPrivateKey: JWKInterface;
  walletPublicKey: string;
};

export interface ArDriveUser {
  login: string,
  dataProtectionKey: string,
  walletPrivateKey: any,
  walletPublicKey: string,
  syncFolderPath: string,
  autoSyncApproval: number,
};

export interface UploadBatch {
  totalArDrivePrice: number,
  totalSize: string,
  totalNumberOfFileUploads: number,
  totalNumberOfMetaDataUploads: number,
  totalNumberOfFolderUploads: number
};

export interface ArFSDriveMetaData {
  id: number,
  login: string,
  appName: string,
  appVersion: string,
  driveName: string,
  rootFolderId: string,
  cipher: string,
  cipherIV: string,
  unixTime: number,
  arFS: string,
  driveId: string,
  driveSharing: string,
  drivePrivacy: string,
  driveAuthMode: string,
  metaDataTxId: string,
  metaDataSyncStatus: number,
  permaWebLink: string,
};

export interface ArFSFileMetaData {
  id: number,
  login: string,
  appName: string,
  appVersion: string,
  unixTime: number,
  contentType: string,
  entityType: string,
  driveId: string,
  parentFolderId: string,
  fileId: string,
  fileSize: number,
  fileName: string,
  fileHash: string,
  filePath: string,
  fileVersion: number,
  cipher: string,
  dataCipherIV: string,
  metaDataCipherIV: string,
  lastModifiedDate: number,
  isLocal: number,
  isPublic: number,
  permaWebLink: string,
  metaDataTxId: string,
  dataTxId: string,
  fileDataSyncStatus: number,
  fileMetaDataSyncStatus: number,
  cloudOnly: number,
};

export interface ArFSEncryptedData {
  cipher: string,
  cipherIV: string,
  data: Buffer,
}