(function () {
  window.__onThemeChange = function () { }
  window.__onSkinChange = function () { }
  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem('theme', newTheme)
    } catch (err) { }
  }
  function setTheme (newTheme) {
    window.__theme = newTheme
    preferredTheme = newTheme
    document.body.className = newTheme
    window.__onThemeChange(newTheme)
    window.__onSkinChange(newTheme)
  }
  var preferredTheme
  try {
    preferredTheme = localStorage.getItem('theme')
    console.log('Preffered theme', preferredTheme)
  } catch (err) { }
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  darkQuery.addListener(function (e) {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light')
  })
  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'))
})()
