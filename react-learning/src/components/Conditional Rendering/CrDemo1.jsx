import React from "react";

const CrDemo1 = () => {
  let marks = 36;
  let count = 0;

  let admin =  true;

  return (
    <div>
      {marks > 35 ? <p>Pass</p> : <p>Fail</p>}

      {count || 10}
      <br></br>
      {count ?? 10}
      <br></br>
      {count && 10}

{admin ? <p>You are admin</p> : <p>You are not admin</p>}

    </div>
  );
};

export default CrDemo1;

// navbar conditional rendered 