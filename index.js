
function change_dice1()
{
	var rand_num_1=Math.floor(Math.random()*6)+1;
	var rand_dice_img_1="images/dice"+rand_num_1+".png";
	document.querySelectorAll("img")[0].setAttribute("src",rand_dice_img_1);
	if(rand_num_1==6)
	{
		document.querySelector("h1").innerHTML="🚩Player 1 Wins!!";
	}
}

function change_dice2()
{
	var rand_num_2=Math.floor(Math.random()*6)+1;
	var rand_dice_img_2="images/dice"+rand_num_2+".png";
	document.querySelectorAll("img")[1].setAttribute("src",rand_dice_img_2);
	if(rand_num_2==6)
	{
		document.querySelector("h1").innerHTML="Player 2 Wins!!🚩";
	}
}
