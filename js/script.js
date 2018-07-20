
	function $(key){
		return document.getElementById(key);
	}	
 	
 	$("submit-btn").onclick=function(){
 		validate();
 		return false;
 	};

 	function validate(){
 		var inputs=document.getElementsByClassName("validate");
 		for(var i=0;i<inputs.length;i++){
 			var input=inputs[i];
 			if(input.value.length==0){
 				input.className="error";
 			}
 		}
 		
 	}




	var names=["ram","shayam","hari","java","php","phython","anu","suxu"];
	var txt=document.getElementById("txt");
	var auto=document.getElementById("autocomplete");
	auto.onmouseout=function(){
		this.style.display="none";
	};
	txt.onkeyup=function(){
		auto.style.display="block";
		var data=this.value.toUpperCase();
		var content="<ul>";
		names.forEach(function(item,index){
			if(item.toUpperCase().includes(data)){
				content+="<li onclick='autoComplete(this)'>"+item+"</li>";
			}
		})
		content+="</ul>";
		auto.innerHTML=content;


	};

	function autoComplete(obj){
		txt.value=obj.innerHTML;
	}

