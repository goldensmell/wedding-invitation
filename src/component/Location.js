import React, {useEffect} from 'react'
import { isMobile } from 'react-device-detect';
import './Location.css';

export default function Location() {

  useEffect(() => {
    let map = null;
    let marker = null;
    const initMap = () => {
        map = new window.naver.maps.Map('map', {
            //지도 추가, 좌표를 기점으로 주변 지도가 추가된다.
            center: new window.naver.maps.LatLng(37.40051, 127.1114),
            zoom: 14
        })

        marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.40051, 127.1114), //Marker 추가, 좌표에 마커가 찍힌다.
            map: map
        })
      }
      initMap()
  }, [])

  const moveNaverMapApp = () => {
    if(isMobile){
      window.open("nmap://place?&lat=37.40051&lng=127.1114&zoom=15&name=W스퀘어컨벤션&appname="+window.location.href);
    }else {
      window.open("https://map.naver.com/v5/entry/place/36301790?c=14.98,0,0,0,dh");
    } 
  }

  const moveKakaoMapApp = () => {
    if(isMobile){
      window.open("http://kko.to/xXFzji3Ul2");
    }else {
      window.open("https://map.kakao.com/?map_type=TYPE_MAP&itemId=26903392&q=%EB%8D%94%EB%B8%94%EC%9C%A0%EC%8A%A4%ED%80%98%EC%96%B4%EC%BB%A8%EB%B2%A4%EC%85%98&urlLevel=1&urlX=524708&urlY=1083693");
    } 
  }

  const moveTMapApp = () => {
    window.open("https://surl.tmap.co.kr/278cfa8e");
  }

  return (
    <div className='location'> 
      <p>찾아오시는 길</p>
      <p>성남시 분당구 판교역로 226번길 16(삼평동) 더블유스퀘어</p>
      <div className='location_map' id="map"/>
      <div className='location_apps'>
        <div className='location_app location_app_naver' onClick={()=> {
          moveNaverMapApp();
        }}>
          <img src={process.env.PUBLIC_URL+'/image/navermap.png'} alt='naver'/>
          <p>네이버</p>
        </div>

        <div className='location_app location_app_kakao' onClick={()=> {
          moveKakaoMapApp();
        }}>
          <img src={process.env.PUBLIC_URL + "/image/kakaomap.png"} alt='kakao'/>
          <p>카카오</p>
        </div>

        <div className='location_app location_app_tmap' onClick={()=> {
          moveTMapApp();
        }}>
          <img src={process.env.PUBLIC_URL + "/image/tmap.png"} alt='tmap'/>
          <p>T맵</p>
        </div>
      </div>
      <div className='location_comes'>
        <div className='location_come location_come_subway'>
          <img src={process.env.PUBLIC_URL+'/image/ico_subway.png'}/>
          <p>신분당선 : 판교역 1번 출구 직도보 6분 소요<br/> [셔틀버스 10분간격 운행]</p>
        </div>
        <div className='location_come location_come_car'>
          <img src={process.env.PUBLIC_URL+'/image/ico_car.png'}/>
          <p>경부고속도로 판교IC(톨게이트) 차출 후 좌회전,<br/>약 700m 직진 - 사거리에서 우회전 (SK 주유소 뒤)<br/> 주차 2시간 무료</p>
        </div>
        <div className='location_come location_come_bus'>
          <img src={process.env.PUBLIC_URL+'/image/ico_bus.png'}/>
          <p>4000번 : 테크노육교 하차<br/>101, 330, 350, 390, 4000번 : 차그룹컨소시엄 하차</p>
        </div>
      </div>
    </div>
  )
}