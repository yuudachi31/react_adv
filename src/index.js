import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { $ }  from 'react-jquery-plugin'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
$('.contr').hover(
	function(){
		$('.bkh').css('opacity','1');
		$('.spr').css('transform','rotateZ(35765deg)');
		$('.spr2').css('transform','rotateX(75deg)');
		$('.bkh').css('transform','rotateX(-75deg)');
		$('.sq1').css('width','10px').css('height','10px');
		$('.sq2').css('width','10px').css('height','10px');
		$('.sq3').css('width','10px').css('height','10px');
		$('.sq4').css('width','10px').css('height','10px');
		$('.sq5').css('width','10px').css('height','10px');
		$('.sq6').css('width','10px').css('height','10px');
		$('.sq7').css('width','10px').css('height','10px');
		$('.sq8').css('width','10px').css('height','10px');
		$('.sq9').css('width','10px').css('height','10px');
		$('.sq10').css('width','10px').css('height','10px');
		$('.sq11').css('width','10px').css('height','10px');
		$('.sq12').css('width','10px').css('height','10px');
		$('.sq13').css('width','10px').css('height','10px');
		$('.sq14').css('width','10px').css('height','10px');
		$('.sq15').css('width','10px').css('height','10px');
		$('.sq16').css('width','10px').css('height','10px');
		$('.sq17').css('width','10px').css('height','10px');
		$('.sq18').css('width','10px').css('height','10px');
		$('.sq19').css('width','10px').css('height','10px');
		$('.sq20').css('width','10px').css('height','10px');
		$('.sq21').css('width','10px').css('height','10px');
		$('.sq22').css('width','10px').css('height','10px');
		$('.sq23').css('width','10px').css('height','10px');
		$('.sq24').css('width','10px').css('height','10px');
		$('.sq25').css('width','10px').css('height','10px');
		$('.sq26').css('width','10px').css('height','10px');
		$('.sq27').css('width','10px').css('height','10px');
		$('.sq28').css('width','10px').css('height','10px');
		$('.sq29').css('width','10px').css('height','10px');
		$('.sq30').css('width','10px').css('height','10px');
		$('.sq31').css('width','10px').css('height','10px');
	
	},function(){
		$('.bkh').css('opacity','0');
		$('.spr').css('transform','rotateZ(-10deg)');
		$('.spr2').css('transform','rotateX(-15deg)');
		$('.bkh').css('transform','rotateX(0deg)');
		$('.sq31').css('width','100px').css('height','100px');
	
	}
	
	
	)
$('.bling').hover(
	function(){
		$('.bling').css('transform','rotateZ(888888deg)');
	}
	,function(){
		$('.bling').css('transform','rotateZ(-8000deg)');
	}
)