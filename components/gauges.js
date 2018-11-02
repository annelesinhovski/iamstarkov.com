export const Gauges = () => (
  <script type="text/javascript" dangerouslySetInnerHTML={{__html: `
    var _gauges = _gauges || [];
    (function() {
      var t   = document.createElement('script');
      t.type  = 'text/javascript';
      t.async = true;
      t.id    = 'gauges-tracker';
      t.setAttribute('data-site-id', '5540883fde2e2639c70007e9');
      t.setAttribute('data-track-path', 'https://track.gaug.es/track.gif');
      t.src = 'https://track.gaug.es/track.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(t, s);
    })();
  `}} />
)
