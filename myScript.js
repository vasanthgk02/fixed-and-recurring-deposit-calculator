function calculate(){
		var amount = Number(document.getElementById("pa").value);
		var age = Number(document.getElementById("age").value);
		var year = Number(document.getElementById("year").value);
		var fd_interest = 0, rd_interest = 0;
		var rd_check = document.getElementById("rd").checked;
		var fd_check = document.getElementById("fd").checked;
		if(age < 18){
			alert("Minimum age is 18");
			return;
		}else if(year < 1){
			alert("Minimum year is 1");
			return;
		}else if(year < 1){
			alert("Minimum year to deposit is 1");
			return;
		}
		
		if(age < 60){
			fd_interest = 5.5;
			rd_interest = 5.8;
		}else{
			fd_interest = 6.7;
			rd_interest = 7.2;
		}
		var rd_amount = Math.floor((amount * year * fd_interest) / 100);
		var fd_amount = Math.floor((amount * year * rd_interest) / 100);
		if(rd_check && fd_check){
			document.getElementById("rdoutput").innerHTML = `Fixed Deposit : ${fd_amount}`;
			document.getElementById("fdoutput").innerHTML = `Recurring Deposit : ${rd_amount}`;
		}else if(rd_check){
			document.getElementById("rdoutput").innerHTML = `Fixed Deposit : 0`;
			document.getElementById("fdoutput").innerHTML = `Recurring Deposit : ${rd_amount}`;		
		}else if (fd_check){
			document.getElementById("rdoutput").innerHTML = `Fixed Deposit : ${fd_amount}`;
			document.getElementById("fdoutput").innerHTML = `Recurring Deposit : 0`;
		}else{
			document.getElementById("rdoutput").innerHTML = `Fixed Deposit : 0`;
			document.getElementById("fdoutput").innerHTML = `Recurring Deposit :0`;
		}
	}
		
