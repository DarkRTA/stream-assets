function addSidebarSeperator() {
	let sidebar = document.getElementById("sidebar");
	let div = document.createElement("div");
	div.className = "sidebar-seperator"
	sidebar.appendChild(div);
}
function addSidebarSpacer(height) {
	let sidebar = document.getElementById("sidebar");
	let div = document.createElement("div");
	div.className = "sidebar-spacer"
	div.style.height = height;
	sidebar.appendChild(div);
}
