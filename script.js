if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((pos)=>{
  	alert('lat: '+ pos.coords.latitude + ' long: ' + pos.coords.longitude);
  },
  (err)=>{
  	console.log('err', err);
  }
  	);

}
