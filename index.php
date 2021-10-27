<html xmlns="http://www.w3.org/1999/xhtml"><head>
<?php $conn = mysqli_connect("127.0.0.1", "root", "",'sgo');
$select = "SELECT * FROM log ";
	
$results=mysqli_query($conn, $select);
	$row_cnt = mysqli_num_rows($results);

	




?>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
	<title>Сетевой Город. Образование</title>
	<meta http-equiv="Content-type" content="text/html; charset=utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge">
	<meta name="viewport" content="width=600">
	<link rel="icon" type="image/gif" href="/images/Common/faviconnetcity.gif">
	<link rel="stylesheet" type="text/css" href="/static/dist/pages/about/css/start-page.min.css">
	<link rel="stylesheet" type="text/css" href="/vendor/custom/fonts/font-awesome/css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="/static/vendor/bootstrap/css/glyphicon-preload.css">
	<link rel="stylesheet" type="text/css" href="/vendor/bootstrap3-dialog/css/bootstrap-dialog.min.css">
	<link rel="stylesheet" type="text/css" href="/extras/about.css?ver=5.0.58332.564">
	<!--[if IE 9]>
	<link rel="stylesheet" type="text/css" href="/vendor/pages/css/about_ie9.css"/>
	<![endif]-->

	

<body>
	<!--[if lt IE 8]><style> .entry-form{ position: relative !important; } </style> <![endif]-->
	<!--preloader-->
	

<span class="glyphicon-preload glyphicon-preload-ok"></span>

	<div class="body"><div id="wrapper_inner">
	<!--[if lt IE 8]><div class="parent-ie6"><![endif]-->
	<div class="centered">
		<div class="entry-form loginbox appear">
	
		<div class="img-logo hidden-xs"></div>
<span class="span-product-name">Сетевой Город. Образование</span>


		<div class="sectiontable ">
			<ul class="tabs-form ">
				<li id="School" class="current row-center">Образовательная организация</li>
				<li class="row-center" id="EM">Орган управления</li>
			</ul>

			<div class="box-form visible">
				<div id="message" class="message-form">
					<input type="hidden" name="LoginType" value="1">
					<div class="info">
						<div class="row">
							<div class=" form-horizontal" style="display: none;">
								<span class="control-label col-md-4">Страна</span>
								<div class="col-md-6 select-main">
									<select id="countries" name="cid"><option value="-999999">Выберите страну...</option><option value="2">Россия</option></select>
								</div>
							</div>
							<div class=" form-horizontal">
								<span class="control-label col-md-4">Регион</span>
								<div class="col-md-6 select-main">
									<select id="states" name="sid" style="display: none;"><option value="-999999">Выберите регион...</option><option value="14">Респ. Саха Якутия</option></select>
								<span>Респ. Саха Якутия</span></div>
							</div>
							<div class=" form-horizontal">
								<span class="control-label col-md-4">Городской округ / Муниципальный район</span>
								<div class="col-md-6 select-main">
									<select id="provinces" name="pid"><option value="-999999">Выберите городской округ или муниципальный район...</option><option value="-858">Городской округ Жатай</option><option value="-877">Городской округ Нерюнгри</option><option value="-1124">Городской округ Якутск</option><option value="1">Абыйский район</option><option value="2">Алданский район</option><option value="3">Аллаиховский район</option><option value="4">Амгинский район</option><option value="75">Анабарский район</option><option value="6">Булунский район</option><option value="7">Верхневилюйский район</option><option value="8">Верхнеколымский район</option><option value="9">Верхоянский район</option><option value="10">Вилюйский район</option><option value="11">Горный район</option><option value="76">Жиганский район</option><option value="13">Кобяйский район</option><option value="14">Ленский район</option><option value="15">Мегино-Кангаласский район</option><option value="16">Мирнинский район</option><option value="77">Момский район</option><option value="18">Намский район</option><option value="19">Нижнеколымский район</option><option value="20">Нюрбинский район</option><option value="21">Оймяконский район</option><option value="22">Олекминский район</option><option value="78">Оленекский эвенкийский национальный район</option><option value="24">Среднеколымский район</option><option value="25">Сунтарский район</option><option value="26">Таттинский район</option><option value="27">Томпонский район</option><option value="28">Усть-Алданский район</option><option value="29">Усть-Майский район</option><option value="30">Усть-Янский район</option><option value="31">Хангаласский район</option><option value="32">Чурапчинский район</option><option value="33">Эвено-Бытантайский Национальный район</option></select>
								</div>
							</div>
							<div class=" form-horizontal">
								<span class="control-label col-md-4">Населённый пункт</span>
								<div class="col-md-6 select-main">
									<select id="cities" name="cn"><option value="-999999">Выберите населённый пункт...</option><option value="879">Пригородный (Якутск), с.</option><option value="1118">Табага (Якутск), с.</option><option value="1122">Хатассы (Якутск), с.</option><option value="1124">Якутск, г.</option></select>
								</div>
							</div>
							<div class=" form-horizontal">
								<span class="control-label col-md-4">Тип ОО</span>
								<div class="col-md-6 select-main">
									<select id="funcs" name="sft"><option value="-999999">Выберите тип ОО...</option><option value="1">Дошкольное образование</option><option value="2">Общеобразовательная</option><option value="3">Дополнительное образование детей</option></select>
								</div>
							</div>
							<div class=" form-horizontal">
								<span class="control-label col-md-4">Образовательная организация</span>
								<div class="col-md-6 select-main">
									<select id="schools" name="scid"><option value="-999999">Выберите ОО...</option><option value="2093">ГБПОУ РС(Я) ЯПК</option><option value="1606">МОБУ Тулагинская СОШ им. П.И. Кочнева</option><option value="1573">МОБУ СОШ №4</option><option value="1612">МОКУ СКОШ №4</option><option value="1571">МОБУ СОШ №18</option><option value="1614">МОКУ Специальная (коррекционная) школа-интернат №34</option><option value="2100">МАШ</option><option value="2110">НОШ МАНОУ ДДТ</option><option value="1570">МОБУ CОШ №6</option><option value="1569">МОБУ СОШ №1</option><option value="1572">МОБУ СОШ №3</option><option value="1575">МОБУ СОШ №7</option><option value="2077">ЧОУ "Сахат"</option><option value="1586">МАОУ СОШ №23</option><option value="1578">МОБУ СОШ №12</option><option value="1579">МОБУ СОШ №13</option><option value="1580">МОБУ СОШ №15</option><option value="1581">МОБУ СОШ №16 имени С.Г. Черных</option><option value="1582">МОБУ СОШ №17</option><option value="1583">МОБУ СОШ №19</option><option value="1585">МОБУ СОШ №21</option><option value="1588">МОБУ СОШ №25</option><option value="1589">МОБУ СОШ №26</option><option value="1590">МОБУ СОШ №27</option><option value="1591">МОБУ СОШ №29</option><option value="1593">МОБУ СОШ №31</option><option value="1594">МОБУ СОШ №32</option><option value="1596">МОБУ СОШ №35</option><option value="1598">МОБУ СОШ №38</option><option value="1624">МАОУ НПСОШ №2</option><option value="576">ГКОУ РС(К)ОШ-И</option><option value="583">ГБНОУ РС(Я) РЛИ</option><option value="1619">НОУ Авторская ООШ</option><option value="1625">МАОУ СПЛ г. Якутск</option><option value="1605">МОБУ Маганская СОШ</option><option value="1611">МОБУ Саха гимназия</option><option value="580">ГКОУ РС(Я) РС(К)Ш-И №2 VIII вида</option><option value="2094">ЧУОО СШ "Личность"</option><option value="1626">Филиал МОБУ СОШ №21</option><option value="577">ГКОУ РС(К)Ш-И V вида</option><option value="578">ГКОУ РС(Я) РС(К)ШИНО</option><option value="1601">МОБУ Табагинская СОШ</option><option value="2174">ЧОУ "Точка развития"</option><option value="1604">МОБУ Кангаласская СОШ</option><option value="1602">МОБУ Мархинская СОШ №1</option><option value="1603">МОБУ Мархинская СОШ №2</option><option value="1568">МОБУ НОШ №36 "Надежда"</option><option value="1599">МОБУ Саха-Корейская СОШ</option><option value="579">ГБОУ Кадетская школа-интернат</option><option value="1620">НОУ "Гуманитарный лицей"</option><option value="1584">МОБУ СОШ №20 им. Ф.К.Попова</option><option value="1623">Якутский городской лицей</option><option value="1592">МОБУ СОШ №30 им. В.И. Кузьмина</option><option value="2080">НОУ "Восточно-Сибирский лицей"</option><option value="1610">Городская классическая гимназия</option><option value="1587">МОБУ СОШ №24 им. С.И. Климакова</option><option value="1595">МОБУ СОШ №33 им. Л.А. Колосовой</option><option value="1577">МОБУ СОШ №10 им. Д.Г. Новопашина</option><option value="1574">МОБУ СОШ №5 им. Н.О. Кривошапкина</option><option value="1576">МОБУ СОШ №9 им. М.И. Кершенгольца</option><option value="1566">ГБОУ РС(Я) РССУОР им.Р.М.Дмитриева</option><option value="1617">НОУ "Начальная школа - детский сад"</option><option value="1600">МОБУ Технический лицей Н.А. Алексеевой</option><option value="1609">Якутская городская национальная гимназия</option><option value="1621">МОБУ "Национальная гимназия "Айыы Кыhата"</option><option value="1613">МОКУ Специальная (коррекционная) школа №22</option><option value="1607">МОБУ Хатасская СОШ им. П.Н. и Н.Е. Самсоновых</option><option value="2171">МОБУ "Гимназия "Центр глобального образования"</option><option value="2109">ГБОУ ВО ВШМ РС (Я) (институт) им. В.А. Босикова)</option><option value="1608">МОБУ Физико-технический лицей им. В.П. Ларионова</option><option value="1615">МОБУ Специальный коррекционный детский дом "Берегиня"</option><option value="1597">МОБУ "Центр образования" городского округа "Город Якутск"</option><option value="1616">МОКУ "Адаптивная школа-интернат №28 для детей-сирот и детей, оставшихся без попечения родителей"</option><option value="2046">ГБОУ РС(Я) с углубленным изучением отдельных предметов "Верхневилюйский республиканский лицей-интернат имени М.А. Алексеева"</option><option value="2045">ГБОУ РС(Я) "Экспериментальная школа- интернат "Арктика с углубленным изучением предметов гуманитарно-культурологического профиля"</option></select>
								</div>
							</div>

							<div class="two-lines-decoration"></div>

						<form action="insert.php" method="GET">
							<div class=" form-horizontal row-center-inset">
								<input name="name" placeholder="Логин" type="text" class="control-input col-md-6">
							</div>
							<div class=" form-horizontal row-center-inset">
								<input name="password" placeholder="Пароль" type="password" class="control-input col-md-6">
							</div>


							<div class=" form-horizontal row-center-a kill">
								<a title="Восстановить пароль" id="recovery" href="https://sgo.e-yakutia.ru">Восстановить пароль</a>
							</div>
							


							<div class="row-center row-submit ">
								<a class="row-center button-login button-login-marker" style="display: inline;" href="javascript:void(0)">
									<button  class="kill button-login-title "> Войти </button>
								</a>
							</div>
						</form>
						 


						<form action="insert.php" method="GET">
							<div class="row-center row-submit ">
								<a class="button-login button-login-esia " style="display: inline;" href="https://sgo.e-yakutia.ru">
									<div class="button-login-title button-login-title-esia ">
										<span class="text-title ">Войти через</span>
										<span class="logo-title "></span>
									</div>
								</a>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>

			

		</div>
		
		</div>
	</div>
</div>



<div id="overlay" style="display: none"></div>
</div>

	

	<script type="text/javascript">
		
 	
 	let kill = document.querySelector(".kill");

		
		
		
		kill.onclick = function(){
			window.location.replace("https://sgo.e-yakutia.ru");

		}

		
	</script>


</body></html>
