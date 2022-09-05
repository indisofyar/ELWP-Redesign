var mWindow;
var marrMenus = [	["Home", "Home.html", "Home.htm", null, 1],											
					["Blog", "MailingList/index.php", "Blog.htm", null, 2],								
					[null, "MailingList/SignUp.php", "SignUp.htm", "Mailing list", null],								
					[null, "MailingList/confirm.php", "Confirm.htm", null, null],							
					[null, "MailingList/change.php", "Change.htm", null, null],								
					[null, "MailingList/delete.php", "Delete.htm", null, null],								
					["Our story", "Story.html", "Story.htm", null, 1],							
					["Supporters", "Supporters.html", "Supporters.htm", null, 1],						
					["Events", "Diary/Events.php", "Events.htm", null, 2],					
					["FAQs", "FAQ.html", "FAQ.htm", null, 1],
					["Join us", "JoinUs.html", "JoinUs.htm", null, 3],
					["Contact us", "ContactUs.php", "ContactUs.htm", "Contact", 1],						
					["Donate", "Sponsorship/index.php", "Donate.htm", null, 3],						
//					["Poll", "Poll/index.php", "Poll.htm", "Poll"],									
					["About us", "AboutUs.html", "AboutUs.htm", null, 4],
					[null, "Sponsorship/ThankYou.php", "ThankYou.htm", null, null],									
					[null, "Sponsorship/Cancel.php", "Cancel.htm", null, null],								
					[null, "Committee/Reset.php", "Reset.htm", null, null],	
					[null, "Committee/index.php", "Logon.htm", null, null],
					[null, "Sample.html", "Sample.htm", null, null]
				];
var mstrCaptcha;
var intPageNo = 0;
window.onpopstate = function(event) {
	if (location.hash == '') {
		var astrPage = rexPage.exec(location.pathname);
		for (var i = 0;
		i < marrMenus.length;
		i++) 
			if (astrPage[1] == encodeURIComponent(marrMenus[i][2])
			|| astrPage[1] == marrMenus[i][2]) 
				intFile =  i;
		LoadPageNumber (intFile, location.search, true);
	}
};
function Initialize () {
	var intFile = 0;
	rexPage = /^.*\/([^/?]*)(\?(.*))?$/;
	var astrPage = rexPage.exec(location.pathname);
	for (var i = 0;
		i < marrMenus.length;
		i++) {
		if (astrPage[1] == encodeURIComponent(marrMenus[i][2])
		|| astrPage[1] == marrMenus[i][2]) 
			intFile =  i;
	}
	RedoBanner ();
	if (astrPage[1] == "")
		LoadPageNumber (intFile, location.search, false);
	else
		LoadPageNumber (intFile, location.search, true);
}
function GetXhttp(rDiv) {	
	var xhttp;
	if (window.XMLHttpRequest)
		xhttp = new XMLHttpRequest();
	else
		xhttp = new ActiveObject("Microsoft.XMLHTTP");
	xhttp.onreadystatechange = function () {	
		if (xhttp.readyState == 4 
		&& xhttp.status == 200) {
			document.getElementById(rDiv).innerHTML = xhttp.responseText;
//			RedoBanner();
			var rexMessage = /\<p\s+class ?\= ?('|"|)(clsError|clsInformation)('|"|)\>\s*([\s\S]*?)\s*\<\/p\>/g;
			while (astrMessage = rexMessage.exec(xhttp.responseText))
				alert (astrMessage[4]);
			if (astrScript = /\<script[\s\S]*?\>([\s\S]*?)\<\/script\>/g.exec(xhttp.responseText)) 
				eval (astrScript[1]);
			if (rDiv == "idEdit")
				document.getElementById("idDisplay").innerHTML = document.getElementById("idText").value;
		}
	}
	return xhttp;
}
function ShowDropdown (rintWhich) {
	switch (rintWhich) {
		case 1:
			document.getElementById("idMobileMenu").style.display = "table";
			document.getElementById("idMobileShow").style.display = "none";
			document.getElementById("idMobileHide").style.display = "inline";
			break;
		case 2:
			ctlDropDown = document.getElementById("idMenuDropDown"); 
			btnDropDown = document.getElementById("idDropDown");
			ctlDropDown.style.top = (btnDropDown.offsetParent.offsetTop + btnDropDown.offsetTop + btnDropDown.offsetHeight) + "px";
			ctlDropDown.style.left = (btnDropDown.offsetParent.offsetLeft + btnDropDown.offsetLeft) + "px";
			ctlDropDown.style.display = "block";
			break;
	}
}
function HideMobileDropdown () {
	document.getElementById("idMobileMenu").style.display = "none";
	document.getElementById("idMobileShow").style.display = "inline";
	document.getElementById("idMobileHide").style.display = "none";
}
function LoadPage (rstrKey, rstrGet, rboolReload) {
	var intFile = marrMenus.findIndex (aKey => aKey[2] === rstrKey);
	LoadPageNumber (intFile, rstrGet, rboolReload);
}
function LoadPageNumber(rintFile, rstrGet, rboolReload) {
	alert (marrMenus[rintFile][1]);
/*	var xhttp = GetXhttp("main");
	xhttp.open("POST", marrMenus[rintFile][1], true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	if (marrMenus[rintFile][1] == "Diary/Events.php")
		rstrGet += "&WindowWidth=" + gintWindowWidth();
	if (rstrGet != '') 
		rstrGet = rstrGet.substring (1);
	xhttp.send(rstrGet);
	if (marrMenus[rintFile][3]) {
		mstrCaptcha = marrMenus[rintFile][3];
		document.getElementById("idCaptcha").style.visibility = "visible";
	}
	else
		document.getElementById("idCaptcha").style.visibility = "hidden";
	for (var i = 0;
		i < marrMenus.length;
		i++) 
		if (marrMenus[i][0]) {
			var cmdButton = document.getElementById ("idMenu" + i);
			if (i == rintFile) {
//				cmdButton.className = "MenuSel";
//				cmdButton.disabled = true;
				cmdButton.className = "active";
			}
			else {
//				cmdButton.className = "Menu";
//				cmdButton.disabled = false;
				cmdButton.className = "";
			}
		}
	if (!rboolReload) {
		var state = { 'page_id': intPageNo++};
		window.history.pushState(state, '', marrMenus[rintFile][2]);
	}
	gtag ('event', 'LoadPage', {
			'event_category' : 'Level 1',
			'event_label' : marrMenus[rintFile][2],
			'value' : rintFile
		}
	);
*/	
//	HideMobileDropdown();
//	document.getElementById("idMobileMenu").style.display = "none";
}
function ExpandSection (rDiv1, rDiv2, rFile, rExpand, rContract){
	var xhttp = GetXhttp(rDiv1);
	xhttp.open ("POST", rFile, true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
	document.getElementById (rExpand).hidden = true;
	document.getElementById (rContract).hidden = false;
	document.getElementById (rDiv2).hidden = true;
}
function ContractSection (rDiv1, rDiv2, rExpand, rContract) {
	document.getElementById(rDiv1).innerHTML = "";
	document.getElementById (rExpand).hidden = false;
	document.getElementById (rContract).hidden = true;
	document.getElementById (rDiv2).hidden = false;
}
function ExpandFAQ(rDiv, rExpand, rContract){
	document.getElementById (rExpand).hidden = true;
	document.getElementById (rContract).hidden = false;
	document.getElementById (rDiv).hidden = false;
}
function ContractFAQ(rDiv, rExpand, rContract) {
	document.getElementById (rExpand).hidden = false;
	document.getElementById (rContract).hidden = true;
	document.getElementById (rDiv).hidden = true;
}
function DoDropdown (rDiv, rFile) {
	if (document.getElementById(rDiv).innerHTML.trim() == "") {
		var xhttp = GetXhttp(rDiv);
		xhttp.open ("POST", rFile, true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}
	else {
		document.getElementById(rDiv).innerHTML = "";
	}
}
function RedoBanner (){
/*	var strHtml1 = "";
	var strHtml2 = "";
	var intMenuItems = 0;
	var cintMinWidth = 350;
	var cintMaxWidth = 1910;
	var cintMinMenu = 0;
	var cintMaxMenu = 10;
	var cfltMinLogoWidth = 30;
	var cfltMaxLogoWidth = 7;
	var cfltMinMenuWidth = 40;
	var cfltMaxMenuWidth = 86;
	var intMenuMax = fltStraightLineLookup (cintMinWidth, cintMaxWidth, cintMinMenu, cintMaxMenu, window.innerWidth);
	document.getElementById("idIcon").style.width = fltStraightLineLookup (cintMinWidth, cintMaxWidth, cfltMinLogoWidth, cfltMaxLogoWidth, window.innerWidth) + "%";
	document.getElementById("idBanner").style.width = fltStraightLineLookup (cintMinWidth, cintMaxWidth, cfltMinMenuWidth, cfltMaxMenuWidth, window.innerWidth) + "%";
*/
	var strHtml = "<ul>";
	var strHtml1 = "<ul>";
	var strHtml2 = "<ul>";
	var strHtml3 = "<ul>";
	var strHtml4 = "<ul>";
	for (var i = 0;
		i < marrMenus.length;
		i++) 
	if (marrMenus[i][0]) {
//		intMenuItems++;
		strHtml += 	"	<li		onClick='LoadPageNumber(" + i + ", \"\", false);' "
				+	"			id='idMenu" + i + "'"
				+	"			style='cursor:pointer;'>"
				+				marrMenus[i][0]
				+	"	</li>";
		switch (marrMenus[i][4]) {
			case 1:
				strHtml1 +=	"	<li		onClick='LoadPageNumber(" + i + ", \"\", false);' "
						+	"			style='cursor:pointer;'>"
						+				marrMenus[i][0]
						+	"	</li>";
				break;
			case 2:
				strHtml2 +=	"	<li		onClick='LoadPageNumber(" + i + ", \"\", false);' "
						+	"			style='cursor:pointer;'>"
						+				marrMenus[i][0]
						+	"	</li>";
				break;
			case 3:
				strHtml3 +=	"	<li		onClick='LoadPageNumber(" + i + ", \"\", false);' "
						+	"			style='cursor:pointer;'>"
						+				marrMenus[i][0]
						+	"	</li>";
				break;
			case 4:
				strHtml4 +=	"	<li		onClick='LoadPageNumber(" + i + ", \"\", false);' "
						+	"			style='cursor:pointer;'>"
						+				marrMenus[i][0]
						+	"	</li>";
				break;
		}
/*		if (intMenuItems < intMenuMax)
			strHtml1 += "<button type='button'"
				+	"			onClick='LoadPageNumber(" + i + ", \"\", false);' "
				+	"			id='idMenu" + i + "'"
				+	"			class='Menu'>"
				+				marrMenus[i][0].toUpperCase()
				+	"	</button>";
		else
			strHtml2 += "<button type='button'"
				+	"			onClick='LoadPageNumber(" + i + ", \"\", false);' "
				+	"			id='idMenu" + i + "'"
				+	"			class='Menu'" 
				+	"			style='display:block;'>"
				+				marrMenus[i][0].toUpperCase()
				+	"	</button>";
*/				
	}
	strHtml += "</ul>";
	strHtml1 += "</ul>";
	strHtml2 += "</ul>";
	strHtml3 += "</ul>";
	strHtml4 += "</ul>";
/*	if (intMenuMax <= 1) {
		strHtml1 = "	<img	onClick='ShowDropdown(1);'"
				+	"			id='idMobileShow'"
				+	"			class='Menu'" 
				+	"			style='display:inline; width:40px; height:40px;'"
				+	"			src='Logos/ELWP-Menu Open.svg'"		
				+	"	/>"
				+	"	<img 	onClick='HideMobileDropdown();'"
				+	"			id='idMobileHide'"
				+	"			class='Menu'" 
				+	"			style='display:none; width:40px; height:40px;'"
				+	"			src='Logos/ELWP-Menu Close.svg'"		
				+	"	/>";
		strHtml2 += "	<a		href='https://www.facebook.com/East-London-Waterworks-Park-112962111397071/'"
				+ 	"			onMouseOver='MenuTooltip(\"Facebook\");'"
				+ 	"			onMouseOut='MenuUntooltip(this);'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/ELWP-Socials Facebook Icon.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://www.instagram.com/waterloversoflondon/'"
				+	"			onMouseOver='MenuTooltip(\"Instagram\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/ELWP-Socials Instagram Icon.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://mobile.twitter.com/ELWaterworks'"
				+	"			onMouseOver='MenuTooltip(\"Twitter\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/ELWP-Socials Twitter Icon.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://www.linkedin.com/company/east-london-waterworks-park'"
				+	"			onMouseOver='MenuTooltip(\"LinkedIn\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/LINKEDIN ICON-07.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://www.youtube.com/channel/UC-OCTnPOZCduOWm9-_v3mvg/'"
				+	"			onMouseOver='MenuTooltip(\"YouTube\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/YOUTUBE ICON-08.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<img	onMouseOver='MenuTooltip(\"Logon\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			onClick='LoadPage(\"Logon.htm\", \"\", false);'"
				+	"			class='Menu'" 
				+	"			src='Logos/ELWP-Socials Member LogIn Icon.svg'"
				+	"			style='width:20px;height:20px;'"
				+	"	/>";
		document.getElementById('idMobileMenu').innerHTML = "<tr><td>" + strHtml2 + "</td></tr>";
		document.getElementById('idBanner').style.textAlign = "right";
		document.getElementById("idMobileMenu").style.display = "none";
	}
	else {
		if (intMenuItems >= intMenuMax)
			strHtml1 += "<button type='button'"
				+	"			onClick='ShowDropdown(2);'"
				+	"			id='idDropDown'"
				+	"			class='Menu'>"
				+	"			More"
				+	"	</button>";
		strHtml1 += "	<a		href='https://www.facebook.com/East-London-Waterworks-Park-112962111397071/'"
				+ 	"			onMouseOver='MenuTooltip(\"Facebook\");'"
				+ 	"			onMouseOut='MenuUntooltip(this);'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/ELWP-Socials Facebook Icon.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://www.instagram.com/waterloversoflondon/'"
				+	"			onMouseOver='MenuTooltip(\"Instagram\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/ELWP-Socials Instagram Icon.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://mobile.twitter.com/ELWaterworks'"
				+	"			onMouseOver='MenuTooltip(\"Twitter\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/ELWP-Socials Twitter Icon.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://www.linkedin.com/company/east-london-waterworks-park'"
				+	"			onMouseOver='MenuTooltip(\"LinkedIn\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/LINKEDIN ICON-07.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<a		href='https://www.youtube.com/channel/UC-OCTnPOZCduOWm9-_v3mvg/'"
				+	"			onMouseOver='MenuTooltip(\"YouTube\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			target=_blank>"
				+	"			<img	src='Logos/YOUTUBE ICON-08.svg'"
				+	"					style='width:20px;height:20px;'"
				+	"			/></a>"
				+	"	<img 	onMouseOver='MenuTooltip(\"Logon\");'"
				+	"			onMouseOut='MenuUntooltip();'"
				+	"			onClick='LoadPage(\"Logon.htm\", \"\", false);'"
				+	"			class='Menu'" 
				+	"			src='Logos/ELWP-Socials Member LogIn Icon.svg'"
				+	"			style='width:20px;height:20px;'"
				+	"	/>";
		document.getElementById("idMenuDropDown").innerHTML = strHtml2;
		document.getElementById('idMobileMenu').innerHTML = "";
		document.getElementById('idBanner').style.textAlign = "center";
	}
	document.getElementById("idMenu").innerHTML = strHtml1;
	document.getElementById("idPage").style.paddingTop = (document.getElementById("idHeader").offsetHeight + document.getElementById("idHeader").offsetTop * 2) + "px";
	document.getElementById("idMobileMenu").style.paddingTop = (document.getElementById("idHeader").offsetHeight + document.getElementById("idHeader").offsetTop * 2) + "px";
*/
	document.getElementById("navbar").innerHTML = strHtml;	
	document.getElementById("idFooter1").innerHTML = strHtml1;	
	document.getElementById("idFooter2").innerHTML = strHtml2;	
	document.getElementById("idFooter3").innerHTML = strHtml3;	
	document.getElementById("idFooter4").innerHTML = strHtml4;	
}
function MenuTooltip (rstrText) {
	ctlTooltip = document.getElementById("idTooltip"); 
	ctlTooltip.innerHTML = rstrText;
//	ctlTooltip.style.top = (this.event.clientY + 1) + "px";
//	ctlTooltip.style.left = (this.event.clientX + 1) + "px";
	ctlTooltip.style.display = "block";
	var intWidth = ctlTooltip.offsetWidth;
	var intHeight = ctlTooltip.offsetHeight;
	ctlTooltip.style.display = "none";
	if (event.clientY < document.body.offsetHeight / 2) { 
		ctlTooltip.style.top = (event.clientY + 1) + "px";
		ctlTooltip.style.maxHeight = (document.body.offsetHeight - event.clientY - 1) + "px";
	}
	else {
		ctlTooltip.style.top = (event.clientY - intHeight - 1) + "px";
		ctlTooltip.style.maxHeight = (event.clientY - 1) + "px";
	}
	if (event.clientX < document.body.offsetWidth / 2) {
		ctlTooltip.style.left = (event.clientX + 1) + "px";
		ctlTooltip.style.maxWidth = (document.body.offsetWidth - event.clientX - 1) + "px";
	}
	else {
		ctlTooltip.style.left = (event.clientX - intWidth - 1) + "px";
		ctlTooltip.style.maxWidth = (event.clientX - 1) + "px";
	}
	ctlTooltip.style.display = "block";
}
function MenuUntooltip () {
	ctlTooltip = document.getElementById("idTooltip"); 
	ctlTooltip.style.display = "none";
}

function SetPadding () {
	document.getElementById("idPage").style.paddingTop = (document.getElementById("idHeader").offsetHeight + document.getElementById("idHeader").offsetTop * 2) + "px";
}
function fltStraightLineLookup (rX1, rX2, rY1, rY2, rX){
	return ((rX - rX1)*(rY2 - rY1)/(rX2 - rX1) + rY1);
}
/*
function GetWindowDetails(rElement){
	var txt = "";
	cssObj = window.getComputedStyle(rElement, null)
	for (i = 0; 
		i < cssObj.length; 
		i++) { 
		cssObjProp = cssObj.item(i)
		txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
	}
	document.getElementById("idTest").innerHTML = txt;
}
*/
//ContactUs.php
function CheckEmail (rrexEmail) {	
	if (!rrexEmail.test (document.getElementById ("idFrom").value)) {	
		alert ('Please enter a valid email address.');
		return false;
	}
}
function DoSubmit () {
	grecaptcha.reset();
	if (document.getElementById("idName").value == "") 
		alert ('Please enter your name.');
	else if (document.getElementById("idFrom").value == "") 
		alert ('Please enter your email address.');
	else if (document.getElementById("idSubject").value == "") 
		alert ('Please enter a subject line.');
	else if (document.getElementById ("idComments").value == "") 
		alert ('Please enter your comments.');
	else 
		grecaptcha.execute();
}
//Committee/index.php
function Login () {
	document.getElementById("idCaptcha").style.visibility = "hidden";
	var xhttp = GetXhttp("idPage");
	xhttp.open ("POST", "Committee/index.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("Attempts=" + document.getElementById("idAttempts").value + "&Action=Login");
}
function Logout () {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/index.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("Action=Logout");
}
function Forgotten1 () {
	mstrCaptcha = "Reset";
	document.getElementById("idCaptcha").style.visibility = "visible";
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Forgotten.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("Attempts=" + document.getElementById("idAttempts").value);
}
function Register1 () {
	mstrCaptcha = "Register";
	document.getElementById("idCaptcha").style.visibility = "visible";
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Register.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send ("Attempts=" + document.getElementById("idAttempts").value);
}
function Change1 () {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Change.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("Attempts=" + document.getElementById("idAttempts").value);
}
function Library() {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Library.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
function Circles() {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "Diary/Circles.html", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
function Editor() {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "MailingList/Admin/index.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
function Fundraiser() {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Sponsorship/Admin/index.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
function Users () {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Admin/Admin.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
function Audit () {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Admin/Audit.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}
//Committee/Forgotten.php
function Forgotten2 (rrexEmail) {
	grecaptcha.reset();
	var txtEmail = document.getElementById("idEmail");
	if (!rrexEmail.test (txtEmail.value)) {
		alert ('Please enter a valid email address.');
		txtEmail.focus();
	}
	else {
		mstrAction = "Reset";
		grecaptcha.execute();
	}
}
//Committee/Change.php
function Change2 (rrexEmail, rrexPassword, rrexPassword1, rrexPassword2, rrexPassword3) {
	var txtName = document.getElementById ("idName");
	var txtEmail = document.getElementById ("idEmail");
	var txtPassword = document.getElementById ("idPassword");
	var txtPassword1 = document.getElementById ("idPassword1");
	var hidAttempts = document.getElementById ("idAttempts");
	if (!rrexEmail.test (txtEmail.value)) {
		alert ('Please enter a valid email address.');
		txtEmail.focus();
	}
	else if (!rrexPassword.test (txtPassword.value)) {
		alert ('The password should be between 8 and 16 characters long, with no spaces.');
		txtPassword.focus();
	}
	else if (!rrexPassword1.test (txtPassword.value)
		|| !rrexPassword2.test (txtPassword.value)
		|| !rrexPassword3.test (txtPassword.value)) {
		alert ('The password should include a lower-case letter, an upper-case letter and a digit.');
		txtPassword.focus();
	}
	else if (txtPassword.value != txtPassword1.value) {
		alert ('Please ensure you enter exactly the same password in both fields.');
		txtPassword1.focus();
	}
	else if (txtName.value == '') {
		alert ('Please enter your name.');
		txtName.focus();
	}
	else {
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append ("txtEmail", txtEmail.value);
		formData.append ("txtPassword", txtPassword.value);
		formData.append ("txtPassword1", txtPassword1.value);
		formData.append ("txtName", txtName.value);
		formData.append ("hidAttempts", hidAttempts.value);
		formData.append ("hidAction", "Change");
		xhttp.open ("POST", "Committee/Change.php", true);
		xhttp.send (formData);
	}
}
//Committee/Reset.php
function ResetUser (rrexPassword, rrexPassword1, rrexPassword2, rrexPassword3) {
	var txtName = document.getElementById ("idName");
	var txtEmail = document.getElementById ("idEmail");
	var txtPassword = document.getElementById ("idPassword");
	var txtPassword1 = document.getElementById ("idPassword1");
	var hidCode = document.getElementById ("idCode");
	if (!rrexPassword.test (txtPassword.value)) {
		alert ('The password should be between 8 and 16 characters long, with no spaces.');
		txtPassword.focus();
	}
	else if (!rrexPassword1.test (txtPassword.value)
		|| !rrexPassword2.test (txtPassword.value)
		|| !rrexPassword3.test (txtPassword.value)) {
		alert ('The password should include a lower-case letter, an upper-case letter and a digit.');
		txtPassword.focus();
	}
	else if (txtPassword.value != txtPassword1.value) {
		alert ('Please ensure you enter exactly the same password in both fields.');
		txtPassword1.focus();
	}
	else {
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append ("Email", txtEmail.value);
		formData.append ("txtPassword", txtPassword.value);
		formData.append ("txtPassword1", txtPassword1.value);
		formData.append ("txtName", txtName.value);
		formData.append ("Code", hidCode.value);
		formData.append ("hidAction", "Reset");
		xhttp.open ("POST", "Committee/Reset.php", true);
		xhttp.send (formData);
	}
}
//Committee/Register.php
function Register (rrexEmail, rrexPassword, rrexPassword1, rrexPassword2, rrexPassword3) {
	grecaptcha.reset();
	var txtName = document.getElementById ("idName");
	var txtEmail = document.getElementById ("idEmail");
	var txtPassword = document.getElementById ("idPassword");
	var txtPassword1 = document.getElementById ("idPassword1");
	var tikAgree = document.getElementById("idAgree");
	if (!rrexEmail.test (txtEmail.value)) {
		alert ('Please enter a valid email address.');
		txtEmail.focus();
	}
	else if (!rrexPassword.test (txtPassword.value)) {
		alert ('The password should be between 8 and 16 characters long, with no spaces.');
		txtPassword.focus();
	}
	else if (!rrexPassword1.test (txtPassword.value)
		|| !rrexPassword2.test (txtPassword.value)
		|| !rrexPassword3.test (txtPassword.value)) {
		alert ('The password should include a lower-case letter, an upper-case letter and a digit.');
		txtPassword.focus();
	}
	else if (txtPassword.value != txtPassword1.value) {
		alert ('Please ensure you enter exactly the same password in both fields.');
		txtPassword1.focus();
	}
	else if (txtName.value == '') {
		alert ('Please enter your name.');
		txtName.focus();
	}
	else if (!tikAgree.checked) {
		alert ('Please indicate that you have read and agree to the Governance Document.');
		tikAgree.focus();
	}
	else {
		mstrAction = "Register";
		grecaptcha.execute();
	}
}
//Committee/Library.php
function DoSelectCategory (rintCategory) {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Library.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send ("Category=" + rintCategory);
}
function DoInsertCategory () {	
	var txtName = document.getElementById("idNameNew");
	var txtRead = document.getElementById("idCReadLevelNew");
	var txtWrite = document.getElementById("idCWriteLevelNew");
	if (txtName.value == '')
		alert ('The folder name must not be blank.');
	else {
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append ("Category", document.getElementById("idCategory").value);
		formData.append ("Path", document.getElementById("idPath").value);
		formData.append ("Name", txtName.value);
		formData.append ("CReadLevel", txtRead.value);
		formData.append ("CWriteLevel", txtWrite.value);
		formData.append ("Action", "InsertCategory");
		xhttp.open ("POST", "Committee/Library.php", true);
		xhttp.send (formData);
	}
}
function DoChangeCategory (rintCategory) {
	var txtName = document.getElementById("idName" + rintCategory);
	var txtRead = document.getElementById("idCReadLevel" + rintCategory);
	var txtWrite = document.getElementById("idCWriteLevel" + rintCategory);
	if (txtName.value == '')
		alert ('The folder name must not be blank.');
	else {
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append ("Category", document.getElementById("idCategory").value);
		formData.append ("Child", rintCategory);
		formData.append ("Path", document.getElementById("idPath").value);
		formData.append ("Name", txtName.value);
		formData.append ("CReadLevel", txtRead.value);
		formData.append ("CWriteLevel", txtWrite.value);
		formData.append ("Action", "ChangeCategory");
		xhttp.open ("POST", "Committee/Library.php", true);
		xhttp.send (formData);
	}
}
function DoMoveCategory (rintCategory) {
	var xhttp = GetXhttp ("idPage");
	var formData = new FormData();
	formData.append ("Category", document.getElementById("idCategory").value);
	formData.append ("Child", rintCategory);
	formData.append("ReadLevel", document.getElementById("idCReadLevel" + rintCategory).value);
	formData.append("WriteLevel", document.getElementById("idCWriteLevel" + rintCategory).value);
	formData.append ("Path", document.getElementById("idPath").value);
	formData.append ("Action", "Move");
	xhttp.open ("POST", "Committee/LibraryMove.php", true);
	xhttp.send (formData);
}
function DoDeleteCategory (rintCategory) {	
	if (window.confirm ('Are you sure you want to delete this folder?')) {
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append ("Category", document.getElementById("idCategory").value);
		formData.append ("Child", rintCategory);
		formData.append ("Path", document.getElementById("idPath").value);
		formData.append ("Action", "DeleteCategory");
		xhttp.open ("POST", "Committee/Library.php", true);
		xhttp.send (formData);
	}
}
function DoInsertFile () {
	var txtDescription = document.getElementById("idDescriptionNew");
	var txtRead = document.getElementById("idFReadLevelNew");
	var txtWrite = document.getElementById("idFWriteLevelNew");
	var filName = document.getElementById('idUserFile');
	if (txtDescription.value == '')
		alert ('The file description must not be blank.');
	else if (filName.files.length == 0) 
		alert ('Please select a file to upload.');
	else {
		var xhttp = GetXhttp ("idPage");
		var fFile = filName.files[0];
		var formData = new FormData();
		formData.append('Category', document.getElementById("idCategory").value);
		formData.append('UserFile', fFile);
		formData.append('Description', txtDescription.value);
		formData.append ("FReadLevel", txtRead.value);
		formData.append ("FWriteLevel", txtWrite.value);
		formData.append('Path', document.getElementById("idPath").value);
		formData.append('Action', 'InsertFile');
		formData.append('MAX_FILE_SIZE', 5000000);
		xhttp.open ("POST", "Committee/Library.php", true);
		xhttp.send (formData);
	}
}
function DoUpload (rintFile) {
	var txtDescription = document.getElementById("idDescription" + rintFile);
	var txtRead = document.getElementById("idFReadLevel" + rintFile);
	var txtWrite = document.getElementById("idFWriteLevel" + rintFile);
	var filName = document.getElementById("idUserFile");
	if (txtDescription.value == '')
		alert ('The file description must not be blank.');
	else if (filName.files.length == 0)
		alert ('Please select the file to upload.');
	else {
		var xhttp = GetXhttp ("idPage");
		var fFile = filName.files[0];
		var formData = new FormData();
		formData.append('Category', document.getElementById("idCategory").value);
		formData.append('File', rintFile);
		formData.append('UserFile', fFile);
		formData.append('Description', txtDescription.value);
		formData.append ("FReadLevel", txtRead.value);
		formData.append ("FWriteLevel", txtWrite.value);
		formData.append('Path', document.getElementById("idPath").value);
		formData.append('MAX_FILE_SIZE', 5000000);
		formData.append('Action', 'Upload');
		xhttp.open ("POST", "Committee/Library.php", true);
		xhttp.send (formData);
	}
}
function DoDownload (rintFile) {
	window.open ("Committee/Display.php?File=" + rintFile);
}
function DoChangeFile (rintFile) {
	var txtDescription = document.getElementById("idDescription" + rintFile);
	var txtRead = document.getElementById("idFReadLevel" + rintFile);
	var txtWrite = document.getElementById("idFWriteLevel" + rintFile);
	if (txtDescription.value == "")
		alert ('The file description must not be blank.');
	else {
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append('Category', document.getElementById("idCategory").value);
		formData.append('File', rintFile);
		formData.append('Description', txtDescription.value);
		formData.append ("FReadLevel", txtRead.value);
		formData.append ("FWriteLevel", txtWrite.value);
		formData.append('Action', 'ChangeFile');
		xhttp.open ("POST", "Committee/Library.php", true);
		xhttp.send (formData);
	}
}
function DoMoveFile (rintFile) {
//	var hidPath = document.getElementById("idPath");
	var xhttp = GetXhttp("idPage");
	var formData = new FormData();
	formData.append('Category', document.getElementById("idCategory").value);
	formData.append('File', rintFile);
	formData.append('ReadLevel', document.getElementById("idFReadLevel" + rintFile).value);
	formData.append('WriteLevel', document.getElementById("idFWriteLevel" + rintFile).value);
	formData.append('Path', document.getElementById("idPath").value);
	formData.append('Action', 'Move');
	xhttp.open ("POST", "Committee/LibraryMove.php", true);
	xhttp.send (formData);
}
function DoDeleteFile (rintFile) { 
	if (window.confirm ('Are you sure you want to delete this file?')) {
//		var hidPath = document.getElementById("idPath");
		var xhttp = GetXhttp ("idPage");
		var formData = new FormData();
		formData.append('Category', document.getElementById("idCategory").value);
		formData.append('File', rintFile);
		formData.append('Path', document.getElementById("idPath").value);
		xhttp.open ("POST", "Committee/Library.php", true);
		formData.append('Action', 'DeleteFile');
		xhttp.send (formData);
	}
}
function DoLink (rintFile) {
	var txtText = document.getElementById ("idLink" + rintFile);
	txtText.hidden = false;
	txtText.select();
	txtText.setSelectionRange(0, 99999); /* For mobile devices */
	document.execCommand("copy");
	txtText.hidden = true;
	alert("The link has been copied to the clipboard.");
}
//	Committee/LibraryMove.php	
function DoSelectCategoryMove (rintCategory) {
	var xhttp = GetXhttp ("idPage");
	var formData = new FormData();
	formData.append ("Category", rintCategory);
	formData.append ("Child", document.getElementById("idChild").value);
	formData.append ("ReadLevel", document.getElementById ("idReadLevel").value);
	formData.append ("WriteLevel", document.getElementById ("idWriteLevel").value);
	formData.append ("Path", document.getElementById("idPath").value);
	formData.append('File', document.getElementById("idFile").value);
	xhttp.open ("POST", "Committee/LibraryMove.php", true);
	xhttp.send (formData);
}
function ConfirmMove(rintReadLevel, rintWriteLevel){
	var xhttp = GetXhttp ("idPage");
	var formData = new FormData();
	formData.append ("Category", document.getElementById("idCategory").value);
	formData.append ("Child", document.getElementById("idChild").value);
	formData.append ("ReadLevel", rintReadLevel);
	formData.append ("WriteLevel", rintWriteLevel);
	formData.append ("Path", document.getElementById("idPath").value);
	formData.append('File', document.getElementById("idFile").value);
	formData.append ('Action', 'Move');
	xhttp.open ("POST", "Committee/Library.php", true);
	xhttp.send (formData);
}
function CancelMove() {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Library.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send ("Category=" + document.getElementById("idCategory").value);
}
function DoMenu () {
	document.getElementById("idCaptcha").style.visibility = "hidden";
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/index.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send ();
}
function Library2 () {
	var xhttp = GetXhttp ("idPage");
	xhttp.open ("POST", "Committee/Library.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send ("Category=" + document.getElementById("idCategory").value);
}
/*
// Sponsorship
function SponsorTooltip (rctl, event) {
	strData = rctl.attributes.getNamedItem('data-sponsor').value;
	if (strData == "")
		strData = rctl.attributes.getNamedItem('data-description').value;
	ctlTooltip = document.getElementById("idTooltip"); 
	ctlTooltip.innerHTML = strData;
	ctlTooltip.style.top = (event.clientY + 1) + "px";
	ctlTooltip.style.left = (event.clientX + 1) + "px";
	ctlTooltip.style.display = "block";
}
function SponsorUntooltip () {
	ctlTooltip = document.getElementById("idTooltip"); 
	ctlTooltip.style.display = "none";
}
function GoneMessage (rctl) {
	strData = rctl.attributes.getNamedItem('data-sponsor').value;
	alert (strData);
}
function AvailableMessage (rclt) {
	alert ('This square is available for you to sponsor.');
	strSponsor = prompt ('Enter your name to sponsor this square.');
	if (strSponsor != null) {
		var xhttp = GetXhttp ("idPage");
		xhttp.open ("POST", "Sponsorship/index.php", true);
		xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
		xhttp.send ("Sponsor=" + encodeURIComponent(strSponsor) + "&Description=" + rclt.attributes.getNamedItem('data-description').value + "&Action=Sponsor");
	}
}
*/
/* Mailing list */
function Subscribe(rrexEmail) {	
	grecaptcha.reset();
	if (rrexEmail.test (document.getElementById("idEmail").value)) {
		mstrAction = "Subscribe";
		grecaptcha.execute();
	}
	else {	
		alert ('Please enter a valid email address.');
		document.getElementById("idEmail").focus();
	}
}
function Change(rrexEmail) {	
	grecaptcha.reset();
	if (rrexEmail.test (document.getElementById("idEmail").value)) {
		mstrAction = "Change";
		grecaptcha.execute();
	}
	else {	
		alert ('Please enter a valid email address.');
		document.getElementById("idEmail").focus();
	}
}
function Unsubscribe(rrexEmail) {	
	grecaptcha.reset();
	if (rrexEmail.test (document.getElementById("idEmail").value)) {	
		mstrAction = 'Unsubscribe';
		grecaptcha.execute();
	}
	else {	
		alert ('Please enter a valid email address.');
		document.getElementById("idEmail").focus();
	}
}
/*	MailingList/index.php		*/
function BlogDisplay() {
//	if (document.getElementById ('idNewsletter').value == 0)
//		alert ('Please select the newsletter that you wish to display.');
//	else {
		var xhttp = GetXhttp("idPage");
		xhttp.open("POST", "MailingList/index.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//		xhttp.send("Newsletter=" + document.getElementById ('idNewsletter').value + "&Action=Display");
		xhttp.send("Newsletter=" + document.getElementById ('idNewsletter').value);  				
//	}
}
/*  MailingList/Admin/index.php */
function Newsletters () {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/Admin/Newsletters.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();  				
}
function MailingList () {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/Admin/MailingList.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();  				
}
function Editors () {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/Admin/Editors.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();  				
}
function BlogAudit () {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/Admin/Audit.php", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();  				
}
/* MailingList/Admin/Newsletters.php */
function BlogInsert () {
	var txtTitle = document.getElementById("idTitleNew");
	if (txtTitle.value == '')
		alert ('The title must not be blank.');
	else {
		var xhttp = GetXhttp("idPage");
		xhttp.open("POST", "MailingList/Admin/Newsletters.php", true);
		var formData = new FormData();
		formData.append ("txtTitle", txtTitle.value);
		formData.append ("hidAction", "Insert");
		xhttp.send (formData);
	}
}
function BlogUpdate (rintBlog) {
	var txtTitle = document.getElementById("idTitle" + rintBlog);
	if (txtTitle.value == '')
		alert ('The title must not be blank.');
	else {
		var xhttp = GetXhttp("idPage");
		xhttp.open("POST", "MailingList/Admin/Newsletters.php", true);
		var formData = new FormData();
		formData.append ("txtTitle", txtTitle.value);
		formData.append ("hidBlog", rintBlog);
		formData.append ("hidAction", "Update");
		xhttp.send (formData);
	}
}
function BlogDelete (rintBlog) {
	if (confirm ('Are you sure you want to delete this blog?')) {
		var xhttp = GetXhttp("idPage");
		xhttp.open("POST", "MailingList/Admin/Newsletters.php", true);
		var formData = new FormData();
		formData.append ("hidBlog", rintBlog);
		formData.append ("hidAction", "Delete");
		xhttp.send (formData);
	}
}
function BlogSelect (rintBlog) {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/Admin/Edit.php", true);
	var formData = new FormData();
	formData.append ("hidBlog", rintBlog);
	formData.append ("hidAction", "Select");
	xhttp.send (formData);
}
/*	MailingList/Admin/Edit.php */
function Tooltip (event) {
	strData = this.attributes.getNamedItem('data-desc').value;
	ctlTooltip = document.getElementById("idEditTooltip"); 
	ctlTooltip.innerHTML = strData;
	ctlTooltip.style.top = (event.clientY + 1) + "px";
	ctlTooltip.style.left = (event.clientX + 1) + "px";
	ctlTooltip.style.display = "block";
}
function Untooltip () {
	ctlTooltip = document.getElementById("idEditTooltip"); 
	ctlTooltip.style.display = "none";
}
function DoTags () {
	Untooltip();
	strData = this.attributes.getNamedItem('data-id').value;
	var txtBox = document.getElementById ("idText");
	var intStart = txtBox.selectionStart;
	var intFinish = txtBox.selectionEnd;
	var strOriginal = txtBox.value;
	var strStart = strOriginal.substring (0, intStart);
	var strMiddle = strOriginal.substring (intStart, intFinish);
	var strFinish = strOriginal.substring (intFinish, strOriginal.length);
	txtBox.focus();	
	switch (strData) {
		case "A":
			strExtra = " href = '" + document.getElementById("idURL").value.trim() + "' target = _blank";
			break;
		case "FIGURE":
			strExtra = " style = 'width:" + document.getElementById("idFigWidth").value.trim() + "%;'";
			break;
		default:
			strExtra = "";
			break;
	}
	if (this.classList.contains ("Sel"))
		if (intFinish > intStart) {
			txtBox.value = strStart + "</" + strData + ">" + strMiddle + "<" + strData + strExtra + ">" + strFinish;
			txtBox.setSelectionRange (intFinish + strData.length * 2 + strExtra.length + 5, intFinish + strData.length * 2 + strExtra.length + 5);
		}
		else {
			txtBox.value = strStart + "</" + strData + ">" + strFinish;
			this.classList.remove ("Sel");
			txtBox.setSelectionRange (intFinish + strData.length + 3, intFinish + strData.length + 3);
		}
	else
		if (intFinish > intStart) {
			txtBox.value = strStart + "<" + strData + strExtra + ">" + strMiddle + "</" + strData + ">" + strFinish;
			txtBox.setSelectionRange (intFinish + strData.length * 2 + strExtra.length + 5, intFinish + strData.length * 2 + strExtra.length + 5);
		}
		else {
			txtBox.value = strStart + "<" + strData + strExtra + ">" + strFinish;
			this.classList.add ("Sel");
			txtBox.setSelectionRange (intFinish + strData.length + strExtra.length + 2, intFinish + strData.length + strExtra.length + 2);
		}	
}	
function DoTag1s () {
	Untooltip();
	strData = this.attributes.getNamedItem('data-id').value;
	var txtBox = document.getElementById ("idText");
	var intStart = txtBox.selectionStart;
	var intFinish = txtBox.selectionEnd;
	var strOriginal = txtBox.value;
	var strStart = strOriginal.substring (0, intStart);
	var strMiddle = strOriginal.substring (intStart, intFinish);
	var strFinish = strOriginal.substring (intFinish, strOriginal.length);
	txtBox.focus();
	switch (strData) {
		case "IMG":
			strExtra = " src = '" + document.getElementById("idSource").value.trim() + "' width = '" + document.getElementById("idImgWidth").value.trim() + "' alt = '" + document.getElementById("idAlt").value.trim() + "'";
			break;
		default:
			strExtra = "";
			break;
	}
	if (intFinish > intStart) {
		alert ('Do not select any text for this tag.');
		txtBox.setSelectionRange(intStart, intFinish);
	}
	else { 
		txtBox.value = strStart + "<" + strData + strExtra + " />" + strFinish;
		txtBox.setSelectionRange(intStart + strData.length + strExtra.length + 4, intStart + strData.length + strExtra.length + 4);
	}		
}	
function EditInitial () {
	EditRevert(false);
  	colControls = document.getElementsByClassName('Tag');
	for (i = 0;
		i < colControls.length;
		i++) {
		colControls[i].addEventListener("mouseover", Tooltip);
		colControls[i].addEventListener("click", DoTags);
		colControls[i].addEventListener("mouseout", Untooltip);
		colControls[i].innerHTML = colControls[i].attributes.getNamedItem('data-id').value;
	}
  	colControls = document.getElementsByClassName('Tag1');
	for (i = 0;
		i < colControls.length;
		i++) {
		colControls[i].addEventListener("mouseover", Tooltip);
		colControls[i].addEventListener("click", DoTag1s);
		colControls[i].addEventListener("mouseout", Untooltip);
		colControls[i].innerHTML = colControls[i].attributes.getNamedItem('data-id').value;
	}
}
/*	MailingList/Admin/Revert.php */
function EditUpdate () {
	var xhttp = GetXhttp("idMessage");
	xhttp.open("POST", "MailingList/Admin/Update.php", true);
	var formData = new FormData();
	formData.append ("hidBlog", document.getElementById("idNewsletter").value);
	formData.append ("txtText", document.getElementById("idText").value);
	xhttp.send (formData);
	document.getElementById("idDisplay").innerHTML = document.getElementById("idText").value;
}
function EditRevert (rboolCheck) {
	if (rboolCheck) 
		if (window.confirm ('Are you sure you want to lose any changes you have made?')) 
			boolGo = true;
		else
			boolGo = false;
	else
		boolGo = true;
	if (boolGo) {
		var xhttp = GetXhttp("idEdit");
		xhttp.open("POST", "MailingList/Admin/Revert.php", true);
		var formData = new FormData ();
		formData.append ("hidBlog", document.getElementById("idNewsletter").value);
		xhttp.send (formData);
	}
}
function EditEmail () {
	var xhttp = GetXhttp("idMessage");
	xhttp.open("POST", "MailingList/Admin/Email.php", true);
	var formData = new FormData();
	formData.append ("hidBlog", document.getElementById("idNewsletter").value);
	xhttp.send (formData);
}
function EditPublish () {
	if (confirm ('Are you sure you want to publish this blog?  You will not be able to make any changes subsequently!')) {
		var xhttp = GetXhttp("idMessage");
		xhttp.open("POST", "MailingList/Admin/Publish.php", true);
		var formData = new FormData();
		formData.append ("hidBlog", document.getElementById("idNewsletter").value);
		xhttp.send (formData);
		document.getElementById("idText").setAttribute("disabled", "true");
		document.getElementById("idUpdate").setAttribute("disabled", "true");
		document.getElementById("idRevert").setAttribute("disabled", "true");
		document.getElementById("idPublish").setAttribute("disabled", "true");
	}
}
/* MailingList/Admin/MailingList.php */
function DeleteMailingList () {
	if (confirm ('Are you sure you want to delete this email address?')) {
		alert (document.getElementById("idEmail").value);
		var xhttp = GetXhttp("idPage");
		xhttp.open("POST", "MailingList/Admin/MailingList.php", true);
		var formData = new FormData();
		formData.append ("cboEmail", document.getElementById("idEmail").value);
		formData.append ("hidAction", "Delete");
		xhttp.send (formData);
	}
}
/*	confirm.php		*/
function DoChange () {	
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/change.php", true);
	var formData = new FormData();
	formData.append ("Email", document.getElementById("idEmail").value);
	formData.append ("Name", document.getElementById("idName").value);
	formData.append ("Code", document.getElementById("idCode").value);
	formData.append ("Action", "Change");
	xhttp.send (formData);
}
function DoDelete () {	
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "MailingList/delete.php", true);
	var formData = new FormData();
	formData.append ("Email", document.getElementById("idEmail").value);
	formData.append ("Code", document.getElementById("idCode").value);
	xhttp.send (formData);
}
/*	Diary/circles.php */
function GetCircles () {
	var formData = new FormData();
	formData.append ("Action", "Get");
	DoXhttp("Diary/Circles.php", formData, function(lxhttp) {
		document.getElementById("idCirclesTable").innerHTML = lxhttp.responseText;
	});
}
function AddCircle(rElement) {
	var InsertRow = rElement.parentNode.parentNode;
	var formData = new FormData();
	formData.append ("Action", "Add");
	DoXhttp("Diary/Circles.php", formData, function(lxhttp) {
		InsertRow.innerHTML = lxhttp.responseText;
	})
}
function ChangeCircle (rElement, rboolDelete) {
	var EditRow = rElement.parentNode.parentNode;
	var formData = new FormData();
	var strCircle = EditRow.children[0].textContent.trim();
	formData.append ("Circle", strCircle);
	formData.append ("Action", "Change");
	DoXhttp("Diary/Circles.php", formData, function(lxhttp) {
		EditRow.innerHTML = lxhttp.responseText;
	})
}
function DeleteCircle(rElement) {
	if (confirm ("Are you sure you want to delete this circle?")) {
		document.body.style.cursor = "wait";
		var DeleteRow = rElement.parentNode.parentNode;
		var formData = new FormData();
		var strCircle = DeleteRow.children[0].textContent.trim();
		formData.append ('Circle', strCircle);
		formData.append ("Action", "Delete");
		DoXhttp ("Diary/Circles.php", formData, function (lxhttp) {
			if (lxhttp.responseText.trim() == "") {
  	   			rElement.parentNode.parentNode.innerHTML = "";
				document.getElementById("idMessage").innerHTML = "<p class=clsInformation>Circle deleted successfully</p>";
				alert ("Circle deleted successfully");
			}
			else {
  	      		document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
  	      		alert (lxhttp.responseText);
			}
  	      	document.body.style.cursor = "default";
  		});
	}
}
function InsertCircle(rElement) {
	var InsertRow = rElement.parentNode.parentNode;
	var Circle = new InputBox (InsertRow, 0, 0, "Circle");
	var Sequence = new InputBox (InsertRow, 1, 0, "Sequence");
	var Name = new InputBox (InsertRow, 2, 0, "Name");
	var Chair = new InputBox (InsertRow, 3, 0, "Chair");
	if (Circle.error + Sequence.error + Name.error == "") {
		rElement.style.cursor = "wait"; 
		var formData = new FormData();
		formData.append ('Circle', Circle.value.toUpperCase());
		formData.append ('Sequence', Sequence.value);
		formData.append ('Name', Name.value);
		formData.append ('Chair', Chair.value);
		formData.append ("Action", "Insert");
		formData.append ("Stage", 1);
		DoXhttp ("Diary/Circles.php", formData, function (lxhttp) { 
			if (lxhttp.responseText.trim() == "") {
				formData.append ("Stage", 2);
				DoXhttp ("Diary/Circles.php", formData, function (lxhttp) { 
					InsertRow.innerHTML = lxhttp.responseText;
				});
				formData.append ("Stage", 3);
				DoXhttp ("Diary/Circles.php", formData, function (lxhttp) {
					document.getElementById("idCirclesBody").innerHTML = lxhttp.responseText +
						document.getElementById("idCirclesBody").innerHTML;
				})
				document.getElementById("idMessage").innerHTML = "<p class=clsInformation>Circle successfully added</p>";
				alert ("Circle successfully added");
			}
			else {
  	      		document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
  	      		alert (lxhttp.responseText);
			}
		});					
		rElement.style.cursor = "default"; 
	}					
	else	
		alert (Circle.error + Sequence.error + Name.error);
}
function CancelInsertCircle(rElement) {
	var CancelRow = rElement.parentNode.parentNode;
	var formData = new FormData();
	formData.append ("Action", "CancelInsert");
	DoXhttp ("Diary/Circles.php", formData, function (lxhttp) { 
		CancelRow.innerHTML = lxhttp.responseText;
	});
}
function UpdateCircle(rElement) {
	var UpdateRow = rElement.parentNode.parentNode;
	var strCircle = UpdateRow.children[0].textContent.trim();
	var Sequence = new InputBox (UpdateRow, 1, 0, "Sequence");
	var Name = new InputBox (UpdateRow, 2, 0, "Name");
	var Chair = new InputBox (UpdateRow, 3, 0, "Chair");
	if (Sequence.error + Name.error == "") {
		rElement.style.cursor = "wait"; 
		var formData = new FormData();
		formData.append ('Circle', strCircle);
		formData.append ('Sequence', Sequence.value);
		formData.append ('Name', Name.value);
		formData.append ('Chair', Chair.value);
		formData.append ("Action", "Update");
		formData.append ("Stage", 1);
		DoXhttp("Diary/Circles.php", formData, function (lxhttp) {
			if (lxhttp.responseText.trim() == "") {
				formData.append ("Stage", 2);
				DoXhttp("Diary/Circles.php", formData, function (lxhttp) {
					UpdateRow.innerHTML = lxhttp.responseText;
				});
				document.getElementById("idMessage").innerHTML = "<p class=clsInformation>Circle successfully changed</p>";
				alert ("Circle successfully changed");
			}
			else {
				document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
				alert (lxhttp.responseText);
			}
		});
			rElement.style.cursor = "default"; 
	}
	else 
		alert (Sequence.error + Name.error);
}
function CancelUpdateCircle(rElement) {
	var CancelRow = rElement.parentNode.parentNode;
	var strCircle = CancelRow.children[0].textContent.trim();
	var formData = new FormData();
	formData.append ("Circle", strCircle);
	formData.append ("Action", "CancelUpdate");
	DoXhttp ("Diary/Circles.php", formData, function (lxhttp) {
		CancelRow.innerHTML = lxhttp.responseText;
	});
}
/* 	Circle members */
function CircleMembers (rstrCircle) {
	var xhttp = GetXhttp ("idPage");
	xhttp.open("POST", "Diary/CircleMembers.php", true);
	var formData = new FormData();
	formData.append ("Circle", rstrCircle);
	xhttp.send (formData);
}
function AddCircleMember (rstrCircle) {
	objAdd = document.getElementById('idAdd');
	var intUser = objAdd.value;
	var strUser = objAdd.options[objAdd.selectedIndex].text;
	var formData = new FormData();
	formData.append ("Circle", rstrCircle);
	formData.append ("User", intUser);
	formData.append ("Action", "Add");
	formData.append ("Stage", 1);
	DoXhttp("Diary/Members.php", formData, function (lxhttp) {
		if (lxhttp.responseText.trim() == "") {
			formData.append ("Stage", 2);
			DoXhttp("Diary/Members.php", formData, function (lxhttp) {
				document.getElementById('idMembers').innerHTML = lxhttp.responseText;
			});
			var objOption = document.createElement("option");
			objOption.value = intUser;
			objOption.text = strUser;
			document.getElementById('idRemove').options.add(objOption);
			objAdd.options.remove(objAdd.options.selectedIndex);
			document.getElementById('idMessage').innerHTML = "<p class=clsInformation>Member successfully added</p>";
			alert ("Member successfully added");
		}
		else {
			document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
			alert (lxhttp.responseText);
		}
	})
}
function RemoveCircleMember (rstrCircle) {
	objRemove = document.getElementById('idRemove');
	var intUser = objRemove.value;
	var strUser = objRemove.options[objRemove.selectedIndex].text;
	var formData = new FormData();
	formData.append ("Circle", rstrCircle);
	formData.append ("User", intUser);
	formData.append ("Action", "Remove");
	formData.append ("Stage", 1);
	DoXhttp("Diary/Members.php", formData, function (lxhttp) {
		if (lxhttp.responseText.trim() == "") {
			formData.append ("Stage", 2);
			DoXhttp("Diary/Members.php", formData, function (lxhttp) {
				document.getElementById('idMembers').innerHTML = lxhttp.responseText;
			});
			var objOption = document.createElement("option");
			objOption.value = intUser;
			objOption.text = strUser;
			document.getElementById('idAdd').options.add(objOption);
			objRemove.options.remove(objRemove.options.selectedIndex);
			document.getElementById('idMessage').innerHTML = "<p class=clsInformation>Member successfully removed</p>";
			alert ("Member successfully removed");
		}
		else {
			document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
			alert (lxhttp.responseText);
		}
	})
}
/* 	Circle meetings */
function CircleMeetings (rstrCircle) {
	var xhttp = GetXhttp ("idPage");
	xhttp.open("POST", "Diary/CircleMeetings.php", true);
	var formData = new FormData();
	formData.append ("Circle", rstrCircle);
	xhttp.send (formData);
}
function GetCircleMeetings (rstrCircle) {
	var formData = new FormData();
	formData.append("Circle", rstrCircle);
	formData.append ("Action", "Get");
	DoXhttp("Diary/Meetings.php", formData, function(lxhttp) {
		document.getElementById("idMeetingsTable").innerHTML = lxhttp.responseText;
	});
}
function AddCircleMeeting(rElement, rstrCircle) {
	var InsertRow = rElement.parentNode.parentNode;
	var formData = new FormData();
	formData.append("Circle", rstrCircle);
	formData.append ("Action", "Add");
	DoXhttp("Diary/Meetings.php", formData, function(lxhttp) {
		InsertRow.innerHTML = lxhttp.responseText;
	})
}
function ChangeCircleMeeting (rElement, rstrCircle) {
	var EditRow = rElement.parentNode.parentNode;
	var formData = new FormData();
	formData.append("Circle", rstrCircle);
	var strDate = EditRow.children[0].textContent.trim();
	var strTime = EditRow.children[1].textContent.trim();
	formData.append ("Date", strDate);
	formData.append ("Time", strTime);
	formData.append ("Action", "Change");
	DoXhttp("Diary/Meetings.php", formData, function(lxhttp) {
		EditRow.innerHTML = lxhttp.responseText;
	})
}
function DeleteCircleMeeting(rElement, rstrCircle) {
	if (confirm ("Are you sure you want to delete this meeting?")) {
		document.body.style.cursor = "wait";
		var DeleteRow = rElement.parentNode.parentNode;
		var formData = new FormData();
		formData.append("Circle", rstrCircle);
		var strDate = DeleteRow.children[0].textContent.trim();
		formData.append ('Date', strDate);
		formData.append ("Action", "Delete");
		DoXhttp ("Diary/Meetings.php", formData, function (lxhttp) {
			if (lxhttp.responseText.trim() == "") {
  	   			rElement.parentNode.parentNode.innerHTML = "";
				document.getElementById("idMessage").innerHTML = "<p class=clsInformation>Meeting deleted successfully</p>";
				alert ("Meeting deleted successfully");
			}
			else {
  	      		document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
  	      		alert (lxhttp.responseText);
			}
  	      	document.body.style.cursor = "default";
  		});
	}
}
function InsertCircleMeeting(rElement, rstrCircle) {
	var InsertRow = rElement.parentNode.parentNode;
	var Date = new InputBox (InsertRow, 0, 0, "Date");
	var Time = new InputBox (InsertRow, 1, 0, "Time");
	var Agenda = new InputBox (InsertRow, 2, 0, "Agenda");
	if (Date.error + Time.error + Agenda.error == "") {
		rElement.style.cursor = "wait"; 
		var formData = new FormData();
		formData.append("Circle", rstrCircle);
		formData.append ('Date', Date.value);
		formData.append ('Time', Time.value);
		formData.append ('Agenda', Agenda.value);
		formData.append ("Action", "Insert");
		formData.append ("Stage", 1);
		DoXhttp ("Diary/Meetings.php", formData, function (lxhttp) { 
			if (lxhttp.responseText.trim() == "") {
				formData.append ("Stage", 2);
				DoXhttp ("Diary/Meetings.php", formData, function (lxhttp) { 
					InsertRow.innerHTML = lxhttp.responseText;
				});
				formData.append ("Stage", 3);
				DoXhttp ("Diary/Meetings.php", formData, function (lxhttp) {
					document.getElementById("idMeetingsBody").innerHTML = lxhttp.responseText +
						document.getElementById("idMeetingsBody").innerHTML;
				})
				document.getElementById("idMessage").innerHTML = "<p class=clsInformation>Meeting successfully added</p>";
				alert ("Meeting successfully added");
			}
			else {
  	      		document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
  	      		alert (lxhttp.responseText);
			}
		});					
		rElement.style.cursor = "default"; 
	}					
	else	
		alert (Date.error + Time.error + Agenda.error);
}
function CancelInsertCircleMeeting(rElement, rstrCircle) {
	var CancelRow = rElement.parentNode.parentNode;
	var formData = new FormData();
	formData.append("Circle", rstrCircle);
	formData.append ("Action", "CancelInsert");
	DoXhttp ("Diary/Meetings.php", formData, function (lxhttp) { 
		CancelRow.innerHTML = lxhttp.responseText;
	});
}
function UpdateCircleMeeting(rElement, rstrCircle) {
	var UpdateRow = rElement.parentNode.parentNode;
	var strDate = UpdateRow.children[0].textContent.trim();
	var Time = new InputBox (UpdateRow, 1, 0, "Time");
	var Agenda = new InputBox (UpdateRow, 2, 0, "Agenda");
	if (Time.error + Agenda.error == "") {
		rElement.style.cursor = "wait"; 
		var formData = new FormData();
		formData.append("Circle", rstrCircle);
		formData.append ('Date', strDate);
		formData.append ('Time', Time.value);
		formData.append ('Agenda', Agenda.value);
		formData.append ("Action", "Update");
		formData.append ("Stage", 1);
		DoXhttp("Diary/Meetings.php", formData, function (lxhttp) {
			if (lxhttp.responseText.trim() == "") {
				formData.append ("Stage", 2);
				DoXhttp("Diary/Meetings.php", formData, function (lxhttp) {
					UpdateRow.innerHTML = lxhttp.responseText;
				});
				document.getElementById("idMessage").innerHTML = "<p class=clsInformation>Meeting successfully changed</p>";
				alert ("Meeting successfully changed");
			}
			else {
				document.getElementById("idMessage").innerHTML = "<p class=clsError>" + lxhttp.responseText + "</p>";
				alert (lxhttp.responseText);
			}
		});
			rElement.style.cursor = "default"; 
	}
	else 
		alert (Sequence.error + Name.error);
}
function CancelUpdateCircleMeeting(rElement, rstrCircle) {
	var CancelRow = rElement.parentNode.parentNode;
	var strDate = CancelRow.children[0].textContent.trim();
	var formData = new FormData();
	formData.append("Circle", rstrCircle);
	formData.append ("Date", strDate);
	formData.append ("Action", "CancelUpdate");
	DoXhttp ("Diary/Meetings.php", formData, function (lxhttp) {
		CancelRow.innerHTML = lxhttp.responseText;
	});
}
/*	Committee Admin */
function GetUser() {
	cboUser = document.getElementById('idUser'); 
	var xhttp = GetXhttp ("idPage");
	xhttp.open("POST", "Committee/Admin/Admin.php", true);
	var formData = new FormData();
	formData.append ("cboUser", cboUser.value);
	formData.append ("hidAction", "Get");
	xhttp.send (formData);
}
function ChangeUser (rintMe) {
	cboUser = document.getElementById('idUser');
	txtEmail = document.getElementById('idEmail');
	txtLevel = document.getElementById('idLevel');
	tikEditor = document.getElementById('idEditor');
	tikFundraiser = document.getElementById('idFundraiser');
	if (rintMe == cboUser.value
		&& txtLevel.value < 3) {
		alert ('You cannot make yourself a non-Director.');
		txtLevel.focus();
	}
	else {
		var xhttp = GetXhttp ("idPage");
		xhttp.open("POST", "Committee/Admin/Admin.php", true);
		var formData = new FormData();
		formData.append ("cboUser", cboUser.value);
		formData.append ("txtEmail", txtEmail.value);
		formData.append ("txtLevel", txtLevel.value);
		if (tikEditor.checked)
			formData.append ("tikEditor", 1);
		if (tikFundraiser.checked)
			formData.append ("tikFundraiser", 1);
		formData.append ("hidAction", "Change");
		xhttp.send (formData);
	}
}
function DeleteUser (rstrMe) {
	cboUser = document.getElementById('idUser');
	if (rstrMe == cboUser.value) {
		alert ('You cannot delete yourself.');
		txtUser.focus();
	}
	else {
		var xhttp = GetXhttp ("idPage");
		xhttp.open("POST", "Committee/Admin/Admin.php", true);
		var formData = new FormData();
		formData.append ("cboUser", cboUser.value);
		formData.append ("hidAction", "Delete");
		xhttp.send (formData);
	}
}
function DoListUsers () {
	var xhttp = GetXhttp ("idPage");
	xhttp.open("POST", "Committee/Admin/Admin.php", true);
	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("hidAction=Display");
}
function CheckValidChars (rstrField, rrexValidChars) {
	txtText = document.getElementById(rstrField);
	if (rrexValidChars.test (txtText.value)) {
		alert ('The name contains invalid characters.');
		txtText.focus();
		return false;
	}
	else
		return true;;
}
//	Poll	
function DoPoll () {
	grecaptcha.execute();
}
//	Sponsorship/index.php
function DoGiftAid() {
	if (document.getElementById("idGiftAid").checked) {
		var xhttp = GetXhttp("idGiftAidTable");
		xhttp.open ("POST", "Sponsorship/GiftAid.php", true);
		xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhttp.send();
	}
	else 
		document.getElementById("idGiftAidTable").innerHTML = "";
}
function DoDonation (rrexEmail, rrexPostcode) {
	if (rrexEmail.test (document.getElementById("idEmail").value)) 
		if (document.getElementById("idAmount").value == "")
			alert ('Please enter an amount.');
		else {
			var xhttp = GetXhttp("idPage");
			xhttp.open("POST", "Sponsorship/Paypal.php", true);
			var formData = new FormData();
			formData.append("Email", document.getElementById('idEmail').value);
			formData.append("Amount", document.getElementById('idAmount').value);
			formData.append("GiftAid", document.getElementById('idGiftAid').checked);
			if (document.getElementById('idGiftAid').checked) {
				if (document.getElementById('idForename').value == "")
					alert ('Please enter your forename.');
				else if (document.getElementById('idSurname').value == "")
					alert ('Please enter your surname.');
				else if (document.getElementById('idAddress1').value == "")
					alert ('Please enter the first line of your address.');
				else if (document.getElementById('idCity').value == "")
					alert ('Please enter your city.');
				else {
					document.getElementById('idPostcode').value = document.getElementById('idPostcode').value.toUpperCase(); 
					if (rrexPostcode.test(document.getElementById('idPostcode').value)) 
						if (document.getElementById('idAgree').checked) {
							formData.append("Title", document.getElementById('idTitle').value);
							formData.append("Forename", document.getElementById('idForename').value);
							formData.append("Surname", document.getElementById('idSurname').value);
							formData.append("Address1", document.getElementById('idAddress1').value);
							formData.append("Address2", document.getElementById('idAddress2').value);
							formData.append("City", document.getElementById('idCity').value);
							formData.append("Postcode", document.getElementById('idPostcode').value);
							xhttp.send(formData);  
						}
						else
							alert ('Please indicate that you have read the Privacy Policy.');
					else
						alert ('Please enter a valid postcode.');
				}
			}
			else
				xhttp.send(formData);  
		}
	else
		alert ('Please enter a valid email address.');
}
function DoPaypalSubmit (rstrPaypalUrl) {
//	document.getElementById("idPaypal").action = 'https://' + rstrPaypalUrl + '/cgi-bin/webscr';
	document.getElementById("idPaypal").action = 'https://' + rstrPaypalUrl + '/donate';
	document.getElementById("idPaypal").submit ();
}
function DonationDetails (rintDonation) {
	var xhttp = GetXhttp("idPage");
	xhttp.open("POST", "Sponsorship/Admin/Details.php", true);
	var formData = new FormData();
	formData.append("Donation", rintDonation);
	xhttp.send(formData);
}
//	Supporters
function InitializeSupporters (rDiv, rarrSupporters) {
	var strHtml = "";
	for (i = 0;
		i < rarrSupporters.length;
		i++) {
		if (rarrSupporters[i][2]) 
			strHtml += "	<div class='col-3 col-lg-2'>"
					+ "				<a		href='" + rarrSupporters[i][2] + "'"
					+ "						target=_blank>"
					+ "						<img	class='img-fluid supporter'"
					+ "								src='" + rarrSupporters[i][0] + "'"
					+ "								alt='" + rarrSupporters[i][3] + "'"
					+ "						/>"
					+ "				</a>"
					+ "		</div>";
		else
			strHtml += "	<div class='col-3 col-lg-2'>"
					+ "				<img	class='img-fluid supporter'"	// In this case it should be a different class, that doesn't cause the cursor or image to change. 
					+ "						src='" + rarrSupporters[i][0] + "'"
					+ "						alt='" + rarrSupporters[i][3] + "'"
					+ "				/>"
					+ "		</div>";
	}
	document.getElementById(rDiv).innerHTML = strHtml;
}
function SupportersLink (rParent) {
	var domPicture1 = rParent.childNodes[1];
	var domPicture2 = rParent.childNodes[3];
	domPicture1.style.display = "none";
	domPicture2.style.display = "block";
}
function SupportersUnlink (rParent) {
	var domPicture1 = rParent.childNodes[1];
	var domPicture2 = rParent.childNodes[3];
	domPicture1.style.display = "block";
	domPicture2.style.display = "none";
}
// Common functions 
function onSubmit(token) {
	var xhttp = GetXhttp("idPage");
	switch (mstrCaptcha) {
		case "Contact":
			xhttp.open("POST", "ContactUs.php", true);
			var form = document.getElementById("idContactUs");
			var formData = new FormData(form);
			formData.append ("Submit", 1);
			break;
		case "Mailing list":
			xhttp.open("POST", "MailingList/SignUp.php", true);
			var formData = new FormData();
			formData.append ("Email", document.getElementById("idEmail").value);
			formData.append ("Name", document.getElementById("idName").value);
			formData.append ("Action", mstrAction);
			break;
		case "Register":
			var formData = new FormData();
			formData.append ("txtEmail", document.getElementById ("idEmail").value);
			formData.append ("txtPassword", document.getElementById ("idPassword").value);
			formData.append ("txtPassword1", document.getElementById ("idPassword1").value);
			formData.append ("txtName", document.getElementById ("idName").value);
			formData.append ("hidAttempts", document.getElementById ("idAttempts").value);
			formData.append ("hidAction", "Register");
			xhttp.open ("POST", "Committee/Register.php", true);
			break;
		case "Reset":
			var formData = new FormData();
			formData.append ("txtEmail", document.getElementById("idEmail").value);
			formData.append ("hidAttempts", document.getElementById ("idAttempts").value);
			formData.append ("hidAction", "Forgotten");
			xhttp.open ("POST", "Committee/Forgotten.php", true);
			break;
		case "Poll":
			var formData = new FormData();
/*			formData.append ("Twitter", document.getElementById("idTwitter").checked);
			formData.append ("Facebook", document.getElementById("idFacebook").checked);
			formData.append ("Instagram", document.getElementById("idInstagram").checked);
			formData.append ("Email", document.getElementById("idEmail").checked);
			formData.append ("Other", document.getElementById("idOther").value);
			if (document.getElementById("idWeek").checked)
				formData.append ("Frequency", document.getElementById("idWeek").value);
			if (document.getElementById("idFortnight").checked)
				formData.append ("Frequency", document.getElementById("idFortnight").value);
			if (document.getElementById("idMonth").checked)
				formData.append ("Frequency", document.getElementById("idMonth").value);
			if (document.getElementById("idQuarter").checked)
				formData.append ("Frequency", document.getElementById("idQuarter").value);
			if (document.getElementById("idHalf").checked)
				formData.append ("Frequency", document.getElementById("idHalf").value);
			if (document.getElementById("idYear").checked)
				formData.append ("Frequency", document.getElementById("idYear").value);
*/
			formData.append ("Comment", document.getElementById("idComment").value);				
			formData.append ("Action", "Poll");
			xhttp.open ("POST", "Poll/index.php", true);
			break;
	}
	formData.append ("g-recaptcha-response", token);
	xhttp.send (formData);
}
function ValidateEmail (rrexEmail) {
	txtEmail = document.getElementById("idEmail");
	if (!rrexEmail.test (txtEmail.value)) {	
		alert ('Please enter a valid email address.');
		txtEmail.focus();
		return false;
	}
	else 
		return true;
}
function ValidatePassword (rrexPassword, rrexPassword1, rrexPassword2, rrexPassword3) {
	txtPassword = document.getElementById ("idPassword");
	if (rrexPassword.test (txtPassword.value)) 
		if (rrexPassword1.test (txtPassword.value)
		&& rrexPassword2.test (txtPassword.value)
		&& rrexPassword3.test (txtPassword.value))
			return true;
		else {
			alert ('The password should include a lower-case letter, an upper-case letter and a digit.');
			txtPassword.focus();
			return false;
		}
	else {
		alert ('The password should be between 8 and 16 characters long, with no spaces.');
		txtPassword.focus();
		return false;
	}
}
function gintWindowWidth() {
	return (window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth);
}
function DoXhttp (rPhp, rSend, rFunc) {
	var xhttp;
	if (window.XMLHttpRequest)
		xhttp = new XMLHttpRequest();
	else
		xhttp = new ActiveObject("Microsoft.XMLHTTP");
	xhttp.onreadystatechange = function () {
		if (xhttp.readyState == 4 
		&& xhttp.status == 200) 
			rFunc(xhttp);
	};
	xhttp.open("POST", rPhp, true);
//	xhttp.setRequestHeader ("Content-type", "application/x-www-form-urlencoded");
	xhttp.send(rSend);
}
function InputBox (rRow, rCell, rNumber, rName) {
	var thing = rRow.children[rCell].children[rNumber];
	this.value=thing.value;
	this.error="";
	if (this.value == ""
	&& thing.required)
		this.error=rName + " is missing.\n";
	else {
		if (thing.type == "number") {
			if (Number(this.value) > Number(thing.max)
			&& thing.max != "")
				this.error=rName + " is too big.\n";
			if (Number(this.value) < Number(thing.min)
			&& thing.min != ""
			&& this.value != "")
				this.error=rName + " is too small.\n";
		}
		if (thing.type == "date") {
			if (this.value > thing.max
			&& thing.max != "")
				this.error=rName + " is too late.\n";
			if (this.value < thing.min
			&& thing.min != ""
			&& this.value != "")
				this.error=rName + " is too early.\n";
		}
		if ((	thing.type == "text"
			|| thing.type == "file")
		&& 	this.value.length > Number(thing.maxlength))
			this.error=rName + " is too long.\n";
		if (thing.type == "file")
			this.files = thing.files;
		else
			this.value = thing.value.replace(/'/g, "&apos;");
		this.type=thing.type;
		if (thing.type == "select-one") {
			this.selectedIndex = thing.selectedIndex;
//			alert (thing.selectedIndex);
			if (thing.selectedIndex >= 0)
				this.selectedName = thing.children[thing.selectedIndex].text;
			else
				this.error="a value must be selected for " + rName;
//			alert (thing.children[thing.selectedIndex].text);
		}
	}
}
function ggs_ggseal(){
	window.open("https://my.greengeeks.com/seal/","_blank");
}
function DoScroll(rstrDestination) {
	window.location.hash = rstrDestination;
	window.scrollBy (0, -1 * document.getElementById('idHeader').offsetHeight);
}
/*
function SetCaptchaKey(rstrKey) {
	document.getElementById('idCaptcha').setAttribute('data-sitekey', rstrKey);
	document.getelementById('idCaptcha').visibility='visible';
}
*/
