<?php
$z[0]=Array("field","",254,273);
$z[0][4]['name']="title";
$z[1]=Array("global","",274,300);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",341,370);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",410,469);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",1229,1264);
$z[4][4]['filename']="head.htm";
$z[5]=Array("field","",1540,1597);
$z[5][4]['name']="typeid";
$z[5][4]['function']="GetTopTypename(@me)";
$z[6]=Array("channel","\r\n          <li class=\"first_cat\"><a href=\"[field:typeurl/]\" title=\"[field:typename/]\">[field:typename/]</a></li>\r\n          ",1695,1972);
$z[6][4]['type']="son";
$z[6][4]['currentstyle']="<li class='first_cat'><a href='~typelink~' id='lsed'>~typename~</a></li>";
$z[7]=Array("list","\r\n          <div class=\"art_list\">\r\n            <div class=\"art_title\"><a href='[field:arcurl/]' >[field:title/]</a></div>\r\n            <div class=\"art_author\"><span>点击：[field:click/]</span> <span>日期：[field:pubdate function=\"MyDate('Y-m-d',@me)\"/]</span></div>\r\n          </div>\r\n          ",2076,2415);
$z[7][4]['pagesize']="8";
$z[8]=Array("pagelist","",2519,2585);
$z[8][4]['listitem']="index,end,pre,next,pageno";
$z[8][4]['listsize']="5";
$z[9]=Array("include","",2691,2728);
$z[9][4]['filename']="footer.htm";

?>