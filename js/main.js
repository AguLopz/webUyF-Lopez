// Nav robusto para Vercel con páginas en subcarpeta
(function () {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  
  const PAGES_DIR = '/pages'; 

  
  const hrefFor = (slug) => {
    if (slug === '') return '/';                       
    return PAGES_DIR ? `${PAGES_DIR}/${slug}.html`     
                     : `/${slug}.html`;                
  };

  const pages = [
    { slug: '',           label: 'Inicio',     match: /^\/($|index\.html$)/ },
    { slug: 'actividades',label: 'Actividades',match: /actividades(\.html)?$/ },
    { slug: 'alquileres', label: 'Alquileres', match: /alquileres(\.html)?$/ },
    { slug: 'tienda',     label: 'Tienda',     match: /tienda(\.html)?$/ },
    { slug: 'contacto',   label: 'contacto',   match: /contacto(\.html)?$/ }
  ];

  nav.innerHTML = pages.map(p => `
    <a class="nav-link px-2" href="${hrefFor(p.slug)}" data-slug="${p.slug}">
      ${p.label}
    </a>
  `).join('');

  // resalta activo según path actual
  const path = location.pathname.toLowerCase();
  const links = nav.querySelectorAll('a.nav-link');
  pages.forEach((p, i) => { if (p.match.test(path)) links[i].classList.add('active-link'); });
})();
