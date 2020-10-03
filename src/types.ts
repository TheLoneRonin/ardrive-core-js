import { JWKInterface } from 'arweave/node/lib/wallet';

export interface Wallet {
  walletPrivateKey: JWKInterface;
  walletPublicKey: string;
};

export interface ArDriveUser {
  login: any,
  privateArDriveId: any,
  privateArDriveTx: any,
  publicArDriveId: any,
  publicArDriveTx: any,
  dataProtectionKey: any,
  walletPrivateKey: any,
  walletPublicKey: any,
  syncFolderPath: any,
};

export interface UploadBatch {
  totalArDrivePrice: number,
  totalSize: string,
  totalNumberOfFileUploads: number,
  totalNumberOfMetaDataUploads: number,
  totalNumberOfFolderUploads: number
};

export interface ArFSDriveMetadata {
  appName: string,
  appVersion: string,
  driveName: string,
  rootFolderId: string,
  cipher: string,
  cipherIV: string,
  unixTime: number,
  arFS: string,
  driveId: string,
  drivePrivacy: string,
  driveAuthMode: string,
  metaDataTxId: string,
  metaDataSyncStatus: number,
};

export interface ArFSFileMetaData {
  id: number,
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
  lastModifiedDate: number,
  isLocal: number,
  isPublic: number,
  permaWebLink: string,
  metaDataTxId: string,
  dataTxId: string,
  fileDataSyncStatus: number,
  fileMetaDataSyncStatus: number,
};