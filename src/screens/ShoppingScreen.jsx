// import React, { useState, useEffect } from 'react';
// import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';
// import customMarker from '../assets/icons/TrashMark.png'; // 이미지 파일 import

// const MapComponent = () => {
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           setPosition({
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           });
//         },
//         (error) => {
//           console.error(error);
//         },
//         {
//           enableHighAccuracy: true,
//           timeout: 5000,
//           maximumAge: 0,
//         }
//       );
//     }
//   }, [position]);

//   return (
//     <div className="map-container">
//       <NaverMap
//         style={{
//           width: '100%',
//           height: '100%',
//         }}
//         defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
//         defaultZoom={10}
//       >
//         {position && (
//           <Marker
//             position={position}
//             // icon={{
//             //   content: `<img src="${customMarker}" alt="Custom Marker" style="width: 50px; height: 50px;" />`,
//             // }}
//           />
//         )}
//       </NaverMap>
//     </div>
//   );
// };

// const ShoppingScreen = () => (
//   <MapDiv
//         style={{
//             position: 'relative',
//             width: '100%',
//             height: '100%',
//         }}>
//     <MapComponent />
//   </MapDiv>
// );

// export default ShoppingScreen;


import React, { useState, useEffect } from 'react';

export default function ShoppingScreen() {
  return (
    <div>
      <h1>Shopping Screen</h1>
    </div>
  );
}