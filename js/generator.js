	function init() {
		var b = function a() {
			var h = ["Товарищи,", "С другой стороны", "Равным образом", "Не следует, однако, забывать, что", "Таким образом,", "Повседневная практика показывает, что", "Значимость этих проблем настолько очевидна, что", "Разнообразный и богатый опыт", "Задача организации, в особенности же", "Идейные соображения высшего порядка, а также"];
			var f = ["реализация намеченных плановых заданий", "рамки и место обучения кадров", "постоянный количественный рост и сфера нашей активности", "сложившаяся структура организации", "новая модель организационной деятельности", "дальнейшее развитие различных форм деятельности", "постоянное информационно-пропагандистское обеспечение нашей деятельности", "укрепления и развития структуры", "консультация с широким активом", "начало повседневной работы по формированию позиции"];
			var e = ["играет важную роль в формировании", "требуют определения и уточнения", "способствует подготовке и реализации", "обеспечивает широкому кругу (специалистов) участие в формировании", "позволяет выполнить важные задания по разработке", "в значительной степени обусловливает создание", "позволяет оценить, значение", "представляет собой интересный эксперимент проверки", "влечет за собой процесс внедрения и модернизации"];
			var d = ["существенных финансовых и административных условий", "дальнейших направлений развития", "системы массового участия", "позиций, занимаемых участниками в отношении поставленных задач", "новых предложений", "направлений прогрессивного развития", "системы обучения кадров, соответствующей насущным потребностям", "соответствующих условий активизации", "модели развития", "форм воздействия"];
				var k = Math.floor(Math.random() * h.length);
				var j = Math.floor(Math.random() * f.length);
				var i = Math.floor(Math.random() * e.length);
				var g = Math.floor(Math.random() * d.length);
				var c = h[k] + " " + f[j] + " " + e[i] + " " + d[g] + "!";
				return c
			};
		document.getElementById("generate").onclick = function() {
		document.getElementById("text").innerHTML = b();
	    }
    }
	window.onload = init;	
