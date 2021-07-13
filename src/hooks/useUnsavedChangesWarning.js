import React, { useState, useEffect } from "react";
import { Prompt, BrowserRouter as Router } from "react-router-dom";

const useUnsavedChangesWarning = (
    message = "Are you sure want to discard changes?"
) => {
    const [isDirty, setDirty] = useState(false);

    useEffect(() => {
        //Detecting browser closing
        window.onbeforeunload = isDirty && (() => message);

        return () => {
            window.onbeforeunload = null;
        };
    }, [isDirty]);

    const routerPrompt = <Router><Prompt when={isDirty} message={message} /></Router>;

    return [routerPrompt, () => setDirty(true), () => setDirty(false)];
};

export default useUnsavedChangesWarning;