import React from "react";
const Field = React.forwardRef(({ label, type, id, classes }, ref) => {
  let idf = id || "form__field-" + String(label).split(" ").join("");
  let classesf = "form__field " + (classes || label);
  return (
    <div className="form__group field">
      <input
        name={label}
        ref={ref}
        type={type}
        className={classesf}
        id={idf}
        placeholder={label}
      />
      <label htmlFor={label} className="form__label">
        {label}:
      </label>
    </div>
  );
});
export default Field;
