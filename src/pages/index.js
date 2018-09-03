import React from "react"
import Link from "gatsby-link";

export default () => <div style={{color: `blue`, margin: '3rem auto', maxWidth: 600}}>
  <h1>Hello Georgina!</h1>
  <p>hello hello hello</p>
  <img src="https://source.unsplash.com/random/400x200" alt="" />

  <blockquote>
    <p>
      There is indeed an element of luck, and no, there isn’t. The prepared
      mind sooner or later finds something important and does it. So yes, it
      is luck.{" "}
      <em>
        The particular thing you do is luck, but that you do something is
        not.
      </em>
    </p>
  </blockquote>

  <div>
    <Link to="/about/">About</Link>
  </div>
  <div>
    <Link to="/page-2/">Link</Link>
  </div>

</div>
