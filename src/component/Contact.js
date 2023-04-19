import React, {useEffect, useState} from 'react'
import './Contact.css';
// import img_contact from '../images/contacts-flower.png';
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AOS from "aos";
import "aos/dist/aos.css";

const theme = createTheme({
	palette: {
	  primary: {
		// Purple and green play nicely together.
		main: '#673ab7',
	  }
	},
  });

export default function Contact() {

	useEffect(() => {
		AOS.init({
		  offset: 100,
		  delay: 200,
		  duration: 1000
		});
	  });

	const [isManShow, setManShow] = useState(false);
	const [isWomanShow, setWomanShow] = useState(false);

	// useEffect( () => {
	// 	manAccs.map((acc)=>{
	// 		console.log(acc);
	// 	});
	// });

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
	<ThemeProvider theme={theme}>
    <div className="contacts">
		{/* <img className='contacs-flower' src={img_contact}></img> */}
     	 <p className='contacts-title' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom"> 마음 보내실 곳</p>

		<div className="contact contact_man">
			<Button sx={{ width: '100%', maxWidth: 500}} variant="contained" color="primary" onClick={handleManShow}>
				신랑측 계좌번호
			</Button>
			<div className={isManShow ? "accs accs_man" : "acc_none"}> 
				<List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', borderRadius:3,boxShadow:2, border:1, borderColor:'#673ab7' }}>
					{manAccs.map(acc => (
						<ListItem key={acc.num}>
							<ListItemText primary={acc.name} secondary={acc.acc_name + " : " + acc.acc_num_divider} />	
							<IconButton aria-label="copy" color="secondary" onClick={() => handleCopy(acc.acc_num)}>
								<CopyAllIcon/>
							</IconButton>
						</ListItem>
					))}
					
				</List>
			</div>
		</div>
		<div className="contact contact_woman">
			<Button sx={{ width: '100%', maxWidth: 500}} variant="contained" color="primary" onClick={handleWomanShow}>
				신부측 계좌번호
			</Button>
			
			<div className={isWomanShow ? "accs accs_woman" : "acc_none"}> 
				<List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper', borderRadius:3,boxShadow:2, border:1, borderColor:'#673ab7' }}>
					{womanAccs.map(acc => (
						<ListItem key={acc.num}>
							<ListItemText primary={acc.name} secondary={acc.acc_name + " : " + acc.acc_num_divider} />	
							<IconButton aria-label="copy" color="secondary" onClick={() => handleCopy(acc.acc_num)}>
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
	</ThemeProvider>
  )
}

const manAccs = [
	{
		num: 0,
		name : "홍길동",
		acc_name: '국민은행',
		acc_num_divider: '111111-11-111000',
		acc_num: '11111111111001'
	  },
	  {
		num: 1,
		name : "홍길동",
		acc_name: '국민은행',
		acc_num_divider: '111111-11-111000',
		acc_num: '11111111111002'
	  },
	  {
		num: 2,
		name : "홍길동",
		acc_name: '국민은행',
		acc_num_divider: '111111-11-111000',
		acc_num: '11111111111003'
	  },
];

const womanAccs = [
	{
		num: 0,
		name : "홍길동",
		acc_name: '국민은행',
		acc_num_divider: '111111-11-111000',
		acc_num: '11111111111004'
	  },
	  {
		num: 1,
		name : "홍길동",
		acc_name: '국민은행',
		acc_num_divider: '111111-11-111000',
		acc_num: '11111111111005'
	  },
];
