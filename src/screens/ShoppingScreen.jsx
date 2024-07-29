import { useState, useRef, useEffect } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps, InfoWindow, Overlay } from 'react-naver-maps';
import markicon from '../assets/icons/custom_marker.svg';

export default function ShoppingScreen() {
  const navermaps = useNavermaps()

  // useRef 대신 useState를 통해 ref를 가져옵니다.
  const [map, setMap] = useState(null)
  const [infowindow, setInfoWindow] = useState(null)
  const [MyMarker] = 
//   for(var i = 0; i < 10; i++){
//     console.log(i);
//   }

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude,
    )
    if (!marker2Ref.current) {
        marker2Ref.current = new navermaps.Marker({
          position: { lat: 37.5657259, lng: 126.97547 },
        })
      }
    console.log('Coordinates: ' + location.toString())
    map.setCenter(location)
    map.setZoom(16)
    marker.setPosition(location)
    marker.setIcon({markicon})
    
    // infowindow.setContent(
    //   '<div style="padding:20px;">' +
    //     '내 위치' +
    //     '</div>',
    // )
    infowindow.open(map, location)
  }

  function onErrorGeolocation() {
    if (!map || !infowindow) return

    const center = map.getCenter()
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '<h5 style="margin-bottom:5px;color:#f00;">Geolocation failed!</h5>' +
        'latitude: ' +
        center.lat() +
        '<br />longitude: ' +
        center.lng() +
        '</div>',
    )
    infowindow.open(map, center)
    window.open(map,center)

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation,
      )
    } else {
      const center = map.getCenter()
      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
      )
      infowindow.open(map, center)
    }
  }

  useEffect(() => {
    if (!map || !infowindow) {
      return
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation,
      )
    } else {
      var center = map.getCenter()

      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
      )
      infowindow.open(map, center)
    }
  }, [map, infowindow, marker])

  return (
    <MapDiv
        style={{
            position: 'relative',
            width: '100%',
            height: '600px',
        }}>
        <NaverMap
        // uncontrolled
        defaultCenter={new navermaps.LatLng(37.5666805, 126.9784147)}
        defaultZoom={10}
        defaultMapTypeId={navermaps.MapTypeId.NORMAL}
        ref={setMap}
        >
            <Overlay element = {marker}/>
            <InfoWindow ref={setInfoWindow} />
        </NaverMap>
    </MapDiv>
  )
}
