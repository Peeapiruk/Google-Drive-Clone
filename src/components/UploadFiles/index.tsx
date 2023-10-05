import React, { ChangeEvent, useState } from 'react'
import styles from "./Upload.module.scss"
import Button from '../common/Button/Button'
import { fileUpload } from '@/API/FileUpload';
import CommonProgress from '../common/Progress';
import { addFolder } from '@/API/Firestore';
import { useFetchSession } from '@/hooks/useSession';


export default function UploadFiles({ parentId }: FolderStructure) {
  let { session } = useFetchSession();
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setfolderName] = useState('');
  const [file, setFile] = useState({});
  
  const UploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email as string);
  };

  console.log(parentId)
  const uploadFolder = () => {
    let payload = {
      folderName:folderName,
      isFolder:true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email,
    }
    addFolder(payload)
    setfolderName("")
  }
  return (
    <div className={styles.UploadMain}>
        
        <Button 
        onClick={() => {
          setFileVisible(!isFileVisible)
          setFolderVisible(false);
        }} 
        title="Add a File" 
        btnClass='btn-outline btn-success'
        />

        {isFileVisible ? 
        <input 
        onChange={(event) => UploadFile(event)} 
        type="file" 
        className="file-input file-input-bordered w-full max-w-xs"/> : <></>}

        <Button
        onClick={() => {
          setFileVisible(false);
          setFolderVisible(!isFolderVisible);}} 
        title="Add a Folder" 
        btnClass='btn-outline btn-success'
        />
        
        {isFolderVisible ? (
          <>
          <input
              type="text"
              placeholder="Type here"
              value={folderName}
              onChange={(event) => setfolderName(event.target.value)}
              className="input input-bordered input-accent w-full max-w-xs"
            />
           <Button
              onClick={uploadFolder}
             title="Create"
              btnClass="btn-success"
            />
          </>
        ) : (
        <></>
        )}
        {progress === 0 || progress === 100 ? <></> : <CommonProgress progress={progress} />}
    </div>
  );
};


