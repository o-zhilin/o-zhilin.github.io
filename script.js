if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((pos)=>{
  	console.log('pos', pos);
  	alert(JSON.stringify(pos));
  	document.write(JSON.stringify(pos));
  },
  (err)=>{
  	console.log('err', err);
  }
  	);

}
