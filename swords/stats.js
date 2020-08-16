function max(value,total) {
	if (parseInt(value) < parseInt(total)) {
		return "<span class=\"stat\">"+value+"</span>/"+total;
	} else {
		return value+"/"+total;
	}
}
function maxlv(value) {
	if (value==99) {
		return "<span class=\"lv\">"+value+"</span>";
	} else {
		return value;
	}
}
function sf(value) {
	if (value>=50) {
		return "<span class=\"sakura\">"+value+"</span>";
	} else if (value<=9) {
		return "<span class=\"severe\">"+value+"</span>";
	} else if (value<=19) {
		return "<span class=\"medium\">"+value+"</span>";
	} else {
		return value
	}
}

function modDate(id) {
	var date = new Date(document.lastModified);
	var ddd = new Date();
	console.log(ddd);
	document.getElementById(id).innerHTML = date.toLocaleString();
}

function hide(btn) {
	var property = document.getElementsByClassName(btn);
	for (var i = 0; i < property.length; i++) {
		if (property[i].hasAttribute("hidden")) {
			property[i].removeAttribute("hidden");
		}
		else {
			property[i].setAttribute("hidden", true);
		}
	}
}
function display() {
	// clean the table
	var table = document.getElementById("list").getElementsByTagName("tbody")[0];
	for (var i = table.rows.length - 1; i >= 0; i--) {
		table.deleteRow(i);
	}
	// process the input
	var response = JSON.parse(document.getElementById('input').value);
	var reach = [,"Short","Wide","Horizontal","Vertical"];
	var evol = ["normal","toku","kiwame"];
	var count = 1;
	for (var toudan in response.sword) {
		// get player sword information
		var no = response.sword[toudan].sword_id;
		var lock = response.sword[toudan].protect;
		var fatigue = response.sword[toudan].fatigue;
		var toku = response.sword[toudan].evol_num;
		var level = response.sword[toudan].level;
		var survival = parseInt(response.sword[toudan].hp_max);
		var impact = parseInt(response.sword[toudan].atk);
		var leadership = parseInt(response.sword[toudan].def);
		var mobility = parseInt(response.sword[toudan].mobile);
		var impulse = parseInt(response.sword[toudan].back);
		var scouting = parseInt(response.sword[toudan].scout);
		var camouflage = parseInt(response.sword[toudan].hide);
		var survival_max = survival+parseInt(response.sword[toudan].hp_up);
		var impact_max = impact+parseInt(response.sword[toudan].atk_up);
		var leadership_max = leadership+parseInt(response.sword[toudan].def_up);
		var mobility_max = mobility+parseInt(response.sword[toudan].mobile_up);
		var impulse_max = impulse+parseInt(response.sword[toudan].back_up);
		var scouting_max = scouting+parseInt(response.sword[toudan].scout_up);
		var loyalty = response.sword[toudan].loyalties;
		var birth = response.sword[toudan].created_at;
		var exp = response.sword[toudan].exp;
		var rarity = response.sword[toudan].rarity;
		var charm = response.sword[toudan].item_id ? (response.sword[toudan].item_id == 2 ? "Omamori Kyoku":"Omamori") : "";
		for (var h in response.equip) {
			
		}
		// check if sword id is defined otherwise show blanks
		// prevents breaking if list contains a new sword
		if (response.sword[toudan].horse_serial_id !== null) {
			var horse = define.equips[response.equip[response.sword[toudan].horse_serial_id].equip_id].name.replace("Horse ","");
		} else {
			var horse = "";
		}
		if (response.sword[toudan].equip_serial_id1 == null && response.sword[toudan].equip_serial_id2 == null && response.sword[toudan].equip_serial_id3 == null) {
			var troops = "";
			if (define.swords[no] !== undefined) {
				if (parseInt(define.swords[no].equip, 10)==3) {
					troops = "-- / -- / --";
				} else if (parseInt(define.swords[no].equip, 10)==2) {
					troops = "-- / -- ";
				} else {
					troops = "--";
				}
			}
			
		} else {
			var troops = "";
			let troop1 = (response.sword[toudan].equip_serial_id1 ? define.equips[response.equip[response.sword[toudan].equip_serial_id1].equip_id].name : "--");
			troops = troop1;
			if (define.swords[no] !== undefined) {
				if (parseInt(define.swords[no].equip, 10)>1) {
					let troop2 = (response.sword[toudan].equip_serial_id2 ? define.equips[response.equip[response.sword[toudan].equip_serial_id2].equip_id].name : "--");
					troops += " / "+troop2;
				}
				if (parseInt(define.swords[no].equip, 10)>2) {
					let troop3 = (response.sword[toudan].equip_serial_id3 ? define.equips[response.equip[response.sword[toudan].equip_serial_id3].equip_id].name : "--");
					troops += " / "+troop3;
				}
			}
		}
		if (define.swords[no] !== undefined) {
			var name = define.swords[no].name;
			var type = define.types[define.swords[no].type];
			var school = define.groups[define.swords[no].group];
			var range = reach[define.swords[no].area];
			var next_exp = parseInt(define.experience[define.swords[no].symbol][level], 10) - parseInt(exp, 10);
			if (parseInt(level, 10) == 99) {
				next_exp = 0;
			}
		} else {
			var name = "";
			var type = "";
			var school = "";
			var range = "";
			var next_exp = "";
		}
		// computations
		var days = new Date() - Date.parse(birth.replace(/-/g,"/")+" +0900");
		days = Math.round(days/1000/60/60/24);
		// display, only if locked
		if (lock=="1") {
			row = table.insertRow(-1);
			row.insertCell(0).innerHTML = no;
			row.insertCell(1).innerHTML = name;
			row.insertCell(2).innerHTML = "<img src=\"ico/"+type+"-"+rarity+".png\" class=\"type_ico\">";
			row.insertCell(3).innerHTML = type;
			row.insertCell(4).innerHTML = school;
			row.insertCell(5).innerHTML = maxlv(level);
			row.insertCell(6).innerHTML = next_exp;
			row.insertCell(7).innerHTML = exp;
			row.insertCell(8).innerHTML = "<img src=\"ico/"+evol[response.sword[toudan].symbol]+"-"+response.sword[toudan].symbol+".png\" class=\"type_ico\">";;
			row.insertCell(9).innerHTML = max(survival,survival_max);
			row.insertCell(10).innerHTML = max(impact,impact_max);
			row.insertCell(11).innerHTML = max(leadership,leadership_max);
			row.insertCell(12).innerHTML = max(mobility,mobility_max);
			row.insertCell(13).innerHTML = max(impulse,impulse_max);
			row.insertCell(14).innerHTML = max(scouting,scouting_max);
			row.insertCell(15).innerHTML = camouflage;
			row.insertCell(16).innerHTML = range;
			row.insertCell(17).innerHTML = loyalty;
			row.insertCell(18).innerHTML = sf(fatigue);
			row.insertCell(19).innerHTML = troops;
			row.insertCell(20).innerHTML = charm;
			row.insertCell(21).innerHTML = horse;
			row.insertCell(22).innerHTML = birth;
			row.insertCell(23).innerHTML = days;
			document.getElementById("list").rows[count].cells[2].className = 'info';
			document.getElementById("list").rows[count].cells[3].className = 'info';
			document.getElementById("list").rows[count].cells[4].className = 'info';
			document.getElementById("list").rows[count].cells[7].className = 'info';
			document.getElementById("list").rows[count].cells[10].className = 'value';
			document.getElementById("list").rows[count].cells[11].className = 'value';
			document.getElementById("list").rows[count].cells[12].className = 'value';
			document.getElementById("list").rows[count].cells[13].className = 'value';
			document.getElementById("list").rows[count].cells[14].className = 'value';
			document.getElementById("list").rows[count].cells[15].className = 'value';
			document.getElementById("list").rows[count].cells[16].className = 'value';
			document.getElementById("list").rows[count].cells[17].className = 'value';
			document.getElementById("list").rows[count].cells[19].className = 'equip';
			document.getElementById("list").rows[count].cells[20].className = 'equip';
			document.getElementById("list").rows[count].cells[21].className = 'equip';
			document.getElementById("list").rows[count].cells[22].className = 'info';
			document.getElementById("list").rows[count].cells[23].className = 'info';
			let cni = document.getElementsByClassName('info');
			let cnv = document.getElementsByClassName('value');
			let cne = document.getElementsByClassName('equip');
			for (var j = 0; j < document.getElementsByClassName('info').length; j++) {
				cni[j].hidden = true;
			}
			for (var j = 0; j < document.getElementsByClassName('value').length; j++) {
				cnv[j].hidden = true;
			}
			for (var j = 0; j < document.getElementsByClassName('equip').length; j++) {
				cne[j].hidden = true;
			}
			count++;
		}
	}
}

