import { useState, useRef, useEffect, Array, useContext } from 'react';
import { Container as MapDiv, NaverMap, useNavermaps, InfoWindow, Overlay, Marker } from 'react-naver-maps';
import MarkIcon from '../../assets/icons/MyMark.svg';
import TrashMark from '../../assets/icons/TrashMark.png';

import { GeoContext } from './ChatBotBaseScreen';

export default function TrashMap() {
    const navermaps = useNavermaps()

  // useRef 대신 useState를 통해 ref를 가져옵니다.
    const [map, setMap] = useState(null)
    const [location, setLocation] = useState(new navermaps.LatLng(null))//new navermaps.LatLng(37.5666805, 126.9784147))
    // const TrashLocation1 = new navermaps.LatLng(36.3753485, 127.3654857)
    // const TrashLocation2 = new navermaps.LatLng(36.3793485, 127.364857)

    const { currentLatLng, setCurrentLatLng } = useContext(GeoContext);
    const { trashcanLatLng, setTrashcanLatLng } = useContext(GeoContext);

  function onSuccessGeolocation(position) {
    if (!map || !location) {
        console.log("!!!!")
        return
    }
    const now_location = new navermaps.LatLng(
      position.coords.latitude,
      position.coords.longitude,
    )
    setLocation( now_location)
    setCurrentLatLng(now_location)
    console.log("location: ", location)
    console.log("now_location: ", now_location)
    map.setCenter(now_location)
    map.setZoom(16)
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
    if (!map ) {
        console.log("?????")
        return
    }

    if (navigator.geolocation) {
        console.log("성공!")
      navigator.geolocation.getCurrentPosition(
        onSuccessGeolocation,
        onErrorGeolocation,
        {enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0}
      )
    } else {
      var center = map.getCenter()

      infowindow.setContent(
        '<div style="padding:20px;"><h5 style="margin-bottom:5px;color:#f00;">Geolocation not supported</h5></div>',
      )
      infowindow.open(map, center)
    }

  }, [map])

  useEffect(() => {
    if (map && trashcanLatLng) {
        map.setCenter(trashcanLatLng);
        map.setZoom(16);
    }
}, [map, trashcanLatLng]);

  return (
    <MapDiv
        style={{
            position: 'relative',
            width: '100%',
            height: '100%',
        }}>
        <NaverMap
            ref={setMap}
        >
            {/* <Marker position= {TrashLocation1} icon = {{content: `<img src="${TrashMark}" alt="Custom Marker" style="width: 40px; height: 40px;" />`,
            }}/>
            <Marker position= {TrashLocation2} icon = {{content: `<img src="${TrashMark}" alt="Custom Marker" style="width: 40px; height: 40px;" />`,
            }}/> */}
            <Marker position= {trashcanLatLng}
              icon = {{content: `<img src="${TrashMark}" alt="Custom Marker" style="width: 40px; height: 40px;" />`,}}
              
              />
            <Marker position= {location} icon = {{ // 현재 위치
              content: `<img src="${MarkIcon}" alt="Custom Marker" style="width: 25px; height: 25px;" />`,  
            }}/>
            {/* <Overlay element = {marker}/> */}
        </NaverMap>
    </MapDiv>
  )
}