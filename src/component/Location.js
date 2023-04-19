import React, {useEffect} from 'react'
import { isMobile } from 'react-device-detect';
import './Location.css';
// import img_location from '../images/location_flower.png'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DirectionsSubwayIcon from '@mui/icons-material/DirectionsSubway';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Divider from '@mui/material/Divider';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Location() {

  useEffect(() => {
    AOS.init({
      offset: 30,
      delay: 200,
      duration: 1000
    });

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
      
      {/* <img className='location-flower' src={img_location}></img> */}
      <p className='location-title' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">LOCATION</p>
      <p className='location-adress' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        성남시 분당구 판교역로 226번길 16(삼평동) 더블유스퀘어</p>
      
      <div className='location_map' id="map" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"/>
      <div className='location_apps' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
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

      

      <div className='location_comes' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
        <List sx={{ width: '100%', maxWidth: 768, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsSubwayIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="신분당선" secondary="판교역 1번 출구 직진 도보 6분" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsBusIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="차그룹컨소시엄 하자 후 도보 3분" secondary="101, 330, 350, 390, 4000" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DirectionsCarIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="경부고속도로 판교IC(톨게이트)" secondary="차출 후 좌회전,약 700m 직진 - 사거리에서 우회전 (SK 주유소 뒤)" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <LocalParkingIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="주차" secondary="건물 내 2시간 무료" />
        </ListItem>
      </List>
      </div>
    </div>
  )
}