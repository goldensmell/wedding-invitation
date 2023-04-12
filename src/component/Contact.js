import React, {useEffect, useState} from 'react'
import './Contact.css';
import img_contact from '../images/contacts-flower.png';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CopyAllIcon from '@mui/icons-material/CopyAll';

export default function Contact() {

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
    <div className="contacts">
		{/* <img className='contacs-flower' src={img_contact}></img> */}
     	 <p className='contacts-title'>마음 보내실 곳</p>

		<div className="contact contact_man">
			<button className="contact_show contact-button" onClick={handleManShow}>
				신랑측 계좌번호
			</button>
			<div className={isManShow ? "accs accs_man" : "acc_none"}> 
				<List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
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
			<button className="contact_show contact-button" onClick={handleWomanShow}>
				신부측 계좌번호
			</button>
			
			<div className={isWomanShow ? "accs accs_woman" : "acc_none"}> 
				<List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
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
