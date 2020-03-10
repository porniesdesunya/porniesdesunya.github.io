class Card {
	constructor(link) {
		let container2 = document.createElement('div');
		container2.classList.add('col-lg-3');
		container2.classList.add('col-md-6');
		container2.classList.add('mb-4');

		let container1 = document.createElement('div');
		container1.classList.add('card');
		container1.classList.add('h-100');

		let iframes = document.createElement('iframe');
		iframes.src = "https://mega.nz/embed#" + link;
		console.log(iframes.src);
		iframes.setAttribute('allowFullScreen', '');

		container1.appendChild(iframes);
		container2.appendChild(container1);

		let listmaker = document.getElementById('putVideoHere');
		listmaker.appendChild(container2);
	}
}


function genererCard(links) {
	console.log("oui la voix oui");
	for (let i = 0; i < links.length; i++) {
		new Card(links[i]);
	}
}

let link = "QUTgb19rLldGY0RpOTPgLVNKMS56Z0x6N0bneERPO1gzZVgt9loxLjkscDh3JEhmWlcwPTpjY0g26VJ1LkpDOit1ZiExdljvV0psUzk0Mu96IVlkOUI2Ue5B9lZaTVhQQFRO72o/ROngMVVhOk5vOehBdU8nOi5SVEFjayxoMutHQ2dfSTlvZPYw6k8w4lTqNEVWTmhB53k1WiQtK+5GOWtVOk04Y1J6MlNBeURwIVouUOjuVUJZ4FhkZXdW9uJmTUkwbHR6WTlnPXlCN25nQTl3VUdvaSggeUPqTmxjZVJoQfZMSDNIWSdl+Xg/TU3iNTBSeeAxMzlAT0XgaVXrSFFTUSVGLVJueWbuSe5mQUXiRjlBUXZXY0fpUOA3ZnQ1NDJ4ZDBoUEYgSOd0bEcpR+42JUhJSUxlUkdU5/lyWkJ4M3djY2xoM0QxU0lWOmJpaWp06lRtdkV5YTNaaTRSKHpUdXgvU0cqJFdBQ1FlNuBR6Fg3MTZua0lhOjho7kQ0dUQgOkdp4jNYcO5ZXzp3S3hYZehvavZXeTdE5+nidlNfSVMqUiFuQ1UxIVA5RVVVOjh29OtrV05aeTY06+BWOfYqOz1qSidTJ05V9nXndVNQ5/Tg6ipWUXRVUkMqWDDpVUdDMTQgeSFz9Eg/V1ZTQUc5d05rUUhKNUxwM0Fy6lZ46e9zJz1MV0g/VFJu9DRHZzBwY07gTzbnMFNmQT82TVpCIOJOY2T5UTvi51RaUS9LK0R3VTNZeU1PVCxueU5JMEt6dEdmNjZU4k1vMVBwOjJjY0b0RVBZL1VjOkxkU1ZoOlVha0lXM1JvdEJqUXl29lZqcDBnZT1udEBfMktBakQkMDZu6PRhOjRwIe9W6TJYOjHg9jlKNV9hUDbp53HoOWh1U3RYMzBB6urqNVlrd+pvJTdNQuBTPS5y9lFVOulvL/laRTBCeU9E4kYtMzJYPXhBTkwz9i41REpaeVBUZ0VBNCtSVVpmUk/0cXPp7+40QiggeUF4VjU/T3lZQfltM2VXWSE2N2/rUEdCMVdNRkJVajFlSG1ma1HiSE1rTCpnakFTUlIlekdmQVXiTutoUTMyY3drMGhELflGTmZDgOoy6EAtMExLNO9RNSs4YjRSdkD2VzdBX0lkM1NKZ1ljYzhsRVI0L1ZUOvQ24npQUGhAcUNKVUwxMjZKUDdXWTRZa1hpbEtlNjFqITtZ9GQr6XdxJDJhOik5Ietw4OAnOnNTVk04U+dB6zN3TknrZThN7kZRUeIt6ztW6DhuUidnaDlzae9a7zNXLElVOlhFLkJVZU1Jeel24HcuS1I363hOQChELS45PVrgNud5MFlVTE1UOixvVUA6bXl0aWpwUyggeTc1VVZfTzBpQVBqNVZBPTdSJ0AxWjNI5+huazUxUlgx+TRiSydO4HdPZzZjaDFSenHiaUtmQSxmWVZ5UfZlY1joTVc4WD9uQic4OHpOQelAMkLpOU14OetX+fl26GnrZDgxUu42Q1M1P0ljY0Pgb09GOuBEOlRGJ1ZsNWg2SFbgWENJcmJTJVJWT+nnUjUq61NVdSxzLEpVSWYrU3PiWTJhOlNZYehtV1ZfOklHLOlJWfZfakpmWHMubVlsU0IxNOh45082Tjhjejg1VvZtbz1I5yxHQ1FVOjXuL0hTZetTeUs3dVVsU0dWYzQ24EBxVfZ0U0cweu5QPz1Q4idjaTZ2ODlMalNX6zZGRmEgeVF3VVZoZVYwQeJWNWZ0LfRH9EkkRzI56O93Qeg0YU5SR2z2b1cyZ0txU1VE4CdJ6EhMMDhmQflpRepULjVIY0ckTk9PaeBiQDZqLFFqP203dTI5WVFlRmRvUzFJ7lBvd/Y0LyxDcEJRQOhjY2zgMlhxJVdMOk9W6Vd4N0HoSDvoLzNZUDg0ZDl2SzHqVep5X1kp6lJlX+tPT2w2Ve9TSDZhOmR4OFE1VW5mOudI6zVoeWRfaSE3SW9WZOpRV0ltRU009ldYekkxROvpJEhkUmRXOTUx53M=";


let cle, phrase;
coordphrase = new Array();
coordphrase_cle = new Array();
newcoord = new Array();
coordcrypt = new Array();
alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789àâéêèëîïôöçù',!?.;:=+-()/@%$* _";

function decryptage() {
	decrypt = "";
	phrase_cle = "";
	let car = 0;
	cle = document.fcrypt.clecryptage.value;
	crypt = atob(link);
	if (cle != "" && crypt != "") {
		for (let o = 0; o < crypt.length; o++) {
			for (let b = 0; b < alpha.length; b++) {
				if (crypt.charAt(o) == alpha.charAt(b))
					coordcrypt[o] = b;
			}
		}
		for (let z = 0; z < crypt.length; z++) {
			phrase_cle += cle.charAt(car);
			car++;
			if (car == cle.length)
				car = 0;
		}
		for (let y = 0; y < phrase_cle.length; y++) {
			for (let u = 0; u < alpha.length; u++) {
				if (phrase_cle.charAt(y) == alpha.charAt(u))
					coordcrypt[y] -= u;
				if (coordcrypt[y] < 0)
					coordcrypt[y] += alpha.length;
			}
		}
		for (let t = 0; t < crypt.length; t++) {
			decrypt += alpha.charAt(coordcrypt[t]);
		}
		let links = [];
		links = decrypt.split(" ");
		console.log(links);
		genererCard(links);
	} else
		alert("no password please retry");
}
