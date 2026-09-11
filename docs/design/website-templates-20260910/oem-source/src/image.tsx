import React from 'react';
export default function Image({fill,priority,unoptimized,quality,loader,onLoadingComplete,...props}:any){
 const src=typeof props.src==='object'?props.src.src:props.src;
 return <img {...props} src={src} style={fill?{position:'absolute',height:'100%',width:'100%',inset:0,...props.style}:props.style} />;
}