import React, { useState } from 'react'
import Header from '../Headers'
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFullscreenMode from '../../hooks/useFullscreenMode';
import useUnsavedChangesWarning from '../../hooks/useUnsavedChangesWarning';

/**
* @author
* @function ReactFullPage
**/

const ReactFullPage = (props) => {
    const [name, setName] = useState("");
    const [elementRef, FullscreenIcon] = useFullscreenMode();
    const [Prompt, setDirty, setPristine] = useUnsavedChangesWarning();

  return(
    <>
         <Header title="ReactFullPage" />

         <div class="separator">Hook 1: Unsaved changes warning Hook</div>

            <div
                className="row justify-content-center mt-5 bg-light"
                ref={elementRef}
            >
                <div className="col-lg-6 text-center ">
                    Go Full Screen {FullscreenIcon}
                    <div class="card">
                        <div class="card-header text-left font-weight-bold">
                            Custom Hook - "useUnsavedChangesWarning()"
                        </div>
                        <div className="card-body">
                            <div>
                                Type something in the box below and move to
                                other screen without submitting
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon="user" />
                                    </span>
                                </div>
                                <input
                                    name=""
                                    className="form-control"
                                    placeholder="Full name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        setDirty();
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    onClick={() => {
                                        setName("");
                                        setPristine();
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {Prompt}
    </>
   )

 }

export default ReactFullPage