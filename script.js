if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((pos)=>{
  	console.log('pos', pos);
  },
  (err)=>{
  	console.log('err', err);
  }
  	);

}
