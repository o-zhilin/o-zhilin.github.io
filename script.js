if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((pos)=>{
  	alert(pos.coords.latitude + ' ' + pos.coords.longitude);
  },
  (err)=>{
  	console.log('err', err);
  }
  	);

}
