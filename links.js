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

let link = "QUTgb19rLldGY0RpOTPgLVNKMS56Z0x6N0bneERPO1gzZVgt9loxLjkscDh3JEhmWlcwPTpjY0g26VJ1LkpDOit1ZiExdljvV0psUzk0Mu96IVlkOUI2Ue5B9lZaTVhQQFRO72o/ROngMVVhOk5vOehBdU8nOi5SVEFjayxoMutHQ2dfSTlvZPYw6k8w4lTqNEVWTmhB53k1WiQtK+5GOWtVOk04Y1J6MlNBeURwIVouUOjuVUJZ4FhkZXdW9uJmTUkwbHR6WTlnPXlCN25nQTl3VUdvaSggeUPqTmxjZVJoQfZMSDNIWSdl+Xg/TU3iNTBSeeAxMzlAT0XgaVXrSFFTUSVGLVJueWbuSe5mQUXiRjlBUXZXY0fpUOA3ZnQ1NDJ4ZDBoUEYgSOd0bEcpR+42JUhJSUxlUkdU5/lyWkJ4M3djY2xoM0QxU0lWOmJpaWp06lRtdkV5YTNaaTRSKHpUdXgvU0cqJFdBQ1FlNuBR6Fg3MTZua0lhOjho7kQ0dUQgOkdp4jNYcO5ZXzp3S3hYZehvavZXeTdE5+nidlNfSVMqUiFuQ1UxIVA5RVVVOjh29OtrV05aeTY06+BWOfYqOz1qSidTJ05V9nXndVNQ5/Tg6ipWUXRVUkMqWDDpVUdDMTQgeSFz9Eg/V1ZTQUc5d05rUUhKNUxwM0Fy6lZ46e9zJz1MV0g/VFJu9DRHZzBwY07gTzbnMFM=";


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
