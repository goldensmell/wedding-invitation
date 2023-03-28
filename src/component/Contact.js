import React, {useState} from 'react'
import './Contact.css'

export default function Contact() {

	const [isManShow, setManShow] = useState(false);
	const [isWomanShow, setWomanShow] = useState(false);

	const handleManShow = () => {
		setManShow(!isManShow);
	}

	const handleWomanShow = () => {
		setWomanShow(!isWomanShow);
	}

  return (
    <div className="contacts">
			<p>마음 보내실 곳</p>
			<div className="contact contact_man">
				<button className="contact_show" onClick={handleManShow}>
					신랑측 계좌번호
				</button>
				<div className={isManShow ? "accs accs_man" : "acc_none"}> 
					<div className="acc acc_man">
						<p>임종국 <br/> 국민은행 57080204035949 </p>
						<button className="copy">복사</button>
					</div>
					<div className="acc acc_man">
                        <p>길금숙 <br/> 국민은행 57080204035949 </p>
						<button className="copy">복사</button>
					</div>
					<div className="acc acc_man">
						<p>임현수 <br/> 케이뱅크 100-101-195317 </p>
						<button className="copy">복사</button>
					</div>
				</div>
			</div>
			<div className="contact contact_woman" onClick={handleWomanShow}>
				<button className="contact_show">
					신부측 계좌번호
				</button>
				<div className={isWomanShow ? "accs accs_woman" : "acc_none"}> 
					<div className="acc acc_woman">
						<p>임현수 <br/> 국민은행 57080204035949 </p>
						<button className="copy">복사</button>
					</div>
					<div className="acc acc_woman">
						<p>김유미 <br/> 국민은행 57080204035949 </p>
						<button className="copy">복사</button>
					</div>
				</div>
			</div>
		</div>
  )
}
