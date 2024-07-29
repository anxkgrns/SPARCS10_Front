import { useState, useRef, useEffect } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps, InfoWindow } from 'react-naver-maps';

export default function ShoppingScreen() {
  const navermaps = useNavermaps()

  // useRef 대신 useState를 통해 ref를 가져옵니다.
  const [map, setMap] = useState(null)
  const [infowindow, setInfoWindow] = useState(null)

  function onSuccessGeolocation(position) {
    if (!map || !infowindow) return

    const location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude,
    )
    map.setCenter(location)
    map.setZoom(16)
    infowindow.setContent(
      '<div style="padding:20px;">' +
        '내 위치' +
        '</div>',
    )
    infowindow.open(map, location)
    console.log('Coordinates: ' + location.toString())
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
  }, [map, infowindow])

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
        <InfoWindow ref={setInfoWindow} />
        </NaverMap>
    </MapDiv>
  )
}
