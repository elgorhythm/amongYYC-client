

import React from 'react'


function QrCodeGenerator() {
//  const[temp,setTemp]=useState('');
//  const[word,setWord]=useState('');
//  const[size,setSize]=useState(400);
//  const[fillColor,setFillColor]=useState('ffffff');
//  const[qrCode,setQrCode]=useState('');

//  useEffect(() => {
//     setQrCode
//  (`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${fillColor}`);
//   }, [word, size, fillColor]);

//  const handleClick = () => {
//     setTemp(word);
//     setWord('');
//     }




// console.log(`${word},${size},${fillColor}`);
//   return (
//     <div className="App">
//     <h1>Among yyc Qr Code Generator</h1>
//     <div className="input-box">
//       <div className="gen">
//         <input type="text" onChange={
//           (e) => {setTemp(e.target.value)}}
//           placeholder="Enter text to encode" />
//         <button className="button" 
//           onClick={handleClick}>
//           Generate Qr Code
//         </button>
//       </div>
//       <div className="extra">
//         <h5>Background Color:</h5>
//         <input type="color" onChange={(e) => 
//         { setFillColor(e.target.value.substring(1)) }} />
//         <h5>Dimension:</h5>
//         <input type="range" min="200" max="600"
//          value={size} onChange={(e) => 
//          {setSize(e.target.value)}} />
//       </div>
//     </div>
//     <div className="output-box">
//       <img src={qrCode} alt="" />
//       <a href={qrCode} download="QRCode">
//         <button type="button">Download</button>
//       </a>
//     </div>
//   </div>
// );
  
return (
  <div>
    <h1>Among yyc Qr Code Generator</h1>
  </div>
)
}

export default QrCodeGenerator