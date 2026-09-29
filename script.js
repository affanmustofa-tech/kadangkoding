const WHATSAPP_NUMBER = "62881012669415";
const WHATSAPP_MESSAGE = "Halo kadangkoding, saya ingin konsultasi tentang pembuatan website.";

const navbarLogo = document.querySelector(".navbar-logo");

if (navbarLogo) {
	const showNavbarLogo = () => {
		navbarLogo.classList.add("is-visible");
		document.querySelector(".logo-icon").hidden = true;
	};

	navbarLogo.addEventListener("load", showNavbarLogo, { once: true });
	navbarLogo.addEventListener("error", () => {
		navbarLogo.hidden = true;
	}, { once: true });

	if (navbarLogo.complete && navbarLogo.naturalWidth > 0) {
		showNavbarLogo();
	}
}

const navbar = document.querySelector(".navbar");
const navToggle = document.querySelector(".nav-toggle");

if (navbar && navToggle) {
	const closeMenu = () => {
		navbar.classList.remove("is-menu-open");
		navToggle.setAttribute("aria-expanded", "false");
		navToggle.setAttribute("aria-label", "Buka menu navigasi");
	};

	navToggle.addEventListener("click", () => {
		const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
		navToggle.setAttribute("aria-expanded", String(!isExpanded));
		navToggle.setAttribute("aria-label", isExpanded ? "Buka menu navigasi" : "Tutup menu navigasi");
		navbar.classList.toggle("is-menu-open", !isExpanded);
	});

	navbar.querySelectorAll(".nav-menu a").forEach((link) => {
		link.addEventListener("click", closeMenu);
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") closeMenu();
	});
}

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
	link.addEventListener("click", (event) => {
		const phoneNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

		if (!phoneNumber) {
			event.preventDefault();
			window.alert("Nomor WhatsApp belum diatur. Isi WHATSAPP_NUMBER di script.js dengan format internasional, misalnya 628123456789.");
			return;
		}

		link.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
		link.target = "_blank";
		link.rel = "noopener noreferrer";
	});
});

const currentYear = document.querySelector("#current-year");

if (currentYear) {
	currentYear.textContent = new Date().getFullYear();
}
