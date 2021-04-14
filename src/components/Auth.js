import { useState } from "react";

function Toggler({ children, open, close }) {
  const [shown, toggle] = useState(false);
  return (
    <div>
      <button onClick={() => toggle(!shown)}>{shown ? close : open}</button>
      {shown ? <div>{children}</div> : ""}
    </div>
  );
}
export function SignUp() {
  return (
    <Toggler open="Open" close="Close">
      <div>Hi Iam Shown</div>
    </Toggler>
  );
}
export function SignIn() {}
