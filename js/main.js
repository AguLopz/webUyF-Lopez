(function () {
  'use strict';

  // Nombre de la carpeta EXACTO como aparece en el navegador
  const PAGES_DIR_REAL = 'Pages'; 

  // Orden fijo del menú
  const ORDER = ['index', 'sobrenosotros', 'actividades', 'alquileres', 'tienda', 'contacto'];
  const LABEL = {
    index: 'Inicio',
    sobrenosotros: 'Sobre Nosotros',
    actividades: 'Actividades',
    alquileres: 'Alquileres',
    tienda: 'Tienda',
    contacto: 'Contacto'
  };

  // Detectar si estamos dentro de Pages (ignorando mayúsculas)
  const pathLower = window.location.pathname.toLowerCase();
  const inPages = pathLower.includes('/' + PAGES_DIR_REAL.toLowerCase() + '/');
  const base = inPages ? '../' : '';

  // Armar rutas usando el nombre real de la carpeta
  const HREF = {
    index: `${base}index.html`,
    sobrenosotros: `${base}${PAGES_DIR_REAL}/sobreNosotros.html`,
    actividades: `${base}${PAGES_DIR_REAL}/actividades.html`,
    alquileres: `${base}${PAGES_DIR_REAL}/alquileres.html`,
    tienda: `${base}${PAGES_DIR_REAL}/tienda.html`,
    contacto: `${base}${PAGES_DIR_REAL}/contacto.html`
  };

  // Construir el nav
  const nav = document.getElementById('site-nav');
  if (nav) {
    nav.innerHTML = ORDER
      .map(key => `<a class="nav-link text-warning" href="${HREF[key]}">${LABEL[key]}</a>`)
      .join('');
  }

  // Marcar el link activo (comparación case-insensitive)
  const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
  document.querySelectorAll('#site-nav a.nav-link').forEach(a => {
    const linkPath = new URL(a.href, window.location.origin).pathname.replace(/\/+$/, '').toLowerCase();
    if (linkPath === currentPath) {
      a.classList.add('active-link');
      a.setAttribute('aria-current', 'page');
    }
  });

  // Validación Bootstrap (para contacto)
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();