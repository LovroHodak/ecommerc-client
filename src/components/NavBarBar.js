import React from "react";
import { Link } from "react-router-dom";
import "./com-style/NavBarBar.css";

export default function NavBarBar(props) {
  return (
    <div>
      <div className="navBarBarDiv">
        <Link to='/info'>
          <img
            className="navbarbar-foto"
            src="data:image/png;base64,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"
            alt="info-logo"
          />
        </Link>
        <Link to='/'>
        <h1 className="navTitle">Grinders by Miha</h1>
        </Link>
        <Link to='/shoppingCart'>
          <div className='state'>
            <img
              className="navbarbar-foto"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAe1BMVEX///8AAADp6enh4eH4+PhTU1PGxsYiIiL09PTe3t7v7+92dnb5+fmUlJS/v7/Ly8uxsbGHh4cTExM2NjalpaXZ2dkaGhpKSkqnp6eenp4vLy94eHgJCQmOjo7R0dFra2thYWE9PT2AgIBFRUVISEhubm4oKCgtLS25ubnd6iN3AAAEpElEQVR4nO2d23qiMBRGQRQViwdUPFVFrY7v/4TTdjozIElNk8ifHfe66lW+ZBUT+Ek2QcAwDMMwDMMwDMMwDMP8lHksI0J3zV0m4Xes0N1zk/avb62FYQfdQydZ3LEWhhN0Fx0kvmstDBN0J91joKBtie6ke3QUtPHsVkNFW/iC7qVzpCra+uheOkdLRdsY3Uv3mClo41uQOqv72nhNEBBNDt06WUlb1mqcNtqKJjuVSe+BrGneLfbA2qhODV20tnCPVqDDBm0tDHdoBxqM0dLC8Ih2oMEcLY3m7PaClkZTm0KAydoEfP+OgbVJGKKt0dSmFI6wtho5a9OhYG06KERKrK0OOgQhqi1hbVpMWZsO6BCEqDZ0CEJUGzoEIaoNHYIQ1YYOQahqA4cgVLWBQxCq2sAhCFVtwStr0wEbgpDVhg1ByGobsTYd2qxNC2gIQlcbNAShqw0agtDV1mdtWrA2LU6sTYcta9MBGYIQ1oYMQQhrQ4YglLXtWZsOwBCEsjZgCEJZG/A4DGVtwBCEtDZcCEJaGy4EIa0NF4KQ1oYLQWhrg+0Eoa0NFoLQ1gYLQWhrg4UgtLXBzn8T14YKQYhrQ4UgBXrgZqCOw9AsBfIPVAhCtfTMXzAhyAg9bFOOAGkZeWuNhyCn83aIHrMFGgpBup1jet15VFn6sbbe9uky7ntYp1ap8udPORSb1XhHtlSbAjZDkG7nvB3HfY9t/cNCCJJNi8lquGs9UzVag/Pfl9MgXY58nLkU+HFNkNdTMVle58kz/BblKIcgeWeTjuOoh+6wGyzv6ZruJ7N495w/RTmyEGTaOb7fRETP/VOUcxOC5Itiuxz2k2daFrVYl6QN0J2hQzkEOaA7Q4dKCMLrpCqVEIRiQVwQZW388StlyiHIBt0ZOpS/BFCgO0OGykdj+A5Ekerp7yu6O1Solu3hhwM1qnnbFt0dKlQvNs451Kg+yBet6CF49+zRUEGytV9LTXOVZL26s2lwf5tPH3C7951hm/izlaHRYzD+pATXJrWd0aO1RqPbtPxZFBqtWjxDj9Yehwa1efQE0uDlRnxzeJXGygz4s45+khwv74PKsw9yuwVVvhp9/yvbz9HjfATx9pCHr+vzuBe8tO0QBMPjNAuz6ebqaYY3Ojzgt3T9fwru1cvviVfrM+R2FrzqluCTfxdcbc+zhWmod7lpM/Po7uMTwa5A8yHWCxFe/LreZoIVcGraqOhEUmHeV3cQn/AznMIjYaM+7S5JhSPMzRoV7wZe2OmxE0jORRpdGbJq5f6sCrLKDKlJo7LnNX/u3mQj3Js0KlpljP8XTiGLKU8mjYrnS59iSpk2oy28Mm3+hOKxZISFSaOyl4j+/Ehlb66M3mnKzgx6FIpLzqnFJm3K3vT78540GIhHaHZi6E3Y5sVSl11A/BxkuMtNPGP6c9sWSIqhmh5PExUhXFvprjOs6yM0rm4imt08mtk+qA/Rwpu5+ntEo0XGRZKbx3krG/iim3dgPr64Ku+oXPTttNkur9GFP+FHmST9uuIGFos2RZM/LxTyo4+X2he9aDS3fk0k0bOWu2AYhmEYhmEYhmEYhrHMb31hTcIPiJKmAAAAAElFTkSuQmCC"
              alt="cart-logo"
            />
            <h3>{props.basketItems.length}</h3>
          </div>
        </Link>
      </div>

    </div>
  );
}
