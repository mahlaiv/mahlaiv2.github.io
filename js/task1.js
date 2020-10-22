function interchange()
{
 var strDiv1Content = document.getElementById('seconddiv').innerHTML;
 var strDiv2Content = document.getElementById('fourthdiv').innerHTML;

 document.getElementById('seconddiv').innerHTML = strDiv2Content;
 document.getElementById('fourthdiv').innerHTML = strDiv1Content;

}
interchange();
