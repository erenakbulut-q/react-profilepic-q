import React, { Fragment } from "react";
import Status from "./Status";
import Icon from "../components/Icon/Icon";

import style from "../components/Message/Message.scss"

const StatusMessage = {
  [Status.EMPTY]: (
    <Fragment>
      <Icon name="upload" color="#9b9b9b" size={48}/>
      <p style={{color: "#9b9b9b"}} className={style["message__text"]}>Drag and drop a file here or click</p>
    </Fragment>
  ),
  [Status.LOADING]:<Icon name="loading" size={48}/>,
  [Status.DRAGOVER]: (
    <Fragment>
      <Icon name="upload" color="#9b9b9b" size={48}/>
      <p style={{color: "#9b9b9b"}} className={style["message__text"]}>Drag and drop a file here or click</p>
    </Fragment>
  ),
  [Status.INVALID_FILE_TYPE]: (
    <Fragment>
      <p style={{color: "#9b9b9b"}} className={style["message__text"]}>Only images allowed.</p>
      <p style={{color: "#9b9b9b"}} className={style["message__text"]}>Drag and drop a file here or click</p>
    </Fragment>
  ),
  [Status.INVALID_IMAGE_SIZE]: (
    <Fragment>
      <p  style={{color: "#9b9b9b"}}className={style["message__text"]}>Your photo must be larger than 350px.</p>
      <p style={{color: "#9b9b9b"}} className={style["message__text"]}>Drag and drop a file here or click</p>
    </Fragment>
  ),
  [Status.LOADED]: null
};

export default StatusMessage;
