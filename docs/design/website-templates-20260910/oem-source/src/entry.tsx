import React from 'react';import {createRoot} from 'react-dom/client';
import {OemOdmExperience} from './oem-odm-experience';import {faqs} from './faqs';
createRoot(document.getElementById('oem-root')!).render(<OemOdmExperience faqs={faqs}/>);
const root=document.getElementById('oem-root')!;new ResizeObserver(()=>parent.postMessage({type:'oem-preview-height',height:Math.ceil(root.getBoundingClientRect().height)},location.origin)).observe(root);
