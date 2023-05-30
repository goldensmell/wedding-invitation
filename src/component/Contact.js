import React, {useEffect, useState} from 'react'
import './Contact.css';
// import img_contact from '../images/contacts-flower.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import img_line from "../images/line_heart.jpeg"
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {

	useEffect(() => {
		AOS.init({
		  offset: 150,
		  delay: 300,
		  duration: 1000
		});
	  });

	const [isManShow, setManShow] = useState(false);
	const [isWomanShow, setWomanShow] = useState(false);

	const handleManShow = () => {
		setManShow(!isManShow);
	};

	const handleWomanShow = () => {
		setWomanShow(!isWomanShow);
	};

	const handleCopy = async (num) => {
		try {
			await navigator.clipboard.writeText(num);
			alert('계좌번호를 복사했습니다.');
		  } catch (e) {
			alert('복사에 실패하였습니다');
		  }
	};

  return (
	<div>
		<div className="contacts">
			{/* <img className='contacs-flower' src={img_contact}></img> */}{/*  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"*/}
			<p className='contacts-title' > 마음 보내실 곳</p>

			<div className="contact contact_man">
				<button className="contact_button" onClick={handleManShow}>
					신랑측 계좌번호
				</button>
				<div className={isManShow ? "accs accs_man" : "acc_none"}> 
					<List sx={{ width: '90%', maxWidth: 500, bgcolor: 'background.paper',marginTop:1, borderRadius:3,boxShadow:2, border:1, borderColor:'#A493B7' }}>
						{manAccs.map(acc => (
							<ListItem key={acc.num}>
								<ListItemText primary={acc.name} secondary={acc.acc_name + " : " + acc.acc_num_divider} />	
								<IconButton aria-label="copy" color="promary" onClick={() => handleCopy(acc.acc_num)}>
									<CopyAllIcon/>
								</IconButton>
							</ListItem>
						))}
						
					</List>
				</div>
			</div>
			<div className="contact contact_woman">
				<button className="contact_button" onClick={handleWomanShow}>
					신부측 계좌번호
				</button>
				
				<div className={isWomanShow ? "accs accs_woman" : "acc_none"}> 
					<List sx={{ width: '90%', maxWidth: 500, bgcolor: 'background.paper',marginTop:1, borderRadius:3,boxShadow:2, border:1, borderColor:'#A493B7' }}>
						{womanAccs.map(acc => (
							<ListItem key={acc.num}>
								<ListItemText primary={acc.name} secondary={acc.acc_name + " : " + acc.acc_num_divider} />	
								<IconButton aria-label="copy" color="promary" onClick={() => handleCopy(acc.acc_num)}>
									<CopyAllIcon></CopyAllIcon>
								</IconButton>
							</ListItem>
						))}
					</List>
				</div>
			</div>
			
			{/* <div className='contacts-thanks'>
				<Divider sx={{width:'100%'}}/>
				<p className='contacts-thanks-message'>감사합니다.</p>
			</div> */}
		</div>

		<div className='contacts-thanks'>
			<img className='img-line' src={img_line}/>
			<p className='contacts-thanks-message'>감사합니다.</p>
		</div>
	</div>
  )
}

const manAccs = [
	// {
	// 	num: 0,
	// 	name : "임종국",
	// 	acc_name: '국민은행',
	// 	acc_num_divider: '111111-11-111000',
	// 	acc_num: '11111111111001'
	//   },
	//   {
	// 	num: 1,
	// 	name : "길금숙",
	// 	acc_name: '우체국',
	// 	acc_num_divider: '301408-02-160170',
	// 	acc_num: '30140802160170'
	//   },
	  {
		num: 0,
		name : "임현수",
		acc_name: '카카오뱅크',
		acc_num_divider: '3333-05-5057845',
		acc_num: '3333055057845'
	  },
];

const womanAccs = [
	// {
	// 	num: 0,
	// 	name : "고길자",
	// 	acc_name: '국민은행',
	// 	acc_num_divider: '111111-11-111000',
	// 	acc_num: '11111111111004'
	//   },
	  {
		num: 1,
		name : "김유미",
		acc_name: '카카오뱅크',
		acc_num_divider: '3333-04-4471767',
		acc_num: '3333044471767'
	  },
];
