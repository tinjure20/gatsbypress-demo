//src/components/footer.js
import React from "react"
import "../styles/footer.css"

export default () => (
  <section className="footer-area">
  <div className="footer-text">
    © {new Date().getFullYear()} | This site is Powered by
          {` `}
    <a href="https://www.gatsbyjs.org">GatsbyJS</a> & <a href="https://www.wordpress.org">WordPress</a>.
    <p> The <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` is built by `}
          <a href="https://www.henrikwirth.com">Henrik Wirth</a>.</p>
  </div>
  </section>
)