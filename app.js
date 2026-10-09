(function () {
  'use strict';

  const CFG = window.QLEAP_SIGNATURE;
  const STORE_KEY = 'q-signature-form';

  const I18N = {
    fr: {
      tool: 'Générateur de signature',
      chipCopied: 'Copié',
      chipMissing: 'Prénom et nom requis',
      chipManual: 'Cmd+C pour copier',
      howTitle: 'Comment ça marche ?',
      how1t: 'Renseignez vos informations',
      how1d: 'Prénom, nom, fonction et mobile. Le reste est déjà prévu pour Q-Leap.',
      how2t: 'Copiez la signature',
      how2d: "Vérifiez l'aperçu, ajoutez une bannière si besoin, puis cliquez sur « Copier la signature ».",
      how3t: 'Collez-la dans votre messagerie',
      how3d: "Dans les réglages de signature d'Outlook ou de Gmail. Les étapes détaillées sont juste en dessous.",
      faqTitle: 'Questions fréquentes',
      faq1q: 'Où coller la signature ?',
      faq1a: '<p><b>Outlook (Mac)</b> : Outlook &gt; Réglages &gt; Signatures &gt; + , puis collez (Cmd+V).</p><p><b>Outlook (Windows)</b> : Fichier &gt; Options &gt; Courrier &gt; Signatures &gt; Nouveau.</p><p><b>Outlook web / nouvel Outlook</b> : Paramètres &gt; Comptes &gt; Signatures.</p><p><b>Gmail</b> : Paramètres &gt; Voir tous les paramètres &gt; Signature.</p>',
      faq2q: "Le logo n'apparaît pas chez mon destinataire, est-ce normal ?",
      faq2a: "<p>Oui : le logo est chargé depuis Internet, et certaines messageries demandent de cliquer sur « Afficher les images ». Ne remplacez pas le logo par une image importée : c'est ce qui le fait apparaître cassé dans Outlook.</p>",
      faq3q: 'Le lien de la bannière a disparu après le collage',
      faq3a: "<p>Sélectionnez la bannière dans l'éditeur de signature, choisissez « Lien » (Cmd+K sur Mac, Ctrl+K sur Windows) et collez l'adresse affichée sous la case de la bannière (bouton « Copier le lien »).</p>",
      faq4q: 'Comment modifier ma signature plus tard ?',
      faq4a: "<p>Revenez sur cette page : vos informations sont mémorisées dans ce navigateur. Modifiez-les, copiez à nouveau et remplacez l'ancienne signature dans votre messagerie.</p>",
      stepInfo: 'Vos informations',
      title: 'Générateur de signature e-mail',
      lead: 'Renseignez vos informations : la signature se met à jour à droite. Copiez-la ensuite en un clic et collez-la dans votre messagerie.',
      firstName: 'Prénom',
      lastName: 'Nom',
      jobTitle: 'Fonction chez Q-Leap',
      mobile: 'Téléphone mobile',
      optional: 'facultatif',
      infoLabel: "Plus d'informations",
      tipJob: 'Laissez vide pour ne pas afficher de ligne « fonction » dans la signature.',
      tipMobile: "Format international conseillé, par exemple +352 621 123 456. Le numéro devient cliquable sur téléphone. Laissez vide pour ne pas l'afficher.",
      fixedTitle: 'Toujours inclus',
      tipFixed: "Le logo, le standard, l'adresse et le site de Q-Leap sont communs à tous : ils ne se modifient pas ici.",
      phoneQleap: 'Standard Q-Leap',
      address: 'Adresse',
      website: 'Site web',
      bannerTitle: 'Bannière',
      tipBanner: "La bannière s'ajoute sous la signature et renvoie vers la page indiquée. Si votre messagerie perd le lien au collage : sélectionnez la bannière, choisissez « Lien » (Cmd+K sur Mac, Ctrl+K sur Windows) et collez l'adresse affichée sous la case.",
      noBanner: 'Aucune bannière disponible pour le moment.',
      bannerLink: 'Lien',
      copyLink: 'Copier le lien',
      preview: 'Aperçu',
      copy: 'Copier la signature',
      copied: 'Signature copiée. Collez-la dans les réglages de signature de votre messagerie (Cmd+V ou Ctrl+V).',
      copiedHtml: 'Code HTML copié.',
      copiedLink: 'Lien copié.',
      copyFallback: 'Signature sélectionnée : appuyez sur Cmd+C (Mac) ou Ctrl+C (Windows) pour la copier.',
      missingName: 'Renseignez au moins votre prénom et votre nom avant de copier.',
      mailTo: 'À :',
      mailText: 'Bonjour,<br>Vous trouverez le document ci-joint.<br>Bien cordialement,',
      htmlCode: 'Code HTML (pour les messageries qui le demandent)',
      copyHtml: 'Copier le code HTML',
      tipPaste:
        '<b>Où coller la signature</b>' +
        '<span><b>Outlook (Mac)</b> : Outlook &gt; Réglages &gt; Signatures &gt; + &gt; collez dans la zone de texte.</span>' +
        '<span><b>Outlook (Windows)</b> : Fichier &gt; Options &gt; Courrier &gt; Signatures &gt; Nouveau.</span>' +
        '<span><b>Outlook web / nouvel Outlook</b> : Paramètres &gt; Comptes &gt; Signatures.</span>' +
        '<span><b>Gmail</b> : Paramètres &gt; Voir tous les paramètres &gt; Signature.</span>' +
        "<span>Le logo et la bannière sont chargés depuis Internet : ne les remplacez pas par une image importée, sinon ils risquent de s'afficher cassés. Les liens (téléphones, site, bannière) sont déjà inclus ; s'il en manque un après le collage, sélectionnez l'élément et ajoutez le lien avec Cmd+K / Ctrl+K.</span>" +
        "<span>Certains destinataires doivent cliquer sur « Afficher les images » pour voir le logo : c'est normal.</span>"
    },
    en: {
      tool: 'Signature generator',
      chipCopied: 'Copied',
      chipMissing: 'First and last name needed',
      chipManual: 'Press Cmd+C to copy',
      howTitle: 'How does it work?',
      how1t: 'Fill in your details',
      how1d: "First name, last name, job title and mobile. Everything else is already set for Q-Leap.",
      how2t: 'Copy the signature',
      how2d: 'Check the preview, add a banner if needed, then click "Copy signature".',
      how3t: 'Paste it into your email client',
      how3d: "In Outlook's or Gmail's signature settings. Step-by-step instructions are just below.",
      faqTitle: 'Frequently asked questions',
      faq1q: 'Where do I paste the signature?',
      faq1a: '<p><b>Outlook (Mac)</b>: Outlook &gt; Settings &gt; Signatures &gt; +, then paste (Cmd+V).</p><p><b>Outlook (Windows)</b>: File &gt; Options &gt; Mail &gt; Signatures &gt; New.</p><p><b>Outlook on the web / new Outlook</b>: Settings &gt; Accounts &gt; Signatures.</p><p><b>Gmail</b>: Settings &gt; See all settings &gt; Signature.</p>',
      faq2q: "The logo doesn't show for my recipient. Is that normal?",
      faq2a: '<p>Yes: the logo loads from the internet, and some email clients ask the reader to click "Show images". Do not replace the logo with an uploaded image: that is what makes it break in Outlook.</p>',
      faq3q: 'The banner link disappeared after pasting',
      faq3a: '<p>Select the banner in the signature editor, choose "Link" (Cmd+K on Mac, Ctrl+K on Windows) and paste the address shown under the banner checkbox ("Copy link" button).</p>',
      faq4q: 'How do I change my signature later?',
      faq4a: '<p>Come back to this page: your details are remembered in this browser. Edit them, copy again and replace the old signature in your email client.</p>',
      stepInfo: 'Your details',
      title: 'Email signature generator',
      lead: 'Fill in your details: the signature updates on the right. Then copy it in one click and paste it into your email client.',
      firstName: 'First name',
      lastName: 'Last name',
      jobTitle: 'Job title at Q-Leap',
      mobile: 'Mobile phone',
      optional: 'optional',
      infoLabel: 'More information',
      tipJob: 'Leave empty to show no job title line in the signature.',
      tipMobile: 'International format recommended, e.g. +352 621 123 456. The number becomes tappable on phones. Leave empty to hide it.',
      fixedTitle: 'Always included',
      tipFixed: "Q-Leap's logo, switchboard number, address and website are the same for everyone, so they can't be edited here.",
      phoneQleap: 'Q-Leap switchboard',
      address: 'Address',
      website: 'Website',
      bannerTitle: 'Banner',
      tipBanner: 'The banner is added below the signature and links to the page shown. If your email client drops the link when pasting: select the banner, choose "Link" (Cmd+K on Mac, Ctrl+K on Windows) and paste the address shown under the checkbox.',
      noBanner: 'No banner available at the moment.',
      bannerLink: 'Link',
      copyLink: 'Copy link',
      preview: 'Preview',
      copy: 'Copy signature',
      copied: "Signature copied. Paste it into your email client's signature settings (Cmd+V or Ctrl+V).",
      copiedHtml: 'HTML code copied.',
      copiedLink: 'Link copied.',
      copyFallback: 'Signature selected: press Cmd+C (Mac) or Ctrl+C (Windows) to copy it.',
      missingName: 'Enter at least your first and last name before copying.',
      mailTo: 'To:',
      mailText: 'Hello,<br>Please find the document attached.<br>Best regards,',
      htmlCode: 'HTML code (for email clients that ask for it)',
      copyHtml: 'Copy HTML code',
      tipPaste:
        '<b>Where to paste the signature</b>' +
        '<span><b>Outlook (Mac)</b>: Outlook &gt; Settings &gt; Signatures &gt; + &gt; paste into the text area.</span>' +
        '<span><b>Outlook (Windows)</b>: File &gt; Options &gt; Mail &gt; Signatures &gt; New.</span>' +
        '<span><b>Outlook on the web / new Outlook</b>: Settings &gt; Accounts &gt; Signatures.</span>' +
        '<span><b>Gmail</b>: Settings &gt; See all settings &gt; Signature.</span>' +
        '<span>The logo and banner load from the internet: do not replace them with an uploaded image, or they may show up broken. Links (phones, website, banner) are already included; if one is missing after pasting, select the item and add the link with Cmd+K / Ctrl+K.</span>' +
        '<span>Some recipients have to click "Show images" to see the logo: that is normal.</span>'
    }
  };

  const $ = (sel) => document.querySelector(sel);
  const form = $('#sig-form');
  const sigBox = $('#signature');
  const htmlOut = $('#html-out');
  const statusEl = $('#status');
  let lang = 'fr';
  let statusTimer = null;

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const abs = (path) => (/^https?:/.test(path) ? path : CFG.PUBLIC_URL + path);
  const telHref = (n) => 'tel:' + n.replace(/[^\d+]/g, '');

  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch (e) { return {}; }
  }
  function writeStore(data) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (e) { /* private mode */ }
  }

  function values() {
    const banners = [...form.querySelectorAll('input[name="banner"]:checked')].map((c) => c.value);
    return {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      jobTitle: form.jobTitle.value.trim(),
      mobile: form.mobile.value.trim(),
      banners
    };
  }

  /* The signature itself: a table with inline styles only, which is what
     Outlook, Gmail and Apple Mail all keep when it is pasted. */
  function buildSignature(v) {
    const c = CFG.company;
    const font = 'font-family:Arial,Helvetica,sans-serif;';
    const line = (content, extra) => `<p style="margin:0;${font}font-size:13px;line-height:18px;${extra || 'color:#777777;'}">${content}</p>`;
    const link = (href, text, style) => `<a href="${esc(href)}" style="${style}text-decoration:none;">${esc(text)}</a>`;
    const name = [v.firstName, v.lastName.toUpperCase()].filter(Boolean).join(' ') || (lang === 'fr' ? 'Prénom NOM' : 'First LAST');

    let rows = `<p style="margin:0;${font}font-size:15px;line-height:20px;font-weight:bold;color:#111111;">${esc(name)}</p>`;
    rows += v.jobTitle ? line(esc(v.jobTitle), 'color:#777777;margin-bottom:8px;') : `<p style="margin:0;font-size:8px;line-height:8px;">&nbsp;</p>`;
    if (v.mobile) rows += line(`<b style="color:#111111;">M</b>&nbsp;&nbsp;${link(telHref(v.mobile), v.mobile, 'color:#0065dd;')}`, 'color:#111111;');
    rows += line(`<b style="color:#111111;">T</b>&nbsp;&nbsp;${link(telHref(c.phone), c.phone, 'color:#0065dd;')}`, 'color:#111111;');
    rows += line(esc(c.address));
    rows += line(link(c.websiteUrl, c.website, 'color:#111111;font-weight:bold;'));

    let html =
      `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;${font}">` +
      '<tr>' +
      `<td valign="middle" style="padding:0 14px 0 0;border-right:1px solid #d9dde3;"><a href="${esc(c.websiteUrl)}" style="text-decoration:none;"><img src="${esc(abs(c.logo))}" alt="${esc(c.name)}" width="${c.logoWidth}" height="${c.logoHeight}" style="display:block;width:${c.logoWidth}px;height:${c.logoHeight}px;border:0;"></a></td>` +
      `<td valign="middle" style="padding:0 0 0 14px;">${rows}</td>` +
      '</tr></table>';

    CFG.banners.filter((b) => b.active && v.banners.includes(b.id)).forEach((b) => {
      html += `<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;margin-top:14px;"><tr><td style="padding:14px 0 0 0;">` +
        `<a href="${esc(b.link)}" style="text-decoration:none;"><img src="${esc(abs(b.image))}" alt="${esc(b.alt)}" width="${b.width}" height="${b.height}" style="display:block;width:${b.width}px;max-width:100%;height:auto;border:0;"></a>` +
        '</td></tr></table>';
    });
    return html;
  }

  function render() {
    const v = values();
    const html = buildSignature(v);
    sigBox.innerHTML = html;
    htmlOut.value = html;
    writeStore(v);
  }

  function renderBanners(selected) {
    const list = $('#banner-list');
    const active = CFG.banners.filter((b) => b.active);
    if (!active.length) {
      list.innerHTML = `<p class="muted">${esc(I18N[lang].noBanner)}</p>`;
      return;
    }
    list.innerHTML = active.map((b) => `
      <label class="banner-option">
        <input type="checkbox" name="banner" value="${esc(b.id)}"${selected.includes(b.id) ? ' checked' : ''}>
        <span class="banner-option__body">
          <span class="banner-option__label">${esc(b.label[lang])}</span>
          <img src="${esc(b.image)}" alt="" width="300" height="60">
          <span class="banner-option__link">${esc(I18N[lang].bannerLink)} : <code>${esc(b.link)}</code>
            <button type="button" class="link-btn" data-copy-link="${esc(b.link)}">${esc(I18N[lang].copyLink)}</button></span>
        </span>
      </label>`).join('');
  }

  function say(msg) {
    statusEl.textContent = msg;
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { statusEl.textContent = ''; }, 6000);
  }

  /* Small "Copied" chip that appears just below the pointer (or below the
     button when triggered from the keyboard) and fades out. */
  let chip = null;
  let chipTimer = null;
  let lastPointer = null;
  document.addEventListener('pointerdown', (e) => { lastPointer = { x: e.clientX, y: e.clientY }; }, true);
  document.addEventListener('keydown', () => { lastPointer = null; }, true);

  function toast(msg, anchor, ok) {
    if (!chip) {
      chip = document.createElement('div');
      chip.className = 'copy-chip';
      chip.setAttribute('aria-hidden', 'true');
      document.body.appendChild(chip);
    }
    chip.classList.toggle('copy-chip--warn', !ok);
    chip.innerHTML = (ok ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"/></svg>' : '') + esc(msg);
    let x, y;
    if (lastPointer) { x = lastPointer.x; y = lastPointer.y + 22; }
    else { const r = anchor.getBoundingClientRect(); x = r.left + r.width / 2; y = r.bottom + 10; }
    chip.style.left = Math.min(Math.max(x, 70), window.innerWidth - 70) + 'px';
    chip.style.top = Math.min(y, window.innerHeight - 44) + 'px';
    chip.classList.remove('is-visible');
    void chip.offsetWidth;
    chip.classList.add('is-visible');
    clearTimeout(chipTimer);
    chipTimer = setTimeout(() => chip.classList.remove('is-visible'), 1600);
  }

  function selectNode(node) {
    const range = document.createRange();
    range.selectNodeContents(node);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  async function copySignature() {
    const v = values();
    if (!v.firstName || !v.lastName) {
      say(I18N[lang].missingName);
      toast(I18N[lang].chipMissing, $('#copy-btn'), false);
      (v.firstName ? form.lastName : form.firstName).focus();
      return;
    }
    const html = buildSignature(v);
    const text = sigBox.innerText;
    try {
      if (!window.ClipboardItem || !navigator.clipboard || !navigator.clipboard.write) throw new Error('no rich clipboard');
      await navigator.clipboard.write([new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([text], { type: 'text/plain' })
      })]);
      say(I18N[lang].copied);
      toast(I18N[lang].chipCopied, $('#copy-btn'), true);
    } catch (e) {
      selectNode(sigBox);
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      say(ok ? I18N[lang].copied : I18N[lang].copyFallback);
      toast(ok ? I18N[lang].chipCopied : I18N[lang].chipManual, $('#copy-btn'), ok);
    }
  }

  async function copyText(text, msg, anchor) {
    try {
      await navigator.clipboard.writeText(text);
      say(msg);
      toast(I18N[lang].chipCopied, anchor, true);
    } catch (e) {
      htmlOut.focus();
      htmlOut.select();
      say(I18N[lang].copyFallback);
      toast(I18N[lang].chipManual, anchor, false);
    }
  }

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = lang === 'fr' ? 'Q-Leap · Signature e-mail' : 'Q-Leap · Email signature';
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const t = I18N[lang][el.dataset.i18n];
      if (t === undefined) return;
      if (/<br>/.test(t)) el.innerHTML = t; else el.textContent = t;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((el) => { el.innerHTML = I18N[lang][el.dataset.i18nHtml]; });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', I18N[lang][el.dataset.i18nAria]));
    document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderBanners(values().banners);
    render();
    try { localStorage.setItem('q-signature-lang', lang); } catch (e) { /* ignore */ }
  }

  function init() {
    const c = CFG.company;
    document.querySelectorAll('[data-bind]').forEach((el) => { el.textContent = c[el.dataset.bind === 'companyPhone' ? 'phone' : el.dataset.bind]; });

    const saved = readStore();
    ['firstName', 'lastName', 'jobTitle', 'mobile'].forEach((k) => { if (saved[k]) form[k].value = saved[k]; });
    renderBanners(saved.banners || []);

    let startLang = 'fr';
    try { startLang = localStorage.getItem('q-signature-lang') || (navigator.language || 'fr').slice(0, 2); } catch (e) { /* ignore */ }
    applyLang(startLang === 'en' ? 'en' : 'fr');

    form.addEventListener('input', render);
    form.addEventListener('change', render);
    form.addEventListener('submit', (e) => e.preventDefault());
    $('#copy-btn').addEventListener('click', copySignature);
    $('#copy-html').addEventListener('click', () => copyText(htmlOut.value, I18N[lang].copiedHtml, $('#copy-html')));
    document.addEventListener('click', (e) => {
      const b = e.target.closest('[data-copy-link]');
      if (b) { e.preventDefault(); copyText(b.dataset.copyLink, I18N[lang].copiedLink, b); }
      const l = e.target.closest('[data-lang]');
      if (l) applyLang(l.dataset.lang);
    });
  }

  init();
})();
