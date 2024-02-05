/* empty css                                      */import { c as createAstro, d as createComponent, r as renderTemplate, g as renderSlot, h as renderHead, f as addAttribute, m as maybeRenderHead, i as renderComponent } from '../astro_86193255.mjs';
import 'html-escaper';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"><head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/anillo.png"><meta name="generator"', '><script src="https://unpkg.com/scrollreveal"><\/script><link rel="preload" href="/fonts/Oneday.woff2" as="font" type="font/woff2" crossorigin="anonymous"><title>', "</title>", "</head><body>", "</body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/layouts/Layout.astro", void 0);

const $$Astro$5 = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<form class="form" method="POST" id="MiFormulario" data-astro-cid-346426y5><h1 class="text-2xl text-white p-5 " data-astro-cid-346426y5>Confirmar Asistencia</h1><div class="field" data-astro-cid-346426y5><input placeholder="Nombre" name="Nombres" class="input-field" type="text" data-astro-cid-346426y5></div><div class="field" data-astro-cid-346426y5><input placeholder="Teléfono" name="Telefono" class="input-field" type="text" data-astro-cid-346426y5></div><select class="field" id="opcion" name="Confirmacion" data-astro-cid-346426y5><option value="" disabled selected data-astro-cid-346426y5>Confirmación</option><option value="Sí, asistiré" data-astro-cid-346426y5>Sí, asistiré</option><option value="No podré asistir" data-astro-cid-346426y5>No podré asistir</option></select><textarea class="field resize-none" name="Mensaje" placeholder="Mensaje" data-astro-cid-346426y5></textarea><button class="btn hover:contrast-125" type="submit" data-astro-cid-346426y5>Enviar Respuesta</button></form>`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/components/Form.astro", void 0);

const $$Astro$4 = createAstro();
const $$Timer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Timer;
  return renderTemplate`${maybeRenderHead()}<div class="my-5 text-center flex
 flex-col items-center" data-astro-cid-fprc4jtm><img src="/iglesia.png" alt="iglesia" srcset="" data-astro-cid-fprc4jtm><div class="card my-5" data-astro-cid-fprc4jtm><p class="" data-astro-cid-fprc4jtm><span data-astro-cid-fprc4jtm>Octubre 14 de Febrero 2023</span><span class="time-sub-text" data-astro-cid-fprc4jtm>PM</span></p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" stroke-width="0" fill="currentColor" stroke="currentColor" class="moon" data-astro-cid-fprc4jtm><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" data-astro-cid-fprc4jtm></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" data-astro-cid-fprc4jtm></path></svg></div></div>`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/components/Timer.astro", void 0);

const $$Astro$3 = createAstro();
const $$CardHorario = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardHorario;
  const { oclock, place, street, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center" data-astro-cid-svb2qbvr><h2 class="m-auto w-1/2" data-astro-cid-svb2qbvr>${oclock}</h2><div class="w-[1px] bg-black h-[60px]" data-astro-cid-svb2qbvr></div><p class=" pl-3 w-1/2" data-astro-cid-svb2qbvr>${place}</p></div><div class="py-6" data-astro-cid-svb2qbvr><p class="py-5" data-astro-cid-svb2qbvr>${street}</p><a class="btn" target="_blank"${addAttribute(href, "href")} data-astro-cid-svb2qbvr>
Ver ubicación</a></div>`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/components/CardHorario.astro", void 0);

const $$Astro$2 = createAstro();
const $$Temporizer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Temporizer;
  return renderTemplate`${maybeRenderHead()}<section class="cont-temporizador" data-astro-cid-xcbaaecl><div class="bloque" data-astro-cid-xcbaaecl><p id="days" data-astro-cid-xcbaaecl>-</p><span data-astro-cid-xcbaaecl>Dias</span></div><div class="bloque" data-astro-cid-xcbaaecl><p id="hours" data-astro-cid-xcbaaecl>-</p><span data-astro-cid-xcbaaecl>Horas</span></div><div class="bloque" data-astro-cid-xcbaaecl><p id="minutes" data-astro-cid-xcbaaecl>-</p><span data-astro-cid-xcbaaecl>Minutos</span></div><div class="bloque" data-astro-cid-xcbaaecl><p id="seconds" data-astro-cid-xcbaaecl>-</p><span data-astro-cid-xcbaaecl>Segundos</span></div></section>`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/components/Temporizer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${maybeRenderHead()}<div class="p-2 grid grid-cols-3" data-astro-cid-ihllb3az><img src="/test.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo1.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo2.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo3.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo4.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo5.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo6.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo7.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az><img src="/photo8.webp" loading="lazy" width="896" height="896" alt="" data-astro-cid-ihllb3az></div>`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/components/Gallery.astro", void 0);

const $$Astro = createAstro();
const $$InvitationDavid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InvitationDavid;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Boda" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="relative flex justify-center text-white h-[100vh]"><img src="/main_photo.webp" alt="Imagen" class="w-full h-full object-cover" height="912" width="1368"><h1 class="py-10 absolute text-4xl md:text-6xl uppercase">Nos casamos</h1><h2 class="absolute py-56 text-3xl">Alice & David</h2></main><div class="py-5 flex flex-col items-center justify-center gap-3 text-center"><div class="temporizer"><h2 class="text-4xl">Estás invitado</h2><p>Queremos que seas parte de este momento tal especial !</p></div><div class="timer">${renderComponent($$result2, "Temporizer", $$Temporizer, {})}${renderComponent($$result2, "Timer", $$Timer, {})}</div><div class="cards"><div class="flex justify-center items-center"><img src="/anillo2.png" alt="anillo" width="32px" height="32px"></div><h2 class="text-4xl">Ceremónia</h2>${renderComponent($$result2, "CardHorario", $$CardHorario, { "oclock": "17:00", "place": "Iglesia San Martin de Porres", "street": "Eduardo Morley y George Davis", "href": "https://goo.gl/maps/p242XZfmz7vhqQeh8" })}<h2 class="text-4xl">Celebración</h2>${renderComponent($$result2, "CardHorario", $$CardHorario, { "oclock": "17:00", "place": "Iglesia San Martin de Porres", "street": "Eduardo Morley y George Davis", "href": "https://goo.gl/maps/p242XZfmz7vhqQeh8" })}</div><div class="dressCode py-10"><div class="flex justify-center items-center"><img src="/vestido.png" alt="" srcset="" width="32" height="32"><img src="/terno.png" alt="" srcset="" width="32" height="32"></div><h2 class="text-4xl">Código de Vestimenta</h2><p>Formal - No niños</p></div><div class="gallery"><h2 class="text-4xl">Nosotros</h2>${renderComponent($$result2, "Gallery", $$Gallery, {})}</div><div class="">${renderComponent($$result2, "Form", $$Form, {})}</div><footer class="py-10"><h1 class="m-auto text-6xl">Te esperamos</h1><h2 class="text-4xl">Alice & David</h2></footer></div>` })}`;
}, "C:/Users/ismae/Downloads/pro/invitation-astro/src/pages/invitation-David.astro", void 0);

const $$file = "C:/Users/ismae/Downloads/pro/invitation-astro/src/pages/invitation-David.astro";
const $$url = "/invitation-David";

export { $$InvitationDavid as default, $$file as file, $$url as url };
