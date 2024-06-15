// import React, { useEffect } from "react";
// import { useValues } from "../context/ValuesContext";
// import ValuesColumn from "./ValuesColumn";

// const ValueSettings = () => {
//   const { values, fetchValues, addValue, updateValues2 } = useValues();

//   useEffect(() => {
//     fetchValues();
//   }, [fetchValues]);

//   useEffect(() => {
//     console.log(values);
//   }, [values]);

//   const columns = Object.keys(values);

//   const formatKeyName = (key) => {
//     if (key === "FIB") {
//       return "FSL(FIB)";
//     } else {
//       return key
//         .replace(/([A-Z])/g, " $1")
//         .replace(/^./, (str) => str.toUpperCase());
//     }
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//       {columns.map((column) => (
//         <ValuesColumn
//           key={column}
//           column={formatKeyName(column)}
//           updateValues2={updateValues2}
//           addValue={addValue}
//         />
//       ))}
//     </div>
//   );
// };

// export default ValueSettings;
