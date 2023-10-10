function toggleDropdown() {
	var dropdown = document.getElementById("myDropdown");
	if (dropdown.style.display === "block") {
		dropdown.style.display = "none";
	} else {
		dropdown.style.display = "block";
	}
}

function toggleExportDropdown() {
	var dropdown = document.getElementById("export-dropdown");
	if (dropdown.style.display === "block") {
		dropdown.style.display = "none";
	} else {
		dropdown.style.display = "block";
	}
}
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.style.display === "block") {
				openDropdown.style.display = "none";
			}
		}
	}
}


function toggleSearch() {
	var dropdown = document.getElementById("mySearchDropdown");
	if (dropdown.style.display === "block") {
		dropdown.style.display = "none";
	} else {
		dropdown.style.display = "block";
	}
}

$(".search-dropdown-content").click(function (event) {
	event.stopPropagation();
});


window.onclick = function (event) {
	if (!event.target.matches('.search-btn')) {
		var dropdowns = document.getElementsByClassName("search-dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.style.display === "block") {
				openDropdown.style.display = "none";
			}
		}
	}
}



$(document).ready(function () {
	$("#listTab").click(function () {
		$("#contentList").show();
		$("#contentGrid").hide();
		$("#listTab").addClass("active-tab");
		$("#gridTab").removeClass("active-tab");
	});

	$("#gridTab").click(function () {
		$("#contentGrid").show();
		$("#contentList").hide();
		$("#listTab").removeClass("active-tab");
		$("#gridTab").addClass("active-tab");
	});


	const $toggleButton = $('#extraToggle');
	const $items = $('#extraDiv');

	$items.hide();

	$toggleButton.click(function () {
		$items.toggle();
	});


	$(document).ready(function () {
		$(".persian-date").pDatepicker({
			initialValueType: "gregorian",
			format: "YYYY/MM/DD",
			onSelect: "year"
		});

		const $openCalender = $('#openCalender');
		const $datePicker = $('.datepicker-container');

		$datePicker.hide();

		$openCalender.click(function () {
			$datePicker.toggle();
		});




	});

	const $fileCheckbox = $('.file-checkbox');
	const $addNewFile = $('#add-newFile');
	const $newFile = $('#newFile');


	$fileCheckbox.change(function () {
		if ($fileCheckbox.is(':checked')) {
			$addNewFile.show();
			$newFile.hide();
		} else {
			$addNewFile.hide();
			$newFile.show();
		}
	});



});

$(document).ready(function () {
	const $toggleButton = $('#toggleSelection');
	const $fileCheckboxes = $('.file-checkbox');

	let selectAllState = true;

	function toggleButtonTextAndIcon() {
		if (selectAllState) {
			$toggleButton.html('<span class="far fa-check-square"></span> هیچکدام');
			$fileCheckboxes.prop('checked', true);
		} else {
			$toggleButton.html('<span class="far fa-square"></span> انتخاب همه');
			$fileCheckboxes.prop('checked', false);
		}
		selectAllState = !selectAllState;
	}

	$toggleButton.click(toggleButtonTextAndIcon);

	$(document).keydown(function (e) {
		if (e.ctrlKey) {
			if (e.key === 'a' || e.key === 'A') {
				$toggleButton.click();
				e.preventDefault();
			} else if (e.key === 'd' || e.key === 'D') {
				$toggleButton.click();
				e.preventDefault();
			}
		}
	});

});
$(document).ready(function () {
	$("#folderTab").click(function () {
		$("#contentFolder").toggle();
	});

	$("#uploadListTab").click(function () {
		$("#uploadFilesList").show();
		$("#uploadFilesGrid").hide();

	});

	$("#uploadGridTab").click(function () {
		$("#uploadFilesGrid").show();
		$("#uploadFilesList").hide();

	});

	const $toggleButton = $('.more-action-btn');
	const $items = $('.more-actions');

	$items.hide();

	$toggleButton.click(function () {
		$items.toggle();
	});
});

// hamburger menu
function hamMenu() {
	var menu = document.getElementById("mobileMenu");
	if (menu.style.display === "block") {
		menu.style.display = "none";
	} else {
		menu.style.display = "block";
	}
}


$('#openModalButton').on('shown.bs.modal', function () {
	$('#exampleModal').trigger('focus')
})




